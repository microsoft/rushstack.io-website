"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[84245],{45242:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return s}});var n=t(63929);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),s=i,d=m["".concat(u,".").concat(s)]||m[s]||f[s]||a;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function s(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62639:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return f}});var n=t(95464),i=t(20134),a=(t(63929),t(45242)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,l={unversionedId:"pages/api/module-minifier-plugin.module_wrapper_prefix",id:"pages/api/module-minifier-plugin.module_wrapper_prefix",title:"module-minifier-plugin.module_wrapper_prefix",description:"Home &gt; @rushstack/module-minifier-plugin &gt; MODULE\\WRAPPER\\PREFIX",source:"@site/docs/pages/api/module-minifier-plugin.module_wrapper_prefix.md",sourceDirName:"pages/api",slug:"/pages/api/module-minifier-plugin.module_wrapper_prefix",permalink:"/pages/api/module-minifier-plugin.module_wrapper_prefix",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},f=[{value:"MODULE_WRAPPER_PREFIX variable",id:"module_wrapper_prefix-variable",level:2}],m={toc:f};function s(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.module_wrapper_prefix"},"MODULE","_","WRAPPER","_","PREFIX")),(0,a.kt)("h2",{id:"module_wrapper_prefix-variable"},"MODULE","_","WRAPPER","_","PREFIX variable"),(0,a.kt)("p",null,"Prefix to wrap ",(0,a.kt)("inlineCode",{parentName:"p"},"function (module, __webpack_exports__, __webpack_require__) { ... }")," so that the minifier doesn't delete it. Public because alternate Minifier implementations may wish to know about it."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"MODULE_WRAPPER_PREFIX: '__MINIFY_MODULE__('\n")))}s.isMDXComponent=!0}}]);