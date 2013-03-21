/*!
 * cargo        HTML5 localStorage/sessionStorage module
 * @author      Ryan Van Etten <@ryanve>
 * @link        github.com/ryanve/cargo
 * @license     MIT
 * @version     0.2.0
 */

/*jslint browser: true, devel: true, node: true, passfail: false, bitwise: true, continue: true
, debug: true, eqeq: true, es5: true, forin: true, newcap: true, nomen: true, plusplus: true
, regexp: true, undef: true, sloppy: true, stupid: true, sub: true, vars: true, white: true
, indent: 4, maxerr: 180 */

(function(root, name, definition) {// github.com/umdjs/umd
    if (typeof module != 'undefined' && module['exports']) { 
        module['exports'] = definition(); // node|ender|common
    } else { root[name] = definition(); } // browser
}(this, 'cargo', function() {

    // Use array notation on public props to ensure safe compilation
    // developers.google.com/closure/compiler/docs/api-tutorial3
    // developers.google.com/closure/compiler/docs/js-for-compiler
    
    return (function(window) {
        
        var localStorage = window['localStorage']
          , sessionStorage = window['sessionStorage']
          , testStorage = function(api, key) {
                try {
                    key = key || 'cargo';
                    api['setItem'](key, key);
                    api['removeItem'](key);
                    return 1;
                } catch (e) {}
            }
          , JSON = window['JSON'] || false
          , notWhitespace = /\S+/g
          , cargo = {};

        function makeAbstraction(api) {
            return testStorage(api) ? {
                'get': function(k) {
                    k = api['getItem'](k);
                    return null == k ? void 0 : k;
                }
              , 'set': function(k, v) {
                    v = typeof v == 'function' ? v.call(this, this['get'](k)): v;
                    api['setItem'](k, v);
                    return v;
                }
              , 'remove': function(k) {
                    var i = '';
                    k = (i + k).match(notWhitespace) || i;
                    i = i.length;
                    while (i--) {
                        api['removeItem'](k[i]);
                    }
                }
              , 'decode': JSON['parse']
              , 'encode': JSON['stringify']
            } : false;
        }

        cargo['session'] = makeAbstraction(sessionStorage);
        cargo['local'] = makeAbstraction(localStorage);
        return cargo;
    }(window));
}));