# cargo
#### HTML5 [web storage API](http://www.w3.org/TR/webstorage/) JavaScript module

- Abstracts the native storage APIs into a simple intuitive interface
- Uses native `localStorage` and `sessionStorage` [where available](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage#Browser_compatibility) and gracefully degrades to temporary storage
- Works with build tools like [browserify](//github.com/substack/node-browserify) or [ender](//github.com/ender-js/Ender) via `require('cargo')` <b>or</b> works standalone via `window.cargo`

## API ([0.6](../../releases))

### `cargo.local()`
- `cargo.local(key?, value?)`
  - `cargo.local()` get all
  - `cargo.local(key)` get 
  - `cargo.local(key, value)` set 
  - `cargo.local(key, undefined)` remove
- `cargo.local.get(key)`
- `cargo.local.set(key, value)`
- `cargo.local.remove(key)`

### `cargo.session()`
- `cargo.session(key?, value?)`
  - `cargo.session()` get all
  - `cargo.session(key)` get 
  - `cargo.session(key, value)` set 
  - `cargo.session(key, undefined)` remove
- `cargo.session.get(key)`
- `cargo.session.set(key, value)`
- `cargo.session.remove(key)`

## Fund

Support this project by [tipping the developer](https://www.gittip.com/ryanve/) <samp><b>=)</b></samp>

## License

MIT