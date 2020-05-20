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
