"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[36400],{45242:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21855:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(95464),a=r(20134),p=(r(63929),r(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,c={unversionedId:"pages/api/api-extractor-model.excerpt",id:"pages/api/api-extractor-model.excerpt",title:"api-extractor-model.excerpt",description:"Home &gt; @microsoft/api-extractor-model &gt; Excerpt",source:"@site/docs/pages/api/api-extractor-model.excerpt.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.excerpt",permalink:"/zh-cn/pages/api/api-extractor-model.excerpt",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},u=[{value:"Excerpt class",id:"excerpt-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor-model.excerpt"},"Excerpt")),(0,p.kt)("h2",{id:"excerpt-class"},"Excerpt class"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"Excerpt")," class is used by ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor-model.apideclareditem"},"ApiDeclaredItem")," to represent a TypeScript code fragment that may be annotated with hyperlinks to declared types (and in the future, source code locations)."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Excerpt \n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"API Extractor's .api.json file format stores excerpts compactly as a start/end indexes into an array of tokens. Every ",(0,p.kt)("inlineCode",{parentName:"p"},"ApiDeclaredItem"),' has a "main excerpt" corresponding to the full list of tokens. The declaration may also have have "captured" excerpts that correspond to subranges of tokens.'),(0,p.kt)("p",null,"For example, if the main excerpt is:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"function parse(s: string): Vector | undefined;\n")),(0,p.kt)("p",null,'...then this entire signature is the "main excerpt", whereas the function\'s return type ',(0,p.kt)("inlineCode",{parentName:"p"},"Vector | undefined")," is a captured excerpt. The ",(0,p.kt)("inlineCode",{parentName:"p"},"Vector")," token might be a hyperlink to that API item."),(0,p.kt)("p",null,"An excerpt may be empty (i.e. a token range containing zero tokens). For example, if a function's return value is not explicitly declared, then the returnTypeExcerpt will be empty. By contrast, a class constructor cannot have a return value, so ApiConstructor has no returnTypeExcerpt property at all."),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpt._constructor_"},"(constructor)(tokens, tokenRange)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,p.kt)("code",null,"Excerpt")," class")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpt.isempty"},"isEmpty")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"boolean"),(0,p.kt)("td",{parentName:"tr",align:null},"Returns true if the excerpt is an empty range.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpt.spannedtokens"},"spannedTokens")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpttoken"},"ExcerptToken")," ",">"),(0,p.kt)("td",{parentName:"tr",align:null},"The tokens spanned by this excerpt. It is the range of the ",(0,p.kt)("code",null,"tokens")," array as specified by the ",(0,p.kt)("code",null,"tokenRange")," property.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpt.text"},"text")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"The excerpted text, formed by concatenating the text of the ",(0,p.kt)("code",null,"spannedTokens")," strings.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpt.tokenrange"},"tokenRange")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Readonly","<",(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.iexcerpttokenrange"},"IExcerptTokenRange")," ",">"),(0,p.kt)("td",{parentName:"tr",align:null},"Specifies the excerpt's range within the ",(0,p.kt)("code",null,"tokens")," array.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpt.tokens"},"tokens")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,p.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/api-extractor-model.excerpttoken"},"ExcerptToken")," ",">"),(0,p.kt)("td",{parentName:"tr",align:null},"The complete list of tokens for the source code fragment that this excerpt is based upon. If this object is the main excerpt, then it will span all of the tokens; otherwise, it will correspond to a range within the array.")))))}m.isMDXComponent=!0}}]);