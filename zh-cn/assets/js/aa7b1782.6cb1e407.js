"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[4410],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||k[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(9122),a=(n(6393),n(158));const i={title:'"eslint" task'},s=void 0,l={unversionedId:"pages/heft_tasks/eslint",id:"pages/heft_tasks/eslint",title:'"eslint" task',description:"\u8be5\u4efb\u52a1\u4f1a\u8c03\u7528 ESLint, \u5176\u4f5c\u7528\u662f\u68c0\u67e5\u4ee3\u7801\u4e2d\u5e38\u89c1\u9519\u8bef\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/heft_tasks/eslint.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/eslint",permalink:"/zh-cn/pages/heft_tasks/eslint",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_tasks/eslint.md",tags:[],version:"current",frontMatter:{title:'"eslint" task'},sidebar:"docsSidebar",previous:{title:'"delete-globs" task',permalink:"/zh-cn/pages/heft_tasks/delete-globs"},next:{title:'"jest" task',permalink:"/zh-cn/pages/heft_tasks/jest"}},p={},o=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"package.json dependencies",id:"packagejson-dependencies",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"Profiles and mixins",id:"profiles-and-mixins",level:3}],c={toc:o},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8be5\u4efb\u52a1\u4f1a\u8c03\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),", \u5176\u4f5c\u7528\u662f\u68c0\u67e5\u4ee3\u7801\u4e2d\u5e38\u89c1\u9519\u8bef\u3002"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"Rush Stack \u63a8\u8350\u4f7f\u7528 ESLint \u4e0e\u5176\u4ed6\u51e0\u4e2a\u5e93\u4f5c\u4e3a\u4ee3\u7801\u6821\u9a8c\u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/enabling_prettier/"},"Prettier"),": Prettier \u7528\u6765\u7ba1\u7406\u7410\u788e\u7684\u8bed\u6cd5\uff0c\u4f8b\u5982\u7a7a\u683c\u3001\u9017\u53f7\u3001\u5206\u53f7\u7b49\u3002\u5b83\u4eec\u5e76\u4e0d\u5f71\u54cd\u4ee3\u7801\u8bed\u4e49\uff0c\u6211\u4eec\u4e5f\u4e0d\u4f1a\u56e0\u6b64\u6765\u62a5\u9519\u5f71\u54cd\u5f00\u53d1\u8005\uff0c\u5b83\u4eec\u4e5f\u4e0d\u662f\u6784\u5efa\u7684\u4e00\u90e8\u5206\u3002\u76f8\u53cd\uff0cPrettier \u4f1a\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," \u7684\u94a9\u5b50\u6765\u81ea\u52a8\u683c\u5f0f\u5316\u4ee3\u7801\u3002\u53ef\u4ee5\u67e5\u770b Rush \u89c2\u671b\u4e2d\u7684",(0,a.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/enabling_prettier/"},"\u542f\u7528 Prettier")," \u4e00\u6587\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft_tasks/typescript"},"TypeScript"),": TypeScript \u7f16\u8bd1\u5668\u6267\u884c\u590d\u6742\u7684\u7c7b\u578b\u68c0\u67e5\u548c\u8bed\u4e49\u5206\u6790\uff0c\u8fd9\u662f\u4fdd\u8bc1\u7a0b\u5e8f\u6b63\u786e\u6027\u7684\u91cd\u8981\u4fdd\u969c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ESLint"),": lint \u4f7f\u7528\u989d\u5916\u7684\u8bed\u6cd5\u89c4\u5219\u6765\u8f85\u52a9\u7f16\u8bd1\u5668\u68c0\u67e5\u4ee3\u7801\uff0c\u8fd9\u4e9b\u89c4\u5219\u5341\u5206\u4e3b\u89c2\u5e76\u9ad8\u5ea6\u53ef\u5b9a\u5236\u3002TypeScript \u53ef\u80fd\u4f1a\u68c0\u67e5\u5230 ",(0,a.kt)("em",{parentName:"p"},'"\u51fd\u6570\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f46\u662f\u88ab\u58f0\u660e\u79f0\u4e86\u4e00\u4e2a\u6570\u5b57"'),"\uff0c\u4f46\u662f ESLint \u53ef\u80fd\u4f1a\u68c0\u67e5\u5230 ",(0,a.kt)("em",{parentName:"p"},'"\u8fd9\u4e2a\u7c7b\u540d\u5e94\u8be5\u4f7f\u7528\u5e15\u65af\u5361\u547d\u540d\u6cd5\u800c\u4e0d\u662f\u9a7c\u5cf0\u547d\u540d\u6cd5"'),"\u3002\u4e0d\u540c\u4e8e Prettier, ESLint \u4fee\u590d\u95ee\u9898\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u5927\u7684\u4ee3\u7801\u53d8\u66f4\uff0c\u5e76\u4e14\u751a\u81f3\u53ef\u80fd\u4f1a\u7834\u574f API \u4e00\u81f4\u6027\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft_tasks/api-extractor"},"API Extractor"),": \u989d\u5916\u6821\u9a8c\u5e93\u5305\u7684\u6709\u6548\u6027\u3002\u5b83\u53ef\u4ee5\u786e\u4fdd API \u6b63\u5e38\u5de5\u4f5c\u5e76\u5177\u6709\u6b63\u786e\u7684\u6587\u6863\u3002"))),(0,a.kt)("p",null,"\u5c3d\u7ba1\u5efa\u8bae\u4ee5\u4e0a\u8ff0\u65b9\u5f0f\u914d\u7f6e\u4f60\u7684\u6784\u5efa\u7cfb\u7edf\uff0c\u4f46 Heft \u5e76\u4e0d\u8981\u6c42\u91c7\u7528\u7279\u5b9a\u7684\u65b9\u6cd5\u3002\u4e0a\u8ff0\u7ec4\u4ef6\u4e2d\u90fd\u662f\u53ef\u9009\u7684\uff0c\u800c\u4e14\u5176\u4ed6\u914d\u7f6e\u4e5f\u662f\u5141\u8bb8\u7684\u3002\u4f8b\u5982\uff0c\u65e7\u7684\u4ee3\u7801\u5e93\u53ef\u80fd\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft_tasks/tslint"},"TSLint")," \u6765\u4ee3\u66ff ESLint."),(0,a.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,a.kt)("p",null,"\u4f60\u9700\u8981\u5728\u9879\u76ee\u5185\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," \u5305\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package eslint --dev\n")),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ece ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/pages/heft_tutorials/heft_and_rush"},"\u4e0e Rush \u4ea4\u4e92"),' \u4e00\u6587\u4e2d\u63cf\u8ff0\u7684 "rig package" \u4e2d\u52a0\u8f7d\u6765\u907f\u514d\u6dfb\u52a0\u8be5\u4f9d\u8d56\u3002\u7136\u800c\uff0c\u5982\u679c\u4f60\u4f7f\u7528 ',(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"VS Code \u5185\u7684 ESLint \u63d2\u4ef6"),"\uff0c\u5b83\u5c06\u5c1d\u8bd5\u4ece\u4f60\u7684\u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u89e3\u6790 ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint"),".\u6b64\u65f6\u9700\u8981\u5c06 ESLint \u6dfb\u52a0\u5230 ",(0,a.kt)("strong",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d\u6765\u786e\u4fdd\u63d2\u4ef6\u53ef\u7528\u3002(\u8be5\u6269\u5c55\u4e5f\u80fd\u591f\u52a0\u8f7d\u4e00\u4e2a\u5168\u5c40\u5b89\u88c5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint"),", \u4f46\u7248\u672c\u53ef\u80fd\u4e0e\u672c\u5730\u5206\u652f\u6240\u8981\u6c42\u7684\u7248\u672c\u4e0d\u4e00\u81f4)\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u8be5\u4efb\u52a1\u5728 Heft \u5185\u5e76\u6ca1\u6709\u4e00\u4e2a\u4e13\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u3002Heft \u4f1a\u5bfb\u627e ESLint \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u5c3d\u7ba1 ESLint \u652f\u6301 ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring#configuration-file-formats"},"7 \u79cd\u4e0d\u540c"),"\u7684\u540d\u79f0\u3001\u683c\u5f0f\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f46 Heft \u53ea\u4f1a\u5bfb\u627e ",(0,a.kt)("strong",{parentName:"p"},'".eslintrc.js "'),". \u8fd9\u6709\u51e0\u4e2a\u6709\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e00\u81f4\u6027\uff1a"),"\u4f7f\u7528\u7edf\u4e00\u7684 ",(0,a.kt)("strong",{parentName:"li"},'".eslintrc.js "')," \u53ef\u4ee5\u7b80\u5316\u641c\u7d22\u6587\u4ef6\u3001\u6279\u91cf\u7f16\u8f91\u3001\u5728\u9879\u76ee\u4e4b\u95f4\u590d\u5236\u914d\u7f6e\u66f4\u65b9\u4fbf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e34\u65f6\u89e3\u51b3\u529e\u6cd5\uff1a"),"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},".js")," \u6269\u5c55\u53ef\u4ee5\u5728\u6587\u4ef6\u5185\u4f7f\u7528 JavaScript \u8868\u8fbe\u5f0f\u3002\u4f46\u7531\u4e8e\u8868\u8fbe\u96be\u4ee5\u9a8c\u8bc1\u3001\u4f9d\u8d56\u5bf9\u7f13\u5b58\u4e0d\u53ef\u89c1\u7684\u73af\u5883\u7b49\u539f\u56e0\uff0c\u901a\u5e38\u4e0d\u4f7f\u7528\u8be5\u65b9\u6cd5\u3002\u7136\u800c\uff0c\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0cESLint \u7684\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u6709\u4e00\u4e9b\u9650\u5236\u53ea\u80fd\u901a\u8fc7\u811a\u672c\u6765\u89e3\u51b3\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"__dirname")," \u6765\u89e3\u6790\u6587\u4ef6\u8def\u5f84\uff09\u3002")),(0,a.kt)("p",null,"\u4e0d\u5efa\u8bae\u5c06 ",(0,a.kt)("strong",{parentName:"p"},".eslintrc.js")," \u653e\u5728 monorepo \u6839\u76ee\u5f55\u4e2d\uff0c\u56e0\u4e3a\u5b83\u8fdd\u53cd\u4e86 Rush \u7684\u539f\u5219\uff0c\u5373\u9879\u76ee\u72ec\u7acb\u3001\u4e14\u5bb9\u6613\u5728 monorepos \u4e4b\u95f4\u79fb\u52a8\u3002"),(0,a.kt)("p",null,"\u76f8\u53cd\uff0c\u6bcf\u4e2a\u9879\u76ee\u5e94\u8be5\u6709\u81ea\u5df1\u7684 ","*",(0,a.kt)("em",{parentName:"p"},".eslintrc.js")," ","*","\u6587\u4ef6\u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@rushstack/eslint-config")," \u6765\u5171\u4eab\u914d\u7f6e\uff0c\u5b83\u662f\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint"},"typescript-eslint")," \u89c4\u5219\u96c6\u6765\u4e13\u95e8\u4e3a\u5927\u89c4\u6a21\u7684 monorepos \u5b9a\u5236\u7684\u3002\u540c\u65f6\uff0c\u5982\u679c\u4f60\u9700\u8981\u989d\u5916\u7684\u81ea\u5b9a\u4e49 lint \u89c4\u5219\uff0c\u5efa\u8bae\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/eslint-config")," \u7684\u81ea\u5b9a\u4e49\u7684 NPM \u5305\u3002"),(0,a.kt)("p",null,"\u91c7\u7528\u4e0a\u8ff0\u65b9\u6cd5\uff0cESLint \u914d\u7f6e\u6587\u4ef6\u7684\u5185\u5bb9\u4f1a\u975e\u5e38\u5c11\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"<","project folder",">","/.eslintrc.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u7528\u4e8e\u89e3\u51b3 https://github.com/eslint/eslint/issues/3458\nrequire('@rushstack/eslint-config/patch/modern-module-resolution');\n\nmodule.exports = {\n  extends: ['@rushstack/eslint-config/profile/node'],\n  parserOptions: { tsconfigRootDir: __dirname }\n};\n")),(0,a.kt)("h3",{id:"profiles-and-mixins"},"Profiles and mixins"),(0,a.kt)("p",null,"\u76ee\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/eslint-config")," \u63d0\u4f9b\u4e86\u4e09\u79cd\u4e0d\u540c\u7684",(0,a.kt)("strong",{parentName:"p"},"\u683c\u5f0f\u5316\u914d\u7f6e"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/profile/node"),"- \u4e3a Node.js \u670d\u52a1\u51c6\u5907"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/profile/node-trusted-tool")," - \u4e3a Node.js \u5de5\u5177\u51c6\u5907"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/profile/web-app")," - \u4e3a\u6d4f\u89c8\u5668\u5e94\u7528\u51c6\u5907\u3002")),(0,a.kt)("p",null,"\u5b83\u4e5f\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u683c\u5f0f\u5316\u89c4\u5219\u6df7\u7528"),"\uff0c\u6309\u9700\u6dfb\u52a0\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/mixins/react")," - \u5f53\u4f60\u4f7f\u7528 React \u65f6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/mixins/friendly-locals")," - \u5f53\u4f60\u559c\u6b22\u4f7f\u7528\u66f4\u7e41\u7410\u7684\u58f0\u660e\u65f6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/mixins/tsdoc")," - \u5f53\u5728\u9879\u76ee\u5185\u4f7f\u7528 API Extractor \u65f6")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@rushstack/eslint-config \u6587\u6863"),"\u66f4\u8be6\u7ec6\u7684\u89e3\u91ca\u4e86\u4ee5\u4e0a\u9009\u9879\u3002"))}k.isMDXComponent=!0}}]);