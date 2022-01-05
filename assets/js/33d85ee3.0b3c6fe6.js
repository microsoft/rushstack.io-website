"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[58846],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57177:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(61731),i=r(70396),a=(r(46393),r(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,c={unversionedId:"pages/api/node-core-library.filesystem.createsymboliclinkfolder",id:"pages/api/node-core-library.filesystem.createsymboliclinkfolder",title:"node-core-library.filesystem.createsymboliclinkfolder",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; createSymbolicLinkFolder",source:"@site/docs/pages/api/node-core-library.filesystem.createsymboliclinkfolder.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.filesystem.createsymboliclinkfolder",permalink:"/pages/api/node-core-library.filesystem.createsymboliclinkfolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"FileSystem.createSymbolicLinkFolder() method",id:"filesystemcreatesymboliclinkfolder-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],m={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfolder"},"createSymbolicLinkFolder")),(0,a.kt)("h2",{id:"filesystemcreatesymboliclinkfolder-method"},"FileSystem.createSymbolicLinkFolder() method"),(0,a.kt)("p",null,"Creates a symbolic link to a folder. On Windows operating systems, this may require administrator elevation. Behind the scenes it uses ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.symlinkSync()")," ."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static createSymbolicLinkFolder(options: IFileSystemCreateLinkOptions): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.ifilesystemcreatelinkoptions"},"IFileSystemCreateLinkOptions")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"void"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"To avoid administrator elevation on Windows, use ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.createsymboliclinkjunction"},"FileSystem.createSymbolicLinkJunction()")," instead."),(0,a.kt)("p",null,"On Windows operating systems, the NTFS file system distinguishes file symlinks versus directory symlinks: If the target is not the correct type, the symlink will be created successfully, but will fail to resolve. Other operating systems do not make this distinction, in which case ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfile"},"FileSystem.createSymbolicLinkFile()")," and ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfolder"},"FileSystem.createSymbolicLinkFolder()")," can be used interchangeably, but doing so will make your tool incompatible with Windows."))}u.isMDXComponent=!0}}]);