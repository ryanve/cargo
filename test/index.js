(function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('../node_modules/aok') : root.aok;
  var cargo = common ? require('../src') : root.cargo;

  aok.pass(['local', 'session'], function(type) {
    aok.pass(['get', 'set', 'remove'], function(method) {
      aok({
        id: ['', type, method].join('.'),
        test: typeof cargo[type][method] == 'function'
      });
    });
  });
}(this));