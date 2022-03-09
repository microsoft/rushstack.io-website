"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[77412],{45242:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(63929);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,h=f["".concat(u,".").concat(m)]||f[m]||l[m]||i;return t?r.createElement(h,a(a({ref:n},c),{},{components:t})):r.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61507:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=t(95464),o=t(20134),i=(t(63929),t(45242)),a=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,s={unversionedId:"pages/api/rush-lib.rushconfiguration.npmoptions",id:"pages/api/rush-lib.rushconfiguration.npmoptions",title:"rush-lib.rushconfiguration.npmoptions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; npmOptions",source:"@site/docs/pages/api/rush-lib.rushconfiguration.npmoptions.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.npmoptions",permalink:"/zh-cn/pages/api/rush-lib.rushconfiguration.npmoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},l=[{value:"RushConfiguration.npmOptions property",id:"rushconfigurationnpmoptions-property",level:2},{value:"Remarks",id:"remarks",level:2}],f={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.rushconfiguration.npmoptions"},"npmOptions")),(0,i.kt)("h2",{id:"rushconfigurationnpmoptions-property"},"RushConfiguration.npmOptions property"),(0,i.kt)("p",null,"Options that are only used when the NPM package manager is selected."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get npmOptions(): NpmOptionsConfiguration;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"It is valid to define these options in rush.json even if the NPM package manager is not being used."),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"NpmOptionsConfiguration")," class."))}m.isMDXComponent=!0}}]);