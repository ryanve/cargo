(function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('../node_modules/aok') : root.aok;
  var cargo = common ? require('../src') : root.cargo;
  aok.prototype.express = aok.info;
  aok.pass(['local', 'session'], function(type) {
    var id = '.' + type;
    aok.fail(['get', 'set', 'remove'], function(method) {
      var sub = cargo[type][method], exists = typeof sub == 'function' || sub === false;
      aok({ id: [id, method].join('.'), test: exists });
      return exists;
    }) || aok({
      id: id,
      test: aok.can(function(api) {
        var k = id;
        api.set(k, k);
        if (k !== api.get(k)) throw new Error;
        api.remove(k);
      })(cargo[type])
    });
  });
}(this));