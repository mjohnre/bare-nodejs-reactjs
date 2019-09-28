module.exports = {
    clearMocks: true,
    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'json', 'jsx'],
    testPathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/',
        '<rootDir>/docs/',
        '<rootDir>/build/',
        '<rootDir>/src/bin/',
        '<rootDir>/client'
    ],
    collectCoverageFrom: [
        "src/**/{!(app),}.js"
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/',
        '<rootDir>/docs/',
        '<rootDir>/build/',
        '<rootDir>/src/bin/',
        '<rootDir>/client'
    ]
};