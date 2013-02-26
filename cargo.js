/*!
 * cargo        localStorage API
 * @author      Ryan Van Etten <@ryanve>
 * @link        github.com/ryanve/cargo
 * @license     MIT
 * @version     0.x
 */

/*jslint browser: true, devel: true, node: true, passfail: false, bitwise: true, continue: true
, debug: true, eqeq: true, es5: true, forin: true, newcap: true, nomen: true, plusplus: true
, regexp: true, undef: true, sloppy: true, stupid: true, sub: true, vars: true, white: true
, indent: 4, maxerr: 180 */

(function (root, name, factory) {// github.com/umdjs/umd
    if (typeof module != 'undefined' && module['exports']) { 
        module['exports'] = factory(); // node / ender / common
    } else { root[name] = factory(); } // browser
}(this, 'cargo', function () {

    // Use array notation on public props to ensure safe compilation
    // developers.google.com/closure/compiler/docs/api-tutorial3
    // developers.google.com/closure/compiler/docs/js-for-compiler

}));