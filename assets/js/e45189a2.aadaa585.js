"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[62099],{45242:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(63929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(d,p(p({ref:r},s),{},{components:t})):n.createElement(d,p({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2339:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=t(95464),a=t(20134),o=(t(63929),t(45242)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/node-core-library.iprotectablemapparameters.onset",id:"pages/api/node-core-library.iprotectablemapparameters.onset",title:"node-core-library.iprotectablemapparameters.onset",description:"Home &gt; @rushstack/node-core-library &gt; IProtectableMapParameters &gt; onSet",source:"@site/docs/pages/api/node-core-library.iprotectablemapparameters.onset.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.iprotectablemapparameters.onset",permalink:"/pages/api/node-core-library.iprotectablemapparameters.onset",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},u=[{value:"IProtectableMapParameters.onSet property",id:"iprotectablemapparametersonset-property",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iprotectablemapparameters"},"IProtectableMapParameters")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iprotectablemapparameters.onset"},"onSet")),(0,o.kt)("h2",{id:"iprotectablemapparametersonset-property"},"IProtectableMapParameters.onSet property"),(0,o.kt)("p",null,"An optional hook that will be invoked before Map.set() is performed."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"onSet?: (source: ProtectableMap<K, V>, key: K, value: V) => V;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If this hook is provided, the function MUST return the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," parameter. This provides the opportunity to modify the value before it is added to the map."))}f.isMDXComponent=!0}}]);