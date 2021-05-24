import { TestScheduler } from 'rxjs/testing';
import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';
import { Observable, of } from 'rxjs';
import { arrayFilter } from './array-filter.operator';

describe('arrayFilter', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler(((actual: any, expected: any) => {
      expect(actual).toEqual(expected);
    }));
  });

  it(`should return filtered source's array`, () => {
    testScheduler.run(({expectObservable}: RunHelpers) => {

      const source$: Observable<number[]> = of([1, 2, 3, 4, 5]).pipe(
        arrayFilter((input: number) => input % 2 === 0)
      );
      expectObservable(source$).toBe('(a|)', {a: [2, 4]});
    });
  });
});
