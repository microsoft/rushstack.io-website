"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[45329],{45242:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return u}});var r=n(95464),a=n(20134),o=(n(63929),n(45242)),i=["components"],m={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/ts-command-line.commandlineparameterwithargument.completions",id:"pages/api/ts-command-line.commandlineparameterwithargument.completions",title:"ts-command-line.commandlineparameterwithargument.completions",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterWithArgument &gt; completions",source:"@site/docs/pages/api/ts-command-line.commandlineparameterwithargument.completions.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlineparameterwithargument.completions",permalink:"/pages/api/ts-command-line.commandlineparameterwithargument.completions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},u=[{value:"CommandLineParameterWithArgument.completions property",id:"commandlineparameterwithargumentcompletions-property",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparameterwithargument"},"CommandLineParameterWithArgument")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparameterwithargument.completions"},"completions")),(0,o.kt)("h2",{id:"commandlineparameterwithargumentcompletions-property"},"CommandLineParameterWithArgument.completions property"),(0,o.kt)("p",null,"An optional callback that provides a list of custom choices for tab completion."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly completions: (() => Promise<string[]>) | undefined;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This option is only used when ",(0,o.kt)("inlineCode",{parentName:"p"},"ICommandLineParserOptions.enableTabCompletionAction")," is enabled."))}d.isMDXComponent=!0}}]);