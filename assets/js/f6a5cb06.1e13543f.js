"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[71465],{45242:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||p;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<p;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63762:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=r(95464),n=r(20134),p=(r(63929),r(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,u={unversionedId:"pages/api/api-extractor-model.apipropertysignature",id:"pages/api/api-extractor-model.apipropertysignature",title:"api-extractor-model.apipropertysignature",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiPropertySignature",source:"@site/docs/pages/api/api-extractor-model.apipropertysignature.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.apipropertysignature",permalink:"/pages/api/api-extractor-model.apipropertysignature",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},c=[{value:"ApiPropertySignature class",id:"apipropertysignature-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apipropertysignature"},"ApiPropertySignature")),(0,p.kt)("h2",{id:"apipropertysignature-class"},"ApiPropertySignature class"),(0,p.kt)("p",null,"Represents a TypeScript property declaration that belongs to an ",(0,p.kt)("inlineCode",{parentName:"p"},"ApiInterface")," ."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ApiPropertySignature extends ApiPropertyItem \n")),(0,p.kt)("b",null,"Extends:")," [ApiPropertyItem](/pages/api/api-extractor-model.apipropertyitem)",(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This is part of the ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apimodel"},"ApiModel")," hierarchy of classes, which are serializable representations of API declarations."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"ApiPropertySignature")," represents a TypeScript declaration such as the ",(0,p.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"height")," members in this example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IWidget {\n  readonly width: number;\n  height: number;\n}\n")),(0,p.kt)("p",null,"Compare with ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiproperty"},"ApiProperty")," , which represents a property belonging to a class. For example, a class property can be ",(0,p.kt)("inlineCode",{parentName:"p"},"static")," but an interface property cannot."),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apipropertysignature._constructor_"},"(constructor)(options)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,p.kt)("code",null,"ApiPropertySignature")," class")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apipropertysignature.containerkey"},"containerKey")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apipropertysignature.kind"},"kind")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiitemkind"},"ApiItemKind")),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Method"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apipropertysignature.buildcanonicalreference"},"buildCanonicalReference()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("b",null,(0,p.kt)("i",null,"(BETA)")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apipropertysignature.getcontainerkey"},"getContainerKey(name)")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,"static")),(0,p.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);