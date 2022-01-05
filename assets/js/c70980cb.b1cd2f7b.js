"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[43019],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,f=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47709:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var a=r(61731),n=r(70396),o=(r(46393),r(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/api-extractor.extractormessage.loglevel",id:"pages/api/api-extractor.extractormessage.loglevel",title:"api-extractor.extractormessage.loglevel",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorMessage &gt; logLevel",source:"@site/docs/pages/api/api-extractor.extractormessage.loglevel.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractormessage.loglevel",permalink:"/pages/api/api-extractor.extractormessage.loglevel",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ExtractorMessage.logLevel property",id:"extractormessageloglevel-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function g(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractormessage"},"ExtractorMessage")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractormessage.loglevel"},"logLevel")),(0,o.kt)("h2",{id:"extractormessageloglevel-property"},"ExtractorMessage.logLevel property"),(0,o.kt)("p",null,"Specifies how the message should be reported."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get logLevel(): ExtractorLogLevel;\n\nset logLevel(value: ExtractorLogLevel);\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iextractorinvokeoptions.messagecallback"},"IExtractorInvokeOptions.messageCallback")," handles the message (i.e. sets ",(0,o.kt)("inlineCode",{parentName:"p"},"handled = true")," ), it can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel")," to determine how to display the message."),(0,o.kt)("p",null,"Alternatively, if API Extractor is handling the message, the ",(0,o.kt)("inlineCode",{parentName:"p"},"messageCallback")," could assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel")," to change how it will be processed. However, in general the recommended practice is to configure message routing using the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," section in api-extractor.json."),(0,o.kt)("p",null,"To discard a message entirely, assign ",(0,o.kt)("inlineCode",{parentName:"p"},"logLevel = none")," ."))}g.isMDXComponent=!0}}]);