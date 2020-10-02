---
layout: page
title: '"webpack" task'
navigation_source: docs_nav
---

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

> The [heft-webpack-basic-tutorial](https://github.com/microsoft/rushstack/tree/master/tutorials/heft-webpack-basic-tutorial) sample project illustrates a complete project using Webpack and React.

The simplest way to enable this task is to create a **webpack.config.js** file in your project folder.

**&lt;project folder&gt;/webpack.config.js**
```js
'use strict';

const path = require('path');

const webpackConfig = {
  mode: 'development',
  resolve: {
    // Note: Do not specify '.ts' or '.tsx' here.  Heft invokes Webpack as a post-process after the compiler.
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    app: path.join(__dirname, 'lib', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[contenthash].js'
  }
};

module.exports = webpackConfig;
```

If you want to use a slightly different configuration when developing using the localhost dev server, you can optionally create a second file called  **webpack.dev.config.js**.

To start the localhost dev server, use the `heft start` command.

### Interaction with Jest

Webpack works best with the `esnext` module format, whereas Jest must use the `commonjs` module format because its tests are executed by the Node.js runtime.  Thus, in order to use Webpack and Jest together, you will need to emit both module formats.  An easy way to accomplish this is to use `additionalModuleKindsToEmit` to configure a secondary output folder, and then use `emitFolderNameForTests` to tell Jest to use the CommonJS output.  For example:

**config/typescript.json**
```js
/**
 * Configures the TypeScript plugin for Heft.  This plugin also manages linting.
 */
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/typescript.schema.json",

  /**
   * Can be set to "copy" or "hardlink". If set to "copy", copy files from cache.
   * If set to "hardlink", files will be hardlinked to the cache location.
   * This option is useful when producing a tarball of build output as TAR files don't
   * handle these hardlinks correctly. "hardlink" is the default behavior.
   */
  // "copyFromCacheMode": "copy",

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
    //    * (Required) The name of the folder where the output will be written.
    //    */
    //    "outFolderName": "lib-amd"
    // }
    {
      "moduleKind": "commonjs",
      "outFolderName": "lib-commonjs"
    }
  ],

  /**
   * Specifies the intermediary folder that tests will use.  Because Jest uses the
   * Node.js runtime to execute tests, the module format must be CommonJS.
   *
   * The default value is "lib".
   */
  "emitFolderNameForTests": "lib-commonjs",

  /**
   * If set to "true", the TSlint task will not be invoked.
   */
  // "disableTslint": true,

  /**
   * Set this to change the maximum number of file handles that will be opened concurrently for writing.
   * The default is 50.
   */
  // "maxWriteParallelism": 50,

  /**
   * Describes the way files should be statically coped from src to TS output folders
   */
  "staticAssetsToCopy": {
    /**
     * File extensions that should be copied from the src folder to the destination folder(s).
     */
    "fileExtensions": [".css", ".png"]

    /**
     * Glob patterns that should be explicitly included.
     */
    // "includeGlobs": [
    //   "some/path/*.js"
    // ],

    /**
     * Glob patterns that should be explicitly excluded. This takes precedence over globs listed
     * in "includeGlobs" and files that match the file extensions provided in "fileExtensions".
     */
    // "excludeGlobs": [
    //   "some/path/*.css"
    // ]
  }
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
  "extends": "./node_modules/@rushstack/heft-node-rig/profiles/default/tsconfig-base.json",
  "compilerOptions": {
    "types": [
      "webpack-env" // <---- ADD THIS
    ]
  }
}
```
