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
- Compressing and obfuscating code by shortening identifiers, using the [Terser](https://terser.org/) minifier by default
- Converting assets such as .css or even images into embedded JavaScript objects

Webpack also has the ability to act as a general purpose build system, for example by invoking a compiler or linter, however Heft does not use it that way.  Heft invokes the TypeScript compiler to produce intermediate .js files which become the inputs for other tasks such as Jest or Webpack.  This reduces the number of compiler passes, and avoids the need for compiler optimizations to be reimplemented multiple times for different contexts (`ts-loader`, `ts-jest`, etc).


## When to use it

Webpack should be used for projects whose output is a web application bundle.  Webpack could also be used to bundle Node.js tools or services, however this is less common.


## Configuration

The simplest way to enable this task is to create a **webpack.config.js** file in your project folder.  The [heft-webpack-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-webpack-test) sample project illustrates a simple setup:

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

If you want to use a slightly different configuration when developing using the localhost dev server, you can optionally create a second file called  **webpack.dev.config.js**.

To start the localhost dev server, use the `heft start` command.

### Interaction with Jest

Webpack works best with the `esnext` module format, whereas Jest must use the `commonjs` module format because its tests are executed by the Node.js runtime.  Thus, in order to use Webpack and Jest together, you will need to emit both module formats.  An easy way to accomplish this is to use `additionalModuleKindsToEmit` to configure a secondary output folder, and then use `emitFolderNameForJest` to tell Jest to use the CommonJS output.  For example:

**.heft/typescript.json**
```js
/**
 * Configures the TypeScript plugin for Heft.  This plugin also manages linting.
 */
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/typescript.schema.json",

   . . .

  /**
   * If provided, emit these module kinds in addition to the modules specified in the tsconfig.
   * Note that this option only applies to the main tsconfig.json configuration.
   */
  "additionalModuleKindsToEmit": [
    // {
    //   /**
    //    * (Required) Must be one of "commonjs", "amd", "umd", "system", "es2015", "esnext"
    //    */
    //  "moduleKind": "amd",
    //
    //   /**
    //    * (Required) The path where the output will be written.
    //    */
    //    "outFolderPath": "lib-amd"
    // }
    {
      "moduleKind": "commonjs",
      "outFolderPath": "lib-commonjs"
    }
  ],

  /**
   * Specifies the intermediary folder that Jest will use for its input.  Because Jest uses the
   * Node.js runtime to execute tests, the module format must be CommonJS.
   *
   * The default value is "lib".
   */
  "emitFolderNameForJest": "lib-commonjs"
  . . .
}
```

See the [typescript.json]({% link pages/heft_configs/typescript_json.md %}) config file documentation for details.


## package.json dependencies

Heft has direct dependencies on the Webpack packages that it needs, so you don't normally need to add Webpack to your project's **package.json** file.

You will need to add `@types/webpack-env` to your project:

```bash
$ rush add --package @types/webpack-env --exact  --dev
```

Since this package defines global variable APIs, it must be be added to your TypeScript configuration like this:

**&lt;project folder&gt;/tsconfig.json**
```
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.7/includes/tsconfig-web.json",
  "compilerOptions": {
    "types": [ "webpack-env" ]
  }
}
```
