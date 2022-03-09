"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[61490],{45242:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=n,g=f["".concat(o,".").concat(m)]||f[m]||s[m]||i;return r?a.createElement(g,c(c({ref:t},p),{},{components:r})):a.createElement(g,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<i;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12801:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var a=r(95464),n=r(20134),i=(r(63929),r(45242)),c=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,l={unversionedId:"pages/api/debug-certificate-manager.certificatemanager.untrustcertificateasync",id:"pages/api/debug-certificate-manager.certificatemanager.untrustcertificateasync",title:"debug-certificate-manager.certificatemanager.untrustcertificateasync",description:"Home &gt; @rushstack/debug-certificate-manager &gt; CertificateManager &gt; untrustCertificateAsync",source:"@site/docs/pages/api/debug-certificate-manager.certificatemanager.untrustcertificateasync.md",sourceDirName:"pages/api",slug:"/pages/api/debug-certificate-manager.certificatemanager.untrustcertificateasync",permalink:"/zh-cn/pages/api/debug-certificate-manager.certificatemanager.untrustcertificateasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p={},s=[{value:"CertificateManager.untrustCertificateAsync() method",id:"certificatemanageruntrustcertificateasync-method",level:2},{value:"Parameters",id:"parameters",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/debug-certificate-manager"},"@rushstack/debug-certificate-manager")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/debug-certificate-manager.certificatemanager"},"CertificateManager")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/debug-certificate-manager.certificatemanager.untrustcertificateasync"},"untrustCertificateAsync")),(0,i.kt)("h2",{id:"certificatemanageruntrustcertificateasync-method"},"CertificateManager.untrustCertificateAsync() method"),(0,i.kt)("p",null,"Attempt to locate a previously generated debug certificate and untrust it."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"untrustCertificateAsync(terminal: ITerminal): Promise<boolean>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"terminal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.iterminal"},"ITerminal")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","boolean",">"))}m.isMDXComponent=!0}}]);