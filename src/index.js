(function(root, name, make) {
  if (typeof module != 'undefined' && module['exports']) module['exports'] = make();
  else root[name] = make();
}(this, 'cargo', function() {

  var cargo = {}
    , win = window
    , JSON = win['JSON'] || false
    , testStorage = function(api, key) {
        try {
          key = key || 'cargo';
          api['setItem'](key, key);
          api['removeItem'](key);
          return 1;
        } catch (e) {}
      };

  function abstracts(api) {
    return !!testStorage(api) && {
        'get': function(k) {
          k = api['getItem'](k);
          return null == k ? void 0 : k;
        }
      , 'set': function(k, v) {
          api['setItem'](k, typeof v == 'function' ? v = v.call(this) : v);
          return v;
        }
      , 'remove': function(k) {
          api['removeItem'](k);
        }
      , 'decode': JSON['parse']
      , 'encode': JSON['stringify']
    };
  }

  cargo['session'] = abstracts(win['sessionStorage']);
  cargo['local'] = abstracts(win['localStorage']);
  return cargo;
}));