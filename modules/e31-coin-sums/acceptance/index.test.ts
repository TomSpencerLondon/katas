import { waysOfChangeFor } from '../src';

describe('waysOfChangeFor', () => {
  it('returns the number of ways of making change for £2', () => {
    const result = waysOfChangeFor(10);
    expect(result).toEqual(11);
  });

  it('returns the number of ways of making change for £2', () => {
    const result = waysOfChangeFor(200);
    expect(result).toEqual(73682);
  });
});
