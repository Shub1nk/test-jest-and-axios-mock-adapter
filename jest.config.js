module.exports = {
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules)[/\\\\]'],
    testRunner: 'jest-circus/runner',
    testEnvironment: 'node',
    cache: false,
    testEnvironmentOptions: {},
    // ATTENTION: Test with axios mock fails if I enable these options
    // transformIgnorePatterns: ['/node_modules/(?!axios)'],
    // moduleNameMapper: {
    //     axios: '<rootDir>/node_modules/axios/dist/node/axios.cjs',
    // },
};
