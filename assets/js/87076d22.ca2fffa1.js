"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[66310],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),g=i,m=f["".concat(p,".").concat(g)]||f[g]||l[g]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77682:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(61731),i=r(70396),a=(r(46393),r(50158)),o=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"pages/api/heft.registeraction",id:"pages/api/heft.registeraction",title:"heft.registeraction",description:"Home &gt; @rushstack/heft &gt; RegisterAction",source:"@site/docs/pages/api/heft.registeraction.md",sourceDirName:"pages/api",slug:"/pages/api/heft.registeraction",permalink:"/pages/api/heft.registeraction",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"RegisterAction type",id:"registeraction-type",children:[],level:2}],l={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft"},"@rushstack/heft")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft.registeraction"},"RegisterAction")),(0,a.kt)("h2",{id:"registeraction-type"},"RegisterAction type"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type RegisterAction = <TParameters>(action: ICustomActionOptions<TParameters>) => void;\n")),(0,a.kt)("b",null,"References:")," [ICustomActionOptions](/pages/api/heft.icustomactionoptions)")}f.isMDXComponent=!0}}]);