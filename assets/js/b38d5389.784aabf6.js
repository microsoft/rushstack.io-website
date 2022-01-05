"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[39446],{50158:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var i=t(46393);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),s=r,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||a;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72056:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var i=t(61731),r=t(70396),a=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,u={unversionedId:"pages/api/ts-command-line.icommandlinechoicedefinition.defaultvalue",id:"pages/api/ts-command-line.icommandlinechoicedefinition.defaultvalue",title:"ts-command-line.icommandlinechoicedefinition.defaultvalue",description:"Home &gt; @rushstack/ts-command-line &gt; ICommandLineChoiceDefinition &gt; defaultValue",source:"@site/docs/pages/api/ts-command-line.icommandlinechoicedefinition.defaultvalue.md",sourceDirName:"pages/api",slug:"/pages/api/ts-command-line.icommandlinechoicedefinition.defaultvalue",permalink:"/pages/api/ts-command-line.icommandlinechoicedefinition.defaultvalue",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"ICommandLineChoiceDefinition.defaultValue property",id:"icommandlinechoicedefinitiondefaultvalue-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.icommandlinechoicedefinition"},"ICommandLineChoiceDefinition")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.icommandlinechoicedefinition.defaultvalue"},"defaultValue")),(0,a.kt)("h2",{id:"icommandlinechoicedefinitiondefaultvalue-property"},"ICommandLineChoiceDefinition.defaultValue property"),(0,a.kt)("p",null,"The default value which will be used if the parameter is omitted from the command line."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"defaultValue?: string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If a default value is specified, then ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.ibasecommandlinedefinition.required"},"IBaseCommandLineDefinition.required")," must not be true. Instead, a custom error message should be used to report cases where a default value was not available."))}d.isMDXComponent=!0}}]);