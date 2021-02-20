import { productOfCoefficients } from '../src';

describe('productOfCoefficients', () => {
  it('returns sum of coefficients', () => {
    const result = productOfCoefficients(999, 1000);
    expect(result).toEqual(-59231);
  });
});
