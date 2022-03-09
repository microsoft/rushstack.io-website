"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[57293],{45242:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var a=n(63929);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),s=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},l=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),g=t,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(f,p(p({ref:r},l),{},{components:n})):a.createElement(f,p({ref:r},l))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34482:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(95464),t=n(20134),o=(n(63929),n(45242)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",id:"pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",title:"rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",description:"Home &gt; @microsoft/rush-lib &gt; ApprovedPackagesPolicy &gt; nonbrowserApprovedPackages",source:"@site/docs/pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",permalink:"/zh-cn/pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l={},u=[{value:"ApprovedPackagesPolicy.nonbrowserApprovedPackages property",id:"approvedpackagespolicynonbrowserapprovedpackages-property",level:2},{value:"Remarks",id:"remarks",level:2}],d={toc:u};function g(e){var r=e.components,n=(0,t.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.approvedpackagespolicy"},"ApprovedPackagesPolicy")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/rush-lib.approvedpackagespolicy.nonbrowserapprovedpackages"},"nonbrowserApprovedPackages")),(0,o.kt)("h2",{id:"approvedpackagespolicynonbrowserapprovedpackages-property"},"ApprovedPackagesPolicy.nonbrowserApprovedPackages property"),(0,o.kt)("p",null,"Packages approved for usage everywhere ","*","except","*"," in a web browser."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get nonbrowserApprovedPackages(): ApprovedPackagesConfiguration;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This is part of an optional approval workflow, whose purpose is to review any new dependencies that are introduced (e.g. maybe a legal review is required, or maybe we are trying to minimize bloat). The intent is that the file will be stored in Git and tracked by a branch policy that notifies reviewers when a PR attempts to modify the file."),(0,o.kt)("p",null,"Example filename: ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\config\\rush\\browser-approved-packages.json")))}g.isMDXComponent=!0}}]);