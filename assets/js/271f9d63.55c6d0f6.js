"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[3381],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,u=g["".concat(l,".").concat(m)]||g[m]||f[m]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(9122),a=(r(6393),r(158));const o={title:"rig.json"},i=void 0,s={unversionedId:"pages/heft_configs/rig_json",id:"pages/heft_configs/rig_json",title:"rig.json",description:"|                                          |                                            |",source:"@site/docs/pages/heft_configs/rig_json.md",sourceDirName:"pages/heft_configs",slug:"/pages/heft_configs/rig_json",permalink:"/pages/heft_configs/rig_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_configs/rig_json.md",tags:[],version:"current",frontMatter:{title:"rig.json"},sidebar:"docsSidebar",previous:{title:"node-service.json",permalink:"/pages/heft_configs/node-service_json"},next:{title:"sass.json",permalink:"/pages/heft_configs/sass_json"}},l={},p=[{value:"Template",id:"template",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p},g="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"File path:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"<","project folder",">","/config/rig.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/heft/rig_packages"},(0,a.kt)("strong",{parentName:"a"},"Riggable?"))),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// The "rig.json" file directs tools to look for their config files in an external package.\n// Documentation for this system: https://www.npmjs.com/package/@rushstack/rig-package\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",\n\n  /**\n   * (Required) The name of the rig package to inherit from.\n   * It should be an NPM package name with the "-rig" suffix.\n   */\n  "rigPackageName": "example-rig",\n  /**\n   * (Optional) Selects a config profile from the rig package.  The name must consist of\n   * lowercase alphanumeric words separated by hyphens, for example "sample-profile".\n   * If omitted, then the "default" profile will be used."\n   */\n  "rigProfile": "web-library"\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages/heft/rig_packages"},"Using rig packages")," with Heft"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," documentation")))}f.isMDXComponent=!0}}]);