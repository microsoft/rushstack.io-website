"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[5182],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(6393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||s;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(9122),i=(n(6393),n(158));const s={title:"Heft 0.51 Migration Guide",authors:["D4N14L","octogonz"],tags:["heft"],draft:!1,hide_table_of_contents:!1},o=void 0,r={permalink:"/blog/2023/06/16/heft-migration-guide",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/blog/2023-06-16-heft-migration-guide.md",source:"@site/blog/2023-06-16-heft-migration-guide.md",title:"Heft 0.51 Migration Guide",description:"The Heft 0.51.0 release introduces a \"multi-phase\" feature that brings some significant architectural changes. If you've been using an older version, upgrading will require making some changes to your Heft config files and also any custom plugins that you may have authored. In this post, we'll summarize what changed and how to migrate your projects. This is probably the last major breaking change before the 1.0.0 release of Heft.",date:"2023-06-16T00:00:00.000Z",formattedDate:"June 16, 2023",tags:[{label:"heft",permalink:"/blog/tags/heft"}],readingTime:11.08,hasTruncateMarker:!0,authors:[{name:"Daniel Nadeau",title:"Rush Stack maintainer",url:"https://github.com/D4N14L",imageURL:"https://github.com/D4N14L.png",key:"D4N14L"},{name:"Pete Gonzalez",title:"Rush Stack maintainer",url:"https://github.com/octogonz",imageURL:"https://github.com/octogonz.png",key:"octogonz"}],frontMatter:{title:"Heft 0.51 Migration Guide",authors:["D4N14L","octogonz"],tags:["heft"],draft:!1,hide_table_of_contents:!1},nextItem:{title:"What's New in Heft 0.51",permalink:"/blog/2023/06/15/heft-whats-new"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"Version timeline",id:"version-timeline",level:2},{value:"Migrating heft.json files",id:"migrating-heftjson-files",level:2},{value:"JSON Schema URL changes",id:"json-schema-url-changes",level:3},{value:"Plugins must be explicitly loaded",id:"plugins-must-be-explicitly-loaded",level:3},{value:"Migrating package.json dependencies",id:"migrating-packagejson-dependencies",level:3},{value:"Migrating a standalone heft.json",id:"migrating-a-standalone-heftjson",level:3},{value:"Migrating a rigged heft.json",id:"migrating-a-rigged-heftjson",level:3},{value:"Migrating a &quot;pre-compile&quot; action",id:"migrating-a-pre-compile-action",level:3},{value:"Migrating command line syntax",id:"migrating-command-line-syntax",level:2},{value:"Command aliases",id:"command-aliases",level:2},{value:"@rushstack/heft-jest-plugin changes",id:"rushstackheft-jest-plugin-changes",level:2},{value:"Migrating custom plugins",id:"migrating-custom-plugins",level:2},{value:"Miscellaneous migration notes",id:"miscellaneous-migration-notes",level:2}],c={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Heft ",(0,i.kt)("strong",{parentName:"p"},"0.51.0"),' release introduces a "multi-phase" feature that brings some significant architectural changes. If you\'ve been using an older version, upgrading will require making some changes to your ',(0,i.kt)("strong",{parentName:"p"},"Heft config files")," and also any ",(0,i.kt)("strong",{parentName:"p"},"custom plugins")," that you may have authored. In this post, we'll summarize what changed and how to migrate your projects. This is probably the last major breaking change before the 1.0.0 release of Heft."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For a deeper dive into the multi-phase design and its underlying motivation, please see our other post ",(0,i.kt)("a",{parentName:"p",href:"/blog/2023/06/15/heft-whats-new/"},"What's New in Heft 0.51"),".")),(0,i.kt)("h2",{id:"version-timeline"},"Version timeline"),(0,i.kt)("p",null,"Although most of the breaking changes are in Heft ",(0,i.kt)("strong",{parentName:"p"},"0.51.0"),", other significant changes were made in several subsequent versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Heft ",(0,i.kt)("strong",{parentName:"li"},"0.51.0"),": The big architecture change for multi-phase support, with breaking changes for config file schemas and plugin APIs"),(0,i.kt)("li",{parentName:"ul"},"Heft ",(0,i.kt)("strong",{parentName:"li"},"0.52.0"),": Restored support for the ",(0,i.kt)("inlineCode",{parentName:"li"},"heft start")," alias (which had been removed in 0.51.0); added the ability to define custom aliases; ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-node-rig")," now launches its dev server using the same ",(0,i.kt)("inlineCode",{parentName:"li"},"heft start")," alias as ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-web-rig")),(0,i.kt)("li",{parentName:"ul"},"Heft ",(0,i.kt)("strong",{parentName:"li"},"0.53.0"),": Removed the ",(0,i.kt)("inlineCode",{parentName:"li"},"taskEvents")," config setting; built-in tasks like ",(0,i.kt)("inlineCode",{parentName:"li"},"copy-files-plugin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"node-service-plugin")," now use identical configuration as third-party plugins (simply specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft")," as their plugin package name)"),(0,i.kt)("li",{parentName:"ul"},"Heft ",(0,i.kt)("strong",{parentName:"li"},"0.54.0"),": Restored support for short parameter names such as ",(0,i.kt)("inlineCode",{parentName:"li"},"-u")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"heft test -u")," (which had been removed in 0.51.0)"),(0,i.kt)("li",{parentName:"ul"},"Heft ",(0,i.kt)("strong",{parentName:"li"},"0.55.0"),": Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"cacheFolderPath")," from plugin API's session object, since the ",(0,i.kt)("inlineCode",{parentName:"li"},".cache")," folder is no longer used")),(0,i.kt)("p",null,"To simplify these migration notes, in this article we'll assume you're upgrading to ",(0,i.kt)("strong",{parentName:"p"},"0.55.0 or newer"),", and that you're coming from ",(0,i.kt)("strong",{parentName:"p"},"0.50.x or older"),"."),(0,i.kt)("h2",{id:"migrating-heftjson-files"},"Migrating heft.json files"),(0,i.kt)("h3",{id:"json-schema-url-changes"},"JSON Schema URL changes"),(0,i.kt)("p",null,"In order to have correct VS Code IntelliSense when editing config files, update the ",(0,i.kt)("inlineCode",{parentName:"p"},'"$schema"')," field in each Heft config file. Simply replace ",(0,i.kt)("inlineCode",{parentName:"p"},"json-schemas/heft/")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"json-schemas/heft/v0"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Old: ",(0,i.kt)("inlineCode",{parentName:"li"},'"$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json"')),(0,i.kt)("li",{parentName:"ul"},"New: ",(0,i.kt)("inlineCode",{parentName:"li"},'"$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json"'))),(0,i.kt)("p",null,"The full list of JSON schema names can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/json-schemas/tree/main/heft/v0"},"in this GitHub folder"),". These names are the last part of the URL shown above."),(0,i.kt)("h3",{id:"plugins-must-be-explicitly-loaded"},"Plugins must be explicitly loaded"),(0,i.kt)("p",null,"In the old design, a number of plugins were built-in to ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft")," and did not need to be explicitly loaded using ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," settings. If their associated config file was not found, then their task would be silently skipped."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OLD:")," Plugins that were implicitly loaded:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"heft-typescript-plugin"),(0,i.kt)("li",{parentName:"ul"},"copy-static-assets-plugin"),(0,i.kt)("li",{parentName:"ul"},"copy-files-plugin"),(0,i.kt)("li",{parentName:"ul"},"delete-globs-plugin"),(0,i.kt)("li",{parentName:"ul"},"run-script-plugin"),(0,i.kt)("li",{parentName:"ul"},"api-extractor-plugin"),(0,i.kt)("li",{parentName:"ul"},"project-validator-plugin"),(0,i.kt)("li",{parentName:"ul"},"node-service-plugin")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NEW:")," After migrating, every plugin must be explicitly loaded via the ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," config file. Typically this is inherited from your rig. This new model eliminates magic and mysteries, since the full set of plugins and their dependencies is now represented in the config file."),(0,i.kt)("p",null,"If you are using our ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-node-rig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-web-rig"),", your project should only need minor changes, since the updated rigs now explicitly load all these plugins. If you created a custom rig, the migration work will be more involved, but you can copy from our examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/rigs/heft-node-rig/profiles/default/config/heft.json"},"heft-node-rig/profiles/default/config/heft.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/rigs/heft-web-rig/profiles/app/config/heft.json"},"heft-web-rig/profiles/app/config/heft.json"))),(0,i.kt)("h3",{id:"migrating-packagejson-dependencies"},"Migrating package.json dependencies"),(0,i.kt)("p",null,"Many of these plugins have been extracted into their own NPM packages. This reduces the startup time and installation footprint for projects that don't use certain plugins."),(0,i.kt)("p",null,"Here's the current inventory as of this writing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/apps/heft"},"@rushstack/heft"),": Its ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/heft-plugin.json"},"heft-plugin.json")," defines multiple plugins copy-files-plugin, delete-files-plugin, node-service-plugin, run-script-plugin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-api-extractor-plugin"},"@rushstack/heft-api-extractor-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-dev-cert-plugin"},"@rushstack/heft-dev-cert-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-jest-plugin"},"@rushstack/heft-jest-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-lint-plugin"},"@rushstack/heft-lint-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-sass-plugin"},"@rushstack/heft-sass-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-serverless-stack-plugin"},"@rushstack/heft-serverless-stack-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-storybook-plugin"},"@rushstack/heft-storybook-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-typescript-plugin"},"@rushstack/heft-typescript-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-webpack4-plugin"},"@rushstack/heft-webpack4-plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-webpack5-plugin"},"@rushstack/heft-webpack5-plugin"))),(0,i.kt)("h3",{id:"migrating-a-standalone-heftjson"},"Migrating a standalone heft.json"),(0,i.kt)("p",null,"The old ",(0,i.kt)("strong",{parentName:"p"},"heft.json"),' distinguished "event actions" (i.e. built-in tasks) versus "heftPlugins" (i.e. tasks from plugin packages).'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OLD:")," ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," excerpt from ",(0,i.kt)("inlineCode",{parentName:"p"},"heft-node-rig")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// \u26a0\ufe0f OLD FORMAT EXAMPLE -- DO NOT USE! \u26a0\ufe0f\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  // "deleteGlobs" is specified to run with the "clean" event\n  "eventActions": [\n    {\n      // \ud83d\udccc [1] old way of cleaning\n      "actionKind": "deleteGlobs",\n      "heftEvent": "clean",\n      "actionId": "defaultClean",\n      "globsToDelete": ["dist", "lib", "lib-commonjs", "temp"]\n    }\n  ],\n\n  // the Jest plugin is loaded using the "heftPlugins" section\n  // and its event sequence was defined using program logic\n  "heftPlugins": [\n    // \ud83d\udccc [2] old way of loading a plugin\n    { "plugin": "@rushstack/heft-jest-plugin" }\n  ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NEW:")," ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," excerpt from ",(0,i.kt)("inlineCode",{parentName:"p"},"heft-node-rig")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n\n  "phasesByName": {\n    // ("build" is a user-defined name, not a schema field)\n    "build": {\n      // \ud83d\udccc [1] new way of cleaning\n      "cleanFiles": [\n        { "sourcePath": "dist" },\n        { "sourcePath": "lib" },\n        { "sourcePath": "lib-commonjs" }\n      ],\n      "tasksByName": {\n        // ("typescript" is a user-defined name, not a schema field)\n        "typescript": {\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-typescript-plugin"\n          }\n        },\n        "lint": {\n          "taskDependencies": ["typescript"],\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-lint-plugin"\n          }\n        },\n        "api-extractor": {\n          "taskDependencies": ["typescript"],\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-api-extractor-plugin"\n          }\n        },\n        "node-service": {\n          "taskDependencies": ["typescript"],\n          "taskPlugin": {\n            // This built-in plugin specifies "@rushstack/heft" as its package name\n            "pluginPackage": "@rushstack/heft",\n            "pluginName": "node-service-plugin"\n          }\n        }\n      }\n    },\n\n    // ("test" is a user-defined name, not a schema field)\n    "test": {\n      "phaseDependencies": ["build"],\n      "tasksByName": {\n        // ("jest" is a user-defined name for this task)\n        "jest": {\n          // \ud83d\udccc [2] new way of loading a plugin\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-jest-plugin"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Looking at the above example, the major changes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"every task must be explicitly loaded from a ",(0,i.kt)("inlineCode",{parentName:"li"},"pluginPackage"),", so the rig's ",(0,i.kt)("strong",{parentName:"li"},"heft.json")," is now more verbose (but more understandable!)"),(0,i.kt)("li",{parentName:"ul"},"built-in tasks (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"node-service"),") have identical specification as external plugins"),(0,i.kt)("li",{parentName:"ul"},"the old ",(0,i.kt)("inlineCode",{parentName:"li"},'"heftEvent"')," lifecycle has been replaced by ",(0,i.kt)("inlineCode",{parentName:"li"},"phaseDependencies")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"taskDependencies")," whose dependency graph determines the sequencing of tasks")),(0,i.kt)("p",null,"The complete config file can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/rigs/heft-node-rig/profiles/default/config/heft.json"},"heft-node-rig/profiles/default/config/heft.json")),(0,i.kt)("h3",{id:"migrating-a-rigged-heftjson"},"Migrating a rigged heft.json"),(0,i.kt)("p",null,"Here's another example from the ",(0,i.kt)("a",{parentName:"p",href:"https://tsdoc.org/play/"},"TSDoc Playground")," project, whose ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/tsdoc/blob/main/playground/config/heft.json"},"heft.json")," inherits from our ",(0,i.kt)("inlineCode",{parentName:"p"},"heft-web-rig"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OLD:")," ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," excerpt from ",(0,i.kt)("inlineCode",{parentName:"p"},"playground/config/heft.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// \u26a0\ufe0f OLD FORMAT EXAMPLE -- DO NOT USE! \u26a0\ufe0f\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  "extends": "@rushstack/heft-web-rig/profiles/library/config/heft.json",\n\n  "eventActions": [\n    {\n      "actionId": "copyLicenseToDistFolder",\n      "actionKind": "copyFiles",\n      // \ud83d\udccc [3] old way to do a post-compile action\n      "heftEvent": "compile",\n      "copyOperations": [\n        {\n          "destinationFolders": ["./dist"],\n          // \ud83d\udccc [4] old way of specifying a source folder\n          "sourceFolder": "..",\n          "includeGlobs": ["LICENSE"]\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NEW:")," ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," excerpt from ",(0,i.kt)("inlineCode",{parentName:"p"},"playground/config/heft.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n\n  "extends": "@rushstack/heft-web-rig/profiles/library/config/heft.json",\n\n  "phasesByName": {\n    // ("build" is a user-defined name, not a schema field)\n    "build": {\n      "tasksByName": {\n        // ("post-compile-copy" is a user-defined name, not a schema field)\n        "post-compile-copy": {\n          // \ud83d\udccc [3] new way to do a post-compile action, by depending on the relevant task(s)\n\n          // The "post-compile-copy" task should not run until after "typescript" completes\n          "taskDependencies": ["typescript"],\n\n          "taskPlugin": {\n            "pluginName": "copy-files-plugin",\n            "pluginPackage": "@rushstack/heft",\n            "options": {\n              "copyOperations": [\n                {\n                  // \ud83d\udccc [4] new way of specifying a source folder (or file path)\n                  "sourcePath": "..",\n                  "destinationFolders": ["./dist"],\n                  "includeGlobs": ["LICENSE"]\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Observations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The changes here are minimal, since the rig provides most of the build definition"),(0,i.kt)("li",{parentName:"ul"},"The latest ",(0,i.kt)("inlineCode",{parentName:"li"},"heft-web-rig")," uses ",(0,i.kt)("inlineCode",{parentName:"li"},"heft-webpack5-plugin"),", so we had to upgrade from Webpack 4 -> 5 as part of this conversion"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},'"heftEvent": "compile"')," event no longer exists; instead it must be represented via an equivalent ",(0,i.kt)("inlineCode",{parentName:"li"},'"taskDependencies"')," entry, which references the rig's ",(0,i.kt)("inlineCode",{parentName:"li"},'"typescript"')," task definition")),(0,i.kt)("h3",{id:"migrating-a-pre-compile-action"},'Migrating a "pre-compile" action'),(0,i.kt)("p",null,"In the above example, we migrated our config file by replacing ",(0,i.kt)("inlineCode",{parentName:"p"},'"heftEvent": "compile"'),"\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},'"taskDependencies": ["typescript"]'),", which accomplishes the same thing by expressing that the\naction cannot be performed until after the ",(0,i.kt)("inlineCode",{parentName:"p"},'"typescript"')," task has completed. But the ",(0,i.kt)("inlineCode",{parentName:"p"},'"taskDependencies"'),"\nis a unidirectional relationship. In this new model, how can we represent an event such as ",(0,i.kt)("inlineCode",{parentName:"p"},"pre-compile"),"?"),(0,i.kt)("p",null,"Consider this hypothetical example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OLD:")," ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// \u26a0\ufe0f OLD FORMAT EXAMPLE -- DO NOT USE! \u26a0\ufe0f\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  "extends": "@rushstack/heft-web-rig/profiles/app/config/heft.json",\n\n  "eventActions": [\n    {\n      "actionKind": "copyFiles",\n      "actionId": "copyAssets",\n      // \ud83d\udccc [5] old way to do a "post-compile" action\n      "heftEvent": "pre-compile",\n      "copyOperations": [\n        {\n          "sourceFolder": "node_modules/some-library/dist",\n          "destinationFolders": ["temp/typings"],\n          "includeGlobs": ["*.d.ts"]\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NEW:")," ",(0,i.kt)("strong",{parentName:"p"},"heft.json")," sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n\n  "extends": "@rushstack/heft-web-rig/profiles/app/config/heft.json",\n\n  "phasesByName": {\n    // ("build" is a user-defined name, not a schema field)\n    "build": {\n      "tasksByName": {\n        // ("pre-compile-copy" is a user-defined name, not a schema field)\n        "pre-compile-copy": {\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft",\n            "pluginName": "copy-files-plugin",\n            "options": {\n              "copyOperations": [\n                {\n                  "sourcePath": "node_modules/some-library/dist",\n                  "destinationFolders": ["temp/typings"],\n                  "includeGlobs": ["*.d.ts"]\n                }\n              ]\n            }\n          }\n        },\n\n        // ("typescript" is a user-defined name, that is originally defined in the rig)\n        "typescript": {\n          // \ud83d\udccc [5] new way to do a "post-compile" action\n          // The "typescript" task should not run until after "pre-compile-copy" completes.\n          "taskDependencies": ["pre-compile-copy"]\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"For reference, ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-web-rig")," defines the ",(0,i.kt)("inlineCode",{parentName:"p"},'"typescript"')," task as follows:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/rigs/heft-web-rig/profiles/app/config/heft.json"},"heft-web-rig/profiles/app/config/heft.json")," excerpt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "typescript": {\n    "taskDependencies": ["sass"],\n    "taskPlugin": {\n      "pluginPackage": "@rushstack/heft-typescript-plugin"\n    }\n  },\n  . . .\n')),(0,i.kt)("p",null,"Observations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recall that we implemented ",(0,i.kt)("inlineCode",{parentName:"li"},'"post-compile-copy"')," by specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"taskDependencies")," for our own task (",(0,i.kt)("inlineCode",{parentName:"li"},'"taskDependencies": ["typescript"]'),")"),(0,i.kt)("li",{parentName:"ul"},"By contrast, ",(0,i.kt)("inlineCode",{parentName:"li"},'"pre-compile-copy"')," is implemented by amending the ",(0,i.kt)("inlineCode",{parentName:"li"},"taskDependencies")," for the rig's ",(0,i.kt)("inlineCode",{parentName:"li"},'"typescript"')," task\n(",(0,i.kt)("inlineCode",{parentName:"li"},'"taskDependencies": ["pre-compile-copy"]'),")"),(0,i.kt)("li",{parentName:"ul"},"The rig already has ",(0,i.kt)("inlineCode",{parentName:"li"},'"taskDependencies": ["sass"]'),". But we do NOT need to specify ",(0,i.kt)("inlineCode",{parentName:"li"},'"taskDependencies": ["typescript", "sass"]')," because by default, Heft's config parser will merge arrays by appending rather than replacing entries"),(0,i.kt)("li",{parentName:"ul"},"This merge behavior is implemented by ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-config-file")," and can be customized using\n",(0,i.kt)("a",{parentName:"li",href:"/blog/2023/06/15/heft-whats-new/#heftjson-property-inheritance-directives"},"property inheritance directives"))),(0,i.kt)("h2",{id:"migrating-command-line-syntax"},"Migrating command line syntax"),(0,i.kt)("p",null,"The old ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," command line parameter has been removed. Instead, watch mode is enabled by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"-watch"),"\nto the action name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OLD:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"heft build --watch --verbose\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NEW:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"heft build-watch --verbose\n")),(0,i.kt)("h2",{id:"command-aliases"},"Command aliases"),(0,i.kt)("p",null,"In the old design, ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start")," was a special action for launching dev servers. In the new design, it is\na command alias defined in ",(0,i.kt)("strong",{parentName:"p"},"heft.json"),". The new aliasing system allows you to define your own custom aliases\nto shorten common commands."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/rigs/heft-web-rig/profiles/app/config/heft.json"},"heft-web-rig/profiles/app/config/heft.json")," excerpt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  // Define "heft start" to be an alias for "heft build-watch --serve".\n  "aliasesByName": {\n    "start": {\n      "actionName": "build-watch",\n      "defaultParameters": ["--serve"]\n    }\n  },\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--serve")," CLI parameter is our standard convention for launching a ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," dev server. It is supported by both ",(0,i.kt)("inlineCode",{parentName:"p"},"heft-webpack5-plugin")," and the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"node-service-plugin"),"."),(0,i.kt)("h2",{id:"rushstackheft-jest-plugin-changes"},"@rushstack/heft-jest-plugin changes"),(0,i.kt)("p",null,"Heft does not follow the Jest convention of using ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," to naively translate ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," files to ",(0,i.kt)("inlineCode",{parentName:"p"},".js"),". Instead, the full Heft toolchain is invoked, avoiding duplicate transpilation and ensuring accurate invocation of all preprocessors. In the past, this was implemented by pointing your ",(0,i.kt)("strong",{parentName:"p"},"jest.config.json")," at the source code (",(0,i.kt)("inlineCode",{parentName:"p"},'"roots": ["<rootDir>/src"]'),") and relying on ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin/exports/jest-build-transform.js")," to return Heft's output ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," files. However newer releases of Jest introduced a ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration/#snapshotresolver-string"},"snapshotResolver")," setting, which allows Jest to process ",(0,i.kt)("inlineCode",{parentName:"p"},'"<rootDir>/lib"')," directly and still be able to update inline snapshots. The latest Heft adopted this approach because it provides a better debugging experience."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to migrate:")," If you're using the Rush Stack rigs or extending from ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin/includes/jest-shared.config.json"),", just delete ",(0,i.kt)("inlineCode",{parentName:"p"},"emitFolderNameForTests")," from your ",(0,i.kt)("strong",{parentName:"p"},"typescript.json")," file."),(0,i.kt)("p",null,"For more customized setups, here's the full list of underlying changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These plugin options have been removed from ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-jest-plugin"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"extensionForTests"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"folderNameForTests"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"folderNameForSnapshots")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"emitFolderNameForTests")," setting is removed from ",(0,i.kt)("strong",{parentName:"li"},"config/typescript.json")),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("strong",{parentName:"li"},"jest.config.json"),", fields such as ",(0,i.kt)("inlineCode",{parentName:"li"},"roots"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"testMatch"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"collectCoverageFrom")," should now point to the CommonJS output folder (",(0,i.kt)("inlineCode",{parentName:"li"},"lib-commonjs")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"lib"),") instead of the ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," folder"),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("strong",{parentName:"li"},"jest.config.json"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"moduleFileExtensions")," should no longer include ",(0,i.kt)("inlineCode",{parentName:"li"},".ts")," or ",(0,i.kt)("inlineCode",{parentName:"li"},".tsx")," extensions"),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("strong",{parentName:"li"},"jest.config.json"),", ",(0,i.kt)("strong",{parentName:"li"},"jest-build-transform.js")," is replaced by ",(0,i.kt)("inlineCode",{parentName:"li"},'"snapshotResolver": "@rushstack/heft-jest-plugin/exports/jest-source-map-snapshot-resolver.js"')),(0,i.kt)("li",{parentName:"ul"},"For web development, we've introduced ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/blob/main/heft-plugins/heft-jest-plugin/includes/jest-web.config.json"},"heft-jest-plugin/includes/jest-web.config.json")," (for web projects that write their CommonJS to ",(0,i.kt)("inlineCode",{parentName:"li"},"lib-commonjs"),") alongside the familiar ",(0,i.kt)("strong",{parentName:"li"},"jest-shared.config.json")," (for Node.js projects that write their CommonJS to ",(0,i.kt)("inlineCode",{parentName:"li"},"lib"),").")),(0,i.kt)("p",null,"For a real world example, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/compare/6edf3f81a96b7f0c2951b3320825a952ba9d7d0c..4ec1513cdd37cb805b5ed348b5cd3d0e5a9fdba6#diff-467d5815d520ad0cdf1d3338f7ad09f6cdabdd8583f9eb36f8b4547b1728506f"},"this GitHub diff")," shows the recent changes to ",(0,i.kt)("strong",{parentName:"p"},"heft-jest-plugin/includes/jest-shared.config.json"),"."),(0,i.kt)("h2",{id:"migrating-custom-plugins"},"Migrating custom plugins"),(0,i.kt)("p",null,"In updating to the new version of Heft, plugins will also need to be updated for compatibility. Some of the more notable API changes include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"heft-plugin.json")," manifest file must accompany any plugin package. If no ",(0,i.kt)("strong",{parentName:"li"},"heft-plugin.json")," file is found, Heft will report an error."),(0,i.kt)("li",{parentName:"ul"},"Plugin classes must have parameterless constructors, and must be the default export of the file pointed to by the ",(0,i.kt)("inlineCode",{parentName:"li"},"entryPoint")," property in ",(0,i.kt)("strong",{parentName:"li"},"heft-plugin.json")),(0,i.kt)("li",{parentName:"ul"},"Schema files for options provided in ",(0,i.kt)("strong",{parentName:"li"},"heft.json")," can now be specified using the ",(0,i.kt)("inlineCode",{parentName:"li"},"optionsSchema")," property in ",(0,i.kt)("strong",{parentName:"li"},"heft-plugin.json")," and they will be validated by Heft"),(0,i.kt)("li",{parentName:"ul"},"Parameters are now defined in ",(0,i.kt)("strong",{parentName:"li"},"heft-plugin.json")," and are consumed in the plugin via the ",(0,i.kt)("inlineCode",{parentName:"li"},"IHeftTaskSession.parameters")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"IHeftLifecycleSession.parameters")," property.\n",(0,i.kt)("em",{parentName:"li"},"NOTE: Other than the default Heft-included parameters, only parameters defined by the calling plugin are accessible")),(0,i.kt)("li",{parentName:"ul"},"Plugins can no longer define their own actions. If a plugin requires its own action, a dedicated phase should be added to the consumers ",(0,i.kt)("strong",{parentName:"li"},"heft.json")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"runScript")," Heft event has been modified to only accept a ",(0,i.kt)("inlineCode",{parentName:"li"},"runAsync")," method, and the properties have been updated to reflect what is available to normal Heft task plugins"),(0,i.kt)("li",{parentName:"ul"},"Path-related variables have been renamed to clarify they are paths (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"HeftConfiguration.buildFolder")," is now ",(0,i.kt)("inlineCode",{parentName:"li"},"HeftConfiguration.buildFolderPath"),")"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"runIncremental")," hook can now be utilized to ensure that watch mode rebuilds occur in proper dependency order"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"clean")," hook was removed in favor of the ",(0,i.kt)("inlineCode",{parentName:"li"},"cleanFiles")," option in ",(0,i.kt)("strong",{parentName:"li"},"heft.json")," in order to make it obvious what files are being cleaned and when"),(0,i.kt)("li",{parentName:"ul"},"As a consequence, plugins can no longer programmatically compute folders to be cleaned by the ",(0,i.kt)("inlineCode",{parentName:"li"},"heft clean")," command; its behavior is predetermined by static config files, which makes the overall system simpler and more predictable.")),(0,i.kt)("h2",{id:"miscellaneous-migration-notes"},"Miscellaneous migration notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"node-service-plugin")," built-in plugin now supports the ",(0,i.kt)("inlineCode",{parentName:"li"},"--serve")," parameter, to be consistent with the ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-webpack5-plugin")," dev server."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"--serve")," is specified and ",(0,i.kt)("inlineCode",{parentName:"li"},"config/node-service.json")," is omitted, then ",(0,i.kt)("inlineCode",{parentName:"li"},"node-service-plugin")," fails with a hard error"),(0,i.kt)("li",{parentName:"ul"},"Although ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-lint-plugin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-typescript-plugin")," have been extracted into separate NPM packages, they must be invoked in the same phase, due to their optimized communication using a ",(0,i.kt)("a",{parentName:"li",href:"/blog/2023/06/15/heft-whats-new/#cross-plugin-interaction"},"plugin accessor"),".")))}m.isMDXComponent=!0}}]);