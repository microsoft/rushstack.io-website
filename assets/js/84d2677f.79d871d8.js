"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[70842],{50158:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31811:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=t(61731),o=t(70396),a=(t(46393),t(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api/node-core-library.iimportresolveoptions.allowselfreference",id:"pages/api/node-core-library.iimportresolveoptions.allowselfreference",title:"node-core-library.iimportresolveoptions.allowselfreference",description:"Home &gt; @rushstack/node-core-library &gt; IImportResolveOptions &gt; allowSelfReference",source:"@site/docs/pages/api/node-core-library.iimportresolveoptions.allowselfreference.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.iimportresolveoptions.allowselfreference",permalink:"/pages/api/node-core-library.iimportresolveoptions.allowselfreference",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"IImportResolveOptions.allowSelfReference property",id:"iimportresolveoptionsallowselfreference-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iimportresolveoptions"},"IImportResolveOptions")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iimportresolveoptions.allowselfreference"},"allowSelfReference")),(0,a.kt)("h2",{id:"iimportresolveoptionsallowselfreference-property"},"IImportResolveOptions.allowSelfReference property"),(0,a.kt)("p",null,"If true, then resolvePath is allowed to refer to the package.json of the active project."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"allowSelfReference?: boolean;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This will take precedence over any installed dependency with the same name. Note that this requires an additional PackageJsonLookup calculation."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Returns an absolute path to the current package\nImport.resolveModulePath({\n  resolvePath: "current-project",\n  basePath: process.cwd(),\n  allowSelfReference: true\n})\n')))}f.isMDXComponent=!0}}]);