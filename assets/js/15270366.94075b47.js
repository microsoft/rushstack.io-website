"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[58862],{45242:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(63929);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,h=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70555:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=t(95464),o=t(20134),a=(t(63929),t(45242)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,l={unversionedId:"pages/api/rush-lib.rushconfiguration.projectfoldermaxdepth",id:"pages/api/rush-lib.rushconfiguration.projectfoldermaxdepth",title:"rush-lib.rushconfiguration.projectfoldermaxdepth",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; projectFolderMaxDepth",source:"@site/docs/pages/api/rush-lib.rushconfiguration.projectfoldermaxdepth.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.projectfoldermaxdepth",permalink:"/pages/api/rush-lib.rushconfiguration.projectfoldermaxdepth",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},s=[{value:"RushConfiguration.projectFolderMaxDepth property",id:"rushconfigurationprojectfoldermaxdepth-property",level:2}],f={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.projectfoldermaxdepth"},"projectFolderMaxDepth")),(0,a.kt)("h2",{id:"rushconfigurationprojectfoldermaxdepth-property"},"RushConfiguration.projectFolderMaxDepth property"),(0,a.kt)("p",null,"The maximum allowable folder depth for the projectFolder field in the rush.json file. This setting provides a way for repository maintainers to discourage nesting of project folders that makes the directory tree more difficult to navigate. The default value is 2, which implements on a standard convention of ",(0,a.kt)("inlineCode",{parentName:"p"},"<categoryFolder>/<projectFolder>/package.json"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get projectFolderMaxDepth(): number;\n")))}d.isMDXComponent=!0}}]);