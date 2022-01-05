"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[6346],{50158:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47289:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(61731),a=r(70396),o=(r(46393),r(50158)),i=["components"],c={title:'"api-extractor" task'},s=void 0,p={unversionedId:"pages/heft_tasks/api-extractor",id:"pages/heft_tasks/api-extractor",title:'"api-extractor" task',description:"This task invokes the API Extractor tool which reads TypeScript declarations (.d.ts files)",source:"@site/docs/pages/heft_tasks/api-extractor.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/api-extractor",permalink:"/pages/heft_tasks/api-extractor",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/heft_tasks/api-extractor.md",tags:[],version:"current",frontMatter:{title:'"api-extractor" task'},sidebar:"docsSidebar",previous:{title:"Interfacing with Rush",permalink:"/pages/heft_tutorials/heft_and_rush"},next:{title:'"copy-files" task',permalink:"/pages/heft_tasks/copy-files"}},l=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2}],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This task invokes the ",(0,o.kt)("a",{parentName:"p",href:"https://api-extractor.com/"},"API Extractor")," tool which reads TypeScript declarations (.d.ts files)\nas inputs and produces three types of outputs:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. API Report")," - API Extractor can trace all exports from your project's main entry point and generate\na report to be used as the basis for an API review workflow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. .d.ts Rollups")," - Similar to how ",(0,o.kt)("strong",{parentName:"p"},"Webpack"),' can "roll up" all your JavaScript files into a single .js file\nfor distribution, API Extractor can roll up your TypeScript declarations into a single .d.ts file.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. API Documentation"),' - API Extractor can generate a "doc model" JSON file for each of your projects.  This\nJSON file contains the extracted type signatures and doc comments.  The ',(0,o.kt)("strong",{parentName:"p"},"api-documenter")," companion tool\ncan use these files to generate an API reference website, or you can use them as inputs for a custom documentation\npipeline."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://api-extractor.com/pages/overview/intro/"},"API Extractor documentation")," for details about how it works."),(0,o.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,o.kt)("p",null,"We recommend to use API Extractor for every TypeScript library project, especially if it is published as an NPM package."),(0,o.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,o.kt)("p",null,"You will need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"@microsoft/api-extractor")," package to your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package @microsoft/api-extractor --dev\n")),(0,o.kt)("p",null,"Alternatively, you can avoid this dependency by loading it from a rig, as described in the ",(0,o.kt)("a",{parentName:"p",href:"../heft/rig_packages"},"Using rig packages")," article."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Heft looks for API Extractor's config file ",(0,o.kt)("a",{parentName:"p",href:"https://api-extractor.com/pages/commands/config_file/"},"config/api-extractor.json"),". This file can be created by invoking the ",(0,o.kt)("a",{parentName:"p",href:"https://api-extractor.com/pages/commands/api-extractor_init/"},"api-extractor init")," command.  This file is ",(0,o.kt)("a",{parentName:"p",href:"../heft/rig_packages"},"riggable"),"."),(0,o.kt)("p",null,"For advanced scenarios, the optional ",(0,o.kt)("a",{parentName:"p",href:"../heft_configs/api-extractor-task_json"},"api-extractor-task.json")," config file provides some additional Heft-specific settings."))}f.isMDXComponent=!0}}]);