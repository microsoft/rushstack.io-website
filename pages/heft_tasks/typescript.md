---
layout: page
title: '"typescript" task'
navigation_source: docs_nav
---

This task invokes the compiler for the [TypeScript](https://www.typescriptlang.org/) programming language.


## When to use it

TypeScript is the standard programming language for Rush Stack.  There are many benefits to having one "lingua franca" across all coding investments, rather than having to maintain different expertise and libraries for different languages.

We recommend TypeScript for:

- **Application development:** It's even a good choice for prototypes and small experiments.
- **Tooling infrastructure:** A great developer experience multiplies everyone's productivity, so build tools should be treated as first-class software projects with their own designs, documentation, and tests.
- **Device apps:** Where possible, TypeScript can also be used for native development via runtime hosts such as [React Native](https://reactnative.dev/).
- **Desktop apps:** There are also runtime hosts such as [Electron](https://www.electronjs.org/) for making desktop apps.

Obviously certain components may inevitably require Java, C++, Swift, etc.  But ideally developers should not be required to install native SDKs unless they're working on those components.  The [Expo client](https://expo.io/features) takes this concept to an extreme, enabling you to compile and run a phone app without installing native tools at all.  This ideal isn't always feasible in practice, so take it as a mentality, not a dogma.  The main point is that there are significant benefits to normalizing the code base so that any engineer can easily contribute to any project, and any project can load any library.


## Config files

The primary configuration comes from TypeScript's [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file.

The current implementation relies on the `@microsoft/rush-stack-compiler-*` packages, which bundle together the TypeScript compiler package, common associated dependencies and tools, and shared config files. The **rush-stack-compiler** system enables monorepo projects to easily switch between different TypeScript compiler releases, while ensuring that those pieces will be a compatible combination that has been tested.

> The `@microsoft/rush-stack-compiler-*` system is inherited from the earlier [gulp-core-build](https://github.com/microsoft/rushstack/tree/master/core-build/gulp-core-build) toolchain which preceded Heft.  Eventually we plan to replace it with a more lightweight Heft-specific equivalent.

To use this system, your **tsconfig.json** file should extend from one of the `includes/tsconfig-*.json` templates.  For example, to target TypeScript 3.9 you would add `@microsoft/rush-stack-compiler-3.9` to `devDependencies` in your **package.json** file, and then reference it like this:

**&lt;project folder&gt;/tsconfig.json** (for Node.js project)
```js
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.9/includes/tsconfig-node.json",
  "compilerOptions": {
    "types": ["jest"]
  }
}
```

**&lt;project folder&gt;/tsconfig.json** (for a web browser project)
```js
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.9/includes/tsconfig-web.json",
  "compilerOptions": {
    "types": ["jest"]
  }
}
```

For advanced scenarios, Heft also provides an optional [typescript.json]({% link pages/heft_configs/typescript_json.md %}) config file that can be used to configure toolchain features such as multiple emit targets for the TypeScript compiler.


## package.json dependencies

Heft itself does not require your project to depend on the `typescript` NPM package.  Instead, the TypeScript task will follow the `"extends"` references from **tsconfig.json**, and then call `require("typescript")` from that folder (**&lt;project folder&gt;/node_modules/@microsoft/rush-stack-compiler-3.9/** in the above example).  This reduces **package.json** boilerplate in a large monorepo.

For example, the [heft-node-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-node-test) sample project has only these dependencies:

**&lt;project folder&gt;/package.json**
```js
  . . .
  "dependencies": {
  },
  "devDependencies": {
    "@rushstack/heft": "^0.1.2",                    // <---- ADD THIS
    "@microsoft/rush-stack-compiler-3.9": "^0.4.1", // <---- ADD THIS
    "@rushstack/eslint-config": "~1.0.2",
    "@types/jest": "25.2.1"
  }
  . . .
```
