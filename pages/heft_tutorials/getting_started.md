---
layout: page
title: Getting started with Heft
navigation_source: docs_nav
---

This walkthrough will get you started with Heft by creating a basic Node.js console project.

> If you're in a hurry, the
> [heft-node-basic-tutorial](https://github.com/microsoft/rushstack/tree/master/tutorials/heft-node-basic-tutorial)
> and [heft-webpack-basic-tutorial](https://github.com/microsoft/rushstack/tree/master/tutorials/heft-webpack-basic-tutorial)
> folders illustrate a fully worked out example of a simple project that builds using Heft.

We'll begin by creating a simple standalone project without Rush.  (Later, the [Interfacing with Rush]({% link pages/heft_tutorials/heft_and_rush.md %}) tutorial will examine what's different when using Heft in a monorepo.)

1. We'll use the [PNPM package manager](https://pnpm.js.org/) for this demo.  (Its command line is very similar to NPM, so you can substitute `npm` for `pnpm` in these steps.)  There are [various ways](https://pnpm.js.org/en/installation.html) to install PNPM, but the simplest is like this:

    ```shell
    $ npm install --global pnpm
    ```

2. Create a new folder **my-app** with a **package.json** file for our project, like this:

    **my-app/package.json**
    ```
    {
      "name": "my-app",
      "version": "1.0.0",
      "description": "A Heft tutorial project",
      "license": "MIT",
      "main": "lib/start.js",
      "typings": "lib/start.d.ts",
      "scripts": {
        "start": "node lib/start.js"
      }
    }
    ```

3. Create a TypeScript source file that we'll compile.

    **my-app/src/start.ts**
    ```
    console.log("Hello, world!");
    ```

4. Install [@rushstack/heft](https://www.npmjs.com/package/@rushstack/heft) and [typescript](https://www.npmjs.com/package/typescript) as `devDependenices` for your project:

    ```shell
    $ cd my-app
    $ pnpm install --save-dev @rushstack/heft
    $ pnpm install --save-dev typescript

    # Since this project will use the console.log() API, we also need to add the TypeScript
    # typings for Node.js.  Typings should always use "--save-exact" version specifiers.
    $ pnpm install --save-dev --save-exact @types/node
    ```

5. Next we need to create the TypeScript [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file.  The presence of this file causes Heft to invoke the TypeScript compiler.  For now we'll create a simple standalone **tsconfig.json** file; later we'll demonstrate how to share a reusable configuration across many projects.

    **my-app/tsconfig.json**
    ```js
    {
      "$schema": "http://json.schemastore.org/tsconfig",

      "compilerOptions": {
        "outDir": "lib",
        "rootDirs": ["src/"],

        "forceConsistentCasingInFileNames": true,
        "declaration": true,
        "sourceMap": true,
        "declarationMap": true,
        "inlineSources": true,
        "strictNullChecks": true,
        "noUnusedLocals": true,
        "types": ["node"],

        "module": "commonjs",
        "target": "es2017",
        "lib": ["es2017"]
      },
      "include": ["src/**/*.ts"],
      "exclude": ["node_modules", "lib"]
    }
    ```

    Note that `"types": ["node"]` references the `@types/node` package that we installed above.  This is needed because Node.js is a global environment, so its typings must be loaded globally (whereas most other `@types` packages can be loaded via `import` statements in your source code).

    See the [typescript task]({% link pages/heft_tasks/typescript.md %}) documentation for more background about TypeScript configuration with Heft.

6. Let's try manually invoking Heft's [command line]({% link pages/heft/cli.md %}) to build our project.

    ```shell
    # For Windows, use backslashes for all these commands

    # View the command line help
    $ ./node_modules/.bin/heft --help
    $ ./node_modules/.bin/heft build --help

    # Build the project
    $ ./node_modules/.bin/heft build

    # To see more detail about what Heft is doing, add you can the "--verbose" flag
    $ ./node_modules/.bin/heft build --verbose
    ```

    Invoking `heft build` should produce console output like this:

    ```
    Project build folder is "/path/to/my-app"
    Starting build
    ---- Compile started ----
    [copy-static-assets] Copied 0 static assets in 0ms
    [typescript] Using TypeScript version 3.9.7
    ---- Compile finished (1494ms) ----
    ---- Bundle started ----
    ---- Bundle finished (0ms) ----
    -------------------- Finished (2.408s) --------------------
    Project: my-app@1.0.0
    Heft version: 0.3.0
    Node version: v12.17.0
    ```

    > Some terminology:  When we invoke the `heft build` command from the shell, the "build" verb is called an **action**.  Actions are user interface concepts, sort of like macros.  The action causes Heft to invoke multiple **tasks** such as `[typescript]` or `[copy-static-assets]`.  These tasks often run in parallel.  The tasks are grouped into **stages** such as "Compile" and "Bundle" in the above log.  Stages represent major steps of the overall operation.  These concepts are explained in more depth in the [Heft architecture]({% link pages/heft/architecture.md %}) article.

    After the build finishes, confirm that it produced several output files in your `lib` folder:
    - **start.js** - the compiled JavaScript code
    - **start.d.ts** - the TypeScript typings, for external libraries that might import this module
    - **start.js.map** and **start.d.ts.map** - Source map files, which enable tools like debuggers to find the corresponding source code file/line, for a given item in an output file

    &nbsp;

7. If you recall, our **package.json** file has a `"scripts"` section that specifies `"start": "node lib/start.js"`.  Let's try running the compiled code using `pnpm run`.

    ```shell
    # Invoke the "start" script from package.json
    $ pnpm run start
    ```

    You should see output like this:
    ```
    > my-app@1.0.0 start C:\my-app
    > node lib/start.js

    Hello, world!
    ```

8. We can also add a `"build"` script to our **package.json** file:

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

    With this change, you can also build by invoking `npm run build`.  This toolchain-agnostic convention makes it easier for newcomers to guess how to build your project.  It will also be useful later when we integrate with Rush.

9. To complete this project, we need to create one more config file to ensure that `heft clean` properly deletes the output files:

    **my-app/.heft/clean.json**
    ```
    /**
     * Configures the "clean" stage for Heft.
     */
    {
      "$schema": "https://developer.microsoft.com/json-schemas/heft/clean.schema.json",

      /**
      * Glob patterns to be deleted by the "heft clean" action.  The paths are resolved relative to the project folder.
      */
      "pathsToDelete": ["dist", "lib", "temp"]
    }
    ```

    _Note: This final step will be eliminated eventually by [PR #2054](https://github.com/microsoft/rushstack/pull/2054), which provides a standard default `"pathsToDelete"` setting._


#### Next up: [Adding more tasks]({% link pages/heft_tutorials/adding_tasks.md %})
