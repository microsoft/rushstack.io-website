"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[42073],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||p;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58348:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=r(95464),n=r(20134),p=(r(63929),r(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,s={unversionedId:"pages/api/api-extractor-model.apiproperty",id:"pages/api/api-extractor-model.apiproperty",title:"api-extractor-model.apiproperty",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiProperty",source:"@site/docs/pages/api/api-extractor-model.apiproperty.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.apiproperty",permalink:"/pages/api/api-extractor-model.apiproperty",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},u=[{value:"ApiProperty class",id:"apiproperty-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiproperty"},"ApiProperty")),(0,p.kt)("h2",{id:"apiproperty-class"},"ApiProperty class"),(0,p.kt)("p",null,"Represents a TypeScript property declaration that belongs to an ",(0,p.kt)("inlineCode",{parentName:"p"},"ApiClass")," ."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ApiProperty extends ApiProperty_base \n")),(0,p.kt)("b",null,"Extends:")," ApiProperty\\_base",(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This is part of the ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apimodel"},"ApiModel")," hierarchy of classes, which are serializable representations of API declarations."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"ApiProperty")," represents a TypeScript declaration such as the ",(0,p.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"height")," members in this example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"export class Widget {\n  public width: number = 100;\n\n  public get height(): number {\n    if (this.isSquashed()) {\n      return 0;\n    } else {\n      return this.clientArea.height;\n    }\n  }\n}\n")),(0,p.kt)("p",null,"Note that member variables are also considered to be properties."),(0,p.kt)("p",null,"If the property has both a getter function and setter function, they will be represented by a single ",(0,p.kt)("inlineCode",{parentName:"p"},"ApiProperty")," and must have a single documentation comment."),(0,p.kt)("p",null,"Compare with ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apipropertysignature"},"ApiPropertySignature")," , which represents a property belonging to an interface. For example, a class property can be ",(0,p.kt)("inlineCode",{parentName:"p"},"static")," but an interface property cannot."),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiproperty._constructor_"},"(constructor)(options)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,p.kt)("code",null,"ApiProperty")," class")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiproperty.containerkey"},"containerKey")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiproperty.kind"},"kind")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiitemkind"},"ApiItemKind")),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Method"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiproperty.buildcanonicalreference"},"buildCanonicalReference()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("b",null,(0,p.kt)("i",null,"(BETA)")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiproperty.getcontainerkey"},"getContainerKey(name, isStatic)")),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("code",null,"static")),(0,p.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);