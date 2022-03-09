"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[90343],{45242:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(63929);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27739:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(95464),o=t(20134),i=(t(63929),t(45242)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,p={unversionedId:"pages/api/node-core-library.filewriter.close",id:"pages/api/node-core-library.filewriter.close",title:"node-core-library.filewriter.close",description:"Home &gt; @rushstack/node-core-library &gt; FileWriter &gt; close",source:"@site/docs/pages/api/node-core-library.filewriter.close.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.filewriter.close",permalink:"/pages/api/node-core-library.filewriter.close",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},u=[{value:"FileWriter.close() method",id:"filewriterclose-method",level:2},{value:"Remarks",id:"remarks",level:2}],f={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filewriter"},"FileWriter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filewriter.close"},"close")),(0,i.kt)("h2",{id:"filewriterclose-method"},"FileWriter.close() method"),(0,i.kt)("p",null,"Closes the file handle permanently. No operations can be made on this file handle after calling this. Behind the scenes it uses ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.closeSync()")," and releases the file descriptor to be re-used."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"close(): void;\n")),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"close()")," method can be called more than once; additional calls are ignored."))}d.isMDXComponent=!0}}]);