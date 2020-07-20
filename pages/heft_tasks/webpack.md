---
layout: page
title: '"webpack" task'
navigation_source: docs_nav
---

🚨 *The webpack task is very new. Some features are not yet implemented.* 🚨

<!-- No we are not going to use branded capitalization like "webpack" or "npm". ;-) -->

This task invokes the [Webpack](https://webpack.js.org/) tool to produce application bundles.  It provides features such as:

- Combining many small .js files into one large file for faster downloads
- Improving performance by applying various compiler optimizations such as inlining and dead code elimination ("tree shaking")
- Compressing and obfuscating code by shortening identifiers (by default, using the [Terser](https://terser.org/) tool)
- Embedding assets such as .css or even images

Webpack also has the ability to act as a general purpose build system, for example by invoking a compiler or linter, however Heft does not use it that way.  Heft invokes the TypeScript compiler to produce intermediate .js files which become the inputs for other tasks such as Jest or Webpack.  This reduces the number of compiler passes, and avoids the need for compiler optimizations to be reimplemented multiple times for different contexts (`ts-loader`, `ts-jest`, etc).


## When to use it

Webpack should be used for projects whose output is a web application bundle.  Webpack can also be used to bundle Node.js tools or services, however this is less common.


## Configuration

Enable this task by creating the [webpack.json]({% link pages/heft_configs/copy-static-assets_json.md %}) config file for Heft.  This file specifies the filename for a basic `webpack.config.js` config file.

The [heft-webpack-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-webpack-test) sample project illustrates a simple setup:

**&lt;project folder&gt;/.heft/webpack.json**
```js
{
  "webpackConfigFilePath": "./webpack.config.js"
}
```

**&lt;project folder&gt;/webpack.config.js**
```js
'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    // Note: Do not specify '.ts' or '.tsx' here.  Webpack runs as a postprocess after the compiler.
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    'test-A': path.join(__dirname, 'lib', 'indexA.js'),
    'test-B': path.join(__dirname, 'lib', 'indexB.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[contenthash].js',
    chunkFilename: '[id].[name]_[contenthash].js'
  }
};
```


## package.json dependencies

Heft has direct dependencies on the Webpack packages that it needs, so you don't need to add Webpack to your project's **package.json** file.

You will need to add `@types/webpack-env` to your project:

```bash
$ rush add --package @types/webpack-env --exact  --dev
```

Since they are global types, this package needs to be added to your TypeScript configuration like this:

**&lt;project folder&gt;/tsconfig.json**
```
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.7/includes/tsconfig-web.json",
  "compilerOptions": {
    "types": [ "webpack-env" ]
  }
}
```
