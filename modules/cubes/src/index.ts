export function cubeFinder(): {} {
  let x: number = 0.0;
  let xCubed: number = 0;
  const result: {} = {};
  while (x <= 10) {
    x += 0.1;
    xCubed = Number(parseFloat((x ** 3).toString())
      .toFixed(4));
    // @ts-ignore
    result[x] = xCubed;
  }

  return result;
}
