"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[52474],{50158:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return g}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,d=u["".concat(p,".").concat(g)]||u[g]||s[g]||o;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35950:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return f},default:function(){return u}});var n=r(61731),a=r(70396),o=(r(46393),r(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/api-extractor.extractorconfig.tsconfigfilepath",id:"pages/api/api-extractor.extractorconfig.tsconfigfilepath",title:"api-extractor.extractorconfig.tsconfigfilepath",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; tsconfigFilePath",source:"@site/docs/pages/api/api-extractor.extractorconfig.tsconfigfilepath.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractorconfig.tsconfigfilepath",permalink:"/pages/api/api-extractor.extractorconfig.tsconfigfilepath",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f=[{value:"ExtractorConfig.tsconfigFilePath property",id:"extractorconfigtsconfigfilepath-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:f};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig.tsconfigfilepath"},"tsconfigFilePath")),(0,o.kt)("h2",{id:"extractorconfigtsconfigfilepath-property"},"ExtractorConfig.tsconfigFilePath property"),(0,o.kt)("p",null,"Specifies the path to the tsconfig.json file to be used by API Extractor when analyzing the project."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly tsconfigFilePath: string;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The path is resolved relative to the folder of the config file that contains the setting; to change this, prepend a folder token such as ",(0,o.kt)("inlineCode",{parentName:"p"},"<projectFolder>")," ."),(0,o.kt)("p",null,"Note: This setting will be ignored if ",(0,o.kt)("inlineCode",{parentName:"p"},"overrideTsconfig")," is used."))}u.isMDXComponent=!0}}]);