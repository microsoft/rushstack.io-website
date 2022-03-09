"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[38391],{45242:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(63929);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20651:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=t(95464),o=t(20134),a=(t(63929),t(45242)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/ts-command-line.commandlinechoiceparameter.completions",id:"pages/api/ts-command-line.commandlinechoiceparameter.completions",title:"ts-command-line.commandlinechoiceparameter.completions",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineChoiceParameter &gt; completions",source:"@site/docs/pages/api/ts-command-line.commandlinechoiceparameter.completions.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlinechoiceparameter.completions",permalink:"/pages/api/ts-command-line.commandlinechoiceparameter.completions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},s=[{value:"CommandLineChoiceParameter.completions property",id:"commandlinechoiceparametercompletions-property",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinechoiceparameter"},"CommandLineChoiceParameter")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinechoiceparameter.completions"},"completions")),(0,a.kt)("h2",{id:"commandlinechoiceparametercompletions-property"},"CommandLineChoiceParameter.completions property"),(0,a.kt)("p",null,"An optional callback that provides a list of custom choices for tab completion."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly completions: (() => Promise<string[]>) | undefined;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"This option is only used when ",(0,a.kt)("inlineCode",{parentName:"p"},"ICommandLineParserOptions.enableTabCompletionAction")," is enabled."))}d.isMDXComponent=!0}}]);