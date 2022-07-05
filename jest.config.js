module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
    '^~/(.+)': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
