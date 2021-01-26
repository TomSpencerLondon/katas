import { parseInput, Tree } from '../../src';

describe('parseInput', () => {
  it('parses one number', () => {
    const triangle = '3';
    const expectedTree: Tree = { value: 3 };
    expect(parseInput(triangle)).toEqual(expectedTree);
  });

  it('parses one number', () => {
    const triangle = '5';
    const expectedTree: Tree = { value: 5 };
    expect(parseInput(triangle)).toEqual(expectedTree);
  });

  it('parses tree of depth two', () => {
    const triangle = `3
7 4`;
    const child1: Tree = { value: 7 };
    const child2: Tree = { value: 4 };

    const expectedTree: Tree = { value: 3, child1, child2 };
    expect(parseInput(triangle)).toEqual(expectedTree);
  });
});
