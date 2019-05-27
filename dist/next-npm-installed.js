/*!
 * name: next-npm-installed
 * link: https://github.com/afeiship/next-npm-installed
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.npmInstalled = function(inName) {
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
