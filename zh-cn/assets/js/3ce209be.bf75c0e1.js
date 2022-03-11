"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[4859],{5242:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var s=n(3929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=s.createContext({}),l=function(e){var t=s.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||r;return n?s.createElement(d,i(i({ref:t},c),{},{components:n})):s.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var s=n(5464),a=n(134),r=(n(3929),n(5242)),i=["components"],o={title:'"sass-typings" task'},p=void 0,l={unversionedId:"pages/heft_tasks/sass-typings",id:"pages/heft_tasks/sass-typings",title:'"sass-typings" task',description:"This task generates TypeScript typings for CSS styles. It supports three different stylesheet formats:",source:"@site/docs/pages/heft_tasks/sass-typings.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/sass-typings",permalink:"/zh-cn/pages/heft_tasks/sass-typings",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_tasks/sass-typings.md",tags:[],version:"current",frontMatter:{title:'"sass-typings" task'},sidebar:"docsSidebar",previous:{title:'"node-service" task (experimental)',permalink:"/zh-cn/pages/heft_tasks/node-service"},next:{title:'"tslint" task',permalink:"/zh-cn/pages/heft_tasks/tslint"}},c={},u=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"package.json dependencies",id:"packagejson-dependencies",level:2},{value:"Config files",id:"config-files",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This task generates TypeScript typings for CSS styles. It supports three different stylesheet formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".css")," for plain ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/CSS"},"Cascading Style Sheets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".scss")," which extends the CSS file format with preprocessor macros, as defined by the ",(0,r.kt)("a",{parentName:"li",href:"https://sass-lang.com/"},"Syntactically Awesome Style Sheet (SASS)")," project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".sass")," the older ",(0,r.kt)("a",{parentName:"li",href:"https://sass-lang.com/documentation/syntax"},"indented syntax")," which is still supported because some people prefer it")),(0,r.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,r.kt)("p",null,"We recommend using SASS for any TypeScript web application that uses CSS styles. The ",(0,r.kt)("inlineCode",{parentName:"p"},".scss")," file format is a good choice because its syntax is a proper superset of plain CSS."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Suppose your CSS styles are defined in a file like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src/my-styles.scss")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$marginValue: 20px;\n\n.label {\n  margin-bottom: $marginValue;\n}\n")),(0,r.kt)("p",null,"Before Heft invokes the TypeScript compiler, the ",(0,r.kt)("inlineCode",{parentName:"p"},"sass-typings")," task can generate a temporary file containing type declarations:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"temp/sass-ts/styles.scss.d.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// This file was generated by a tool. Modifying it will produce unexpected behavior\nexport interface IExportStyles {\n  label: string;\n}\ndeclare const strings: IExportStyles;\nexport default strings;\n")),(0,r.kt)("p",null,"This enables the ",(0,r.kt)("inlineCode",{parentName:"p"},"styles.label")," style to be imported like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src/ExampleApp.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport styles from './my-styles.scss';\n\nexport class ExampleApp extends React.Component {\n  public render(): React.ReactNode {\n    return <p className={styles.label}>Example text</p>;\n  }\n}\n")),(0,r.kt)("p",null,"The typical approach used by toolchains such as ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," will produce an untyped ",(0,r.kt)("inlineCode",{parentName:"p"},"styles")," object.\nThis can be error-prone. Heft's generated ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file provides full IntelliSense for style names, and enables\nthe compiler to catch common mistakes such as misspelled identifiers."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file is generated using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/typings-generator"},"@rushstack/typings-generator"),".\nYou can reuse this library to implement custom Heft plugins that generate typings for other resources besides CSS.")),(0,r.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,r.kt)("p",null,"None - this feature is implemented internally by Heft."),(0,r.kt)("h2",{id:"config-files"},"Config files"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/tree/master/build-tests/heft-sass-test"},"build-tests/heft-sass-test"),"\nproject provides examples of ",(0,r.kt)("inlineCode",{parentName:"p"},".css"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".scss"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},".sass")," imports.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sass-typings")," plugin is enabled by default and will automatically generate typings for any files under\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder with supported file extension (",(0,r.kt)("inlineCode",{parentName:"p"},".css"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".scss"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},".sass"),"). Its behavior can be customized using\nthe ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft_configs/sass_json"},"sass.json")," config file, but in most cases the default behavior\nis sufficient."),(0,r.kt)("p",null,"Reference the generated typings by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"temp/sass-ts")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"rootDirs")," setting in your compiler configuration:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tsconfig.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "http://json.schemastore.org/tsconfig",\n\n  "compilerOptions": {\n    "rootDirs": ["src/", "temp/sass-ts/"],\n\n')),(0,r.kt)("p",null,"Make sure that the ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft_tasks/copy-static-assets"},"copy-static-assets")," task is configured\nto copy CSS file extensions."))}f.isMDXComponent=!0}}]);