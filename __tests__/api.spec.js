const nx = require('@feizheng/next-js-core2');
require('../src/next-npm-installed');

describe('api.basic test', () => {
  test('nx.npmInstalled basic test', function () {
    var mochaChecked = nx.npmInstalled('mocha');
    var gulpChecked = nx.npmInstalled('gulp');

    expect(mochaChecked).toBe(false);
    expect(gulpChecked).toBe(true);
  });
});
