// eslint-disable-next-line no-shadow
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

class Position {
  direction = Direction.Left;

  leftBound = 0;

  rightBound: number;

  upperBound = 0;

  lowerBound: number;

  currentPosition: {x: number, y: number};

  constructor(x: number, y: number) {
    this.rightBound = x - 1;
    this.lowerBound = y - 1;
    this.currentPosition = { x: x - 1, y: 0 };
  }

  step(): void {
    switch (this.direction) {
      case Direction.Left:
        if (this.currentPosition.x <= this.leftBound) {
          this.direction = Direction.Down;
          this.upperBound += 1;
          this.step();
          return;
        }
        this.currentPosition = { x: this.currentPosition.x - 1, y: this.currentPosition.y };
        break;
      case Direction.Right:
        if (this.currentPosition.x >= this.rightBound) {
          this.direction = Direction.Up;
          this.lowerBound -= 1;
          this.step();
          return;
        }
        this.currentPosition = { x: this.currentPosition.x + 1, y: this.currentPosition.y };
        break;
      case Direction.Down:
        if (this.currentPosition.y >= this.lowerBound) {
          this.direction = Direction.Right;
          this.leftBound += 1;
          this.step();
          return;
        }
        this.currentPosition = { x: this.currentPosition.x, y: this.currentPosition.y + 1 };
        break;
      case Direction.Up:
        if (this.currentPosition.y <= this.upperBound) {
          this.direction = Direction.Left;
          this.rightBound -= 1;
          this.step();
          return;
        }
        this.currentPosition = { x: this.currentPosition.x, y: this.currentPosition.y - 1 };
        break;
      default:
        throw new Error('Unsupported');
    }
  }
}

export function spiralFromCenter(x: number, y: number): number[][] {
  let value: number = x * y;
  const results: number[][] = [];
  for (let i = 0; i < y; i += 1) {
    results.push([]);
  }

  const pos = new Position(x, y);

  while (value > 0) {
    results[pos.currentPosition.y][pos.currentPosition.x] = value;
    value -= 1;
    if (value > 0) {
      pos.step();
    }
  }

  return results;
}

export function numberSpiralDiagonals(x: number, y: number): number {
  const spiral: number[][] = spiralFromCenter(x, y);
  let result: number = 0;
  for (let i = 0; i < x; i += 1) {
    result += spiral[i][i];
    result += spiral[i][x - i - 1];
  }

  return result - 1;
}

export function spiralFromTopLeft(x: number, y: number): number[][] {
  const results: any[] = [];

  for (let i = 0; i < y; i += 1) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = y - 1;
  let startRow = 0;
  let endRow = x - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      results[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      results[i][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i -= 1) {
      results[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      results[i][startColumn] = counter;
      counter += 1;
    }

    startColumn += 1;
  }

  return results;
}
