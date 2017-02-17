# rollup-plugin-inline-source
[Rollup](https://github.com/rollup/rollup) for [inline-source](https://github.com/popeindustries/inline-source) tool for inlining flagged js, css, and img sources in html

## Install

```sh
npm i rollup-plugin-inline-source -D
```

## Usage

```js
import { rollup } from 'rollup';
import rollupInlineSource from 'rollup-plugin-inline-source';

rollup({
	entry: 'main.js',
	plugins: [
		rollupInlineSource()
	]
});
```
SVG
```html
 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><svg viewBox="0 0 100 100" id="icon-error"><title>Error</title><path d="M80.8 34.9c-.9 0-1.7.1-2.5.2-.6-13.5-11.8-24.2-25.4-24.2-11 0-19.6 8.1-23 18-1.9-.5-4.8-1.7-6.8-1.7-12.7 0-23 10.3-23 23s10.3 23 23 23h5l-1.4 1.4c-1.4 1.4-1.4 3.7 0 5.1l8.4 8.4c.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1l9.8-10 10 10c.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1l8.4-8.4c1.4-1.4 1.4-3.7 0-5.1L72 73.1h8.8c10.6 0 19.2-8.6 19.2-19.2-.2-10.6-8.8-19-19.4-19h.2zm-10 42.2l-8.2 8.4-12.4-12.4-.2-.2-.2.2-12.3 12.4-8.4-8.4 4-4 8.5-8.5-12.5-12.5 8.4-8.4L50 56.2l12.5-12.5 8.4 8.4-12.5 12.5 8.5 8.5 3.9 4z"/></svg></defs></svg>
```

Raw HTML
```html
<div class="svg-spritesheet">
  <img src="../../../dist/assets/images/svgSprites/_svg_sprites.svg" inline>
</div>
```

Outputted HTML
```html
<div class="svg-spritesheet">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><svg viewBox="0 0 100 100" id="icon-error"><title>Error</title><path d="M80.8 34.9c-.9 0-1.7.1-2.5.2-.6-13.5-11.8-24.2-25.4-24.2-11 0-19.6 8.1-23 18-1.9-.5-4.8-1.7-6.8-1.7-12.7 0-23 10.3-23 23s10.3 23 23 23h5l-1.4 1.4c-1.4 1.4-1.4 3.7 0 5.1l8.4 8.4c.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1l9.8-10 10 10c.7.7 1.6 1.1 2.6 1.1s1.9-.4 2.6-1.1l8.4-8.4c1.4-1.4 1.4-3.7 0-5.1L72 73.1h8.8c10.6 0 19.2-8.6 19.2-19.2-.2-10.6-8.8-19-19.4-19h.2zm-10 42.2l-8.2 8.4-12.4-12.4-.2-.2-.2.2-12.3 12.4-8.4-8.4 4-4 8.5-8.5-12.5-12.5 8.4-8.4L50 56.2l12.5-12.5 8.4 8.4-12.5 12.5 8.5 8.5 3.9 4z"/></svg></defs></svg>
</div>
```

# License

MIT ©
