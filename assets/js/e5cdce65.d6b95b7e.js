"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[3308],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),l=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),y=a,d=s["".concat(m,".").concat(y)]||s[y]||u[y]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},13371:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(61731),a=r(70396),i=(r(46393),r(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,l={unversionedId:"pages/api/api-extractor-model.apiitemcontainermixin.trygetmemberbykey",id:"pages/api/api-extractor-model.apiitemcontainermixin.trygetmemberbykey",title:"api-extractor-model.apiitemcontainermixin.trygetmemberbykey",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiItemContainerMixin &gt; tryGetMemberByKey",source:"@site/docs/pages/api/api-extractor-model.apiitemcontainermixin.trygetmemberbykey.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor-model.apiitemcontainermixin.trygetmemberbykey",permalink:"/pages/api/api-extractor-model.apiitemcontainermixin.trygetmemberbykey",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ApiItemContainerMixin.tryGetMemberByKey() method",id:"apiitemcontainermixintrygetmemberbykey-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiitemcontainermixin"},"ApiItemContainerMixin")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiitemcontainermixin.trygetmemberbykey"},"tryGetMemberByKey")),(0,i.kt)("h2",{id:"apiitemcontainermixintrygetmemberbykey-method"},"ApiItemContainerMixin.tryGetMemberByKey() method"),(0,i.kt)("p",null,"Attempts to retrieve a member using its containerKey, or returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if no matching member was found."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"tryGetMemberByKey(containerKey: string): ApiItem | undefined;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"containerKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiitem"},"ApiItem")," ","|"," undefined"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getContainerKey()")," static member to construct the key. Each subclass has a different implementation of this function, according to the aspects that are important for identifying it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apiitem.containerkey"},"ApiItem.containerKey")," for more information."))}s.isMDXComponent=!0}}]);