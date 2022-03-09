"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[46668],{45242:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(63929);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=s,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(95464),s=n(20134),o=(n(63929),n(45242)),i=["components"],a={title:"typescript.json"},l=void 0,c={unversionedId:"pages/heft_configs/typescript_json",id:"pages/heft_configs/typescript_json",title:"typescript.json",description:"|                                          |                                                                                                                                                                                                                                                                                                                                                                                   |",source:"@site/docs/pages/heft_configs/typescript_json.md",sourceDirName:"pages/heft_configs",slug:"/pages/heft_configs/typescript_json",permalink:"/zh-cn/pages/heft_configs/typescript_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_configs/typescript_json.md",tags:[],version:"current",frontMatter:{title:"typescript.json"},sidebar:"docsSidebar",previous:{title:"sass.json",permalink:"/zh-cn/pages/heft_configs/sass_json"},next:{title:"Other config files",permalink:"/zh-cn/pages/heft_configs/other_files"}},p={},u=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/typescript.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/pages/heft/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/TypeScriptPlugin/TypeScriptPlugin.ts"},"TypeScriptPlugin"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyStaticAssetsPlugin.ts"},"CopyStaticAssetsPlugin"),", ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/heft-plugins/heft-jest-plugin/src/JestPlugin.ts"},"JestPlugin"))))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the TypeScript plugin for Heft.  This plugin also manages linting.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/typescript.schema.json",\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/typescript.json",\n\n  /**\n   * Can be set to "copy" or "hardlink". If set to "copy", copy files from cache.\n   * If set to "hardlink", files will be hardlinked to the cache location.\n   * This option is useful when producing a tarball of build output as TAR files don\'t\n   * handle these hardlinks correctly. "hardlink" is the default behavior.\n   */\n  // "copyFromCacheMode": "copy",\n\n  /**\n   * If provided, emit these module kinds in addition to the modules specified in the tsconfig.\n   * Note that this option only applies to the main tsconfig.json configuration.\n   */\n  "additionalModuleKindsToEmit": [\n    // {\n    //   /**\n    //    * (Required) Must be one of "commonjs", "amd", "umd", "system", "es2015", "esnext"\n    //    */\n    //  "moduleKind": "amd",\n    //\n    //   /**\n    //    * (Required) The name of the folder where the output will be written.\n    //    */\n    //    "outFolderName": "lib-amd"\n    // }\n  ],\n\n  /**\n   * Specifies the intermediary folder that tests will use.  Because Jest uses the\n   * Node.js runtime to execute tests, the module format must be CommonJS.\n   *\n   * The default value is "lib".\n   */\n  // "emitFolderNameForTests": "lib-commonjs",\n\n  /**\n   * If set to "true", the TSlint task will not be invoked.\n   */\n  // "disableTslint": true,\n\n  /**\n   * Set this to change the maximum number of file handles that will be opened concurrently for writing.\n   * The default is 50.\n   */\n  // "maxWriteParallelism": 50,\n\n  /**\n   * Configures additional file types that should be copied into the TypeScript compiler\'s emit folders, for example\n   * so that these files can be resolved by import statements.\n   */\n  "staticAssetsToCopy": {\n    /**\n     * File extensions that should be copied from the src folder to the destination folder(s).\n     */\n    // "fileExtensions": [\n    //   ".json", ".css"\n    // ],\n    /**\n     * Glob patterns that should be explicitly included.\n     */\n    // "includeGlobs": [\n    //   "some/path/*.js"\n    // ],\n    /**\n     * Glob patterns that should be explicitly excluded. This takes precedence over globs listed\n     * in "includeGlobs" and files that match the file extensions provided in "fileExtensions".\n     */\n    // "excludeGlobs": [\n    //   "some/path/*.css"\n    // ]\n  }\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/pages/heft_tasks/typescript"},"typescript")," task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/pages/heft_tasks/copy-static-assets"},"copy-static-assets")," task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/pages/heft_tasks/jest"},"jest")," task")))}d.isMDXComponent=!0}}]);