/*!
 * name: @jswork/next-npm-installed
 * description: Check if npm package installed.
 * homepage: https://github.com/afeiship/next-npm-installed
 * version: 1.0.0
 * date: 2020-11-21 10:53:05
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.npmInstalled = function (inName) {
    try {
      require(inName);
      return true;
    } catch (_) {
      return false;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.npmInstalled;
  }
})();
