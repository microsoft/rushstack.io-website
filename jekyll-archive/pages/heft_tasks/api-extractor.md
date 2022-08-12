---
layout: page
title: '"api-extractor" task'
navigation_source: docs_nav
---

This task invokes the [API Extractor](https://api-extractor.com/) tool which reads TypeScript declarations (.d.ts files)
as inputs and produces three types of outputs:

**1. API Report** - API Extractor can trace all exports from your project's main entry point and generate
a report to be used as the basis for an API review workflow.

**2. .d.ts Rollups** - Similar to how **Webpack** can "roll up" all your JavaScript files into a single .js file
for distribution, API Extractor can roll up your TypeScript declarations into a single .d.ts file.

**3. API Documentation** - API Extractor can generate a "doc model" JSON file for each of your projects.  This
JSON file contains the extracted type signatures and doc comments.  The **api-documenter** companion tool
can use these files to generate an API reference website, or you can use them as inputs for a custom documentation
pipeline.

See the [API Extractor documentation](https://api-extractor.com/pages/overview/intro/) for details about how it works.


## When to use it

We recommend to use API Extractor for every TypeScript library project, especially if it is published as an NPM package.


## package.json dependencies

You will need to add the `@microsoft/api-extractor` package to your project:

```bash
$ rush add --package @microsoft/api-extractor --dev
```

Alternatively, you can avoid this dependency by loading it from a rig, as described in the [Using rig packages]({% link pages/heft/rig_packages.md %}) article.


## Configuration

Heft looks for API Extractor's config file [config/api-extractor.json](https://api-extractor.com/pages/commands/config_file/). This file can be created by invoking the [api-extractor init](https://api-extractor.com/pages/commands/api-extractor_init/) command.  This file is [riggable]({% link pages/heft/rig_packages.md %}).

For advanced scenarios, the optional [api-extractor-task.json]({% link pages/heft_configs/api-extractor-task_json.md %}) config file provides some additional Heft-specific settings.


