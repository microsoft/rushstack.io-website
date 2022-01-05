"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2305],{50158:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(46393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(a),m=n,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},74655:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=a(61731),n=a(70396),o=(a(46393),a(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,u={unversionedId:"pages/api/rush-lib.rushconfiguration.allowmostlystandardpackagenames",id:"pages/api/rush-lib.rushconfiguration.allowmostlystandardpackagenames",title:"rush-lib.rushconfiguration.allowmostlystandardpackagenames",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; allowMostlyStandardPackageNames",source:"@site/docs/pages/api/rush-lib.rushconfiguration.allowmostlystandardpackagenames.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.allowmostlystandardpackagenames",permalink:"/pages/api/rush-lib.rushconfiguration.allowmostlystandardpackagenames",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"RushConfiguration.allowMostlyStandardPackageNames property",id:"rushconfigurationallowmostlystandardpackagenames-property",children:[],level:2}],p={toc:c};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.allowmostlystandardpackagenames"},"allowMostlyStandardPackageNames")),(0,o.kt)("h2",{id:"rushconfigurationallowmostlystandardpackagenames-property"},"RushConfiguration.allowMostlyStandardPackageNames property"),(0,o.kt)("p",null,'Today the npmjs.com registry enforces fairly strict naming rules for packages, but in the early days there was no standard and hardly any enforcement. A few large legacy projects are still using nonstandard package names, and private registries sometimes allow it. Set "allowMostlyStandardPackageNames" to true to relax Rush\'s enforcement of package names. This allows upper case letters and in the future may relax other rules, however we want to minimize these exceptions. Many popular tools use certain punctuation characters as delimiters, based on the assumption that they will never appear in a package name; thus if we relax the rules too much it is likely to cause very confusing malfunctions.'),(0,o.kt)("p",null,"The default value is false."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get allowMostlyStandardPackageNames(): boolean;\n")))}f.isMDXComponent=!0}}]);