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
        if (null != api.get(k)) throw new Error;
        if (k !== api(k, k) || k !== api(k)) throw new Error;
        api(k, void 0); // should delegate to .remove
        if (null != api(k)) throw new Error;
      })(cargo[type])
    });
  });
}(this));