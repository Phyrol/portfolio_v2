module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                "babelConfig": true,
            },
        ],
    },
    globals: {
        "__DEV__": true,
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    testRegex: "\\.test.(tsx|ts)?$",
    collectCoverage: true,
    coverageDirectory: "build/coverage",
    collectCoverageFrom: ["<rootDir>/**/*.{ts,tsx}"],
    coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/"],
    coverageReporters: ["json", "lcov", "text", "text-summary", "cobertura", "html"],
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
    },
    reporters: ["default"],
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|avif)$": "<rootDir>/__mocks__/fileMock.js",
    },
    testTimeout: 30000,
};
