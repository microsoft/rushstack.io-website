---
layout: page
title: Project roadmap
navigation_source: docs_nav
---

Our [News page]({% link pages/news.md %}) and Twitter feed is the best way to find out what's happening.
This roadmap supplements that with more general information about future directions.

## Recently Completed

These milestones were completed recently:

- Complete the migration from TSLint to ESLint/Prettier using the new [@<!---->rushstack/eslint-config](https://www.npmjs.com/package/@rushstack/eslint-config) ruleset
- Initial release of "heft" revamped toolchain
- Initial release of the `rush deploy` feature
- API Extractor support for TypeScript 3.9
- Migrate our NPM packages to use the new `@rushstack` NPM scope:  now mostly complete with
  [PR 1784](https://github.com/microsoft/rushstack/pull/1784); Rush and API Extractor are a more disruptive rename,
  so they will be handled very carefully once the dust has settled
- Improve documentation for Rush Stack projects
- Enable `rush install` to leverage the package manager's monorepo support, instead of the `@rushtemp`
  packages ([issue #1553](https://github.com/microsoft/rushstack/issues/1553))
- Shell tab completion for Rush
- Optimize Rush startup time, adding a new tool [@rushstack/rundown](https://www.npmjs.com/package/@rushstack/rundown)
- Redesign the "rush build" collator, based around a new [@rushstack/terminal](https://www.npmjs.com/package/@rushstack/terminal) model
- Introduce a model for [rig packages](https://www.npmjs.com/package/@rushstack/rig-package)

## In progress

Contributor availability is difficult to predict, so we try not to make commitments about when (or whether)
a particular feature will get implemented.  That said, here's some areas which people are actively working on:

- A backlog of API Extractor PRs that we're trying to catch up with
- Rush integration with [BuildXL](https://github.com/microsoft/BuildXL) for sharded builds
- A new [@rushstack/eslint-plugin-security](https://www.npmjs.com/package/@rushstack/eslint-plugin-security) package
- Working towards a 1.0 release of Heft, to stabilize the config file and plugin API contracts

## Soon, hopefully

The Rush Stack maintainers currently see these feature areas as the main priorities for upcoming investments:

- Improve API Extractor to support `import * as ___ from "___";` namespaces ([issue #1029](https://github.com/microsoft/rushstack/issues/1029))
- Multiphase builds for Rush
- Improve `rush publish`


If there's a specific area that's important to you, let us know in the
[Zulip chat room](https://rushstack.zulipchat.com/).
And of course, even if a feature isn't listed on the road map, pull requests are always welcome!
