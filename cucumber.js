module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],
    require: ['tests/steps/**/*.ts', 'features/support/**/*.ts'],
    publishQuiet: true,
    format: ['progress', 'html:reports/cucumber.html'],
    parallel: 2
  }
};