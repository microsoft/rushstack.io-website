"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[5790],{5242:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(3929);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),f=c(n),d=a,h=f["".concat(o,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(h,s(s({ref:e},l),{},{components:n})):r.createElement(h,s({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,s=new Array(i);s[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,s[1]=p;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},934:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(394),a=n(1614),i=(n(3929),n(5242)),s=["components"],p={title:'"tslint" task'},o=void 0,c={unversionedId:"pages/heft_tasks/tslint",id:"pages/heft_tasks/tslint",title:'"tslint" task',description:"\u8fd9\u4e2a\u4efb\u52a1\u4f7f\u7528 TSLint \u6765\u683c\u5f0f\u5316 TypeScript \u4ee3\u7801\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/heft_tasks/tslint.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/tslint",permalink:"/zh-cn/pages/heft_tasks/tslint",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_tasks/tslint.md",tags:[],version:"current",frontMatter:{title:'"tslint" task'},sidebar:"docsSidebar",previous:{title:'"sass-typings" task',permalink:"/zh-cn/pages/heft_tasks/sass-typings"},next:{title:'"typescript" task',permalink:"/zh-cn/pages/heft_tasks/typescript"}},l={},u=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"package.json dependencies",id:"packagejson-dependencies",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2}],f={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4efb\u52a1\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/"},"TSLint")," \u6765\u683c\u5f0f\u5316 TypeScript \u4ee3\u7801\u3002"),(0,i.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TSLint \u5df2\u88ab\u5e9f\u5f03\uff0c\u53ea\u5e94\u7528\u4e8e\u9057\u7559\u9879\u76ee\u3002"),"2019 \u5e74\uff0cTypeScript \u7f16\u8bd1\u5668\u56e2\u961f\u3001ESLint \u56e2\u961f \u548c TSLint \u7684\u56e2\u4f53\u805a\u5728\u4e00\u8d77\uff0c\u540c\u610f",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/palantir/tslint-in-2019-1a144c2317a9"},"\u5e9f\u5f03 TSLint"),". \u8f6c\u800c\u5728 ESLint \u4e2d\u96c6\u6210 TypeScript, \u5b83\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u7528\u4e8e\u683c\u5f0f\u5316 JavaScript \u548c TypeScript \u6e90\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u65b0\u9879\u76ee\u5efa\u8bae\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft_tasks/eslint"},"eslint")," \u4efb\u52a1\u3002"),(0,i.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u5728\u9879\u76ee\u4e2d\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"tslint")," \u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package tslint --dev\n")),(0,i.kt)("p",null,'\u53e6\u5916\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u52a0\u8f7d "rig" \u6765\u907f\u514d\u6dfb\u52a0\u4f9d\u8d56\uff0c\u6b63\u5982\u5728 ',(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft/rig_packages"},"\u4f7f\u7528 rig \u5305")," \u4e00\u6587\u4e2d\u63cf\u8ff0\u7684\u90a3\u6837\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4efb\u52a1\u5e76\u6ca1\u6709\u4e00\u4e2a Heft \u4e13\u7528\u914d\u7f6e\u6587\u4ef6\u3002Heft \u4f1a\u5bfb\u627e TSLint \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/usage/configuration/"},"tslint.json"),"."))}d.isMDXComponent=!0}}]);