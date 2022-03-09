"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[75428],{45242:function(e,r,a){a.d(r,{Zo:function(){return s},kt:function(){return g}});var t=a(63929);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),c=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||p;return a?t.createElement(d,o(o({ref:r},s),{},{components:a})):t.createElement(d,o({ref:r},s))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73401:function(e,r,a){a.r(r),a.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var t=a(95464),n=a(20134),p=(a(63929),a(45242)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/node-core-library.packagenameparser.tryparse",id:"pages/api/node-core-library.packagenameparser.tryparse",title:"node-core-library.packagenameparser.tryparse",description:"Home &gt; @rushstack/node-core-library &gt; PackageNameParser &gt; tryParse",source:"@site/docs/pages/api/node-core-library.packagenameparser.tryparse.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.packagenameparser.tryparse",permalink:"/zh-cn/pages/api/node-core-library.packagenameparser.tryparse",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},u=[{value:"PackageNameParser.tryParse() method",id:"packagenameparsertryparse-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:u};function g(e){var r=e.components,a=(0,n.Z)(e,o);return(0,p.kt)("wrapper",(0,t.Z)({},m,a,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.packagenameparser"},"PackageNameParser")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.packagenameparser.tryparse"},"tryParse")),(0,p.kt)("h2",{id:"packagenameparsertryparse-method"},"PackageNameParser.tryParse() method"),(0,p.kt)("p",null,"This attempts to parse a package name that may include a scope component. The packageName must not be an empty string."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"tryParse(packageName: string): IParsedPackageNameOrError;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"packageName"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.iparsedpackagenameorerror"},"IParsedPackageNameOrError")),(0,p.kt)("p",null,"an ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.iparsedpackagenameorerror"},"IParsedPackageNameOrError")," structure whose ",(0,p.kt)("inlineCode",{parentName:"p"},"error")," property will be nonempty if the string could not be parsed."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This function will not throw an exception."))}g.isMDXComponent=!0}}]);