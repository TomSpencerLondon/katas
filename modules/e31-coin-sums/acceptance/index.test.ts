import { waysOfChangeFor } from '../src';

// 1, 2, 5, 10, 20, 50, 100, 200
describe('waysOfChangeFor', () => {
  it('returns the number of ways of making change for £2', () => {
    const result = expect(waysOfChangeFor(2));
  });
});
