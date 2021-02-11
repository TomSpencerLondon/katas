export const displayNumber = (testCaseCount: number, testCases: number[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < testCaseCount; i += 1) {
    if (testCases[i] % 2 === 0) {
      result.push(+('1'.repeat(testCases[i] / 2)));
    } else {
      result.push(+(`7${'1'.repeat((testCases[i] / 2) - 1)}`));
    }
  }
  return result;
};
