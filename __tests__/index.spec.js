(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.npmInstalled basic test', function () {
      var mochaChecked = nx.npmInstalled('mocha');
      var gulpChecked = nx.npmInstalled('gulp');
      expect(mochaChecked).toBe(false);
      expect(gulpChecked).toBe(true);
    });
  });
})();
