module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/app','<rootDir>/components'],
  moduleNameMapper: {
    '@up-components/(.*)': '<rootDir>/components/$1',
    '@up-api/(.*)': '<rootDir>/app/api/$1',
    '@up-constants/(.*)': '<rootDir>/app/constants/$1',
    '@up-utils/(.*)': '<rootDir>/app/utils/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['app/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
