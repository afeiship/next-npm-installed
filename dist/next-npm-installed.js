/*!
 * name: @feizheng/next-npm-installed
 * description: Check if npm package installed.
 * homepage: https://github.com/afeiship/next-npm-installed
 * version: 1.0.0
 * date: 2020-05-20T11:01:10.905Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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

//# sourceMappingURL=next-npm-installed.js.map
