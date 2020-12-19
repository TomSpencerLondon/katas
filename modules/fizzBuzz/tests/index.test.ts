import { fizzBuzz } from '../src';

describe('FizzBuzz', () => {
  describe('should return a number as a string', () => {
    it.each([
      [1, '1'],
      [2, '2'],
      [4, '4'],
    ])(
      'should convert %s to \'%s\'',
      (input, expected) => {
        const output: string = fizzBuzz(input);

        expect(output).toBe(expected);
      },
    );
  });

  describe('should convert multiples of 3 to \'Fizz\'', () => {
    it.each([
      [3, 'Fizz'],
      [6, 'Fizz'],
      [9, 'Fizz'],
    ])(
      'should convert %s to \'%s\'',
      (input, expected) => {
        const output: string = fizzBuzz(input);

        expect(output).toBe(expected);
      },
    );
  });

  describe('should convert multiples of 5 to \'Buzz\'', () => {
    it.each([
      [5, 'Buzz'],
      [10, 'Buzz'],
      [25, 'Buzz'],
    ])(
      'should convert %s to \'%s\'',
      (input, expected) => {
        const output: string = fizzBuzz(input);

        expect(output).toBe(expected);
      },
    );
  });

  describe('should convert multiples of 3 and 5 to \'FizzBuzz\'', () => {
    it.each([
      [15, 'FizzBuzz'],
      [30, 'FizzBuzz'],
      [45, 'FizzBuzz'],
    ])(
      'should convert %s to \'%s\'',
      (input, expected) => {
        const output: string = fizzBuzz(input);

        expect(output).toBe(expected);
      },
    );
  });
});
