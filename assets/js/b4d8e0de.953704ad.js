"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[5047],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(9122),a=(n(6393),n(158));const s={title:'"webpack" task'},i=void 0,r={unversionedId:"pages/heft_tasks/webpack",id:"pages/heft_tasks/webpack",title:'"webpack" task',description:"This task invokes the Webpack tool to produce application bundles. It provides features such as:",source:"@site/docs/pages/heft_tasks/webpack.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/webpack",permalink:"/pages/heft_tasks/webpack",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_tasks/webpack.md",tags:[],version:"current",frontMatter:{title:'"webpack" task'},sidebar:"docsSidebar",previous:{title:'"typescript" task',permalink:"/pages/heft_tasks/typescript"},next:{title:"Environment variables",permalink:"/pages/heft_configs/environment_vars"}},l={},p=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"package.json dependencies",id:"packagejson-dependencies",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Interaction with Jest",id:"interaction-with-jest",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This task invokes the ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," tool to produce application bundles. It provides features such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Combining many small .js files into one large file for faster downloads"),(0,a.kt)("li",{parentName:"ul"},'Improving performance by applying various compiler optimizations such as inlining and dead code elimination ("tree shaking")'),(0,a.kt)("li",{parentName:"ul"},"Compressing and obfuscating code by shortening identifiers, using the ",(0,a.kt)("a",{parentName:"li",href:"https://terser.org/"},"Terser")," minifier by default"),(0,a.kt)("li",{parentName:"ul"},"Converting assets such as .css or even images into embedded JavaScript objects")),(0,a.kt)("p",null,"Webpack also has the ability to act as a general purpose build system, for example by invoking a compiler or linter, however Heft does not use it that way. Heft invokes the TypeScript compiler to produce intermediate .js files which become the inputs for other tasks such as Jest or Webpack. This reduces the number of compiler passes, and avoids the need for compiler optimizations to be reimplemented multiple times for different contexts (",(0,a.kt)("inlineCode",{parentName:"p"},"ts-loader"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest"),", etc)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-webpack-basic-tutorial"},"heft-webpack-basic-tutorial")," sample project illustrates a complete project using Webpack and React.")),(0,a.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,a.kt)("p",null,"Webpack should be used for projects whose output is a web application bundle. Webpack could also be used to bundle Node.js tools or services, however this is less common."),(0,a.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,a.kt)("p",null,"Heft has direct dependencies on the Webpack packages that it needs, so you don't normally need to add Webpack to your project's ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file. Instead, you will need to install the Heft plugin package for the version of Webpack that you want to use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# (CHOOSE ONE)\n\n# If you want to use Webpack 5\nrush add --package @rushstack/heft-webpack5-plugin --dev\n\n# If you want to use Webpack 4\nrush add --package @rushstack/heft-webpack4-plugin --dev\n")),(0,a.kt)("p",null,"You should also add ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/webpack-env")," to your project, which provides TypeScript typings for the Webpack environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rush add --package @types/webpack-env --exact  --dev\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/webpack-env")," defines global APIs (that aren't accessed using regular ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements), it must\nbe be added to your TypeScript configuration like this:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"<","project folder",">","/tsconfig.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "extends": "./node_modules/@rushstack/heft-web-rig/profiles/library/tsconfig-base.json",\n  "compilerOptions": {\n    "types": [\n      "webpack-env" // <---- ADD THIS\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"The Heft plugin that you installed above needs to be loaded using the ",(0,a.kt)("a",{parentName:"p",href:"/pages/heft_configs/heft_json"},"heft.json config file"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  . . .\n\n  "heftPlugins": [\n    { "plugin": "@rushstack/heft-webpack5-plugin" }  // <---- ADD THIS\n  ]\n}\n')),(0,a.kt)("p",null,"Next, create a ",(0,a.kt)("strong",{parentName:"p"},"webpack.config.js")," file in your project folder. Here is a rudimentary example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"<","project folder",">","/webpack.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict';\n\nconst path = require('path');\n\nconst webpackConfig = {\n  mode: 'development',\n  resolve: {\n    // Note: Do not specify '.ts' or '.tsx' here.  Heft invokes Webpack as a post-process after the compiler.\n    extensions: ['.js', '.jsx', '.json']\n  },\n  entry: {\n    app: path.join(__dirname, 'lib', 'index.js')\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: '[name]_[contenthash].js'\n  }\n};\n\nmodule.exports = webpackConfig;\n")),(0,a.kt)("p",null,"If you want to use a slightly different configuration when developing using the localhost dev server, you can optionally create a second file called ",(0,a.kt)("strong",{parentName:"p"},"webpack.dev.config.js"),"."),(0,a.kt)("p",null,"To start the localhost dev server, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"heft start")," command."),(0,a.kt)("h3",{id:"interaction-with-jest"},"Interaction with Jest"),(0,a.kt)("p",null,"Webpack works best with the ",(0,a.kt)("inlineCode",{parentName:"p"},"esnext")," module format, whereas Jest must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"commonjs")," module format because its tests are executed by the Node.js runtime. Thus, in order to use Webpack and Jest together, you will need to emit both module formats. An easy way to accomplish this is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalModuleKindsToEmit")," to configure a secondary output folder, and then use ",(0,a.kt)("inlineCode",{parentName:"p"},"emitFolderNameForTests")," to tell Jest to use the CommonJS output. For example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"config/typescript.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the TypeScript plugin for Heft.  This plugin also manages linting.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/typescript.schema.json",\n\n  /**\n   * Can be set to "copy" or "hardlink". If set to "copy", copy files from cache.\n   * If set to "hardlink", files will be hardlinked to the cache location.\n   * This option is useful when producing a tarball of build output as TAR files don\'t\n   * handle these hardlinks correctly. "hardlink" is the default behavior.\n   */\n  // "copyFromCacheMode": "copy",\n\n  /**\n   * If provided, emit these module kinds in addition to the modules specified in the tsconfig.\n   * Note that this option only applies to the main tsconfig.json configuration.\n   */\n  "additionalModuleKindsToEmit": [\n    // {\n    //   /**\n    //    * (Required) Must be one of "commonjs", "amd", "umd", "system", "es2015", "esnext"\n    //    */\n    //  "moduleKind": "amd",\n    //\n    //   /**\n    //    * (Required) The name of the folder where the output will be written.\n    //    */\n    //    "outFolderName": "lib-amd"\n    // }\n    {\n      "moduleKind": "commonjs",\n      "outFolderName": "lib-commonjs"\n    }\n  ],\n\n  /**\n   * Specifies the intermediary folder that tests will use.  Because Jest uses the\n   * Node.js runtime to execute tests, the module format must be CommonJS.\n   *\n   * The default value is "lib".\n   */\n  "emitFolderNameForTests": "lib-commonjs",\n\n  /**\n   * If set to "true", the TSlint task will not be invoked.\n   */\n  // "disableTslint": true,\n\n  /**\n   * Set this to change the maximum number of file handles that will be opened concurrently for writing.\n   * The default is 50.\n   */\n  // "maxWriteParallelism": 50,\n\n  /**\n   * Describes the way files should be statically coped from src to TS output folders\n   */\n  "staticAssetsToCopy": {\n    /**\n     * File extensions that should be copied from the src folder to the destination folder(s).\n     */\n    "fileExtensions": [".css", ".png"]\n\n    /**\n     * Glob patterns that should be explicitly included.\n     */\n    // "includeGlobs": [\n    //   "some/path/*.js"\n    // ],\n\n    /**\n     * Glob patterns that should be explicitly excluded. This takes precedence over globs listed\n     * in "includeGlobs" and files that match the file extensions provided in "fileExtensions".\n     */\n    // "excludeGlobs": [\n    //   "some/path/*.css"\n    // ]\n  }\n}\n')),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/pages/heft_configs/typescript_json"},"typescript.json")," config file documentation for details."))}d.isMDXComponent=!0}}]);