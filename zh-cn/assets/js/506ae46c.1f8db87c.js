"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[70893],{45242:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(95464),a=n(20134),i=(n(63929),n(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/ts-command-line.commandlinestringlistparameter.appendtoarglist",id:"pages/api/ts-command-line.commandlinestringlistparameter.appendtoarglist",title:"ts-command-line.commandlinestringlistparameter.appendtoarglist",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineStringListParameter &gt; appendToArgList",source:"@site/docs/pages/api/ts-command-line.commandlinestringlistparameter.appendtoarglist.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlinestringlistparameter.appendtoarglist",permalink:"/zh-cn/pages/api/ts-command-line.commandlinestringlistparameter.appendtoarglist",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},c=[{value:"CommandLineStringListParameter.appendToArgList() method",id:"commandlinestringlistparameterappendtoarglist-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/ts-command-line.commandlinestringlistparameter"},"CommandLineStringListParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/ts-command-line.commandlinestringlistparameter.appendtoarglist"},"appendToArgList")),(0,i.kt)("h2",{id:"commandlinestringlistparameterappendtoarglist-method"},"CommandLineStringListParameter.appendToArgList() method"),(0,i.kt)("p",null,"Append the parsed values to the provided string array."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/** @override */\nappendToArgList(argList: string[]): void;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"argList"),(0,i.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,i.kt)("td",{parentName:"tr",align:null},"the parsed strings will be appended to this string array")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,'Sometimes a command line parameter is not used directly, but instead gets passed through to another tool that will use it. For example if our parameter comes in as "--max-count 3", then we might want to call ',(0,i.kt)("inlineCode",{parentName:"p"},"child_process.spawn()")," and append ","[",'"--max-count", "3"',"]"," to the args array for that tool. appendToArgList() appends zero or more strings to the provided array, based on the input command-line that we parsed."),(0,i.kt)("p",null,"If the parameter was omitted from our command-line and has no default value, then nothing will be appended. If the short name was used, the long name will be appended instead."))}u.isMDXComponent=!0}}]);