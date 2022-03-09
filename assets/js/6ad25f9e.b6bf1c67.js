"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[76534],{45242:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var r=a(63929);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(a),s=n,g=d["".concat(l,".").concat(s)]||d[s]||u[s]||i;return a?r.createElement(g,o(o({ref:t},m),{},{components:a})):r.createElement(g,o({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13030:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=a(95464),n=a(20134),i=(a(63929),a(45242)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/api-extractor-model.apimodel.trygetpackagebyname",id:"pages/api/api-extractor-model.apimodel.trygetpackagebyname",title:"api-extractor-model.apimodel.trygetpackagebyname",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiModel &gt; tryGetPackageByName",source:"@site/docs/pages/api/api-extractor-model.apimodel.trygetpackagebyname.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.apimodel.trygetpackagebyname",permalink:"/pages/api/api-extractor-model.apimodel.trygetpackagebyname",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},u=[{value:"ApiModel.tryGetPackageByName() method",id:"apimodeltrygetpackagebyname-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:u};function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apimodel"},"ApiModel")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apimodel.trygetpackagebyname"},"tryGetPackageByName")),(0,i.kt)("h2",{id:"apimodeltrygetpackagebyname-method"},"ApiModel.tryGetPackageByName() method"),(0,i.kt)("p",null,"Efficiently finds a package by the NPM package name."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"tryGetPackageByName(packageName: string): ApiPackage | undefined;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"packageName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apipackage"},"ApiPackage")," ","|"," undefined"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If the NPM scope is omitted in the package name, it will still be found provided that it is an unambiguous match. For example, it's often convenient to write ",(0,i.kt)("inlineCode",{parentName:"p"},"{@link node-core-library#JsonFile}")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"{@link @rushstack/node-core-library#JsonFile}")," ."))}s.isMDXComponent=!0}}]);