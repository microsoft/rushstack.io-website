"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2748],{45242:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(63929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(95464),a=r(20134),o=(r(63929),r(45242)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"pages/api/node-core-library.filesystem.formatposixmodebits",id:"pages/api/node-core-library.filesystem.formatposixmodebits",title:"node-core-library.filesystem.formatposixmodebits",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; formatPosixModeBits",source:"@site/docs/pages/api/node-core-library.filesystem.formatposixmodebits.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.filesystem.formatposixmodebits",permalink:"/zh-cn/pages/api/node-core-library.filesystem.formatposixmodebits",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},c=[{value:"FileSystem.formatPosixModeBits() method",id:"filesystemformatposixmodebits-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/node-core-library.filesystem.formatposixmodebits"},"formatPosixModeBits")),(0,o.kt)("h2",{id:"filesystemformatposixmodebits-method"},"FileSystem.formatPosixModeBits() method"),(0,o.kt)("p",null,'Returns a 10-character string representation of a PosixModeBits value similar to what would be displayed by a command such as "ls -l" on a POSIX-like operating system.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static formatPosixModeBits(modeBits: PosixModeBits): string;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"modeBits"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.posixmodebits"},"PosixModeBits")),(0,o.kt)("td",{parentName:"tr",align:null},"POSIX-style file mode bits specified using the ",(0,o.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/node-core-library.posixmodebits"},"PosixModeBits")," enum")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"string"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"PosixModeBits.AllRead | PosixModeBits.AllWrite"),' would be formatted as "-rw-rw-rw-".'))}d.isMDXComponent=!0}}]);