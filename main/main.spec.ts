import { greeting } from '../common';

describe('ts-jest', () => {
  test('should be able to import ts files from outside the project root', () => {
    expect(greeting).toBe('hello');
  });
});
