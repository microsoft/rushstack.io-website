"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[16516],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25488:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=r(61731),n=r(70396),o=(r(46393),r(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/api-extractor.extractormessage.handled",id:"pages/api/api-extractor.extractormessage.handled",title:"api-extractor.extractormessage.handled",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorMessage &gt; handled",source:"@site/docs/pages/api/api-extractor.extractormessage.handled.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractormessage.handled",permalink:"/pages/api/api-extractor.extractormessage.handled",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ExtractorMessage.handled property",id:"extractormessagehandled-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractormessage"},"ExtractorMessage")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractormessage.handled"},"handled")),(0,o.kt)("h2",{id:"extractormessagehandled-property"},"ExtractorMessage.handled property"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iextractorinvokeoptions.messagecallback"},"IExtractorInvokeOptions.messageCallback")," sets this property to true, it will prevent the message from being displayed by API Extractor."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get handled(): boolean;\n\nset handled(value: boolean);\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"messageCallback")," routes the message to a custom handler (e.g. a toolchain logger), it should assign ",(0,o.kt)("inlineCode",{parentName:"p"},"handled = true")," to prevent API Extractor from displaying it. Assigning ",(0,o.kt)("inlineCode",{parentName:"p"},"handled = true")," for all messages would effectively disable all console output from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Extractor")," API."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"handled")," is set to true, the message will still be included in the count of errors/warnings; to discard a message entirely, instead assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel = none")," ."))}d.isMDXComponent=!0}}]);