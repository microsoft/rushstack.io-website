"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[15515],{45242:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(63929);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,g=f["".concat(p,".").concat(m)]||f[m]||c[m]||a;return t?n.createElement(g,o(o({ref:r},s),{},{components:t})):n.createElement(g,o({ref:r},s))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75591:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=t(95464),i=t(20134),a=(t(63929),t(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions",id:"pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions",title:"rush-lib.rushconfiguration.getimplicitlypreferredversions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; getImplicitlyPreferredVersions",source:"@site/docs/pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions",permalink:"/pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},c=[{value:"RushConfiguration.getImplicitlyPreferredVersions() method",id:"rushconfigurationgetimplicitlypreferredversions-method",level:2},{value:"Parameters",id:"parameters",level:2}],f={toc:c};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.getimplicitlypreferredversions"},"getImplicitlyPreferredVersions")),(0,a.kt)("h2",{id:"rushconfigurationgetimplicitlypreferredversions-method"},"RushConfiguration.getImplicitlyPreferredVersions() method"),(0,a.kt)("p",null,"Returns a map of all direct dependencies that only have a single semantic version specifier."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getImplicitlyPreferredVersions(variant?: string | undefined): Map<string, string>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variant"),(0,a.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the current variant in use by the active command.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Map","<","string, string",">"),(0,a.kt)("p",null,"A map of dependency name -- ",">"," version specifier for implicitly preferred versions."))}m.isMDXComponent=!0}}]);