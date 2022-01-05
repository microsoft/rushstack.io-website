"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[95809],{50158:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return g}});var t=r(46393);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(r),g=o,h=f["".concat(a,".").concat(g)]||f[g]||l[g]||i;return r?t.createElement(h,s(s({ref:n},p),{},{components:r})):t.createElement(h,s({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11679:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var t=r(61731),o=r(70396),i=(r(46393),r(50158)),s=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},a=void 0,c={unversionedId:"pages/api/rush-lib.rushconfiguration.ensureconsistentversions",id:"pages/api/rush-lib.rushconfiguration.ensureconsistentversions",title:"rush-lib.rushconfiguration.ensureconsistentversions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; ensureConsistentVersions",source:"@site/docs/pages/api/rush-lib.rushconfiguration.ensureconsistentversions.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.ensureconsistentversions",permalink:"/pages/api/rush-lib.rushconfiguration.ensureconsistentversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RushConfiguration.ensureConsistentVersions property",id:"rushconfigurationensureconsistentversions-property",children:[],level:2}],l={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.ensureconsistentversions"},"ensureConsistentVersions")),(0,i.kt)("h2",{id:"rushconfigurationensureconsistentversions-property"},"RushConfiguration.ensureConsistentVersions property"),(0,i.kt)("p",null,'If true, then consistent version specifiers for dependencies will be enforced. I.e. "rush check" is run before some commands.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get ensureConsistentVersions(): boolean;\n")))}f.isMDXComponent=!0}}]);