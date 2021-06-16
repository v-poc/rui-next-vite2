# Getting Started

[![npm](https://img.shields.io/npm/v/rui-next)](https://www.npmjs.com/package/rui-next) <a href="https://nikoni.top/rui-next/docs/" target="_blank"><img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=3366cc" alt="docs & demos" /></a>

## Overview

Thanks to [`vitepress-rc`](https://github.com/cvnine/vitepress-rc) that could support `React demo+docs` well to run with `vitepress+vite`. I tried [`dumi`](https://d.umijs.org/) but it is coupled with webpack, and tried [`vuepress 2`](https://github.com/vuepress/vuepress-next) with `vite bundler` but it seems not good enough to support `React demo`. For now, it seems `vitepress-rc` could meet my personal requirement for `React demo+docs` + `vitepress+vite`.

> react-hooks `demo+docs` playground based on [vitepress-rc](https://github.com/cvnine/vitepress-rc).

## Preview

Try [QR code playground](https://nikoni.top/rui-next/docs/components/qr-code/demo/index.html) to scan to access the examples on mobile/tablet device.

## Project setup

Install dependencies

```bash
$ npm install
```

Prepare for docs-dev (mandatory step)

```bash
$ npm run dev
```

Start the dev server for [docs-dev](http://localhost:3000/rui-next/docs/)

```bash
$ npm start
```

Build lib

```bash
$ npm run build-lib
```

Build documentation

```bash
$ npm run docs-build
```

## License

<img src="https://nikoni.top/images/niko-mit-react.png" alt="MIT License" width="396" height="250"/>
