"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[91792],{50158:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return m}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},f=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(d,p(p({ref:r},f),{},{components:t})):n.createElement(d,p({ref:r},f))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=s;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},75840:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return f},default:function(){return s}});var n=t(61731),o=t(70396),i=(t(46393),t(50158)),p=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/api-extractor.iconfigapireport.reporttempfolder",id:"pages/api/api-extractor.iconfigapireport.reporttempfolder",title:"api-extractor.iconfigapireport.reporttempfolder",description:"Home &gt; @microsoft/api-extractor &gt; IConfigApiReport &gt; reportTempFolder",source:"@site/docs/pages/api/api-extractor.iconfigapireport.reporttempfolder.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.iconfigapireport.reporttempfolder",permalink:"/pages/api/api-extractor.iconfigapireport.reporttempfolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f=[{value:"IConfigApiReport.reportTempFolder property",id:"iconfigapireportreporttempfolder-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:f};function s(e){var r=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iconfigapireport"},"IConfigApiReport")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iconfigapireport.reporttempfolder"},"reportTempFolder")),(0,i.kt)("h2",{id:"iconfigapireportreporttempfolder-property"},"IConfigApiReport.reportTempFolder property"),(0,i.kt)("p",null,"Specifies the folder where the temporary report file is written. The file name portion is determined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"reportFileName")," setting."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"reportTempFolder?: string;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"After the temporary file is written to disk, it is compared with the file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reportFolder")," . If they are different, a production build will fail."),(0,i.kt)("p",null,"The path is resolved relative to the folder of the config file that contains the setting; to change this, prepend a folder token such as ",(0,i.kt)("inlineCode",{parentName:"p"},"<projectFolder>")," ."))}s.isMDXComponent=!0}}]);