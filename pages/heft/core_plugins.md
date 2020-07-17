---
layout: page
title: Core Plugins
navigation_source: docs_nav
---

| Plugin  | Description |
| ------------- | ------------- |
| [ApiExtractorPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts) | Implements the [api-extractor]({% link pages/heft_tasks/api-extractor.md %}) task |
| [BasicConfigureWebpackPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/Webpack/BasicConfigureWebpackPlugin.ts) | Loads the configuration for the [webpack]({% link pages/heft_tasks/webpack.md %}) task |
| [CleanPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CleanPlugin.ts) | Deletes temporary files from a previous build |
| [CopyStaticAssetsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts) | Implements the [copy-static-assets]({% link pages/heft_tasks/copy-static-assets.md %}) task |
| [JestPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/JestPlugin/JestPlugin.ts) | Implements the [jest]({% link pages/heft_tasks/jest.md %}) task |
| [PackageJsonConfigurationPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/PackageJsonConfigurationPlugin.ts) | Disables the [typescript]({% link pages/heft_tasks/typescript.md %}) tasks's symlinking optimization for published projects, because publishing workflows do not handle symlinks properly |
| [ProjectActionConfigurationFilesPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ActionConfigurationLoaders/ProjectActionConfigurationFilesPlugin.ts)  | Reads project-specific config files for Heft "actions" such as **clean.json**, **typescript.json**, **copy-static-assets.json**, and **webpack.json** |
| [RushActionConfigurationFilesPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ActionConfigurationLoaders/RushActionConfigurationFilesPlugin.ts)  | Reads Rush monorepo config files for Heft "actions" such as **clean.json**, **typescript.json**, **copy-static-assets.json**, and **webpack.json** |
| [TypeScriptPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts) | Implements the [typescript]({% link pages/heft_tasks/typescript.md %}), [eslint]({% link pages/heft_tasks/eslint.md %}), and [tslint]({% link pages/heft_tasks/tslint.md %}) tasks |
| [WebpackPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/Webpack/WebpackPlugin.ts) | Implements the [webpack]({% link pages/heft_tasks/webpack.md %}) task |
