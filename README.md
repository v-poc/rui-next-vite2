# rui-next (aka RUI.next)

[![npm](https://img.shields.io/npm/v/rui-next)](https://www.npmjs.com/package/rui-next) <a href="https://nikoni.top/rui-next/docs/" target="_blank"><img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=3366cc" alt="docs & demos" /></a> <img alt="react" src="https://badges.aleen42.com/src/react.svg" /> <img alt="vite" src="https://badges.aleen42.com/src/vitejs.svg" />

> Yet another **lightweight** and **Vite-powered** Mobile web UI components based on **React hooks** and **Vite 2**.

## Overview

This is just one kind of playground to dev `react-hooks` based UI components based on `vitepress+vite`. Thanks to [`vitepress-rc`](https://github.com/cvnine/vitepress-rc) that could support `React docs+demos` well to run with `vitepress+vite`.
- 📦  **Out of the box** - focus on component development and documentation
- 🧑‍💻  **Developer Friendly** - built-in syntax highlighting, embedding React components seamlessly by [Vitepress](https://vitepress.vuejs.org)[-rc](https://github.com/cvnine/vitepress-rc)
- ⚡️  **Lightweight and Fast** - lighter page weight powered by [Vitepress](https://vitepress.vuejs.org), instant reloading (lightning-fast HMR) powered by [Vite](https://vitejs.dev), faster dev server start, hot updates and build

## Preview

Try [QR code playground](https://nikoni.top/rui-next/docs/components/qr-code/index.html) to scan to access the examples on mobile/tablet device.

> react-hooks `docs+demos` playground based on [vitepress-rc](https://github.com/cvnine/vitepress-rc).

## Status

- Migration from [`vitepress-rc`](https://github.com/cvnine/vitepress-rc) to [`Pressify`](http://github.com/codpoe/pressify).

> `vitepress-rc` lacks of regular maintenance, this PoC will be publicly archived after the migration.

## Project setup

Install dependencies

```bash
$ npm i
```

Start the dev server for [docs-dev](http://localhost:3000/rui-next/docs/)

```bash
$ npm start
```

Build UI library

```bash
$ npm run build-lib
```

Build documentation (docs+demos)

```bash
$ npm run build-docs
```

## Customize configuration

About vite and vitepress(-rc), please check Configuration Reference - [vite](https://vitejs.dev/config/), [vitepress](https://vitepress.vuejs.org), [vitepress-rc](https://github.com/cvnine/vitepress-rc).

## License

<a href="https://www.npmjs.com/package/rui-next" target="_blank">
    <img alt="license" src="https://img.shields.io/npm/l/rui-next.svg" />
</a>
<br />
<img src="https://nikoni.top/images/niko-mit-react.png" alt="MIT License" width="396" height="250"/>
