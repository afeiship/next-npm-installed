# next-npm-installed
> Check if npm package installed.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-npm-installed
```

## usage
```js
import '@jswork/next-npm-installed';

nx.npmInstalled('mocha');   // false
nx.npmInstalled('gulp');    // true
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-npm-installed/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-npm-installed
[version-url]: https://npmjs.org/package/@jswork/next-npm-installed

[license-image]: https://img.shields.io/npm/l/@jswork/next-npm-installed
[license-url]: https://github.com/afeiship/next-npm-installed/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-npm-installed
[size-url]: https://github.com/afeiship/next-npm-installed/blob/master/dist/next-npm-installed.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-npm-installed
[download-url]: https://www.npmjs.com/package/@jswork/next-npm-installed
