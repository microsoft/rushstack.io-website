"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[31033],{45242:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(63929);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68167:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(95464),o=r(20134),a=(r(63929),r(45242)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"pages/api/api-extractor-model.propertiesof",id:"pages/api/api-extractor-model.propertiesof",title:"api-extractor-model.propertiesof",description:"Home &gt; @microsoft/api-extractor-model &gt; PropertiesOf",source:"@site/docs/pages/api/api-extractor-model.propertiesof.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.propertiesof",permalink:"/pages/api/api-extractor-model.propertiesof",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},s=[{value:"PropertiesOf type",id:"propertiesof-type",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.propertiesof"},"PropertiesOf")),(0,a.kt)("h2",{id:"propertiesof-type"},"PropertiesOf type"),(0,a.kt)("p",null,'This abstraction is used by the mixin pattern. It describes the "static side" of a class.'),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type PropertiesOf<T> = {\n    [K in keyof T]: T[K];\n};\n")))}m.isMDXComponent=!0}}]);