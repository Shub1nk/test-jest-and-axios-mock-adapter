module.exports = {
    name: 'cacheHash',
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules)[/\\\\]'],
    testRunner: 'jest-circus/runner',
    testEnvironment: 'node',
    cache: false,
    testEnvironmentOptions: {},
    transformIgnorePatterns: ['/node_modules/(?!axios)'],
    moduleNameMapper: {
        axios: '<rootDir>/node_modules/axios/dist/node/axios.cjs',
    },
};
