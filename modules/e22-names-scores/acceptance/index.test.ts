import { namesScores } from '../src';
// 1. Order the names from text file
// 2. Convert characters in each name to asci character numbers
// 3. Add character numbers together
// 4. Multiply character name result by the position in the alphabet
describe('nameScores', () => {
  it('returns the result for position multiplied by asci name numbers', async () => {
    const number = await namesScores('./modules/e22-names-scores/acceptance/names.txt');
    expect(number).toEqual(31626);
  });
});
