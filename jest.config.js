module.exports = {
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
            statements: 75,
            branches: 75,
            functions: 75,
            lines: 75,
        },
    },
    reporters: ["default"],
    moduleFileExtensions: ["ts", "tsx", "js", "json"],
    testTimeout: 30000,
};
