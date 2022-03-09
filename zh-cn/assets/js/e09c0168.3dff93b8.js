"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[20058],{45242:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(63929);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(r),g=o,h=f["".concat(u,".").concat(g)]||f[g]||l[g]||i;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},31570:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(95464),o=r(20134),i=(r(63929),r(45242)),c=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"pages/api/rush-lib.rushconfigurationproject.consumingprojects",id:"pages/api/rush-lib.rushconfigurationproject.consumingprojects",title:"rush-lib.rushconfigurationproject.consumingprojects",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; consumingProjects",source:"@site/docs/pages/api/rush-lib.rushconfigurationproject.consumingprojects.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.rushconfigurationproject.consumingprojects",permalink:"/zh-cn/pages/api/rush-lib.rushconfigurationproject.consumingprojects",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s={},l=[{value:"RushConfigurationProject.consumingProjects property",id:"rushconfigurationprojectconsumingprojects-property",level:2},{value:"Remarks",id:"remarks",level:2}],f={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.rushconfigurationproject.consumingprojects"},"consumingProjects")),(0,i.kt)("h2",{id:"rushconfigurationprojectconsumingprojects-property"},"RushConfigurationProject.consumingProjects property"),(0,i.kt)("p",null,"The set of projects within the Rush configuration which declare this project as a dependency. Excludes those that declare this project as a ",(0,i.kt)("inlineCode",{parentName:"p"},"cyclicDependencyProject")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get consumingProjects(): ReadonlySet<RushConfigurationProject>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This field is the counterpart to ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyProjects")," , and can be used recursively to walk the project dependency graph to find all projects which will be impacted by changes to this project."))}g.isMDXComponent=!0}}]);