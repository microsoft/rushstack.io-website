"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[72218],{45242:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(63929);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(g,o(o({ref:e},u),{},{components:r})):n.createElement(g,o({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15512:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(95464),a=r(20134),i=(r(63929),r(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api/api-extractor-model.apiconstructsignature",id:"pages/api/api-extractor-model.apiconstructsignature",title:"api-extractor-model.apiconstructsignature",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiConstructSignature",source:"@site/docs/pages/api/api-extractor-model.apiconstructsignature.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.apiconstructsignature",permalink:"/pages/api/api-extractor-model.apiconstructsignature",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},s=[{value:"ApiConstructSignature class",id:"apiconstructsignature-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],m={toc:s};function d(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiconstructsignature"},"ApiConstructSignature")),(0,i.kt)("h2",{id:"apiconstructsignature-class"},"ApiConstructSignature class"),(0,i.kt)("p",null,"Represents a TypeScript construct signature that belongs to an ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiInterface")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ApiConstructSignature extends ApiConstructSignature_base \n")),(0,i.kt)("b",null,"Extends:")," ApiConstructSignature\\_base",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This is part of the ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apimodel"},"ApiModel")," hierarchy of classes, which are serializable representations of API declarations."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApiConstructSignature")," represents a construct signature using the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," keyword such as in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IVector {\n  x: number;\n  y: number;\n}\n\nexport interface IVectorConstructor {\n  // A construct signature:\n  new(x: number, y: number): IVector;\n}\n\nexport function createVector(vectorConstructor: IVectorConstructor,\n  x: number, y: number): IVector {\n  return new vectorConstructor(x, y);\n}\n\nclass Vector implements IVector {\n  public x: number;\n  public y: number;\n  public constructor(x: number, y: number) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\nlet vector: Vector = createVector(Vector, 1, 2);\n")),(0,i.kt)("p",null,"Compare with ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiconstructor"},"ApiConstructor")," , which describes the class constructor itself."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiconstructsignature._constructor_"},"(constructor)(options)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,i.kt)("code",null,"ApiConstructSignature")," class")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiconstructsignature.containerkey"},"containerKey")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiconstructsignature.kind"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiitemkind"},"ApiItemKind")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiconstructsignature.buildcanonicalreference"},"buildCanonicalReference()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiconstructsignature.getcontainerkey"},"getContainerKey(overloadIndex)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"static")),(0,i.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);