"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[16821],{45242:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var a=r(63929);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(r),d=n,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(k,o(o({ref:e},u),{},{components:r})):a.createElement(k,o({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19819:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=r(95464),n=r(20134),l=(r(63929),r(45242)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/stream-collator.collatedwriter",id:"pages/api/stream-collator.collatedwriter",title:"stream-collator.collatedwriter",description:"Home &gt; @rushstack/stream-collator &gt; CollatedWriter",source:"@site/docs/pages/api/stream-collator.collatedwriter.md",sourceDirName:"pages/api",slug:"/pages/api/stream-collator.collatedwriter",permalink:"/pages/api/stream-collator.collatedwriter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},c=[{value:"CollatedWriter class",id:"collatedwriter-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],m={toc:c};function d(t){var e=t.components,r=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/stream-collator"},"@rushstack/stream-collator")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/stream-collator.collatedwriter"},"CollatedWriter")),(0,l.kt)("h2",{id:"collatedwriter-class"},"CollatedWriter class"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,"An writable interface for managing output of simultaneous processes."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CollatedWriter extends TerminalWritable \n")),(0,l.kt)("b",null,"Extends:")," [TerminalWritable](/pages/api/terminal.terminalwritable)",(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedwriter._constructor_"},"(constructor)(taskName, collator)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,l.kt)("code",null,"CollatedWriter")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedwriter.bufferedchunks"},"bufferedChunks")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.iterminalchunk"},"ITerminalChunk")," ",">"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," For diagnostic purposes, if the writer is buffering chunks because it has not become active yet, they can be inspected via this property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedwriter.isactive"},"isActive")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Returns true if this is the active writer for its associated ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.streamcollator"},"StreamCollator")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedwriter.taskname"},"taskName")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedwriter.terminal"},"terminal")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedterminal"},"CollatedTerminal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedwriter.onclose"},"onClose()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Subclasses can override this empty method to perform additional operations such as closing a file handle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/stream-collator.collatedwriter.onwritechunk"},"onWriteChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Subclasses should implement this ",(0,l.kt)("code",null,"abstract")," method to process the chunk.")))))}d.isMDXComponent=!0}}]);