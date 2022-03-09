"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[581],{45242:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15159:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n=r(95464),a=r(20134),i=(r(63929),r(45242)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,u={unversionedId:"pages/api/node-core-library.lockfile.tryacquire",id:"pages/api/node-core-library.lockfile.tryacquire",title:"node-core-library.lockfile.tryacquire",description:"Home &gt; @rushstack/node-core-library &gt; LockFile &gt; tryAcquire",source:"@site/docs/pages/api/node-core-library.lockfile.tryacquire.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.lockfile.tryacquire",permalink:"/zh-cn/pages/api/node-core-library.lockfile.tryacquire",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p={},s=[{value:"LockFile.tryAcquire() method",id:"lockfiletryacquire-method",level:2},{value:"Parameters",id:"parameters",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.lockfile"},"LockFile")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.lockfile.tryacquire"},"tryAcquire")),(0,i.kt)("h2",{id:"lockfiletryacquire-method"},"LockFile.tryAcquire() method"),(0,i.kt)("p",null,"Attempts to create a lockfile with the given filePath."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static tryAcquire(resourceFolder: string, resourceName: string): LockFile | undefined;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resourceFolder"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The folder where the lock file will be created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"An alphanumeric name that describes the resource being locked. This will become the filename of the temporary file created to manage the lock.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.lockfile"},"LockFile")," ","|"," undefined"),(0,i.kt)("p",null,"If successful, returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"LockFile")," instance. If unable to get a lock, returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ."))}d.isMDXComponent=!0}}]);