---
layout: page
title: plugins.json
navigation_source: docs_nav
---

## Supported file paths

- **common/config/heft/plugins.json**
- **&lt;project folder&gt;/.heft/plugins.json**

## Template

```js
/**
 * Specifies the plugins that will be loaded by Heft.
 */
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/plugins.schema.json",

  /**
   * The list of Heft plugins to be loaded.
   */
  "plugins": [
    /**
     * The list of Heft plugins to be loaded.
     */
    // {
    //  /**
    //   * The path to the plugin package.
    //   */
    //  "plugin": "path/to/my-plugin",
    //
    //  /**
    //   * An optional object that provides additional settings that may be defined by the plugin.
    //   */
    //  // "options": { }
    // }
  ]
}
```

