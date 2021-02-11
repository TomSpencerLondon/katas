import { namesScores } from '../src';
// 1. Order the names from text file ✅
// 2. Convert characters in each name to asci character numbers ✅
// 3. Add character numbers together  ✅
// 4. Multiply character name result by the position in the alphabet 🚧
describe('nameScores', () => {
  it('returns the result for position multiplied by ascii name numbers', async () => {
    const number: BigInt = await namesScores('./modules/e22-names-scores/acceptance/names.txt');
    expect(number).toEqual(BigInt('871198282'));
  });
});
