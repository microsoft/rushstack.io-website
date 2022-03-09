"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[84877],{45242:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(63929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},85375:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=t(95464),a=t(20134),o=(t(63929),t(45242)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"pages/api/node-core-library.environmentmap.mergefromobject",id:"pages/api/node-core-library.environmentmap.mergefromobject",title:"node-core-library.environmentmap.mergefromobject",description:"Home &gt; @rushstack/node-core-library &gt; EnvironmentMap &gt; mergeFromObject",source:"@site/docs/pages/api/node-core-library.environmentmap.mergefromobject.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.environmentmap.mergefromobject",permalink:"/zh-cn/pages/api/node-core-library.environmentmap.mergefromobject",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},u=[{value:"EnvironmentMap.mergeFromObject() method",id:"environmentmapmergefromobject-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.environmentmap"},"EnvironmentMap")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.environmentmap.mergefromobject"},"mergeFromObject")),(0,o.kt)("h2",{id:"environmentmapmergefromobject-method"},"EnvironmentMap.mergeFromObject() method"),(0,o.kt)("p",null,"Merges entries from a plain JavaScript object, such as would be used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," API."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"mergeFromObject(environmentObject?: Record<string, string | undefined>): void;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"environmentObject"),(0,o.kt)("td",{parentName:"tr",align:null},"Record","<","string, string ","|"," undefined",">"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"void"))}d.isMDXComponent=!0}}]);