---
layout: page
title: '"jest" task'
navigation_source: docs_nav
---

This task invokes the [Jest](https://jestjs.io/en/) test framework for unit testing.


## When to use it

We recommend Jest for several reasons:

- **All-in-one**: Unlike frameworks such as `mocha` that wire together components from different groups, Jest provides a single integrated solution for your: test runner, assertion library, mock/spy API, instrumentation, code coverage, and reporting.  It also has first class support for React.

- **Interactive**: Jest supports a "watch mode" for automatically re-running tests whenever a file is saved, plus a [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) that can automatically update assertions when a contract changes.

- **Isolated runtime**: Jest runs web tests in a Node.js environment rather than launching a browser, and leverages the [Node.js VM](https://nodejs.org/api/vm.html) feature to prevent tests from leaking state.

That said, if for some reason you need to run tests in some other runtime such as an Android client or real web browser, Jest is not the best bet.


## Config files

There isn't a Heft-specific file for this task.  Heft looks for [Jest's config file](https://jestjs.io/docs/en/configuration) in the standard path  `config/jest.config.json`.  Although Jest supports other config file names and even embedding settings in your **package.json** file, Heft only supports the name `jest.config.json`.  Using one standard filename makes it easy to search these files, perform bulk edits, and copy configuration recipes between projects.

Generally your Jest configuration should simply extend Heft's standard preset:

**&lt;project folder&gt;/jest.config.json**
```js
{
  "preset": "./node_modules/@rushstack/heft/includes/jest-shared.config.json"
}
```

_**Note:** If you find yourself frequently adding lots of custom settings to this file, please create a GitHub issue and tell us about it.  Our aim is to provide a configuration that minimizes the need for project-specific customizations._


## package.json dependencies

Heft has direct dependencies on the Jest packages that it needs, so you don't need to add Jest to your project's **package.json** file.

You will need to add `@types/jest` to your project:

```bash
$ rush add --package @types/jest --exact  --dev
```

...and then reference it in your **tsconfig.json** file like this:

```js
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.9/includes/tsconfig-node.json",
  "compilerOptions": {
    "types": ["jest"] // <---- ADD THIS
  }
}
```

## See also

- Jest's [API reference](https://jestjs.io/docs/en/api)
- [jest.config.json](https://jestjs.io/docs/en/configuration) documentation
