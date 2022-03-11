"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2375],{5242:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return m}});var n=r(3929);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,s(s({ref:e},l),{},{components:r})):n.createElement(d,s({ref:e},l))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1700:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(5464),a=r(134),o=(r(3929),r(5242)),s=["components"],i={title:"api-extractor-task.json"},c=void 0,p={unversionedId:"pages/heft_configs/api-extractor-task_json",id:"pages/heft_configs/api-extractor-task_json",title:"api-extractor-task.json",description:"|                                          |                                                                                                                                         |",source:"@site/docs/pages/heft_configs/api-extractor-task_json.md",sourceDirName:"pages/heft_configs",slug:"/pages/heft_configs/api-extractor-task_json",permalink:"/zh-cn/pages/heft_configs/api-extractor-task_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_configs/api-extractor-task_json.md",tags:[],version:"current",frontMatter:{title:"api-extractor-task.json"},sidebar:"docsSidebar",previous:{title:'"webpack" task',permalink:"/zh-cn/pages/heft_tasks/webpack"},next:{title:"heft.json",permalink:"/zh-cn/pages/heft_configs/heft_json"}},l={},u=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],f={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/api-extractor-task.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/pages/heft/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts"},"ApiExtractorPlugin"))))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the API Extractor task for the Heft build system.\n *\n * This optional additional file customizes how the Heft task is invoked. The main analysis is\n * controlled by API Extractor\'s own "api-extractor.json" config file.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/api-extractor-task.schema.json"\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/api-extractor-task.json",\n\n  /**\n   * If set to true, use the project\'s TypeScript compiler version for API Extractor\'s\n   * analysis. API Extractor\'s included TypeScript compiler can generally correctly\n   * analyze typings generated by older compilers, and referencing the project\'s compiler\n   * can cause issues. If issues are encountered with API Extractor\'s included compiler,\n   * set this option to true.\n   *\n   * This corresponds to API Extractor\'s "--typescript-compiler-folder" CLI option and\n   * "IExtractorInvokeOptions.typescriptCompilerFolder" API option. This option defaults to false.\n   */\n  // "useProjectTypescriptVersion": true\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/pages/heft_tasks/api-extractor"},"api-extractor")," task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor")," website")))}m.isMDXComponent=!0}}]);