"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[75055],{45242:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},67369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=n(95464),a=n(20134),i=(n(63929),n(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,m={unversionedId:"pages/api/ts-command-line.commandlinestringparameter.defaultvalue",id:"pages/api/ts-command-line.commandlinestringparameter.defaultvalue",title:"ts-command-line.commandlinestringparameter.defaultvalue",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineStringParameter &gt; defaultValue",source:"@site/docs/pages/api/ts-command-line.commandlinestringparameter.defaultvalue.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.commandlinestringparameter.defaultvalue",permalink:"/pages/api/ts-command-line.commandlinestringparameter.defaultvalue",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p={},c=[{value:"CommandLineStringParameter.defaultValue property",id:"commandlinestringparameterdefaultvalue-property",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinestringparameter"},"CommandLineStringParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinestringparameter.defaultvalue"},"defaultValue")),(0,i.kt)("h2",{id:"commandlinestringparameterdefaultvalue-property"},"CommandLineStringParameter.defaultValue property"),(0,i.kt)("p",null,"The default value which will be used if the parameter is omitted from the command line."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly defaultValue: string | undefined;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If a default value is specified, then ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.ibasecommandlinedefinition.required"},"IBaseCommandLineDefinition.required")," must not be true. Instead, a custom error message should be used to report cases where a default value was not available."))}d.isMDXComponent=!0}}]);