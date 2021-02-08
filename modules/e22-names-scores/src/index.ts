import { readFile } from '../../extract/file-reading';

async function read(filename: string) {
  const result = await readFile(filename);
  const lines = result.toString().trim().split('\n');
  return lines;
}

export const namesScores = async (filename: string): Promise<number> => {
  const names: string[] = await read(filename);

  throw new Error('implement me!');
};
