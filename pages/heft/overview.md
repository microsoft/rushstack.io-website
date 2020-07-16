---
layout: page
title:
navigation_source: docs_nav
---

🚨 *This is an early preview release. Please report issues!* 🚨

<img src="{{ site.baseurl }}/images/heft-300x120.png" alt="heft" title="heft" style="width: 300px;"/>

Heft is an extensible build system designed for use with the [Rush Stack](https://rushstack.io/) family of tools.
You don't need a monorepo to use Heft, though.  It also works well for small standalone projects.  Compared to
other similar systems, Heft has some unique design goals:

- **Scalable**: Heft is designed to interface with the [Rush](https://rushjs.io) build orchestrator which is
  optimized for large monorepos with many people and projects.  (Usage of Rush is optional.)

- **Familiar**: Heft is a plain Node.js application, so developers won't need to install any native prerequisites
  such as Python, MSYS2, or the .NET Framework.  Heft's source code is easy to understand and debug because everything
  is 100% TypeScript, the same programming language as your web projects.  Developing for native targets is also
  supported, of course.

- **Polished and Complete**: Philosophically, Rush Stack aspires to provide a functionally complete toolkit with
  a professional developer experience.  Pluggable task abstractions actually work against this goal:
  It's expensive to support and optimize (and document!) every possible combination of pieces.  Also, the best
  optimizations rely heavily on assumptions about what's behind the abstraction.  (As one example, sharing
  compiler state with the linter requires fairly different strategies for ESLint versus TSLint.)  Heft is customizable,
  but our focus is to invest deeply in one recommended approach that everyone can use.

- **Extensible**: Most large projects require specialized additional tooling such as preprocessors, postprocessors,
  instrumentation, and reporting.  Heft allows you to write your own plugins using the
  [tapable](https://www.npmjs.com/package/tapable) hook system (familiar from Webpack).  Compared to loose
  architectures such as Grunt or Gulp, Heft ships a standardized set of stages for custom tasks to hook into.
  Working from a more standardized foundation makes custom rigs more understandable for newcomers.

- **Optimized**: Heft tracks fine-grained performance metrics at each step.  Although Heft is still in its
  early stages, the TypeScript plugin already implements optimizations such as: filesystem caching,
  incremental compilation, symlinking of cache files to avoid copying, hosting the compiler in a separate
  worker process, and a single compiler pass for Jest and Webpack.


## How do I use it?

Heft is still under active development; more documentation will be coming soon.  In the meantime, here are
a couple test projects that illustrate Heft setups:

- [heft-node-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-node-test): A basic Node.js
  application with Jest and API Extractor
- [heft-webpack-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-webpack-test): A basic
  web application bundled using Webpack
