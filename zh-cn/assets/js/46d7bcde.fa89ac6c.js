"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[89144],{45242:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(63929);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,g=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return r?n.createElement(g,a(a({ref:t},f),{},{components:r})):n.createElement(g,a({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25729:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=r(95464),o=r(20134),i=(r(63929),r(45242)),a=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/api-extractor.iconfigfile.projectfolder",id:"pages/api/api-extractor.iconfigfile.projectfolder",title:"api-extractor.iconfigfile.projectfolder",description:"Home &gt; @microsoft/api-extractor &gt; IConfigFile &gt; projectFolder",source:"@site/docs/pages/api/api-extractor.iconfigfile.projectfolder.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.iconfigfile.projectfolder",permalink:"/zh-cn/pages/api/api-extractor.iconfigfile.projectfolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f={},s=[{value:"IConfigFile.projectFolder property",id:"iconfigfileprojectfolder-property",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor.iconfigfile"},"IConfigFile")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor.iconfigfile.projectfolder"},"projectFolder")),(0,i.kt)("h2",{id:"iconfigfileprojectfolder-property"},"IConfigFile.projectFolder property"),(0,i.kt)("p",null,"Determines the ",(0,i.kt)("inlineCode",{parentName:"p"},"<projectFolder>")," token that can be used with other config file settings. The project folder typically contains the tsconfig.json and package.json config files, but the path is user-defined."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"projectFolder?: string;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The path is resolved relative to the folder of the config file that contains the setting."),(0,i.kt)("p",null,"The default value for ",(0,i.kt)("inlineCode",{parentName:"p"},"projectFolder")," is the token ",(0,i.kt)("inlineCode",{parentName:"p"},"<lookup>")," , which means the folder is determined using the following heuristics:"),(0,i.kt)("p",null,"If the config/rig.json system is used (as defined by ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," ), then the ",(0,i.kt)("inlineCode",{parentName:"p"},"<lookup>")," value will be the package folder that referenced the rig."),(0,i.kt)("p",null,"Otherwise, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<lookup>")," value is determined by traversing parent folders, starting from the folder containing api-extractor.json, and stopping at the first folder that contains a tsconfig.json file. If a tsconfig.json file cannot be found in this way, then an error will be reported."))}d.isMDXComponent=!0}}]);