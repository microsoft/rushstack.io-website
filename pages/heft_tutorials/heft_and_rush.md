---
layout: page
title: Interfacing with Rush
navigation_source: docs_nav
---

The [Getting started with Heft]({% link pages/heft_tutorials/getting_started.md %}) tutorial showed how Heft can be used in a standalone project.  Now let's look at how Heft works in the context of a  Rush monorepo.

## How Heft gets invoked

If you're new to Rush, the [maintainer tutorials](https://rushjs.io/pages/maintainer/setup_new_repo/) explain the basics of setting up a new repo.  We won't duplicate that here.  Heft takes over when Rush invokes the `"build"` script in a Rush project folder.  In our sample project from the tutorial, the script looked like this:

**my-app/package.json**
```
{
  . . .
  "scripts": {
    "build": "heft build --clean",
    "start": "node lib/start.js"
  }
  . . .
}
```

## Stub config files with "extends"

A major theme in monorepos will be _**minimizing "boilerplate" files**_.  In other words, consolidating files and settings that would otherwise get copy+pasted into every single project folder in the monorepo.  Boilerplate is a nuisance because it's difficult to keep in sync.  When a fix is needed, if you have hundreds of projects, you would need to reapply the same fix hundreds of times.

At the same time however, we want to honor Rush's _**principle of project isolation**_:  Each project should build independently and should not become entangled with other projects (for example, by referencing files using relative paths like `../../other-project`).  This discipline enables Rush features like subset builds and incremental builds. It also makes it very easy to move Rush project folders around,  to migrate projects between monorepos, and even to stop using Rush later if you change your mind.  For this reason, we discourage practices such as putting a centralized **.eslintrc.js** file in the root of the monorepo and invoking ESLint globally for all projects.

If config files can "extend" from a standard template, that provides a nice middleground between these two requirements.  The following config files all support a field such as `"extends"` that enables settings to be inherited from another NPM package:

- **tsconfig.json** for the [typescript task]({% link pages/heft_tasks/typescript.md %})
- **config/jest.config.json** for the [jest task]({% link pages/heft_tasks/jest.md %})
- **.eslintrc.js** for the [eslint task]({% link pages/heft_tasks/eslint.md %}), provided that you use the [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) workaround or the [@rushstack/eslint-config](https://www.npmjs.com/package/@rushstack/eslint-config) ruleset (which includes the patch)
- **tslint.json** for the [tslint task]({% link pages/heft_tasks/tslint.md %})
- **config/api-extractor.json** for the [api-extractor task]({% link pages/heft_tasks/api-extractor.md %})
- **webpack.config.js** does not explicitly support inheritance, but being a JavaScript module, it can call `require()` to load shared settings.

For these inheritable files, a copy must still exist in each project folder.  Its presence tells Heft to invoke the task, and may communicate the configuration to other tools such as the ESLint extension for VS Code.  Fortunately, the file will be a tiny stub that rarely needs to be updated, because all the settings are obtained from the shared package.  We refer to the shared package as a **"rig package"**.  Often the rig is just another Rush project in the same monorepo.

For example, ESLint's stub might look like this:

**&lt;project folder&gt;/.eslintrc.js**
```js
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [ "@rushstack/eslint-config" ],  // <--- all settings come from this NPM package
  parserOptions: { tsconfigRootDir: __dirname }
};
```

## Centralizing dependencies in a rig package

Even when the settings are moved into a rig, your **package.json** file may still accumulate lots of `devDependencies`.  Heft provides a solution for this as well.

While parsing the **tsconfig.json** file for a project, if the `"extends"` field refers to a file from an NPM package, Heft will look to see if the rig package has a direct dependency on the `typescript` package.  (Note that `devDependencies` and `peerDependenices` do not count -- it must be a regular dependency.)  If so, then Heft will [try to resolve](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/utilities/TaskPackageResolver.ts) the following packages from the rig folder before looking in the local project folder:

- `typescript`
- `@microsoft/api-extractor`
- `eslint`
- `tslint`

If the `"extends"` field forms a chain that passes through multiple rig packages, the most distant one takes precedence.

Heft also has a direct dependency on the following packages:

- `webpack` and `webpack-dev-server`
- `jest` and its core dependencies

Taken together, these features can greatly reduce the **package.json** overhead for a Rush project.  For example, using the Rush Stack Compiler rig package, the [heft-rsc-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-rsc-test) project is able to run all these tasks using only 4 `devDependencies`:

**heft-rsc-test/package.json**
```js
{
  "name": "heft-rsc-test",
  "description": "Building this project tests Heft using the rush-stack-compiler rig package",
  "version": "1.0.0",
  "private": true,
  "main": "lib/index.js",
  "license": "MIT",
  "scripts": {
    "build": "heft test --clean --verbose"
  },
  "devDependencies": {
    "@rushstack/heft": "workspace:*",
    "@microsoft/rush-stack-compiler-3.9": "workspace:*",
    "@rushstack/eslint-config": "workspace:*",
    "@types/jest": "25.2.1"
  }
}
```

That's pretty minimal!


## Global defaults

For the Heft-specific config files stored under the `.heft` folder, Heft also allows you to store a global version in Rush's `common/config/heft` folder.  For example, you might use this to define a standard **clean.json** that applies to all projects, rather than having to copy+paste the same **.heft/clean.json** in each project folder.

