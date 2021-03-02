import { pandigitalCheck } from '../src';

describe('pandigitalCheck', () => {
  it('returns true if products and sum are pandigital', () => {
    const result = pandigitalCheck('123456789');
    expect(result).toBe(true);
  });

  it('returns true if products and sum are pandigital', () => {
    const result = pandigitalCheck('123456799');
    expect(result).toBe(false);
  });

  it('returns true if products and sum are pandigital', () => {
    const result = pandigitalCheck('123456790');
    expect(result).toBe(false);
  });
});
