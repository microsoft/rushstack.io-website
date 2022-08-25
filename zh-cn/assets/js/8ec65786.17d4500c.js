"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[9263],{158:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(6393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(216),a=(r(6393),r(158));const i={title:"Heft \u67b6\u6784"},o=void 0,l={unversionedId:"pages/heft/architecture",id:"pages/heft/architecture",title:"Heft \u67b6\u6784",description:"\u672f\u8bed",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/heft/architecture.md",sourceDirName:"pages/heft",slug:"/pages/heft/architecture",permalink:"/zh-cn/pages/heft/architecture",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft/architecture.md",tags:[],version:"current",frontMatter:{title:"Heft \u67b6\u6784"},sidebar:"docsSidebar",previous:{title:"Heft \u4ecb\u7ecd",permalink:"/zh-cn/pages/heft/overview"},next:{title:"\u6838\u5fc3\u63d2\u4ef6",permalink:"/zh-cn/pages/heft/core_plugins"}},p={},c=[{value:"\u672f\u8bed",id:"\u672f\u8bed",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u672f\u8bed"},"\u672f\u8bed"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6982\u5ff5\u5bf9\u7406\u89e3 Heft \u7684\u8bbe\u8ba1\u5f88\u91cd\u8981\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"action")," - Heft \u547d\u4ee4\u884c\u52a8\u4f5c\uff08\u6839\u636e Rush Stack \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/ts-command-line"},"ts-command-line"),' \u5b9a\u4e49\uff09\u3002\u4f8b\u5982\uff0c"test" \u5c31\u662f ',(0,a.kt)("inlineCode",{parentName:"li"},"heft test --clean"),' \u547d\u4ee4\u4e2d\u7684 "action"\u3002 action \u662f\u4e0e\u7528\u6237\u4e4b\u95f4\u7684\u4ea4\u4e92\uff0c\u662f\u4e3a\u5f00\u53d1\u8005\u91cf\u8eab\u5b9a\u5236\u7684\u5b8f\u3002'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"plugin")," - \u5b83\u662f\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"li"},"TypeScript")," \u7c7b\uff0c\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"IHeftPlugin")," \u63a5\u53e3\u4e3a\u57fa\u7840\u6765\u5b9e\u73b0\u4efb\u610f\u7684\u529f\u80fd\u3002plugin \u4f1a\u6839\u636e Heft \u7684\u914d\u7f6e\u6765\u9009\u62e9\u6027\u5730\u52a0\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"plugin package")," - \u8fd9\u4e2a NPM \u5305\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u6216\u591a\u4e2a Heft \u63d2\u4ef6\u3002\u4f60\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684 NPM \u5305\u5e76\u5bfc\u51fa\u81ea\u5b9a\u4e49\u63d2\u4ef6\u63d0\u4f9b\u7ed9 Heft \u4f7f\u7528\u3002\u67e5\u770b",(0,a.kt)("a",{parentName:"li",href:"/zh-cn/pages/heft/core_plugins"},"\u6838\u5fc3\u63d2\u4ef6"),"\u4e00\u6587\u6765\u5bfb\u627e\u66f4\u591a\u7684\u5185\u7f6e\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hook")," - Heft \u501f\u52a9 Webpack \u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/tapable"},"tapable")," \u7cfb\u7edf\u6765\u5728\u6784\u5efa\u671f\u95f4\u4e3a\u5404\u79cd\u4e8b\u4ef6\u6ce8\u518c\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"task")," - \u4e00\u4e2a Heft \u6982\u5ff5\uff0c\u5b83\u63cf\u8ff0\u4e86\u88ab\u4e00\u4e9b\u5de5\u5177\u8c03\u7528\u540e\u5e26\u6709\u8f93\u51fa\u7684\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Typescript")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"eslint")," \u4fbf\u662f Heft \u7684\u4efb\u52a1\uff0c\u4e0d\u540c\u4e8e\u5176\u4ed6\u7cfb\u7edf\uff0cHeft \u4e2d\u7684\u4efb\u52a1\u5e76\u4e0d\u662f\u771f\u5b9e\u7684\u4ee3\u7801\u6216\u7ec4\u4ef6\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"TypeScripPlugin")," \u5bf9\u8c61\u5b9e\u73b0\u4e86\u4e09\u4e2a\u72ec\u7acb\u7684\u4efb\u52a1\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"typescript"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"eslint")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"tslint"),"\uff09\uff0c\u5b83\u4eec\u7684\u4ee3\u7801\u662f\u6574\u5408\u5728\u4e00\u8d77\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stage"),' - \u5305\u62ec\u591a\u4e2a Heft \u4efb\u52a1\u7684\u5de5\u4f5c\u5e8f\u5217\u3002\u5f53\u8c03\u7528 Heft \u65f6\uff0c\u547d\u4ee4\u884c\u4f1a\u9009\u62e9\u4e00\u7cfb\u5217\u6709\u7528\u7684 stages \u6765\u8fd0\u884c\u3002stage \u4e5f\u53ef\u4ee5\u7528\u6765\u5206\u7ec4\u65e5\u5fd7\u8f93\u51fa\u3002\u4f8b\u5982\uff0cHeft \u7684 stage \u53ef\u4ee5\u662f "clean", "build", "test"\u3002'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rig package")," - \u4e00\u4e2a\u63d0\u4f9b\u4e86 Heft \u914d\u7f6e\u7684 NPM \u5305\uff0c\u8fd9\u4e2a\u5305\u53ef\u4ee5\u5728\u591a\u4e2a\u6709\u7c7b\u4f3c\u9700\u6c42\u7684\u9879\u76ee\u5185\u91cd\u590d\u4f7f\u7528\u3002\u5173\u4e8e\u8bbe\u8ba1\u7ec6\u8282\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," \u4e00\u6587\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rig profile")," - \u4ece rig \u5305\u4e2d\u83b7\u53d6\u5230\u7684\u547d\u540d\u914d\u7f6e\u3002\u4e00\u4e2a rig \u5305\u53ef\u4ee5\u63d0\u4f9b\u591a\u4e2a\u914d\u7f6e\u3002\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u4e3a\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u548c\u5e93\u9879\u76ee\u63d0\u4f9b\u4e0d\u540c\u7684\u914d\u7f6e\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Future plans:")," \u73b0\u4eca Rush \u547d\u4ee4\u53ea\u80fd\u8c03\u7528 Heft action\u3002 \u7136\u800c\uff0c\u672a\u6765\u6211\u4eec\u60f3\u5b9e\u73b0\u4e00\u4e2a\u201c\u591a\u9636\u6bb5\u6784\u5efa\u201d\u7684\u529f\u80fd\uff0c\u8be5\u529f\u80fd\u53ef\u4ee5\u4f7f Rush \u80fd\u591f\u534f\u8c03\u66f4\u7ec6\u5316\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002\u4f8b\u5982\uff0c\u4e00\u65e6\u4e00\u4e2a\u5e93\u7684\u4f9d\u8d56\u5df2\u7ecf\u5b8c\u6210\u7f16\u8bd1\u5e76\u8f93\u51fa\uff0cRush \u53ef\u4ee5\u5728\u8be5\u5e93\u8dd1\u5b8c\u5b83\u7684\u5355\u5143\u6d4b\u8bd5\u4e4b\u524d\u5f00\u59cb\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u3002\u8fd9\u4e2a\u529f\u80fd\u4f1a\u5e26\u6765\u4e00\u4e9b\u989d\u5916\u7684\u672f\u8bed\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"command")," - \u4e00\u4e2a\u5168\u5c40\u5b9a\u4e49\u7684 monorepo \u4ed3\u5e93\u4e2d\u7684\u547d\u4ee4\u5728 ",(0,a.kt)("a",{parentName:"li",href:"https://rushjs.io/pages/configs/command-line_json/"},"command-line.json")," \u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"phase"),' - \u4e0e Heft \u7684 "stage" \u7c7b\u4f3c\uff0c \u4f46\u662f\u5b83\u7684\u5404\u4e2a\u9636\u6bb5\u4f1a\u88ab\u5b9a\u4e49\u5728\u5168\u5c40\uff0cRush \u53ef\u4ee5\u5bf9\u5176\u4f9d\u8d56\u8fdb\u884c\u5efa\u6a21\u3002'))))}u.isMDXComponent=!0}}]);