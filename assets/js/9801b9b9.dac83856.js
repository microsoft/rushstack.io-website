"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[26482],{50158:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,g=h["".concat(o,".").concat(d)]||h[d]||u[d]||p;return a?n.createElement(g,i(i({ref:t},l),{},{components:a})):n.createElement(g,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<p;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},38930:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var n=a(61731),r=a(70396),p=(a(46393),a(50158)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"pages/api/package-deps-hash",id:"pages/api/package-deps-hash",title:"package-deps-hash",description:"Home &gt; @rushstack/package-deps-hash",source:"@site/docs/pages/api/package-deps-hash.md",sourceDirName:"pages/api",slug:"/pages/api/package-deps-hash",permalink:"/pages/api/package-deps-hash",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"package-deps-hash package",id:"package-deps-hash-package",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2}],u={toc:l};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/package-deps-hash"},"@rushstack/package-deps-hash")),(0,p.kt)("h2",{id:"package-deps-hash-package"},"package-deps-hash package"),(0,p.kt)("p",null,"This package builds a JSON object containing the git hashes of all files used to produce a given NPM package. The ",(0,p.kt)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush")," tool uses this library to implement incremental build detection."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"For more info, please see the package ",(0,p.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/package-deps-hash"},"README")," ."),(0,p.kt)("h2",{id:"functions"},"Functions"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Function"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/package-deps-hash.getgithashforfiles"},"getGitHashForFiles(filesToHash, packagePath, gitPath)")),(0,p.kt)("td",{parentName:"tr",align:null},"Takes a list of files and returns the current git hashes for them")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/package-deps-hash.getpackagedeps"},"getPackageDeps(packagePath, excludedPaths, gitPath)")),(0,p.kt)("td",{parentName:"tr",align:null},"Builds an object containing hashes for the files under the specified ",(0,p.kt)("code",null,"packagePath")," folder.")))))}h.isMDXComponent=!0}}]);