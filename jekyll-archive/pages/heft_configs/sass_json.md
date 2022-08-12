---
layout: page
title: sass.json
navigation_source: docs_nav
---

| **File path:** | **&lt;project folder&gt;/config/rig.json** |
| [**Riggable?**]({% link pages/heft/rig_packages.md %}) | Yes |
| **Associated plugins:** | [SassTypingsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/SassTypingsPlugin/SassTypingsPlugin.ts) |

## Template

```js
/**
 * Configures the Sass Typings plugin for the Heft build system.
 *
 * This optional additional file customizes Sass parsing, module resolution, and emitting of
 * typings files for the Typescript compiler.
 */
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/sass.schema.json"

  /**
   * Source code root directory.
   * This is where .css, .sass, and .scss files will be searched for to generate typings.
   */
  // "srcFolder": "src",

  /**
   * Output directory for generated Sass typings.
   */
  // "generatedTsFolder": "temp/sass-ts",

  /**
   * Determines if export values are wrapped in a default property, or not.
   */
  // "exportAsDefault": true,

  /**
   * Files with these extensions will pass through the Sass transpiler for typings generation.
   */
  // "fileExtensions": [
  //   ".sass",
  //   ".scss",
  //   ".css
  // ],

  /**
   * A list of paths used when resolving Sass imports.
   */
  // "importIncludePaths": [
  //   "node_modules",
  //   "src"
  // ],

  /**
   * A list of file paths relative to the "src" folder that should be excluded from typings generation.
   */
  // "excludeFiles": []
}
```

## See also

- [sass-typings]({% link pages/heft_tasks/sass-typings.md %}) task
