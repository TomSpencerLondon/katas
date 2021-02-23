import { waysOfChangeFor } from '../src';

describe('waysOfChangeFor', () => {
  it('returns number of ways for 1', () => {
    const result = waysOfChangeFor(1);
    expect(result).toEqual(1);
  });

  it('returns number of ways for 1', () => {
    const result = waysOfChangeFor(2);
    expect(result).toEqual(2);
  });
})
