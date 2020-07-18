---
layout: page
title: '"api-extractor" task'
navigation_source: docs_nav
---

This task invokes the [API Extractor](https://api-extractor.com/) tool which reads TypeScript declarations (.d.ts files)
as inputs and produces three types of outputs:

**1. API Report** - API Extractor can trace all exports from your project's main entry point and generate
a report to be used as the basis for an API review workflow.

**2. .d.ts Rollups** - Similar to how **Webpack** can "roll up" all your JavaScript files into a single bundle
for distribution, API Extractor can roll up your TypeScript declarations into a single .d.ts file.

**3. API Documentation** - API Extractor can generate a "doc model" JSON file for each of your projects.  This
JSON file contains the extracted type signatures and doc comments.  The **api-documenter** companion tool
can use these files to generate an API reference website, or you can use them as inputs for a custom documentation
pipeline.

See the [API Extractor documentation](https://api-extractor.com/pages/overview/intro/) for details about how it works.


## When to use it

We recommend to use API Extractor for every TypeScript library project, especially if it is published as an NPM package.


## Configuration

There isn't a Heft-specific file for this task.  Heft looks for API Extractor's config file [config/api-extractor.json](https://api-extractor.com/pages/commands/config_file/). This file can be created by invoking the [api-extractor init](https://api-extractor.com/pages/commands/api-extractor_init/) command.

## package.json dependencies

None -- Heft loads the `@microsoft/api-extractor` package from the `@microsoft/rush-stack-compiler-*` bundle.  See the [typescript]({% link pages/heft_tasks/typescript.md %}) task documentation for details.
