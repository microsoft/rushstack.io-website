"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[8333],{45242:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(63929);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=s(n),f=i,d=g["".concat(l,".").concat(f)]||g[f]||c[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(95464),i=n(20134),a=(n(63929),n(45242)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"pages/api/localization-plugin.itypingsgenerationoptions",id:"pages/api/localization-plugin.itypingsgenerationoptions",title:"localization-plugin.itypingsgenerationoptions",description:"Home &gt; @rushstack/localization-plugin &gt; ITypingsGenerationOptions",source:"@site/docs/pages/api/localization-plugin.itypingsgenerationoptions.md",sourceDirName:"pages/api",slug:"/pages/api/localization-plugin.itypingsgenerationoptions",permalink:"/zh-cn/pages/api/localization-plugin.itypingsgenerationoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},c=[{value:"ITypingsGenerationOptions interface",id:"itypingsgenerationoptions-interface",level:2},{value:"Properties",id:"properties",level:2}],g={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/localization-plugin"},"@rushstack/localization-plugin")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/localization-plugin.itypingsgenerationoptions"},"ITypingsGenerationOptions")),(0,a.kt)("h2",{id:"itypingsgenerationoptions-interface"},"ITypingsGenerationOptions interface"),(0,a.kt)("p",null,"Options for typing generation."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ITypingsGenerationOptions \n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/localization-plugin.itypingsgenerationoptions.exportasdefault"},"exportAsDefault?")),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," If this option is set to ",(0,a.kt)("code",null,"true"),", loc modules typings will be exported wrapped in a ",(0,a.kt)("code",null,"default")," property.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/localization-plugin.itypingsgenerationoptions.generatedtsfolder"},"generatedTsFolder")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"This property specifies the folder in which ",(0,a.kt)("code",null,".d.ts")," files for loc files should be dropped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/localization-plugin.itypingsgenerationoptions.sourceroot"},"sourceRoot?")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," This optional property overrides the compiler context for discovery of localization files for which typings should be generated.")))))}f.isMDXComponent=!0}}]);