"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[64378],{50158:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return g}});var t=r(46393);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,h=f["".concat(s,".").concat(g)]||f[g]||c[g]||i;return r?t.createElement(h,a(a({ref:n},l),{},{components:r})):t.createElement(h,a({ref:n},l))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53528:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var t=r(61731),o=r(70396),i=(r(46393),r(50158)),a=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/rush-lib.rushconfiguration.yarnoptions",id:"pages/api/rush-lib.rushconfiguration.yarnoptions",title:"rush-lib.rushconfiguration.yarnoptions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; yarnOptions",source:"@site/docs/pages/api/rush-lib.rushconfiguration.yarnoptions.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.yarnoptions",permalink:"/pages/api/rush-lib.rushconfiguration.yarnoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"RushConfiguration.yarnOptions property",id:"rushconfigurationyarnoptions-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:l};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.yarnoptions"},"yarnOptions")),(0,i.kt)("h2",{id:"rushconfigurationyarnoptions-property"},"RushConfiguration.yarnOptions property"),(0,i.kt)("p",null,"Options that are only used when the yarn package manager is selected."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get yarnOptions(): YarnOptionsConfiguration;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"It is valid to define these options in rush.json even if the yarn package manager is not being used."),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"YarnOptionsConfiguration")," class."))}f.isMDXComponent=!0}}]);