/*!
 * cargo 0.5.0+201401210250
 * https://github.com/ryanve/cargo
 * MIT License 2014 Ryan Van Etten
 */

(function(root, name, make) {
  if (typeof module != 'undefined' && module['exports']) module['exports'] = make();
  else root[name] = make();
}(this, 'cargo', function() {

  var cargo = {}
    , win = window
    , JSON = win['JSON'] || false
    , canStore = function(api, key) {
        try {
          key = key || 'cargo'+(-new Date);
          api['setItem'](key, key);
          api['removeItem'](key);
          return true;
        } catch (e) {}
        return false;
      };

  function abstracts(api) {
    var und, stores = canStore(api), cache = {}, has = cache.hasOwnProperty;
    return {
        'stores': stores
      , 'encode': JSON['parse']
      , 'decode': JSON['stringify']
      , 'get': stores ? function(k) {
          return und == (k = api['getItem'](k)) ? und : k;
        } : function(k) {
          return !has.call(cache, k) ? und : cache[k];
        }
      , 'set': stores ? function(k, v) {
          api['setItem'](k, v);
        } : function(k, v) {
          cache[k] = v;
        }
      , 'remove': stores ? function(k) {
          api['removeItem'](k);
        } : function(k) {
          cache[k] = und;
        }
    };
  }

  cargo['session'] = abstracts(win['sessionStorage']);
  cargo['local'] = abstracts(win['localStorage']);
  return cargo;
}));