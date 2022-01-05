"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[66053],{50158:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},45578:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var n=a(61731),r=a(70396),i=(a(46393),a(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api/api-extractor-model.apimodel",id:"pages/api/api-extractor-model.apimodel",title:"api-extractor-model.apimodel",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiModel",source:"@site/docs/pages/api/api-extractor-model.apimodel.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.apimodel",permalink:"/pages/api/api-extractor-model.apimodel",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},d=[{value:"ApiModel class",id:"apimodel-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],m={toc:d};function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apimodel"},"ApiModel")),(0,i.kt)("h2",{id:"apimodel-class"},"ApiModel class"),(0,i.kt)("p",null,"A serializable representation of a collection of API declarations."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ApiModel extends ApiModel_base \n")),(0,i.kt)("b",null,"Extends:")," ApiModel\\_base",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiModel")," represents a collection of API declarations that can be serialized to disk. It captures all the important information needed to generate documentation, without any reliance on the TypeScript compiler engine."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiModel")," acts as the root of a tree of objects that all inherit from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiItem")," base class. The tree children are determined by the ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiitemcontainermixin"},"ApiItemContainerMixin")," mixin base class. The model contains packages. Packages have an entry point (today, only one). And the entry point can contain various types of API declarations. The container relationships might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Things that can contain other things:\n\n- ApiModel\n  - ApiPackage\n    - ApiEntryPoint\n      - ApiClass\n        - ApiMethod\n        - ApiProperty\n      - ApiEnum\n        - ApiEnumMember\n      - ApiInterface\n        - ApiMethodSignature\n        - ApiPropertySignature\n      - ApiNamespace\n        - (ApiClass, ApiEnum, ApiInterace, ...)\n\n")),(0,i.kt)("p",null,"Normally, API Extractor writes an .api.json file to disk for each project that it builds. Then, a tool like API Documenter can load the various ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiPackage")," objects into a single ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiModel")," and process them as a group. This is useful because compilation generally occurs separately (e.g. because projects may reside in different Git repos, or because they build with different TypeScript compiler configurations that may be incompatible), whereas API Documenter cannot detect broken hyperlinks without seeing the entire documentation set."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel._constructor_"},"(constructor)()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,i.kt)("code",null,"ApiModel")," class")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.containerkey"},"containerKey")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.kind"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiitemkind"},"ApiItemKind")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.packages"},"packages")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apipackage"},"ApiPackage")," ",">"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.addmember"},"addMember(member)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.buildcanonicalreference"},"buildCanonicalReference()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.loadpackage"},"loadPackage(apiJsonFilename)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.resolvedeclarationreference"},"resolveDeclarationReference(declarationReference, contextApiItem)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apimodel.trygetpackagebyname"},"tryGetPackageByName(packageName)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Efficiently finds a package by the NPM package name.")))))}s.isMDXComponent=!0}}]);