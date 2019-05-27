var nx = require('next-js-core2');
require('../src/next-npm-installed');


test('nx.npmInstalled', function () {
  var mochaChecked = nx.npmInstalled('mocha');
  var gulpChecked = nx.npmInstalled('gulp');

  expect(mochaChecked).toBe(false);
  expect(gulpChecked).toBe(true);
});

