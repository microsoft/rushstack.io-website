"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[7824],{158:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(6393);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),c=l,h=u["".concat(s,".").concat(c)]||u[c]||k[c]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(9122),l=(n(6393),n(158));const i={title:"Heft 0.51\u4e2d\u7684\u65b0\u529f\u80fd",authors:["D4N14L"],tags:["heft"],draft:!1,hide_table_of_contents:!1},r=void 0,p={permalink:"/zh-cn/blog/2023/06/15/heft-whats-new",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/blog/2023-06-15-heft-whats-new.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-06-15-heft-whats-new.md",title:"Heft 0.51\u4e2d\u7684\u65b0\u529f\u80fd",description:'"\u591a\u9636\u6bb5" Heft \u662f@rushstack/heft\u9879\u76ee\u7684\u5168\u65b0\u91cd\u5199\uff0c\u76ee\u6807\u662f\u4e0eRush \u5206\u9636\u6bb5\u6784\u5efa\u66f4\u7d27\u5bc6\u5730\u96c6\u6210\u3002\u6b64\u5916\uff0c\u8fd9\u6b21\u66f4\u65b0\u4e3a Heft \u5e26\u6765\u4e86\u66f4\u5927\u7684\u53ef\u5b9a\u5236\u6027\u548c\u6539\u8fdb\u7684\u5e76\u884c\u8fdb\u7a0b\u5904\u7406\u80fd\u529b\u3002\u8fd9\u7bc7\u6587\u7ae0\u89e3\u91ca\u4e86\u8fd9\u4e9b\u6539\u8fdb\u80cc\u540e\u7684\u52a8\u673a\u548c\u67b6\u6784\u3002',date:"2023-06-15T00:00:00.000Z",formattedDate:"2023\u5e746\u670815\u65e5",tags:[{label:"heft",permalink:"/zh-cn/blog/tags/heft"}],readingTime:16.16,hasTruncateMarker:!0,authors:[{name:"Daniel Nadeau",title:"Rush Stack maintainer",url:"https://github.com/D4N14L",imageURL:"https://github.com/D4N14L.png",key:"D4N14L"}],frontMatter:{title:"Heft 0.51\u4e2d\u7684\u65b0\u529f\u80fd",authors:["D4N14L"],tags:["heft"],draft:!1,hide_table_of_contents:!1},prevItem:{title:"Heft 0.51\u8fc1\u79fb\u6307\u5357",permalink:"/zh-cn/blog/2023/06/16/heft-migration-guide"},nextItem:{title:"\u5173\u4e8eRush Stack\u535a\u5ba2",permalink:"/zh-cn/blog/2023/06/01/blog-launch"}},s={authorsImageUrls:[void 0]},o=[{value:"Heft \u4efb\u52a1",id:"heft-\u4efb\u52a1",level:2},{value:"Heft \u9636\u6bb5",id:"heft-\u9636\u6bb5",level:2},{value:"Heft \u64cd\u4f5c",id:"heft-\u64cd\u4f5c",level:2},{value:"\u89c2\u5bdf\u6a21\u5f0f",id:"\u89c2\u5bdf\u6a21\u5f0f",level:2},{value:"heft.json \u7ed3\u6784",id:"heftjson-\u7ed3\u6784",level:2},{value:"heft.json \u5c5e\u6027\u7ee7\u627f\u6307\u4ee4",id:"heftjson-\u5c5e\u6027\u7ee7\u627f\u6307\u4ee4",level:2},{value:"\u5173\u8054\u7684 NPM \u5305",id:"\u5173\u8054\u7684-npm-\u5305",level:2},{value:"\u7f16\u5199 Heft \u63d2\u4ef6",id:"\u7f16\u5199-heft-\u63d2\u4ef6",level:2},{value:"\u751f\u547d\u5468\u671f\u63d2\u4ef6",id:"\u751f\u547d\u5468\u671f\u63d2\u4ef6",level:3},{value:"\u4efb\u52a1\u63d2\u4ef6",id:"\u4efb\u52a1\u63d2\u4ef6",level:3},{value:"heft-plugin.json",id:"heft-pluginjson",level:3},{value:"\u8de8\u63d2\u4ef6\u4ea4\u4e92",id:"\u8de8\u63d2\u4ef6\u4ea4\u4e92",level:3},{value:"\u81ea\u5b9a\u4e49 CLI \u53c2\u6570",id:"\u81ea\u5b9a\u4e49-cli-\u53c2\u6570",level:3}],m={toc:o},u="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'"\u591a\u9636\u6bb5" Heft \u662f',(0,l.kt)("inlineCode",{parentName:"p"},"@rushstack/heft"),"\u9879\u76ee\u7684\u5168\u65b0\u91cd\u5199\uff0c\u76ee\u6807\u662f\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/phased_builds/"},"Rush \u5206\u9636\u6bb5\u6784\u5efa"),"\u66f4\u7d27\u5bc6\u5730\u96c6\u6210\u3002\u6b64\u5916\uff0c\u8fd9\u6b21\u66f4\u65b0\u4e3a Heft \u5e26\u6765\u4e86\u66f4\u5927\u7684\u53ef\u5b9a\u5236\u6027\u548c\u6539\u8fdb\u7684\u5e76\u884c\u8fdb\u7a0b\u5904\u7406\u80fd\u529b\u3002\u8fd9\u7bc7\u6587\u7ae0\u89e3\u91ca\u4e86\u8fd9\u4e9b\u6539\u8fdb\u80cc\u540e\u7684\u52a8\u673a\u548c\u67b6\u6784\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u5347\u7ea7\u6307\u5357\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/blog/2023/06/16/heft-migration-guide"},"Heft 0.51 \u8fc1\u79fb\u6307\u5357"),"\u6587\u7ae0\u3002")),(0,l.kt)("p",null,"\u66f4\u65b0\u7248\u672c\u7684 Heft \u6539\u8fdb\u4e86\u4e00\u4e9b\u5173\u952e\u9886\u57df\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u5b9a\u4e49\u7684 Heft \u63d2\u4ef6\u548c Heft \u4e8b\u4ef6\u7684\u6267\u884c\u987a\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"--to"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"--only"),"\u7b49\u8303\u56f4\u53c2\u6570\u5bf9 Heft \u64cd\u4f5c\u7684\u90e8\u5206\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5316\u7684\u63d2\u4ef6 API\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5236\u4f5c Heft \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("strong",{parentName:"li"},"heft-plugin.json"),"\u660e\u786e\u5b9a\u4e49\u6240\u6709 Heft \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u5728\u4e00\u4e2a\u63d2\u4ef6\u5305\u5185\u5b9a\u4e49\u591a\u4e2a\u63d2\u4ef6\u63d0\u4f9b\u4e86\u539f\u751f\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u6539\u8fdb\u4e86\u63d2\u4ef6\u53c2\u6570\u7684\u5904\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Heft \u64cd\u4f5c\u4e2d\u63d0\u4f9b\u4e86\u5bf9\u589e\u91cf\u89c2\u5bdf\u6a21\u5f0f\u7684\u539f\u751f\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u4e86\u5f00\u9500\u5e76\u6539\u8fdb\u4e86\u6027\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u8fd8\u6709\u66f4\u591a\uff01")),(0,l.kt)("h2",{id:"heft-\u4efb\u52a1"},"Heft \u4efb\u52a1"),(0,l.kt)("p",null,"Heft \u4efb\u52a1\u662f\u5728",(0,l.kt)("strong",{parentName:"p"},"heft.json"),"\u4e2d\u6307\u5b9a\u7684\u6700\u5c0f\u5de5\u4f5c\u5355\u5143\u3002Heft \u4efb\u52a1\u53ef\u80fd\u4f9d\u8d56\u4e8e\u540c\u4e00\u9636\u6bb5\u5185\u7684\u5176\u4ed6\u4efb\u52a1\uff0c\u6240\u6709\u4efb\u52a1\u4f9d\u8d56\u5fc5\u987b\u5728\u4f9d\u8d56\u4efb\u52a1\u624d\u80fd\u6267\u884c\u4e4b\u524d\u5b8c\u6210\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5728\u8fc7\u53bb\u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u533a\u5206\u4e86\u5185\u7f6e\u4efb\u52a1\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"copy-files-plugin"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"node-service-plugin"),"\u7b49\uff09\u4e0e\u4ece\u63d2\u4ef6\u5305\u4e2d\u52a0\u8f7d\u7684\u7b2c\u4e09\u65b9\u4efb\u52a1\u3002\u4ece Heft 0.53.0 \u5f00\u59cb\uff0c\u4e24\u79cd\u4efb\u52a1\u73b0\u5728\u90fd\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u58f0\u660e\u3002\u5185\u7f6e\u63d2\u4ef6\u53ea\u9700\u4e3a\u4ed6\u4eec\u7684\u63d2\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),"\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"@rushstack/heft"),"\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"heft-\u9636\u6bb5"},"Heft \u9636\u6bb5"),(0,l.kt)("p",null,"Heft \u9636\u6bb5\u5b9a\u4e49\u4e86\u5728\u6267\u884c\u8be5\u9636\u6bb5\u65f6\u5c06\u8fd0\u884c\u7684\u4e00\u7ec4\u4efb\u52a1\u3002\u9636\u6bb5\u5145\u5f53\u4e00\u7ec4\u903b\u8f91\u4efb\u52a1\u7684\u96c6\u5408\uff0c\u8fd9\u4e9b\u4efb\u52a1\u5728\u5408\u7406\u7684\u60c5\u51b5\u4e0b\uff08\u4f46\u4e0d\u4e00\u5b9a\uff09\u6620\u5c04\u5230",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/phased_builds/"},"Rush \u9636\u6bb5"),"\u3002Heft \u9636\u6bb5\u53ef\u80fd\u4f9d\u8d56\u4e8e\u5176\u4ed6\u9636\u6bb5\uff0c\u5f53\u6267\u884c\u591a\u4e2a\u9636\u6bb5\u65f6\uff0c\u6240\u6709\u9009\u5b9a\u7684\u9636\u6bb5\u5fc5\u987b\u5b8c\u6210\u6267\u884c\uff0c\u624d\u80fd\u6267\u884c\u4f9d\u8d56\u7684\u9636\u6bb5\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"heft.json"),"\u6587\u4ef6\u662f\u5b9a\u4e49\u7ed9\u5b9a\u9879\u76ee\u6216\u88c5\u5907\u7684\u9636\u6bb5\u548c\u4efb\u52a1\u7684\u5730\u65b9\u3002\u7531\u4e8e\u6b64\u6587\u4ef6\u5305\u542b\u9636\u6bb5\u548c\u4efb\u52a1\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u56e0\u6b64\u5b83\u5b9a\u4e49\u4e86\u6267\u884c Heft \u64cd\u4f5c\u7684\u64cd\u4f5c\u987a\u5e8f\u3002"),(0,l.kt)("h2",{id:"heft-\u64cd\u4f5c"},"Heft \u64cd\u4f5c"),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0e Rush \u7c7b\u4f3c\u7684\u6269\u5c55\u903b\u8f91\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"heft run"),"\u64cd\u4f5c\u6765\u6267\u884c\u4e00\u7ec4 Heft \u9636\u6bb5\u3002\u6b64\u64cd\u4f5c\u6309\u9636\u6bb5\u4f9d\u8d56\u5173\u7cfb\u7684\u987a\u5e8f\u6267\u884c\u4e00\u7ec4\u9009\u5b9a\u7684\u9636\u6bb5\u3002\u5982\u679c\u9009\u5b9a\u7684\u9636\u6bb5\u4e92\u4e0d\u4f9d\u8d56\uff0c\u90a3\u4e48\u5c06\u5e76\u884c\u6267\u884c\u5b83\u4eec\u3002\u9009\u62e9\u53c2\u6570\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--only")," - \u6267\u884c\u6307\u5b9a\u7684\u9636\u6bb5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--to")," - \u6267\u884c\u6307\u5b9a\u7684\u9636\u6bb5\u53ca\u5176\u6240\u6709\u4f9d\u8d56\u9879")),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5728\u547d\u4ee4\u540e\u9644\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"-- <\u53c2\u6570>"),"\u6765\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"heft run"),"\u64cd\u4f5c\u63d0\u4f9b\u4efb\u52a1\u548c\u9636\u6bb5\u7279\u5b9a\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"heft run --only build -- --clean"),"\u5c06\u4ec5\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u9636\u6bb5\uff0c\u5e76\u5728\u6267\u884c\u9636\u6bb5\u4e4b\u524d\u8fdb\u884c\u6e05\u7406\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0cHeft \u5c06\u4e3a\u5728",(0,l.kt)("strong",{parentName:"p"},"heft.json"),"\u914d\u7f6e\u4e2d\u6307\u5b9a\u7684\u6bcf\u4e2a\u9636\u6bb5\u751f\u6210\u64cd\u4f5c\u3002\u901a\u8fc7\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"heft <\u9636\u6bb5\u540d\u79f0>"),"\u6267\u884c\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u5e76\u8fd0\u884c Heft \u81f3\u6307\u5b9a\u7684\u9636\u6bb5\uff0c\u5305\u62ec\u6240\u6709\u9636\u6bb5\u4f9d\u8d56\u9879\u3002\u56e0\u6b64\uff0c\u8fd9\u4e9b\u63a8\u65ad\u7684 Heft \u64cd\u4f5c\u76f8\u5f53\u4e8e\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"heft run --to <\u9636\u6bb5\u540d\u79f0>"),"\uff0c\u5e76\u4e14\u65e8\u5728\u4f5c\u4e3a CLI \u7684\u7b80\u5199\u3002"),(0,l.kt)("h2",{id:"\u89c2\u5bdf\u6a21\u5f0f"},"\u89c2\u5bdf\u6a21\u5f0f"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u89c2\u5bdf\u6a21\u5f0f\u5df2\u6210\u4e3a Heft \u4e2d\u7684\u4e00\u9879\u4e00\u7b49\u516c\u6c11\u7279\u6027\u3002\u6240\u6709\u7684 Heft \u64cd\u4f5c\u90fd\u521b\u5efa\u4e86\u89c2\u5bdf\u6a21\u5f0f\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u8981\u5728\u89c2\u5bdf\u6a21\u5f0f\u4e0b\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"test"),"\u9636\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"heft test-watch"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"heft run-watch --to test"),"\u4e2d\u7684\u4efb\u4e00\u547d\u4ee4\u3002\u5728\u89c2\u5bdf\u6a21\u5f0f\u4e0b\u8fd0\u884c\u65f6\uff0cHeft \u66f4\u559c\u6b22",(0,l.kt)("inlineCode",{parentName:"p"},"runIncremental"),"\u94a9\u5b50\u800c\u975e",(0,l.kt)("inlineCode",{parentName:"p"},"run"),"\u94a9\u5b50\uff08\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"#heft%E4%BB%BB%E5%8A%A1%E6%8F%92%E4%BB%B6"},"Heft \u4efb\u52a1\u63d2\u4ef6"),"\uff09\u3002"),(0,l.kt)("h2",{id:"heftjson-\u7ed3\u6784"},"heft.json \u7ed3\u6784"),(0,l.kt)("p",null,"\u6240\u6709\u9636\u6bb5\u90fd\u5728\u9876\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"phasesByName"),"\u5c5e\u6027\u5185\u5b9a\u4e49\u3002\u6bcf\u4e2a\u9636\u6bb5\u53ef\u80fd\u4f1a\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"phaseDependencies"),"\uff0c\u4ee5\u5b9a\u4e49\u5728\u8fd0\u884c\u4e00\u7ec4 Heft \u9636\u6bb5\u65f6\u7684\u9636\u6bb5\u6267\u884c\u987a\u5e8f\u3002\u9636\u6bb5\u4e5f\u53ef\u4ee5\u63d0\u4f9b",(0,l.kt)("inlineCode",{parentName:"p"},"cleanFiles"),"\u9009\u9879\uff0c\u8be5\u9009\u9879\u63a5\u53d7\u4e00\u4e2a\u5220\u9664\u64cd\u4f5c\u6570\u7ec4\uff0c\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--clean"),"\u6807\u5fd7\u8fd0\u884c\u65f6\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5728\u9636\u6bb5\u89c4\u8303\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"tasksByName"),"\u5b9a\u4e49\u4e86\u5728\u6267\u884c\u9636\u6bb5\u65f6\u8fd0\u884c\u7684\u6240\u6709\u4efb\u52a1\u3002\u6bcf\u4e2a\u4efb\u52a1\u53ef\u80fd\u4f1a\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"taskDependencies"),"\uff0c\u4ee5\u5b9a\u4e49\u4efb\u52a1\u6267\u884c\u7684\u987a\u5e8f\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"taskDependencies"),"\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u4efb\u52a1\u5fc5\u987b\u5b58\u5728\u4e8e\u540c\u4e00\u9636\u6bb5\u5185\u3002\u51fa\u4e8e CLI \u53ef\u7528\u6027\u7684\u539f\u56e0\uff0c\u9636\u6bb5\u540d\u79f0\u3001\u4efb\u52a1\u540d\u79f0\u3001\u63d2\u4ef6\u540d\u79f0\u548c\u53c2\u6570\u8303\u56f4\uff0c\u90fd\u5fc5\u987b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"kebab-case"),"\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b9a\u4e49\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"test"),'\u9636\u6bb5\u7684"heft.json"\u6587\u4ef6\u793a\u4f8b\uff1a'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"heft.json"),"\u5b9a\u4e49\u9636\u6bb5\u548c\u4efb\u52a1\u7684\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n  "extends": "base-project/config/heft.json",\n\n  // "phasesByName"\u5b9a\u4e49\u4e86\u6240\u6709\u9636\u6bb5\uff0c\u6bcf\u4e2a\u9636\u6bb5\u5b9a\u4e49\u4e86\u8981\u8fd0\u884c\u7684\u4efb\u52a1\n  "phasesByName": {\n    // ("build"\u662f\u7528\u6237\u5b9a\u4e49\u7684\u540d\u79f0\uff0c\u4e0d\u662f\u6a21\u5f0f\u5b57\u6bb5)\n    "build": {\n      "phaseDescription": "\u5bf9\u6784\u5efa\u8f93\u51fa\u8fdb\u884c\u8f6c\u8bd1\u5e76\u8fd0\u884c\u4e00\u4e2a\u8bed\u6cd5\u68c0\u67e5\u5668",\n      "cleanFiles": [\n        {\n          "sourcePath": "temp-build-output"\n        }\n      ],\n      // "tasksByName"\u5b9a\u4e49\u4e86\u9636\u6bb5\u5185\u7684\u6240\u6709\u4efb\u52a1\n      "tasksByName": {\n        // ("typescript"\u662f\u7528\u6237\u5b9a\u4e49\u7684\u540d\u79f0\uff0c\u4e0d\u662f\u6a21\u5f0f\u5b57\u6bb5)\n        "typescript": {\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-typescript-plugin"\n          }\n        },\n        "lint": {\n          "taskDependencies": [ "typescript" ],\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-lint-plugin",\n            "pluginName": "eslint"\n          }\n        },\n        "copy-assets": {\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft",\n            "pluginName": "copy-files-plugin",\n            "options": {\n              "copyOperations": [\n                {\n                  // \u6ce8\u610f\uff1a\u5728\u4e4b\u524d\u7684HEFT\u7248\u672c\u4e2d\uff0c\u8fd9\u88ab\u79f0\u4e3a"sourceFolder"\n                  "sourcePath": "src/assets",\n                  "destinationFolders": [ "dist/assets" ]\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n\n    // ("test"\u662f\u7528\u6237\u5b9a\u4e49\u7684\u540d\u79f0\uff0c\u4e0d\u662f\u6a21\u5f0f\u5b57\u6bb5)\n    "test": {\n      "phaseDependencies": [ "build" ],\n      "phaseDescription": "\u8fd0\u884cJest\u6d4b\u8bd5\uff0c\u5982\u679c\u63d0\u4f9b\u7684\u8bdd\u3002",\n      "tasksByName": {\n        // ("jest"\u662f\u7528\u6237\u5b9a\u4e49\u7684\u540d\u79f0\uff0c\u4e0d\u662f\u6a21\u5f0f\u5b57\u6bb5)\n        "jest": {\n          "taskPlugin": {\n            "pluginPackage": "@rushstack/heft-jest-plugin"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u751f\u547d\u5468\u671f\u63d2\u4ef6\u5728\u9876\u5c42\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"heftPlugins"),"\u6570\u7ec4\u4e2d\u6307\u5b9a\u3002\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u5305\u540d\u548c\u63d2\u4ef6\u540d\u6765\u5f15\u7528\u3002\u53e6\u5916\uff0c\u5982\u679c\u4e00\u4e2a\u5305\u53ea\u5305\u542b\u4e00\u4e2a\u63d2\u4ef6\uff0c\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4ec5\u63d0\u4f9b\u5305\u540d\u6765\u5f15\u7528\uff0cHeft \u5c06\u89e3\u6790\u4e3a\u552f\u4e00\u5bfc\u51fa\u7684\u63d2\u4ef6\u3002\u751f\u547d\u5468\u671f\u63d2\u4ef6\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u9009\u9879\u6765\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"heft.json"),"\u52a0\u8f7d\u751f\u547d\u5468\u671f\u63d2\u4ef6\u7684\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",\n  "extends": "base-project/config/heft.json",\n\n  "heftPlugins": [\n    {\n      "pluginPackage": "@rushstack/heft-metrics-reporter",\n      "options": {\n        "disableMetrics": true\n      }\n    },\n    {\n      "pluginPackage": "@rushstack/heft-initialization-plugin",\n      "pluginName": "my-lifecycle-plugin"\n    }\n  ]\n\n  // (\u6b64\u5904\u4e5f\u53ef\u4ee5\u51fa\u73b0"phasesByName"\u90e8\u5206)\n}\n')),(0,l.kt)("h2",{id:"heftjson-\u5c5e\u6027\u7ee7\u627f\u6307\u4ee4"},"heft.json \u5c5e\u6027\u7ee7\u627f\u6307\u4ee4"),(0,l.kt)("p",null,"\u4ee5\u524d\uff0c",(0,l.kt)("strong",{parentName:"p"},"heft.json")," \u6587\u4ef6\u4e0e\u5176\u6269\u5c55\u7684\u57fa\u672c\u6587\u4ef6\u4e4b\u95f4\u7684\u5171\u4eab\u5c5e\u6027\u5c06\u5408\u5e76\u6570\u7ec4\u548c\u8986\u76d6\u5bf9\u8c61\u3002\u73b0\u5728\uff0c\u6570\u7ec4\u548c\u5bf9\u8c61\u90fd\u5c06\u5408\u5e76\uff0c\u5f53\u81ea\u5b9a\u4e49\u6269\u5c55\u57fa\u672c\u914d\u7f6e\u65f6\uff0c\u7b80\u5316\u4e86",(0,l.kt)("strong",{parentName:"p"},"heft.json"),"\u6587\u4ef6\u7684\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u914d\u7f6e\u6587\u4ef6\u89e3\u6790\u5668\u73b0\u5728\u652f\u6301",(0,l.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u7ee7\u627f\u6307\u4ee4"),"\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'"extends"'),"\u7ee7\u627f\u65f6 JSON \u5c5e\u6027\u5982\u4f55\u5408\u5e76\u3002\u8fd9\u4e2a\u7cfb\u7edf\u7531 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/heft-config-file"},"@rushstack/heft-config-file")," \u5e93\u5b9e\u73b0\uff0c\u5e76\u9002\u7528\u4e8e\u6240\u6709\u4f7f\u7528\u8be5\u89e3\u6790\u5668\u52a0\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u8986\u76d6\u662f\u901a\u8fc7\u4f7f\u7528\u5b9a\u4e49\u7ee7\u627f\u884c\u4e3a\u7684\u6307\u4ee4\u6765\u6307\u5b9a\u7684\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u6b63\u5728\u6269\u5c55\u4e00\u4e2a\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u5177\u6709\u9884\u5148\u5b9a\u4e49\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"exampleObject"),"\u503c\uff08\u4e00\u4e2a\u952e\u5bf9\u8c61\uff09\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"exampleArray"),"\u503c\uff08\u4e00\u4e2a\u6570\u7ec4\u5bf9\u8c61\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/example-config-file.schema.json",\n  "extends": "base-project/config/example-config-file.json",\n\n  "$exampleObject.inheritanceType": "merge", // \u6709\u6548\u9009\u62e9\u4e3a\uff1a"merge", "replace"\n  "exampleObject": {\n    "$exampleObjectMember.inheritanceType": "merge", // \u6709\u6548\u9009\u62e9\u4e3a\uff1a"merge", "replace"\n    "exampleObjectMember": { ... },\n\n    "$exampleArrayMember.inheritanceType": "append", // \u6709\u6548\u9009\u62e9\u4e3a\uff1a"append", "replace"\n    "exampleArrayMember": [ ... ]\n  },\n\n  "$exampleArray.inheritanceType": "replace", // \u6709\u6548\u9009\u62e9\u4e3a\uff1a"append", "replace"\n  "exampleArray": [ ... ]\n}\n')),(0,l.kt)("p",null,"\u4e00\u65e6\u5bf9\u8c61\u88ab\u8bbe\u7f6e\u4e3a\u8986\u76d6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"inheritanceType"),"\uff0c\u6240\u6709\u5b50\u5c5e\u6027\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"inheritanceType"),"\u503c\u5c06\u88ab\u5ffd\u7565\uff0c\u56e0\u4e3a\u6700\u9876\u5c42\u7684\u5bf9\u8c61\u5df2\u7ecf\u8986\u76d6\u4e86\u6240\u6709\u5b50\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\u662f\uff0c\u5408\u5e76\u952e\u5bf9\u8c61\u548c\u6570\u7ec4\u65f6\u4f7f\u7528\u4e86\u4e0d\u540c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"mergeBehavior"),"\u52a8\u8bcd\u3002\u8fd9\u662f\u4e3a\u4e86\u660e\u786e\u8868\u793a\u6570\u7ec4\u5c06\u6309\u539f\u6837\u8ffd\u52a0\uff0c\u5408\u5e76\u8fc7\u7a0b\u4e2d\u4e0d\u8fdb\u884c\u4efb\u4f55\u989d\u5916\u5904\u7406\uff08\u4f8b\u5982\uff0c\u5982\u679c\u6570\u7ec4\u5e94\u8be5\u662f\u4e00\u7ec4\uff0c\u90a3\u4e48\u4e0d\u8fdb\u884c\u91cd\u590d\uff09\u3002\u5982\u679c\u9700\u8981\u8fd9\u6837\u7684\u884c\u4e3a\uff0c\u53ef\u4ee5\u5728\u5b9e\u73b0\u7aef\u5b8c\u6210\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-config-file"),"\u5305\u4e2d\u5bf9\u6570\u7ec4\u8fdb\u884c\u91cd\u590d\u5904\u7406\u6ca1\u6709\u4ec0\u4e48\u610f\u4e49\uff0c\u56e0\u4e3a\u5bf9\u975e\u57fa\u5143\u5bf9\u8c61\u7684\u6570\u7ec4\u8fdb\u884c\u91cd\u590d\u5904\u7406\u5e76\u4e0d\u5bb9\u6613\u5b9a\u4e49\u3002"),(0,l.kt)("h2",{id:"\u5173\u8054\u7684-npm-\u5305"},"\u5173\u8054\u7684 NPM \u5305"),(0,l.kt)("p",null,"\u8bb8\u591a\u4ee5\u524d\u5185\u7f6e\u4e8e Heft \u7684\u4efb\u52a1\u73b0\u5df2\u88ab\u62c6\u5206\u5230\u5355\u72ec\u7684 NPM \u5305\u4e2d\u3002\u5b8c\u6574\u5217\u8868\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-typescript-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-lint-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-api-extractor-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-jest-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-sass-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-storybook-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-webpack4-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-webpack5-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-dev-cert-plugin"))),(0,l.kt)("p",null,"\u6b64\u5916\uff0cRushstack \u63d0\u4f9b\u7684 rigs \u5df2\u66f4\u65b0\u4ee5\u4e0e\u65b0\u7248\u672c\u7684 Heft \u517c\u5bb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-node-rig")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@rushstack/heft-web-rig"))),(0,l.kt)("h2",{id:"\u7f16\u5199-heft-\u63d2\u4ef6"},"\u7f16\u5199 Heft \u63d2\u4ef6"),(0,l.kt)("h3",{id:"\u751f\u547d\u5468\u671f\u63d2\u4ef6"},"\u751f\u547d\u5468\u671f\u63d2\u4ef6"),(0,l.kt)("p",null,"Heft \u751f\u547d\u5468\u671f\u63d2\u4ef6\u4e3a\u67d0\u4e9b\u4e0e\u751f\u547d\u5468\u671f\u76f8\u5173\u7684\u94a9\u5b50\u63d0\u4f9b\u5b9e\u73b0\u3002\u8fd9\u4e9b\u63d2\u4ef6\u5c06\u5728\u6240\u6709 Heft \u9636\u6bb5\u4e2d\u4f7f\u7528\uff0c\u56e0\u6b64\u9664\u4e86\u5c11\u6570\u7279\u5b9a\u60c5\u51b5\uff08\u5982\u7528\u4e8e\u6307\u6807\u62a5\u544a\uff09\u4e4b\u5916\uff0c\u5e94\u5f88\u5c11\u5728\u5916\u90e8\u4f7f\u7528\u3002Heft \u751f\u547d\u5468\u671f\u63d2\u4ef6\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"apply()")," \u65b9\u6cd5\uff0c\u63d2\u4ef6\u53ef\u4ee5\u5728\u6b64\u5904\u6302\u8f7d\u4ee5\u4e0b Tapable \u94a9\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toolStart")," - \u5728 Heft \u6267\u884c\u5f00\u59cb\u65f6\u63d0\u4f9b\u4e0e\u63d2\u4ef6\u76f8\u5173\u7684\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toolFinish")," - \u5728\u6240\u6709\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5728 Heft \u6267\u884c\u7ed3\u675f\u65f6\u63d0\u4f9b\u4e0e\u63d2\u4ef6\u76f8\u5173\u7684\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recordMetrics")," - \u5728\u6240\u6709\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5411\u63d2\u4ef6\u63d0\u4f9b\u6709\u5173 Heft \u8fd0\u884c\u7684\u6307\u6807\u4fe1\u606f")),(0,l.kt)("h3",{id:"\u4efb\u52a1\u63d2\u4ef6"},"\u4efb\u52a1\u63d2\u4ef6"),(0,l.kt)("p",null,"Heft \u4efb\u52a1\u63d2\u4ef6\u4e3a Heft \u4efb\u52a1\u63d0\u4f9b\u5b9e\u73b0\u3002Heft \u63d2\u4ef6\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"apply()")," \u65b9\u6cd5\uff0c\u63d2\u4ef6\u53ef\u4ee5\u5728\u6b64\u5904\u6302\u8f7d\u4ee5\u4e0b Tapable \u94a9\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"registerFileOperations")," - \u5728\u63d2\u4ef6\u9996\u6b21\u8fd0\u884c\u524d\u786e\u5207\u5730\u8c03\u7528\u4e00\u6b21\u3002\u5141\u8bb8\u63d2\u4ef6\u4f7f\u7528\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"copyFiles")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"deleteFiles")," Heft \u4e8b\u4ef6\u76f8\u540c\u7684\u9009\u9879\u6ce8\u518c\u590d\u5236\u6216\u5220\u9664\u64cd\u4f5c\uff08\u8fd9\u4e2a\u94a9\u5b50\u5c31\u662f\u5b9e\u73b0\u8fd9\u4e9b\u4e8b\u4ef6\u7684\u65b9\u5f0f\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run")," - \u63d0\u4f9b\u4e0e\u63d2\u4ef6\u76f8\u5173\u7684\u4efb\u52a1\u529f\u80fd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runIncremental")," - \u5728\u89c2\u5bdf\u6a21\u5f0f\u4e0b\u63d0\u4f9b\u4e0e\u63d2\u4ef6\u76f8\u5173\u7684\u4efb\u52a1\u529f\u80fd\u3002\u5982\u679c\u6ca1\u6709\u4e3a\u4efb\u52a1\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"runIncremental")," \u5b9e\u73b0\uff0cHeft \u5c06\u50cf\u5f80\u5e38\u4e00\u6837\u56de\u9000\u5230\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"run")," \u94a9\u5b50\u3002\u9009\u9879\u7ed3\u6784\u5305\u62ec\u4e24\u4e2a\u7528\u4e8e\u652f\u6301\u89c2\u5bdf\u64cd\u4f5c\u7684\u51fd\u6570\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"requestRun()")," - \u8fd9\u4e2a\u51fd\u6570\u8bf7\u6c42 Heft \u8fd0\u884c\u65f6\u5b89\u6392\u63d2\u4ef6\u6240\u5c5e\u4efb\u52a1\u7684\u65b0\u8fd0\u884c\uff0c\u53ef\u80fd\u4f1a\u53d6\u6d88\u5f53\u524d\u7684\u6784\u5efa\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"watchGlobAsync(patterns, options)")," - \u8fd9\u4e2a\u51fd\u6570\u662f\u4e3a\u4e86\u65b9\u4fbf\u5e38\u89c1\u7684\u76d1\u89c6 glob \u53d8\u5316\u7684\u60c5\u51b5\u800c\u63d0\u4f9b\u7684\u3002\u5b83\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"Map<string, IWatchedFileState>"),"\uff0c\u8be5\u6620\u5c04\u679a\u4e3e\u4e86 glob \u9009\u5b9a\u7684\u6587\u4ef6\uff08\u6216\u6587\u4ef6\u5939\uff09\u5217\u8868\uff0c\u4ee5\u53ca\u5b83\u4eec\u81ea")))),(0,l.kt)("h3",{id:"heft-pluginjson"},"heft-plugin.json"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"heft-plugin.json")," \u914d\u7f6e\u6587\u4ef6\u662f\u4e00\u4e2a\u65b0\u7684\uff0c\u5fc5\u9700\u7684\u6e05\u5355\u6587\u4ef6\uff0c\u6240\u6709 Heft \u63d2\u4ef6\u5305\u7684\u5305\u6587\u4ef6\u5939\u4e2d\u90fd\u5fc5\u987b\u5b58\u5728\u3002\u6b64\u6587\u4ef6\u7528\u4e8e\u591a\u79cd\u7528\u9014\uff0c\u5305\u62ec\u5b9a\u4e49\u6240\u6709\u5305\u542b\u7684\u751f\u547d\u5468\u671f\u6216\u4efb\u52a1\u63d2\u4ef6\uff0c\u5b9a\u4e49\u6240\u6709\u63d2\u4ef6\u7279\u5b9a\u7684 CLI \u53c2\u6570\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u53ef\u9009\u7684\u6a21\u5f0f\u6587\u4ef6\uff0c\u4ee5\u9a8c\u8bc1\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"heft.json")," \u4f20\u9012\u7684\u63d2\u4ef6\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5b9a\u4e49\u751f\u547d\u5468\u671f\u63d2\u4ef6\u548c\u4efb\u52a1\u63d2\u4ef6\u7684\u793a\u4f8b ",(0,l.kt)("strong",{parentName:"p"},"heft-plugin.json")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft-plugin.schema.json",\n\n  "lifecyclePlugins": [\n    {\n      "pluginName": "my-lifecycle-plugin",\n      "entryPoint": "./lib/MyLifecyclePlugin.js",\n      "optionsSchema": "./lib/schemas/mylifecycleplugin.schema.json",\n      "parameterScope": "my-lifecycle",\n      "parameters": [\n        {\n          "parameterKind": "string",\n          "longName": "--my-string",\n          "description": "\u2026",\n          "argumentName": "ARG_NAME",\n          "required": false\n        }\n      ]\n    }\n  ],\n\n  "taskPlugins": [\n    {\n      "pluginName": "my-task-plugin",\n      "entryPoint": "./lib/MyTaskPlugin.js",\n      "optionsSchema": "./lib/schemas/mytaskplugin.schema.json",\n      "parameterScope": "my-task",\n      "parameters": [\n        {\n          "parameterKind": "string",\n          "longName": "--my-other-string",\n          "description": "\u2026",\n          "argumentName": "ARG_NAME",\n          "required": false\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"\u8de8\u63d2\u4ef6\u4ea4\u4e92"},"\u8de8\u63d2\u4ef6\u4ea4\u4e92"),(0,l.kt)("p",null,"\u6709\u65f6\u63d2\u4ef6\u4e4b\u95f4\u7684\u4ea4\u6d41\u4f1a\u5f88\u6709\u5e2e\u52a9\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-lint-plugin")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-typescript-plugin")," \u5171\u4eab\u4e00\u4e2a TypeScript \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ts.Program")," \u5bf9\u8c61\uff0c\u8fd9\u6781\u5927\u5730\u63d0\u9ad8\u4e86\u6784\u5efa\u65f6\u95f4\uff0c\u56e0\u4e3a\u907f\u514d\u4e86\u4e24\u6b21\u8ba1\u7b97\u7f16\u8bd1\u5668\u7684\u8bed\u4e49\u5206\u6790\u3002\u8fd9\u79cd\u4f18\u5316\u5e26\u6765\u4e86\u4e00\u4e2a\u7ea6\u675f\uff0c\u90a3\u5c31\u662f\u4efb\u52a1\u5fc5\u987b\u5728\u60a8\u7684 ",(0,l.kt)("strong",{parentName:"p"},"heft.json")," \u914d\u7f6e\u4e2d\u5171\u4eab\u540c\u4e00\u4e2a Heft \u9636\u6bb5\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1fHeft \u63d2\u4ef6\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"requestAccessToPluginByName()")," API \u6765\u8bbf\u95ee\u8bf7\u6c42\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u63d2\u4ef6\u8bbf\u95ee\u5668"),"\u3002\u8bbf\u95ee\u5668\u662f\u63d2\u4ef6\u63d0\u4f9b\u7ed9\u5916\u90e8\u4f7f\u7528\u7684\u5bf9\u8c61\uff0c\u662f\u5206\u4eab\u63d2\u4ef6\u7279\u5b9a\u4fe1\u606f\u6216\u63d0\u4f9b\u989d\u5916\u63d2\u4ef6\u529f\u80fd\u7684\u94a9\u5b50\u7684\u7406\u60f3\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,"\u5728\u9636\u6bb5\u6267\u884c\u5f00\u59cb\u65f6\uff0c\u6e05\u7406\u94a9\u5b50\u6267\u884c\u4e4b\u524d\uff0c\u6ee1\u8db3\u8bbf\u95ee\u8bf7\u6c42\u3002\u5982\u679c\u8bf7\u6c42\u7684\u63d2\u4ef6\u6ca1\u6709\u63d0\u4f9b\u8bbf\u95ee\u5668\uff0c\u5c06\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u6307\u51fa\u7f3a\u5c11\u8bbf\u95ee\u5668\u7684\u63d2\u4ef6\u3002\u7136\u800c\uff0c\u5982\u679c\u5b8c\u5168\u6ca1\u6709\u8bf7\u6c42\u7684\u63d2\u4ef6\uff0c\u8bbf\u95ee\u8bf7\u6c42\u5c06\u9ed8\u9ed8\u5730\u5931\u8d25\u3002\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u5141\u8bb8\u5bf9\u5916\u90e8\u63d2\u4ef6\u8fdb\u884c\u975e\u5fc5\u9700\u7684\u96c6\u6210\u3002\u56e0\u6b64\uff0c\u5b9e\u73b0\u8de8\u63d2\u4ef6\u4ea4\u4e92\u7684\u65b9\u5f0f\u5f88\u91cd\u8981\uff0c\u4ee5\u671f\u671b\u8fd9\u79cd\u60c5\u51b5\uff0c\u5e76\u4f18\u96c5\u5730\u5904\u7406\uff0c\u6216\u8005\u629b\u51fa\u4e00\u4e2a\u6709\u5e2e\u52a9\u7684\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u53ef\u8bbf\u95ee\u7684\u63d2\u4ef6\u57fa\u4e8e\u8303\u56f4\u8fdb\u884c\u9650\u5236\u3002\u5bf9\u4e8e\u751f\u547d\u5468\u671f\u63d2\u4ef6\uff0c\u60a8\u53ef\u4ee5\u8bf7\u6c42\u8bbf\u95ee\u6dfb\u52a0\u5230 Heft \u914d\u7f6e\u4e2d\u7684\u4efb\u4f55\u5176\u4ed6\u751f\u547d\u5468\u671f\u63d2\u4ef6\u3002\u5bf9\u4e8e\u4efb\u52a1\u63d2\u4ef6\uff0c\u60a8\u53ef\u4ee5\u8bf7\u6c42\u8bbf\u95ee Heft \u914d\u7f6e\u4e2d\u76f8\u540c\u9636\u6bb5\u5185\u7684\u4efb\u4f55\u5176\u4ed6\u4efb\u52a1\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49-cli-\u53c2\u6570"},"\u81ea\u5b9a\u4e49 CLI \u53c2\u6570"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"p"},"heft-plugin.json")," \u5b9a\u4e49 CLI \u53c2\u6570\uff0c\u800c\u5b9a\u4e49\u7684\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"HeftTaskSession.parameters")," API \u5728\u63d2\u4ef6\u4e2d\u4f7f\u7528\u3002\u6b64\u5916\uff0c\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," \u53c2\u6570\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"heft test --help")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"heft run --to test -- --help"),"\uff09\u65f6\uff0c\u73b0\u5728\u53ef\u4ee5\u5728 CLI \u4e2d\u53d1\u73b0\u9009\u5b9a\u7684 Heft \u9636\u6bb5\u7684\u6240\u6709\u63d2\u4ef6\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u4f7f\u7528\u53ef\u9009\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"parameterScope"),' \u5728 CLI \u4e0a\u81ea\u52a8\u8fdb\u884c "\u53bb\u91cd"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c',(0,l.kt)("strong",{parentName:"p"},"heft-plugin.json")," \u4e2d\u5b9a\u4e49\u7684\u53c2\u6570\u5c06\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--<parameterName>")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--<parameterScope>:<parameterName>"),' \u5728 CLI \u4e0a\u53ef\u7528\u3002\u5f53\u591a\u4e2a\u63d2\u4ef6\u63d0\u4f9b\u76f8\u540c\u7684\u53c2\u6570\u65f6\uff0c\u4e3a\u4e86 "\u53bb\u91cd" \u51b2\u7a81\u7684\u53c2\u6570\uff0c\u53ea\u6709\u540e\u8005\u53c2\u6570\u5728 CLI \u4e0a\u53ef\u7528\u3002\u4f8b\u5982\uff0c\u5982\u679c PluginA \u5177\u6709\u53c2\u6570\u8303\u56f4 "PluginA" \u5b9a\u4e49 ',(0,l.kt)("inlineCode",{parentName:"p"},"--parameter"),'\uff0c\u5e76\u4e14 PluginB \u4e5f\u4f7f\u7528\u53c2\u6570\u8303\u56f4 "PluginB" \u5b9a\u4e49 ',(0,l.kt)("inlineCode",{parentName:"p"},"--parameter"),"\uff0c\u90a3\u4e48\u53c2\u6570 ",(0,l.kt)("em",{parentName:"p"},"\u53ea\u80fd")," \u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"--PluginA:parameter")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"--PluginB:parameter")," \u53ef\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5bf9\u8fd9\u4e9b\u5bf9 Heft \u7684\u66f4\u6539\u6709\u4efb\u4f55\u95ee\u9898\u6216\u53cd\u9988\uff0c\u8bf7",(0,l.kt)("a",{parentName:"p",href:"https://rushstack.zulipchat.com/#narrow/stream/262522-heft"},"\u5728\u804a\u5929\u5ba4\u4e2d\u63d0\u95ee"),"\u6216",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/issues/new?assignees=&labels=&template=heft.md&title=%5Bheft%2Frc%2f0%5D+"},"\u63d0\u4ea4\u4e00\u4e2a\u95ee\u9898"),"\u3002"))}k.isMDXComponent=!0}}]);