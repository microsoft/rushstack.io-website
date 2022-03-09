"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2102],{45242:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(63929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=l(t),u=a,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var m={};for(var p in r)hasOwnProperty.call(r,p)&&(m[p]=r[p]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6088:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return d}});var n=t(95464),a=t(20134),i=(t(63929),t(45242)),o=["components"],m={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/ts-command-line.commandlineparameterprovider.definestringparameter",id:"pages/api/ts-command-line.commandlineparameterprovider.definestringparameter",title:"ts-command-line.commandlineparameterprovider.definestringparameter",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; defineStringParameter",source:"@site/docs/pages/api/ts-command-line.commandlineparameterprovider.definestringparameter.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlineparameterprovider.definestringparameter",permalink:"/zh-cn/pages/api/ts-command-line.commandlineparameterprovider.definestringparameter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},d=[{value:"CommandLineParameterProvider.defineStringParameter() method",id:"commandlineparameterproviderdefinestringparameter-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/ts-command-line.commandlineparameterprovider.definestringparameter"},"defineStringParameter")),(0,i.kt)("h2",{id:"commandlineparameterproviderdefinestringparameter-method"},"CommandLineParameterProvider.defineStringParameter() method"),(0,i.kt)("p",null,"Defines a command-line parameter whose argument is a single text string."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"defineStringParameter(definition: ICommandLineStringDefinition): CommandLineStringParameter;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/ts-command-line.icommandlinestringdefinition"},"ICommandLineStringDefinition")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/ts-command-line.commandlinestringparameter"},"CommandLineStringParameter")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Example usage of a string parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'example-tool --message "Hello, world!"\n')))}u.isMDXComponent=!0}}]);