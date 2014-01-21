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
      test: function() {
        var k = id, api = cargo[type];
        api.set(k, k);
        if (k !== api.get(k)) return false;
        api.remove(k);
        if (null != api.get(k)) return false;
        if (k !== api(k, k) || k !== api(k)) return false;
        api(k, void 0); // should delegate to .remove
        if (null != api(k)) return false;
        return true;
      }
    });
  });
}(this));