---
layout: page
title: Core plugins
navigation_source: docs_nav
---

| Plugin  | Description |
| ------------- | ------------- |
| [ApiExtractorPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts) | Implements the [api-extractor]({% link pages/heft_tasks/api-extractor.md %}) task |
| [BasicConfigureWebpackPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/Webpack/BasicConfigureWebpackPlugin.ts) | Used to configure the [webpack]({% link pages/heft_tasks/webpack.md %}) task by loading a static **webpack.config.js** file (instead of building a dynamic configuration at runtime) |
| [CopyStaticAssetsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts) | Implements the [copy-static-assets]({% link pages/heft_tasks/copy-static-assets.md %}) task |
| [DeleteGlobsPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/DeleteGlobsPlugin.ts) | Implements the [delete-globs]({% link pages/heft_tasks/delete-globs.md %}) task |
| [JestPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/JestPlugin/JestPlugin.ts) | Implements the [jest]({% link pages/heft_tasks/jest.md %}) task |
| [TypeScriptPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts) | Implements the [typescript]({% link pages/heft_tasks/typescript.md %}), [eslint]({% link pages/heft_tasks/eslint.md %}), and [tslint]({% link pages/heft_tasks/tslint.md %}) tasks |
| [WebpackPlugin](https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/Webpack/WebpackPlugin.ts) | Implements the [webpack]({% link pages/heft_tasks/webpack.md %}) bundling and `webpack-dev-server` functionality |
