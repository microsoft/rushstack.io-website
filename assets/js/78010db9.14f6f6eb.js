"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[96284],{45242:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return d}});var n=r(63929);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(f,i(i({ref:e},m),{},{components:r})):n.createElement(f,i({ref:e},m))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},36226:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(95464),a=r(20134),l=(r(63929),r(45242)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/terminal.splittertransform",id:"pages/api/terminal.splittertransform",title:"terminal.splittertransform",description:"Home &gt; @rushstack/terminal &gt; SplitterTransform",source:"@site/docs/pages/api/terminal.splittertransform.md",sourceDirName:"pages/api",slug:"/pages/api/terminal.splittertransform",permalink:"/pages/api/terminal.splittertransform",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},u=[{value:"SplitterTransform class",id:"splittertransform-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:u};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/terminal.splittertransform"},"SplitterTransform")),(0,l.kt)("h2",{id:"splittertransform-class"},"SplitterTransform class"),(0,l.kt)("p",null,"Use this instead of ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/terminal.terminaltransform"},"TerminalTransform")," if you need to output ",(0,l.kt)("inlineCode",{parentName:"p"},"ITerminalChunk")," data to more than one destination."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class SplitterTransform extends TerminalWritable \n")),(0,l.kt)("b",null,"Extends:")," [TerminalWritable](/pages/api/terminal.terminalwritable)",(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Splitting streams complicates the pipeline topology and can make debugging more difficult. For this reason, it is modeled as an explicit ",(0,l.kt)("inlineCode",{parentName:"p"},"SplitterTransform")," node, rather than as a built-in feature of ",(0,l.kt)("inlineCode",{parentName:"p"},"TerminalTransform")," ."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.splittertransform._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,l.kt)("code",null,"SplitterTransform")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.splittertransform.destinations"},"destinations")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.terminalwritable"},"TerminalWritable")," ",">"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.splittertransform.onclose"},"onClose()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.splittertransform.onwritechunk"},"onWriteChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);