---
layout: page
title: clean.json
navigation_source: docs_nav
---

## Supported file paths

- **common/config/heft/clean.json**
- **&lt;project folder&gt;/.heft/clean.json**

## Template

```js
/**
 * Configures the "clean" stage for Heft.
 */
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/clean.schema.json",

  /**
   * Glob patterns to be deleted by the "heft clean" action.  The paths are resolved relative to the project folder.
   */
  // "pathsToDelete": [
  //   "lib",
  //   "*.tmp"
  // ]
}
```
