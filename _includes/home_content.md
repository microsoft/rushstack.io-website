
## What is Rush Stack?

**Rush Stack** is a...

- **Mission** to provide reusable tech for running large scale monorepos for the web
- **Open collaboration** among community partners with serious tooling requirements, who got tired of going it alone
- **Specific strategy** that integrates popular tools like NodeJS, TypeScript, ESLint, Prettier, Webpack, Jest, etc.
- **Family of projects** that fill in the gaps for this strategy

All components are open source under an MIT license.

## What's in the stack?

These tools are developed under the **Rush Stack** umbrella:

- [Rush](https://rushjs.io/): the scalable build orchestrator
- [API Extractor](https://api-extractor.com/): coordinates API reviews, and generates .d.ts rollups
- [API Documenter](https://api-extractor.com/pages/setup/generating_docs/): generates your API documentation website
- **Heft (coming soon!):** a new scalable task rig that replaces the earlier
  [gulp-core-build](https://www.npmjs.com/package/@microsoft/gulp-core-build) system
- [eslint-config-scalable-ts](https://www.npmjs.com/package/@microsoft/eslint-config-scalable-ts): our standardized
  ESLint rule set, specifically designed for large scale TypeScript monorepos

These tools are built on a common framework of reusable library packages:
- [ts-command-line](https://www.npmjs.com/package/@microsoft/ts-command-line): a strict command-line parser
  whose options/docs can be augmented by toolchain packages
- [node-core-library](https://www.npmjs.com/package/@microsoft/node-core-library): the standard base library
  used by all our projects
- [package-deps-hash](https://www.npmjs.com/package/@microsoft/package-deps-hash): the incremental build engine
  used by Rush
- [stream-collator](https://www.npmjs.com/package/@microsoft/stream-collator): the magic behind how Rush can
  display real-time log output from concurrent tasks, without ugly interleaving of the output
- [a family of webpack plugins](https://github.com/microsoft/web-build-tools/tree/master/webpack) used in our
  applications


## What's the relationship to "Rush"?

The Rush Stack tools are optional extras that you can use with [Rush](https://rushjs.io/).  As the NodeJS "build
orchestrator," Rush's job is to:

- Ensure deterministic and reliable package installations (using Yarn, PNPM, or NPM)
- Build your projects in the right order, as fast as possible
- Apply policies to keep your monorepo running smoothly
- Manage your publishing workflows
- Establish a standard repo layout and familiar CLI, to facilitate developers who contribute to many different monorepos

Beyond this role, Rush leaves the rest up to you.  Individual projects can build with any tool chain you like.
This is very flexible!

But flexibility has its downsides.  NodeJS tooling is notorious for its bewildering array of options:
Choose your compiler.  Choose your linter.  Choose your bundler, your package manager, your task engine,
test runner, test assertion library, and so on.  Once you've placed your bets, integrating all these pieces
turns out to be a software project of its own.  As you scale up, these costs can add up fast!

**Rush Stack** aims to provide a reusable solution for this broader set of problems.  You can still use Rush by itself,
of course.  But if you're tired of going it alone, we invite you to:

- Trade your flexibility for an opinionated approach backed by tooling experts who run huge monorepos
- Join forces with an open community that's investing in this approach
- Help us to "go deep" with integrations, optimizations, documentation, and polish to achieve a world class developer experience

