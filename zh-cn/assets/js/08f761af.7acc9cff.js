"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[4594],{45242:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(95464),a=n(20134),l=(n(63929),n(45242)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"pages/api/node-core-library.enum",id:"pages/api/node-core-library.enum",title:"node-core-library.enum",description:"Home &gt; @rushstack/node-core-library &gt; Enum",source:"@site/docs/pages/api/node-core-library.enum.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.enum",permalink:"/zh-cn/pages/api/node-core-library.enum",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},c=[{value:"Enum class",id:"enum-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.enum"},"Enum")),(0,l.kt)("h2",{id:"enum-class"},"Enum class"),(0,l.kt)("p",null,"A helper for looking up TypeScript ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")," keys/values."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Enum \n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"TypeScript enums implement a lookup table for mapping between their keys and values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'enum Colors {\n  Red = 1\n}\n\n// Prints "Red"\nconsole.log(Colors[1]);\n\n// Prints "1"\nconsole.log(Colors["Red]);\n')),(0,l.kt)("p",null,'However the compiler\'s "noImplicitAny" validation has trouble with these mappings, because there are so many possible types for the map elements:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function f(s: string): Colors | undefined {\n  // (TS 7015) Element implicitly has an 'any' type because\n  // index expression is not of type 'number'.\n  return Colors[s];\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Enum")," helper provides a more specific, strongly typed way to access members:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"function f(s: string): Colors | undefined {\n  return Enum.tryGetValueByKey(Colors, s);\n}\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.enum.getkeybynumber"},"getKeyByNumber(enumObject, value)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"This API is similar to ",(0,l.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.enum.trygetkeybynumber"},"Enum.tryGetKeyByNumber()")," , except that it throws an exception if the key is undefined.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.enum.getvaluebykey"},"getValueByKey(enumObject, key)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"This API is similar to ",(0,l.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.enum.trygetvaluebykey"},"Enum.tryGetValueByKey()")," , except that it throws an exception if the key is undefined.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.enum.trygetkeybynumber"},"tryGetKeyByNumber(enumObject, value)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns an enum string key, given its numeric value. Returns ",(0,l.kt)("code",null,"undefined")," if no matching value is found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.enum.trygetvaluebykey"},"tryGetValueByKey(enumObject, key)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns an enum value, given its key. Returns ",(0,l.kt)("code",null,"undefined")," if no matching key is found.")))))}d.isMDXComponent=!0}}]);