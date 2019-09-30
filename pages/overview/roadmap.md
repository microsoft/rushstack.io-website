---
layout: page
title: Project roadmap
navigation_source: docs_nav
---

## Recently Completed

These milestones were completed recently:

- Set up the website and plan for Rush Stack
- Improve the GitHub issue/PR triage process to improve turnaround times
- Rename our GitHub repo and Gitter chat room from "web-build-tools" to "rushstack"
- Set up a [@rushstack](https://twitter.com/rushstack) Twitter feed

## In progress

Contributor availability is difficult to predict, so we try not to make commitments about when (or whether)
a particular feature will get implemented.  That said, here's some areas which people are actively working on:

- Write up various design notes and guidance as articles on the new rushstack.io website
- Complete the migration from TSLint to ESLint/Prettier using the new [@microsoft/eslint-config-scalable-ts](https://www.npmjs.com/package/@microsoft/eslint-config-scalable-ts) ruleset
- Rush integration with [BuildXL](https://github.com/microsoft/BuildXL) for sharded builds
- Improve DocFX support for namespaces ([issue #1537](https://github.com/microsoft/rushstack/pull/1537))

## Soon, hopefully

The Rush Stack maintainers currently see these feature areas as the main priorities for upcoming investments:

- Initial prototype of "heft" revamped toolchain
- Enable `rush install` to leverage the package manager's monorepo support, instead of the `@rushtemp`
  packages ([issue #1553](https://github.com/microsoft/rushstack/issues/1553))
- Improve API Extractor to support `import * as ___ from "___";` namespaces ([issue #1029](https://github.com/microsoft/rushstack/issues/1029))

If there's an area that's important to you, let us know in the
[Gitter chat room](https://gitter.im/web-build-tools/web-build-tools).
And of course, even if a feature isn't listed on the road map, pull requests are always welcome!
