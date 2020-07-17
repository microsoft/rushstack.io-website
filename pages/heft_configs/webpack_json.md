---
layout: page
title: webpack.json
navigation_source: docs_nav
---

## Supported file paths

- **common/config/heft/webpack.json**
- **&lt;project folder&gt;/.heft/webpack.json**

## Template

```js
/**
 * Configures the Webpack plugin for Heft.
 */
 {
  "$schema": "https://developer.microsoft.com/json-schemas/heft/webpack.schema.json",

  /**
   * A path to a Webpack configuration JS file. If this isn't specified, and a Webpack configuration isn't
   * specified via another plugin, Webpack won't be run.
   */
  // "webpackConfigFilePath": "webpack.config.js"
}
```
