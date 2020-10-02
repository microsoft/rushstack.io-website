---
layout: page
title: '"delete-globs" task'
navigation_source: docs_nav
---

This task implements the `"actionKind": "deleteGlobs"` action kind that is used when specifying
`"eventActions"` in the [heft.json]({% link pages/heft_configs/heft_json.md %}) config file.

## When to use it

The most common usage is to implement the `heft clean` action that deletes build output folders
such as `lib`, `temp`, and `dist`.

## Config files

Event actions are registered in the [heft.json]({% link pages/heft_configs/heft_json.md %}) config file.  For example:

**&lt;project folder&gt;/config/heft.json**
```js
{
  . . .

  "eventActions": [
    {
      /**
        * The kind of built-in operation that should be performed.
        * The "deleteGlobs" action deletes files or folders that match the
        * specified glob patterns.
        */
      "actionKind": "deleteGlobs",

      /**
        * The stage of the Heft run during which this action should occur. Note that actions specified in heft.json
        * occur at the end of the stage of the Heft run.
        */
      "heftEvent": "clean",

      /**
        * A user-defined tag whose purpose is to allow configs to replace/delete handlers that were added by other
        * configs.
        */
      "actionId": "defaultClean",

      /**
        * Glob patterns to be deleted. The paths are resolved relative to the project folder.
        */
      "globsToDelete": ["dist", "lib", "temp"]
    }
  ],

  . . .
}
```

## package.json dependencies

None - this feature is implemented internally by Heft.
