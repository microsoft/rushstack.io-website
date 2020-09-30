---
layout: page
title: '"copy-static-assets" task'
navigation_source: docs_nav
---

This is a lightweight task that simply copies input files into output folders.


## When to use it

This task is mainly used to copy assets into the compiler's target folder so that they can be referenced by compiled code.  In Heft's standard configuration, the TypeScript compiler reads **src/\*\*/.ts** inputs and writes **lib/\*\*/.js** outputs.  For example, a React project may have a file that loads an **src/index.css** asset like this:

**src/index.tsx**
```ts
import './index.css';
. . .
```

When Webpack is invoked on **lib/index.js**, it will process the resulting `require("./index.css");` and expect to bundle the file path **lib/index.css** (instead of **src/index.css** as in the TypeScript code).  We can copy the file over by configuring `copy-static-assets` like this:

**&lt;project folder&gt;/.heft/copy-static-assets.json**
```js
{
  "fileExtensions": [ ".css" ]
}
```

## Config files




## package.json dependencies

None - this feature is implemented internally by Heft.
