"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[79406],{45242:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),g=a,m=s["".concat(l,".").concat(g)]||s[g]||f[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77429:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var r=n(95464),a=n(20134),o=(n(63929),n(45242)),i=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"pages/api/rush-lib.rushconfiguration.loadfromconfigurationfile",id:"pages/api/rush-lib.rushconfiguration.loadfromconfigurationfile",title:"rush-lib.rushconfiguration.loadfromconfigurationfile",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; loadFromConfigurationFile",source:"@site/docs/pages/api/rush-lib.rushconfiguration.loadfromconfigurationfile.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfiguration.loadfromconfigurationfile",permalink:"/zh-cn/pages/api/rush-lib.rushconfiguration.loadfromconfigurationfile",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p={},f=[{value:"RushConfiguration.loadFromConfigurationFile() method",id:"rushconfigurationloadfromconfigurationfile-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:f};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.rushconfiguration.loadfromconfigurationfile"},"loadFromConfigurationFile")),(0,o.kt)("h2",{id:"rushconfigurationloadfromconfigurationfile-method"},"RushConfiguration.loadFromConfigurationFile() method"),(0,o.kt)("p",null,"Loads the configuration data from an Rush.json configuration file and returns an RushConfiguration object."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadFromConfigurationFile(rushJsonFilename: string): RushConfiguration;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rushJsonFilename"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")))}g.isMDXComponent=!0}}]);