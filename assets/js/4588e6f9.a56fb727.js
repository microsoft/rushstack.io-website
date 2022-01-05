"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[5660],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(r),f=n,d=g["".concat(p,".").concat(f)]||g[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},14697:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return g}});var a=r(61731),n=r(70396),i=(r(46393),r(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api/rig-package",id:"pages/api/rig-package",title:"rig-package",description:"Home &gt; @rushstack/rig-package",source:"@site/docs/pages/api/rig-package.md",sourceDirName:"pages/api",slug:"/pages/api/rig-package",permalink:"/pages/api/rig-package",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"rig-package package",id:"rig-package-package",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2}],u={toc:s};function g(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rig-package"},"@rushstack/rig-package")),(0,i.kt)("h2",{id:"rig-package-package"},"rig-package package"),(0,i.kt)("p",null,"A system for sharing tool configurations between projects without duplicating config files."),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config/rig.json")," file is a system that Node.js build tools can support, in order to eliminate duplication of config files when many projects share a common configuration. This is particularly valuable in a setup where hundreds of projects may be built using a small set of reusable recipes."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rig-package.rigconfig"},"RigConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"This is the main API for loading the ",(0,i.kt)("code",null,"config/rig.json")," file format.")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rig-package.iloadforprojectfolderoptions"},"ILoadForProjectFolderOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Options for ",(0,i.kt)("a",{parentName:"td",href:"/pages/api/rig-package.rigconfig.loadforprojectfolder"},"RigConfig.loadForProjectFolder()")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rig-package.irigconfigjson"},"IRigConfigJson")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents the literal contents of the ",(0,i.kt)("code",null,"config/rig.json")," file.")))))}g.isMDXComponent=!0}}]);