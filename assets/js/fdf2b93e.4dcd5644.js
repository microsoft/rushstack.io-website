"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2738],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(9122),r=(n(6393),n(158));const o={title:"Getting started with Heft"},i=void 0,s={unversionedId:"pages/heft_tutorials/getting_started",id:"pages/heft_tutorials/getting_started",title:"Getting started with Heft",description:"This walkthrough will get you started with Heft by creating a basic Node.js console project.",source:"@site/docs/pages/heft_tutorials/getting_started.md",sourceDirName:"pages/heft_tutorials",slug:"/pages/heft_tutorials/getting_started",permalink:"/pages/heft_tutorials/getting_started",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_tutorials/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting started with Heft"},sidebar:"docsSidebar",previous:{title:"Heft command line",permalink:"/pages/heft/cli"},next:{title:"Adding more tasks",permalink:"/pages/heft_tutorials/adding_tasks"}},p={},l=[],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This walkthrough will get you started with Heft by creating a basic Node.js console project."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you're in a hurry, the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-basic-tutorial"},"heft-node-basic-tutorial"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-webpack-basic-tutorial"},"heft-webpack-basic-tutorial"),"\nfolders illustrate a fully worked out example of a simple project that builds using Heft.")),(0,r.kt)("p",null,"We'll begin by creating a simple standalone project without Rush. (Later, the ",(0,r.kt)("a",{parentName:"p",href:"/pages/heft_tutorials/heft_and_rush"},"Interfacing with Rush")," tutorial will examine what's different when using Heft in a monorepo.)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We'll use the ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.js.org/"},"PNPM package manager")," for this demo. (Its command line is very similar to NPM, so you can substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," in these steps.) There are ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"various ways")," to install PNPM, but the simplest is like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global pnpm\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new folder ",(0,r.kt)("strong",{parentName:"p"},"my-app")," with a ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file for our project, like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"my-app/package.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "name": "my-app",\n  "version": "1.0.0",\n  "description": "A Heft tutorial project",\n  "license": "MIT",\n  "main": "lib/start.js",\n  "typings": "lib/start.d.ts",\n  "scripts": {\n    "start": "node lib/start.js"\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a TypeScript source file that we'll compile."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"my-app/src/start.ts")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'console.log("Hello, world!");\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/heft"},"@rushstack/heft")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typescript"},"typescript")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependenices")," for your project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd my-app\npnpm install --save-dev @rushstack/heft\npnpm install --save-dev typescript\n\n# Since this project will use the console.log() API, we also need to add the TypeScript\n# typings for Node.js.  Typings should always use "--save-exact" version specifiers.\npnpm install --save-dev --save-exact @types/node\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next we need to create the TypeScript ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"tsconfig.json")," file. The presence of this file causes Heft to invoke the TypeScript compiler. For now we'll create a simple standalone ",(0,r.kt)("strong",{parentName:"p"},"tsconfig.json")," file; later we'll demonstrate how to share a reusable configuration across many projects."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"my-app/tsconfig.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "http://json.schemastore.org/tsconfig",\n\n  "compilerOptions": {\n    "outDir": "lib",\n    "rootDirs": ["src/"],\n\n    "forceConsistentCasingInFileNames": true,\n    "declaration": true,\n    "sourceMap": true,\n    "declarationMap": true,\n    "inlineSources": true,\n    "experimentalDecorators": true,\n    "strict": true,\n    "esModuleInterop": true,\n    "types": ["node"],\n\n    "module": "commonjs",\n    "target": "es2017",\n    "lib": ["es2017"]\n  },\n  "include": ["src/**/*.ts"],\n  "exclude": ["node_modules", "lib"]\n}\n')),(0,r.kt)("p",{parentName:"li"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},'"types": ["node"]')," references the ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/node")," package that we installed above. This is needed\nbecause Node.js is a global environment, so its typings must be loaded globally. Most other ",(0,r.kt)("inlineCode",{parentName:"p"},"@types")," packages\ncan be loaded via ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements in your source code."),(0,r.kt)("p",{parentName:"li"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/pages/heft_tasks/typescript"},"typescript task")," documentation for more background about\nTypeScript configuration with Heft.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can invoke Heft using ",(0,r.kt)("inlineCode",{parentName:"p"},"./node_modules/.bin/heft"),", but it's more convenient to install it globally\nso that it's always available in your shell ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the Heft tool globally\npnpm install --global @rushstack/heft\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"What if the globally installed ",(0,r.kt)("inlineCode",{parentName:"p"},"heft")," binary is the wrong version?"),(0,r.kt)("p",{parentName:"blockquote"},'Just like Rush, Heft implements a "version selector" feature that will automatically\ndiscover your local ',(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder and invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"./node_modules/.bin/heft"),", ensuring\nthat the correct version is used."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Let's try manually invoking Heft's ",(0,r.kt)("a",{parentName:"p",href:"/pages/heft/cli"},"command line")," to build our project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# For Windows, use backslashes for all these commands\n\n# Make sure we\'re in your project folder\ncd my-app\n\n# View the command line help\nheft --help\nheft build --help\n\n# Build the project\nheft build\n\n# To see more detail about what Heft is doing, add you can the "--verbose" flag\nheft build --verbose\n')),(0,r.kt)("p",{parentName:"li"},"Invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"heft build")," should produce console output like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Project build folder is "/path/to/my-app"\nStarting build\n---- Compile started ----\n[copy-static-assets] Copied 0 static assets in 0ms\n[typescript] Using TypeScript version 3.9.7\n---- Compile finished (1494ms) ----\n---- Bundle started ----\n---- Bundle finished (0ms) ----\n-------------------- Finished (2.408s) --------------------\nProject: my-app@1.0.0\nHeft version: 0.3.0\nNode version: v12.17.0\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Some terminology: When we invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"heft build"),' command from the shell, the "build" verb is called an ',(0,r.kt)("strong",{parentName:"p"},"action"),". Actions are user interface concepts, sort of like macros. The action causes Heft to invoke multiple ",(0,r.kt)("strong",{parentName:"p"},"tasks")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"[typescript]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[copy-static-assets]"),". These tasks often run in parallel. The tasks are grouped into ",(0,r.kt)("strong",{parentName:"p"},"stages"),' such as "Compile" and "Bundle" in the above log. Stages represent major steps of the overall operation. These concepts are explained in more depth in the ',(0,r.kt)("a",{parentName:"p",href:"/pages/heft/architecture"},"Heft architecture")," article.")),(0,r.kt)("p",{parentName:"li"},"After the build finishes, confirm that it produced several output files in your ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," folder:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"start.js")," - the compiled JavaScript code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"start.d.ts")," - the TypeScript typings, for external libraries that might import this module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"start.js.map")," and ",(0,r.kt)("strong",{parentName:"li"},"start.d.ts.map")," - Source map files, which enable tools like debuggers to find the corresponding source code file/line, for a given item in an output file"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you recall, our ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file has a ",(0,r.kt)("inlineCode",{parentName:"p"},'"scripts"')," section that specifies ",(0,r.kt)("inlineCode",{parentName:"p"},'"start": "node lib/start.js"'),". Let's try running the compiled code using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Invoke the "start" script from package.json\npnpm run start\n\n# If you have Rush installed, you can also use this slightly shorter equivalent\nrushx start\n')),(0,r.kt)("p",{parentName:"li"},"You should see output like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"> my-app@1.0.0 start C:\\my-app\n> node lib/start.js\n\nHello, world!\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can also add a ",(0,r.kt)("inlineCode",{parentName:"p"},'"build"')," script to our ",(0,r.kt)("strong",{parentName:"p"},"package.json")," file:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"my-app/package.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  . . .\n  "scripts": {\n    "build": "heft build --clean",\n    "start": "node lib/start.js"\n  },\n  . . .\n}\n')),(0,r.kt)("p",{parentName:"li"},"With this change, you can also build by invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run build")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"rushx build"),"). This toolchain-agnostic\nconvention makes it easier for newcomers to guess how to build your project. It will also be useful later when\nwe integrate with Rush.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To complete this project, we need to create one more config file to ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"heft clean")," properly deletes the output files:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"my-app/config/heft.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'/**\n * Defines configuration used by core Heft.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  "eventActions": [\n    {\n      /**\n       * The kind of built-in operation that should be performed.\n       * The "deleteGlobs" action deletes files or folders that match the\n       * specified glob patterns.\n       */\n      "actionKind": "deleteGlobs",\n\n      /**\n       * The stage of the Heft run during which this action should occur. Note that actions specified in heft.json\n       * occur at the end of the stage of the Heft run.\n       */\n      "heftEvent": "clean",\n\n      /**\n       * A user-defined tag whose purpose is to allow configs to replace/delete handlers that were added by other\n       * configs.\n       */\n      "actionId": "defaultClean",\n\n      /**\n       * Glob patterns to be deleted. The paths are resolved relative to the project folder.\n       */\n      "globsToDelete": ["dist", "lib", "temp"]\n    }\n  ],\n\n  /**\n   * The list of Heft plugins to be loaded.\n   */\n  "heftPlugins": [\n    // {\n    //  /**\n    //   * The path to the plugin package.\n    //   */\n    //  "plugin": "path/to/my-plugin",\n    //\n    //  /**\n    //   * An optional object that provides additional settings that may be defined by the plugin.\n    //   */\n    //  // "options": { }\n    // }\n  ]\n}\n')))))}u.isMDXComponent=!0}}]);