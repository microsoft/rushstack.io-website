"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[29718],{45242:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(63929);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||o;return t?r.createElement(m,p(p({ref:n},u),{},{components:t})):r.createElement(m,p({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41308:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=t(95464),i=t(20134),o=(t(63929),t(45242)),p=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,c={unversionedId:"pages/api/rush-lib.pnpmoptionsconfiguration.strictpeerdependencies",id:"pages/api/rush-lib.pnpmoptionsconfiguration.strictpeerdependencies",title:"rush-lib.pnpmoptionsconfiguration.strictpeerdependencies",description:"Home &gt; @microsoft/rush-lib &gt; PnpmOptionsConfiguration &gt; strictPeerDependencies",source:"@site/docs/pages/api/rush-lib.pnpmoptionsconfiguration.strictpeerdependencies.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.pnpmoptionsconfiguration.strictpeerdependencies",permalink:"/zh-cn/pages/api/rush-lib.pnpmoptionsconfiguration.strictpeerdependencies",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},l=[{value:"PnpmOptionsConfiguration.strictPeerDependencies property",id:"pnpmoptionsconfigurationstrictpeerdependencies-property",level:2},{value:"Remarks",id:"remarks",level:2}],f={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.pnpmoptionsconfiguration.strictpeerdependencies"},"strictPeerDependencies")),(0,o.kt)("h2",{id:"pnpmoptionsconfigurationstrictpeerdependencies-property"},"PnpmOptionsConfiguration.strictPeerDependencies property"),(0,o.kt)("p",null,'If true, then Rush will add the "--strict-peer-dependencies" option when invoking PNPM.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly strictPeerDependencies: boolean;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'This causes "rush install" to fail if there are unsatisfied peer dependencies, which is an invalid state that can cause build failures or incompatible dependency versions. (For historical reasons, JavaScript package managers generally do not treat this invalid state as an error.)'),(0,o.kt)("p",null,"The default value is false. (For now.)"))}d.isMDXComponent=!0}}]);