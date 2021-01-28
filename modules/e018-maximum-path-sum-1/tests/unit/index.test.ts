import { getSumFromTree, parseInput, Tree } from '../../src';

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

  it('parses tree of depth two', () => {
    const triangle = `3
7 4
8 14 2`;
    const child1: Tree = { value: 7, child1: { value: 8 }, child2: { value: 14 } };
    const child2: Tree = { value: 4, child1: { value: 14 }, child2: { value: 2 } };

    const expectedTree: Tree = { value: 3, child1, child2 };
    expect(parseInput(triangle)).toEqual(expectedTree);
  });
});

describe('getSumFromTree', () => {
  it('returns count from single tree', () => {
    // Arrange
    const tree: Tree = { value: 7 };
    // Act
    const sumFromTree = getSumFromTree(tree);

    // Assert
    expect(sumFromTree).toEqual(7);
  });

  it('returns count from depth of two', () => {
    // Arrange
    const tree: Tree = { value: 7, child1: { value: 3 }, child2: { value: 10 } };
    // Act
    const sumFromTree = getSumFromTree(tree);

    // Assert
    expect(sumFromTree).toEqual(17);
  });
});
