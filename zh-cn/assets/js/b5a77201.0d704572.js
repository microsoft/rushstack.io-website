"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[17255],{45242:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(63929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16676:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=t(95464),a=t(20134),i=(t(63929),t(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api/node-core-library.iterminal.writeerrorline",id:"pages/api/node-core-library.iterminal.writeerrorline",title:"node-core-library.iterminal.writeerrorline",description:"Home &gt; @rushstack/node-core-library &gt; ITerminal &gt; writeErrorLine",source:"@site/docs/pages/api/node-core-library.iterminal.writeerrorline.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.iterminal.writeerrorline",permalink:"/zh-cn/pages/api/node-core-library.iterminal.writeerrorline",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},s=[{value:"ITerminal.writeErrorLine() method",id:"iterminalwriteerrorline-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:s};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.iterminal"},"ITerminal")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.iterminal.writeerrorline"},"writeErrorLine")),(0,i.kt)("h2",{id:"iterminalwriteerrorline-method"},"ITerminal.writeErrorLine() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Write an error message to the console with red text, followed by a newline."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"writeErrorLine(...messageParts: (string | IColorableSequence)[]): void;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"messageParts"),(0,i.kt)("td",{parentName:"tr",align:null},"(string ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.icolorablesequence"},"IColorableSequence")," )","[","]"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The red color takes precedence over any other foreground colors set."))}d.isMDXComponent=!0}}]);