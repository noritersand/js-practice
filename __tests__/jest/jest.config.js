/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  notify: true,
  testRegex: '/__tests__/jest/.*\.test\.(js|ts)$'
};

module.exports = config;
