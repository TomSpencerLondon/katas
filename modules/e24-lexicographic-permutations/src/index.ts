export function permutations(input: string): string[] {
  if (input.length === 1 || input.length === 0) {
    return [input];
  }

  const result: string[] = [];

  for (let i = 0; i < input.length; i += 1) {
    const currentLetter: string = input[i];
    const remaining: string = input.slice(0, i) + input.slice(i + 1);
    const perms: string[] = permutations(remaining);
    perms.forEach((perm) => {
      result.push(currentLetter + perm);
    });
  }

  return result;
}

export function millionthLexicographic(input: string, index: number): string {
  return permutations(input)[index - 1];
}
