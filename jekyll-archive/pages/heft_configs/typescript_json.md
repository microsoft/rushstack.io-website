---
layout: page
title: typescript.json
navigation_source: docs_nav
---

| **File path:** | **&lt;project folder&gt;/config/typescript.json** |
| [**Riggable?**]({% link pages/heft/rig_packages.md %}) | Yes |
| **Associated plugins:** | [TypeScriptPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts), [CopyStaticAssetsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts), [JestPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/JestPlugin/JestPlugin.ts) |

## Template

```js
/**
 * Configures the TypeScript plugin for Heft.  This plugin also manages linting.
 */
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/typescript.schema.json",

  /**
   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard
   * settings to be shared across multiple projects.
   */
  // "extends": "base-project/config/typescript.json",

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
  ],

  /**
   * Specifies the intermediary folder that tests will use.  Because Jest uses the
   * Node.js runtime to execute tests, the module format must be CommonJS.
   *
   * The default value is "lib".
   */
  // "emitFolderNameForTests": "lib-commonjs",

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
   * Configures additional file types that should be copied into the TypeScript compiler's emit folders, for example
   * so that these files can be resolved by import statements.
   */
  "staticAssetsToCopy": {
    /**
     * File extensions that should be copied from the src folder to the destination folder(s).
     */
    // "fileExtensions": [
    //   ".json", ".css"
    // ],
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

## See also

- [typescript]({% link pages/heft_tasks/typescript.md %}) task
- [copy-static-assets]({% link pages/heft_tasks/copy-static-assets.md %}) task
- [jest]({% link pages/heft_tasks/jest.md %}) task

