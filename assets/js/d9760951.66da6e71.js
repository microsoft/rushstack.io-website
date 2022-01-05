"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[7448],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50265:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=r(61731),a=r(70396),l=(r(46393),r(50158)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/terminal.stderrlinetransform",id:"pages/api/terminal.stderrlinetransform",title:"terminal.stderrlinetransform",description:"Home &gt; @rushstack/terminal &gt; StderrLineTransform",source:"@site/docs/pages/api/terminal.stderrlinetransform.md",sourceDirName:"pages/api",slug:"/pages/api/terminal.stderrlinetransform",permalink:"/pages/api/terminal.stderrlinetransform",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"StderrLineTransform class",id:"stderrlinetransform-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],d={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/terminal.stderrlinetransform"},"StderrLineTransform")),(0,l.kt)("h2",{id:"stderrlinetransform-class"},"StderrLineTransform class"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StderrLineTransform")," normalizes lines that mix characters from ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," , so that each output line is routed entirely to ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," ."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class StderrLineTransform extends TerminalTransform \n")),(0,l.kt)("b",null,"Extends:")," [TerminalTransform](/pages/api/terminal.terminaltransform)",(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"IMPORTANT: This transform assumes that its input has been normalized to use ",(0,l.kt)("inlineCode",{parentName:"p"},'"\\n"')," newlines."),(0,l.kt)("p",null,"IMPORTANT: This transform does not produce realtime output, because lines are buffered until a newline character is encountered."),(0,l.kt)("p",null,"Suppose that a poorly behaved process produces output like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"process.stderr.write('An error occurred, cleaning up');\nprocess.stdout.write('.'); // (delay)\nprocess.stdout.write('.'); // (delay)\nprocess.stdout.write('.');\nprocess.stdout.write('\\n');\nprocess.stderr.write('The process completed with errors\\n');\n")),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," are combined on the console, the mistake in the output would not be noticeable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"An error occurred, cleaning up...\nThe process completed with errors\n")),(0,l.kt)("p",null,"However, if we discard ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," , then ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," is malformed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"An error occurred, cleaning upThe process completed with errors\n")),(0,l.kt)("p",null,"Tooling scripts can introduce these sorts of problems via edge cases that are difficult to find and fix."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"StderrLineTransform")," normalizes the output so that if a combined line contains any ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," characters, then the entire line is routed to ",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," . Later, if we discard ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," , then the output will preserve the appropriate context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"An error occurred, cleaning up...\nThe process completed with errors\n")),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.stderrlinetransform._constructor_"},"(constructor)(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,l.kt)("code",null,"StderrLineTransform")," class")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.stderrlinetransform.newline"},"newline")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.stderrlinetransform.onclose"},"onClose()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/terminal.stderrlinetransform.onwritechunk"},"onWriteChunk(chunk)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)")))))))}c.isMDXComponent=!0}}]);