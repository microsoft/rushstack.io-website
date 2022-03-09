"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[16516],{45242:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39632:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(95464),a=r(20134),o=(r(63929),r(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/api-extractor.extractormessage.handled",id:"pages/api/api-extractor.extractormessage.handled",title:"api-extractor.extractormessage.handled",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorMessage &gt; handled",source:"@site/docs/pages/api/api-extractor.extractormessage.handled.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractormessage.handled",permalink:"/zh-cn/pages/api/api-extractor.extractormessage.handled",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},u=[{value:"ExtractorMessage.handled property",id:"extractormessagehandled-property",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor.extractormessage"},"ExtractorMessage")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor.extractormessage.handled"},"handled")),(0,o.kt)("h2",{id:"extractormessagehandled-property"},"ExtractorMessage.handled property"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/api-extractor.iextractorinvokeoptions.messagecallback"},"IExtractorInvokeOptions.messageCallback")," sets this property to true, it will prevent the message from being displayed by API Extractor."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get handled(): boolean;\n\nset handled(value: boolean);\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"messageCallback")," routes the message to a custom handler (e.g. a toolchain logger), it should assign ",(0,o.kt)("inlineCode",{parentName:"p"},"handled = true")," to prevent API Extractor from displaying it. Assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"handled = true")," for all messages would effectively disable all console output from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Extractor")," API."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"handled")," is set to true, the message will still be included in the count of errors/warnings; to discard a message entirely, instead assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel = none")," ."))}m.isMDXComponent=!0}}]);