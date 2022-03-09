"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[29875],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20975:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=r(95464),n=r(20134),o=(r(63929),r(45242)),l=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,s={unversionedId:"pages/api/node-core-library.import.resolvepackage",id:"pages/api/node-core-library.import.resolvepackage",title:"node-core-library.import.resolvepackage",description:"Home &gt; @rushstack/node-core-library &gt; Import &gt; resolvePackage",source:"@site/docs/pages/api/node-core-library.import.resolvepackage.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.import.resolvepackage",permalink:"/zh-cn/pages/api/node-core-library.import.resolvepackage",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},u=[{value:"Import.resolvePackage() method",id:"importresolvepackage-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.import"},"Import")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.import.resolvepackage"},"resolvePackage")),(0,o.kt)("h2",{id:"importresolvepackage-method"},"Import.resolvePackage() method"),(0,o.kt)("p",null,"Performs module resolution to determine the folder where a package is installed."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static resolvePackage(options: IImportResolvePackageOptions): string;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.iimportresolvepackageoptions"},"IImportResolvePackageOptions")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string"),(0,o.kt)("p",null,"the absolute path of the package folder. If ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.iimportresolveoptions.includesystemmodules"},"IImportResolveOptions.includeSystemModules")," is specified and a system module is found, then its name is returned without any file path."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Suppose ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," is an NPM package whose entry point is ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/index.js")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Returns \"/path/to/project/node_modules/example\"\nImport.resolvePackage({ packageName: 'example' });\n")),(0,o.kt)("p",null,"If you need to resolve a module path, use ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.import.resolvemodule"},"Import.resolveModule()")," instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Returns \"/path/to/project/node_modules/example/lib/index.js\"\nImport.resolveModule({ modulePath: 'example' });\n")))}d.isMDXComponent=!0}}]);