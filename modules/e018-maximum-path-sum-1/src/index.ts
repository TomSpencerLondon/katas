export const getMaximumPathSum = (inputTriangle: string): number => {
  throw new Error('Not implemented');
};

export type Tree = {
  value: number;
  child1: Tree;
  child2: Tree;
} | { value: number; };

function transformInputToNumbers(input: string): number[][] {
  const rows: string[] = input.split('\n');
  const grid: string[][] = rows.map((row) => row.split(' '));
  return grid.map((row) => row.map((node) => parseInt(node, 10)));
}

const parseTreeFromGrid = (grid: number[][], x: number, y: number): Tree => {
  if (y === grid.length - 1) {
    return { value: grid[y][x] };
  }

  const child1 = parseTreeFromGrid(grid, x, y + 1);
  const child2 = parseTreeFromGrid(grid, x + 1, y + 1);

  return {
    value: grid[y][x],
    child1,
    child2,
  };
};

export const parseInput = (input: string): Tree => {
  const grid = transformInputToNumbers(input);
  return parseTreeFromGrid(grid, 0, 0);
};
