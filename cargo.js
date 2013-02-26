/*!
 * cargo        HTML5 localStorage/sessionStorage module
 * @author      Ryan Van Etten <@ryanve>
 * @link        github.com/ryanve/cargo
 * @license     MIT
 * @version     0.1.0
 */

/*jslint browser: true, devel: true, node: true, passfail: false, bitwise: true, continue: true
, debug: true, eqeq: true, es5: true, forin: true, newcap: true, nomen: true, plusplus: true
, regexp: true, undef: true, sloppy: true, stupid: true, sub: true, vars: true, white: true
, indent: 4, maxerr: 180 */

(function(root, name, factory) {// github.com/umdjs/umd
    if (typeof module != 'undefined' && module['exports']) { 
        module['exports'] = factory(); // node / ender / common
    } else { root[name] = factory(); } // browser
}(this, 'cargo', function() {

    // Use array notation on public props to ensure safe compilation
    // developers.google.com/closure/compiler/docs/api-tutorial3
    // developers.google.com/closure/compiler/docs/js-for-compiler
    
    return (function(window) {
        
        var localStorage = window['localStorage']
          , sessionStorage = window['sessionStorage']
          , GET = 'getItem'
          , SET = 'setItem'
          , REM = 'removeItem'
          , testStorage = function(api, key) {
                try {
                    key = key || '_cargo';
                    api[SET](key, key);
                    api[REM](key);
                    return true;
                } catch (e) { return false; }
            }
          , hasSession = testStorage(sessionStorage)
          , hasLocal = testStorage(localStorage)
          , cargo = {};

        function getSessionItem(k) {
            return sessionStorage[GET](k);
        }

        function setSessionItem(k, v) {
            while (typeof v == 'function') {
                v = v.call(this, sessionStorage[GET](k));
            }
            sessionStorage[SET](k, v);
            return v;
        }
        
        function removeSessionItem(k) {
            return sessionStorage[REM](k);
        }
        
        function getLocalItem(k) {
            return localStorage[GET](k);
        }

        function setLocalItem(k, v) {
            while (typeof v == 'function') {
                v = v.call(this, localStorage[GET](k));
            }
            localStorage[SET](k, v);
            return v;
        } 
        
        function removeLocalItem(k) {
            return localStorage[REM](k);
        }
        
        cargo['removeLocalItem'] = removeSessionItem;
        cargo['setLocalItem'] = setLocalItem;
        cargo['getLocalItem'] = getLocalItem;
        cargo['removeSessionItem'] = removeSessionItem;
        cargo['setSessionItem'] = setSessionItem;
        cargo['getSessionItem'] = getSessionItem;
        
        return cargo;
        
    }(window));

}));