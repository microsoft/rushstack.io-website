---
layout: page
title:
navigation_source: docs_nav
---

<img src="{{ site.baseurl }}/images/heft-300x120.png" alt="heft" title="heft" style="width: 300px;"/>

🚨 *This project is an early preview release. Please report issues!* 🚨

<!-- --------------------------------------------------------------------------- -->
<!-- Text below this line should stay in sync with heft's package README.md file -->
<!-- --------------------------------------------------------------------------- -->

Heft is an extensible build system designed for use with the [Rush Stack](https://rushstack.io/) family of tools.
You don't need a monorepo to use Heft, however.  It also works well for small standalone projects.  Compared to
other similar systems, Heft has some unique design goals:

- **Scalable**: Heft interfaces with the [Rush](https://rushjs.io) build orchestrator, which is optimized for
  large monorepos with many people and projects.  Heft doesn't require Rush, though.

- **Familiar**: Heft is an everyday Node.js application -- developers don't need to install native prerequisites
  such as Python, MSYS2, or the .NET Framework.  Heft's source code is easy to understand and debug because it's
  100% TypeScript, the same programming language as your web projects.  Developing for native targets is also
  possible, of course.

- **Polished and complete**: Philosophically, Rush Stack aspires to provide a comprehensive solution for typical
  TypeScript projects.  Pluggable task abstractions often work against this goal:  It's expensive to optimize
  and support (and document!) every possible cocktail of tech choices.  The best optimizations and integrations need to
  leverage assumptions about implementation details.  Heft is pluggable. But our aim is to agree on a recommended
  toolkit that works well for a broad range of scenarios, then work together on the deep investments that will
  make it a great experience.

- **Extensible**: Most projects require at least a few specialized tasks such as preprocessors, postprocessors,
  or loaders.  Heft allows you to write your own plugins using the [tapable](https://www.npmjs.com/package/tapable)
  hook system (familiar from Webpack).  Compared to loose architectures such as Grunt or Gulp, Heft ships a standard
  set of build stages for custom tasks to hook into.  Working from a standardized starting point makes it easier
  to get technical support for custom rigs.

- **Optimized**: Heft tracks fine-grained performance metrics at each step.  Although Heft is still in its
  early stages, the TypeScript plugin already implements sophisticated optimizations such as: filesystem caching,
  incremental compilation, symlinking of cache files to reduce copy times, hosting the compiler in a separate
  worker process, and a unified compiler pass for Jest and Webpack.

- **Professional**: The Rush Stack projects are developed by and for engineers who ship major commercial services.
  Each feature is designed, discussed in the open, and thoughtfully code reviewed.  Despite being a free community
  collaboration, this software is developed with the mindset that we'll be depending on it for many years to come.

<!-- --------------------------------------------------------------------------- -->
<!-- Text above this line should stay in sync with heft's package README.md file -->
<!-- --------------------------------------------------------------------------- -->


## Where to begin?

- The [Getting started with Heft]({% link pages/heft_tutorials/getting_started.md %}) tutorial provides a quick
  walkthrough of the steps for setting up a project to build using Heft

- The NPM package page is here: [@rushstack/heft](https://www.npmjs.com/package/@rushstack/heft)

- [Interfacing with Rush]({% link pages/heft_tutorials/heft_and_rush.md %}) explains how Heft and Rush interact

- The [Heft architecture]({% link pages/heft/architecture.md %}) article provides more detail about the
  build system's design


## Sample projects

For a couple quick examples of Heft projects in a real Rush monorepo, take a look at these folders:

- [heft-node-basic-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-node-basic-test): A basic Node.js
  application with Jest and ESLint

- [heft-webpack-basic-test](https://github.com/microsoft/rushstack/tree/master/build-tests/heft-webpack-basic-test): A basic
  web application bundled using Webpack
