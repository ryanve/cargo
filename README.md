# [cargo](../../)
#### HTML5 `localStorage` and `sessionStorage` JavaScript [module](https://npmjs.org/package/cargo)

```sh
$ npm install cargo
```

## API ([0.5](../../releases))

### `cargo.local`
- `cargo.local.get(key)`
- `cargo.local.set(key, value)`
- `cargo.local.remove(key)`

### `cargo.session`
- `cargo.session.get(key)`
- `cargo.session.set(key, value)`
- `cargo.session.remove(key)`

## Compatibility

Uses native storage [where available](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage#Browser_compatibility) and otherwise degrades gracefully to temporary storage.

## Fund

[Fund opensource dev](https://www.gittip.com/ryanve/) <b>=)</b>

## License

[MIT](http://opensource.org/licenses/MIT)