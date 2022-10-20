/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
    '^~/(.+)': '<rootDir>/$1'
  }
}
