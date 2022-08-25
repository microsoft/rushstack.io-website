"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2375],{158:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(216),a=(r(6393),r(158));const o={title:"api-extractor-task.json"},s=void 0,i={unversionedId:"pages/heft_configs/api-extractor-task_json",id:"pages/heft_configs/api-extractor-task_json",title:"api-extractor-task.json",description:"|                                          |                                                                                                                                         |",source:"@site/docs/pages/heft_configs/api-extractor-task_json.md",sourceDirName:"pages/heft_configs",slug:"/pages/heft_configs/api-extractor-task_json",permalink:"/pages/heft_configs/api-extractor-task_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_configs/api-extractor-task_json.md",tags:[],version:"current",frontMatter:{title:"api-extractor-task.json"},sidebar:"docsSidebar",previous:{title:'"webpack" task',permalink:"/pages/heft_tasks/webpack"},next:{title:"heft.json",permalink:"/pages/heft_configs/heft_json"}},c={},p=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],l={toc:p};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"File path:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"<","project folder",">","/config/api-extractor-task.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/heft/rig_packages"},(0,a.kt)("strong",{parentName:"a"},"Riggable?"))),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/main/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts"},"ApiExtractorPlugin"))))),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the API Extractor task for the Heft build system.\n *\n * This optional additional file customizes how the Heft task is invoked. The main analysis is\n * controlled by API Extractor\'s own "api-extractor.json" config file.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/api-extractor-task.schema.json"\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/api-extractor-task.json",\n\n  /**\n   * If set to true, use the project\'s TypeScript compiler version for API Extractor\'s\n   * analysis. API Extractor\'s included TypeScript compiler can generally correctly\n   * analyze typings generated by older compilers, and referencing the project\'s compiler\n   * can cause issues. If issues are encountered with API Extractor\'s included compiler,\n   * set this option to true.\n   *\n   * This corresponds to API Extractor\'s "--typescript-compiler-folder" CLI option and\n   * "IExtractorInvokeOptions.typescriptCompilerFolder" API option. This option defaults to false.\n   */\n  // "useProjectTypescriptVersion": true\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages/heft_tasks/api-extractor"},"api-extractor")," task"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor")," website")))}f.isMDXComponent=!0}}]);