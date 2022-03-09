"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[10732],{45242:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return d}});var n=t(63929);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=c(t),d=r,g=k["".concat(i,".").concat(d)]||k[d]||u[d]||o;return t?n.createElement(g,l(l({ref:a},s),{},{components:t})):n.createElement(g,l({ref:a},s))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=k;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},93444:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=t(95464),r=t(20134),o=(t(63929),t(45242)),l=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,c={unversionedId:"pages/api/node-core-library.packagejsonlookup.loadpackagejson",id:"pages/api/node-core-library.packagejsonlookup.loadpackagejson",title:"node-core-library.packagejsonlookup.loadpackagejson",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; loadPackageJson",source:"@site/docs/pages/api/node-core-library.packagejsonlookup.loadpackagejson.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.packagejsonlookup.loadpackagejson",permalink:"/zh-cn/pages/api/node-core-library.packagejsonlookup.loadpackagejson",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},u=[{value:"PackageJsonLookup.loadPackageJson() method",id:"packagejsonlookuploadpackagejson-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],k={toc:u};function d(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.packagejsonlookup.loadpackagejson"},"loadPackageJson")),(0,o.kt)("h2",{id:"packagejsonlookuploadpackagejson-method"},"PackageJsonLookup.loadPackageJson() method"),(0,o.kt)("p",null,"Loads the specified package.json file, if it is not already present in the cache."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"loadPackageJson(jsonFilename: string): IPackageJson;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jsonFilename"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"a relative or absolute path to a package.json file")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.ipackagejson"},"IPackageJson")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Unless ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields"},"IPackageJsonLookupParameters.loadExtraFields")," was specified, the returned IPackageJson object will contain a subset of essential fields. The returned object should be considered to be immutable; the caller must never modify it."))}d.isMDXComponent=!0}}]);