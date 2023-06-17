"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[7345],{158:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(6393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(9122),o=(r(6393),r(158));const a={title:"Heft 0.51\u8fc1\u79fb\u6307\u5357",authors:["D4N14L","octogonz"],tags:["heft"],draft:!1,hide_table_of_contents:!1},i=void 0,c={permalink:"/zh-cn/blog/2023/06/16/heft-migration-guide",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/blog/2023-06-16-heft-migration-guide.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-06-16-heft-migration-guide.md",title:"Heft 0.51\u8fc1\u79fb\u6307\u5357",description:'Heft 0.51.0 \u7248\u672c\u63a8\u51fa\u4e86\u4e00\u4e2a\u5e26\u6765\u4e86\u4e00\u4e9b\u91cd\u5927\u67b6\u6784\u53d8\u5316\u7684"\u591a\u9636\u6bb5"\u7279\u6027\u3002\u5982\u679c\u4f60\u4e00\u76f4\u5728\u4f7f\u7528\u8f83\u65e7\u7684\u7248\u672c\uff0c\u90a3\u4e48\u5347\u7ea7\u5c06\u9700\u8981\u5bf9\u4f60\u7684Heft \u914d\u7f6e\u6587\u4ef6\u4ee5\u53ca\u53ef\u80fd\u7f16\u5199\u7684\u81ea\u5b9a\u4e49\u63d2\u4ef6\u8fdb\u884c\u4e00\u4e9b\u66f4\u6539\u3002\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u603b\u7ed3\u53d1\u751f\u4e86\u54ea\u4e9b\u66f4\u6539\uff0c\u4ee5\u53ca\u5982\u4f55\u8fc1\u79fb\u4f60\u7684\u9879\u76ee\u3002\u8fd9\u53ef\u80fd\u662f\u5728 Heft \u7684 1.0.0 \u7248\u672c\u53d1\u5e03\u4e4b\u524d\u7684\u6700\u540e\u4e00\u6b21\u91cd\u5927\u7834\u574f\u6027\u66f4\u6539\u3002',date:"2023-06-16T00:00:00.000Z",formattedDate:"2023\u5e746\u670816\u65e5",tags:[{label:"heft",permalink:"/zh-cn/blog/tags/heft"}],readingTime:14.095,hasTruncateMarker:!0,authors:[{name:"Daniel Nadeau",title:"Rush Stack maintainer",url:"https://github.com/D4N14L",imageURL:"https://github.com/D4N14L.png",key:"D4N14L"},{name:"Pete Gonzalez",title:"Rush Stack maintainer",url:"https://github.com/octogonz",imageURL:"https://github.com/octogonz.png",key:"octogonz"}],frontMatter:{title:"Heft 0.51\u8fc1\u79fb\u6307\u5357",authors:["D4N14L","octogonz"],tags:["heft"],draft:!1,hide_table_of_contents:!1},nextItem:{title:"Heft 0.51\u4e2d\u7684\u65b0\u529f\u80fd",permalink:"/zh-cn/blog/2023/06/15/heft-whats-new"}},l={authorsImageUrls:[void 0,void 0]},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Heft ",(0,o.kt)("strong",{parentName:"p"},"0.51.0"),' \u7248\u672c\u63a8\u51fa\u4e86\u4e00\u4e2a\u5e26\u6765\u4e86\u4e00\u4e9b\u91cd\u5927\u67b6\u6784\u53d8\u5316\u7684"\u591a\u9636\u6bb5"\u7279\u6027\u3002\u5982\u679c\u4f60\u4e00\u76f4\u5728\u4f7f\u7528\u8f83\u65e7\u7684\u7248\u672c\uff0c\u90a3\u4e48\u5347\u7ea7\u5c06\u9700\u8981\u5bf9\u4f60\u7684',(0,o.kt)("strong",{parentName:"p"},"Heft \u914d\u7f6e\u6587\u4ef6"),"\u4ee5\u53ca\u53ef\u80fd\u7f16\u5199\u7684",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u63d2\u4ef6"),"\u8fdb\u884c\u4e00\u4e9b\u66f4\u6539\u3002\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u603b\u7ed3\u53d1\u751f\u4e86\u54ea\u4e9b\u66f4\u6539\uff0c\u4ee5\u53ca\u5982\u4f55\u8fc1\u79fb\u4f60\u7684\u9879\u76ee\u3002\u8fd9\u53ef\u80fd\u662f\u5728 Heft \u7684 1.0.0 \u7248\u672c\u53d1\u5e03\u4e4b\u524d\u7684\u6700\u540e\u4e00\u6b21\u91cd\u5927\u7834\u574f\u6027\u66f4\u6539\u3002"))}f.isMDXComponent=!0}}]);