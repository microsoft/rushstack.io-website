"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[63861],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=n,g=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return t?a.createElement(g,l(l({ref:r},u),{},{components:t})):a.createElement(g,l({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79920:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(61731),n=t(70396),o=(t(46393),t(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api/node-core-library.packagejsonlookup.trygetpackagefolderfor",id:"pages/api/node-core-library.packagejsonlookup.trygetpackagefolderfor",title:"node-core-library.packagejsonlookup.trygetpackagefolderfor",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; tryGetPackageFolderFor",source:"@site/docs/pages/api/node-core-library.packagejsonlookup.trygetpackagefolderfor.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.packagejsonlookup.trygetpackagefolderfor",permalink:"/pages/api/node-core-library.packagejsonlookup.trygetpackagefolderfor",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"PackageJsonLookup.tryGetPackageFolderFor() method",id:"packagejsonlookuptrygetpackagefolderfor-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function d(e){var r=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagejsonlookup.trygetpackagefolderfor"},"tryGetPackageFolderFor")),(0,o.kt)("h2",{id:"packagejsonlookuptrygetpackagefolderfor-method"},"PackageJsonLookup.tryGetPackageFolderFor() method"),(0,o.kt)("p",null,"Returns the absolute path of a folder containing a package.json file, by looking upwards from the specified fileOrFolderPath. If no package.json can be found, undefined is returned."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"tryGetPackageFolderFor(fileOrFolderPath: string): string | undefined;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fileOrFolderPath"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"a relative or absolute path to a source file or folder that may be part of a package")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string ","|"," undefined"),(0,o.kt)("p",null,"an absolute path to a folder containing a package.json file"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The fileOrFolderPath is not required to actually exist on disk. The fileOrFolderPath itself can be the return value, if it is a folder containing a package.json file. Both positive and negative lookup results are cached."))}d.isMDXComponent=!0}}]);