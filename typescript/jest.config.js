module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    reporters: ['jest-spec-reporter'],
    collectCoverageFrom: [
      '<rootDir>/src/**/{!(api),}.ts'
    ]
};
