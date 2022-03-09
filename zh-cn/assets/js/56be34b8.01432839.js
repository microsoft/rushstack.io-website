"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[35841],{45242:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(63929);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),g=a,d=f["".concat(s,".").concat(g)]||f[g]||c[g]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46023:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(95464),a=t(20134),i=(t(63929),t(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/rush-lib.yarnoptionsconfiguration",id:"pages/api/rush-lib.yarnoptionsconfiguration",title:"rush-lib.yarnoptionsconfiguration",description:"Home &gt; @microsoft/rush-lib &gt; YarnOptionsConfiguration",source:"@site/docs/pages/api/rush-lib.yarnoptionsconfiguration.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.yarnoptionsconfiguration",permalink:"/zh-cn/pages/api/rush-lib.yarnoptionsconfiguration",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},c=[{value:"YarnOptionsConfiguration class",id:"yarnoptionsconfiguration-class",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2}],f={toc:c};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.yarnoptionsconfiguration"},"YarnOptionsConfiguration")),(0,i.kt)("h2",{id:"yarnoptionsconfiguration-class"},"YarnOptionsConfiguration class"),(0,i.kt)("p",null,"Options that are only used when the yarn package manager is selected."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class YarnOptionsConfiguration extends PackageManagerOptionsConfigurationBase \n")),(0,i.kt)("b",null,"Extends:")," [PackageManagerOptionsConfigurationBase](/zh-cn/pages/api/rush-lib.packagemanageroptionsconfigurationbase)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"It is valid to define these options in rush.json even if the yarn package manager is not being used."),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"YarnOptionsConfiguration")," class."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/rush-lib.yarnoptionsconfiguration.ignoreengines"},"ignoreEngines")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},'If true, then Rush will add the "--ignore-engines" option when invoking Yarn. This allows "rush install" to succeed if there are dependencies with engines defined in package.json which do not match the current environment. The default value is false.')))))}g.isMDXComponent=!0}}]);