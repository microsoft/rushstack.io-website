"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[10238],{50158:function(e,r,n){n.d(r,{Zo:function(){return f},kt:function(){return d}});var t=n(46393);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},f=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,s=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?t.createElement(s,l(l({ref:r},f),{},{components:n})):t.createElement(s,l({ref:r},f))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30572:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return f},default:function(){return m}});var t=n(61731),i=n(70396),o=(n(46393),n(50158)),l=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"pages/api/module-minifier-plugin.imoduleminifier.ref",id:"pages/api/module-minifier-plugin.imoduleminifier.ref",title:"module-minifier-plugin.imoduleminifier.ref",description:"Home &gt; @rushstack/module-minifier-plugin &gt; IModuleMinifier &gt; ref",source:"@site/docs/pages/api/module-minifier-plugin.imoduleminifier.ref.md",sourceDirName:"pages/api",slug:"/pages/api/module-minifier-plugin.imoduleminifier.ref",permalink:"/pages/api/module-minifier-plugin.imoduleminifier.ref",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f=[{value:"IModuleMinifier.ref() method",id:"imoduleminifierref-method",children:[],level:2}],c={toc:f};function m(e){var r=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.imoduleminifier"},"IModuleMinifier")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.imoduleminifier.ref"},"ref")),(0,o.kt)("h2",{id:"imoduleminifierref-method"},"IModuleMinifier.ref() method"),(0,o.kt)("p",null,"Prevents the minifier from shutting down until the returned callback is invoked. The callback may be used to surface errors encountered by the minifier that may not be relevant to a specific file. It should be called to allow the minifier to cleanup"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"ref?(): () => Promise<void>;\n")),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"() =",">"," Promise","<","void",">"))}m.isMDXComponent=!0}}]);