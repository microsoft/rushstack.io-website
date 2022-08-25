"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[1757],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(216),r=(n(6393),n(158));const i={title:'"typescript" task'},s=void 0,o={unversionedId:"pages/heft_tasks/typescript",id:"pages/heft_tasks/typescript",title:'"typescript" task',description:"This task invokes the compiler for the TypeScript programming language.",source:"@site/docs/pages/heft_tasks/typescript.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/typescript",permalink:"/pages/heft_tasks/typescript",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_tasks/typescript.md",tags:[],version:"current",frontMatter:{title:'"typescript" task'},sidebar:"docsSidebar",previous:{title:'"tslint" task',permalink:"/pages/heft_tasks/tslint"},next:{title:'"webpack" task',permalink:"/pages/heft_tasks/webpack"}},p={},l=[{value:"When to use it",id:"when-to-use-it",level:2},{value:"package.json dependencies",id:"packagejson-dependencies",level:2},{value:"Config files",id:"config-files",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This task invokes the compiler for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," programming language."),(0,r.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,r.kt)("p",null,'TypeScript is the standard programming language for Rush Stack. There are many benefits to having one "lingua franca" across all coding investments, rather than having to maintain different expertise and libraries for different languages.'),(0,r.kt)("p",null,"We recommend TypeScript for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application development:")," It's even a good choice for prototypes and small experiments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tooling infrastructure:")," A great developer experience multiplies everyone's productivity, so build tools should be treated as first-class software projects with their own designs, documentation, and tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Device apps:")," Where possible, TypeScript can also be used for native development via runtime hosts such as ",(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/"},"React Native"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Desktop apps:")," There are also runtime hosts such as ",(0,r.kt)("a",{parentName:"li",href:"https://www.electronjs.org/"},"Electron")," for making desktop apps.")),(0,r.kt)("p",null,"Obviously certain components may inevitably require Java, C++, Swift, etc. But ideally developers should not be required to install native SDKs unless they're working on those components. The ",(0,r.kt)("a",{parentName:"p",href:"https://expo.io/features"},"Expo client")," takes this concept to an extreme, enabling you to compile and run a phone app without installing native tools at all. This ideal isn't always feasible in practice, of course. It's a mentality, not a dogma. The main point is that there are significant benefits to normalizing the code base so that any engineer can easily contribute to any project, and any project can load any library."),(0,r.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,r.kt)("p",null,"You will need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript")," package to your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rush add --package typescript --dev\n")),(0,r.kt)("p",null,'Alternatively, you can avoid this dependency by loading it from a "rig package", as described in the ',(0,r.kt)("a",{parentName:"p",href:"/pages/heft_tutorials/heft_and_rush"},"Interfacing with Rush")," article."),(0,r.kt)("p",null,"If your ",(0,r.kt)("strong",{parentName:"p"},"tsconfig.json")," enables ",(0,r.kt)("inlineCode",{parentName:"p"},'"importHelpers": true')," for more efficient transpiler output, you may also need a dependency on ",(0,r.kt)("strong",{parentName:"p"},"tslib"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rush add --package tslib\n")),(0,r.kt)("h2",{id:"config-files"},"Config files"),(0,r.kt)("p",null,"The primary configuration comes from TypeScript's ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"tsconfig.json")," file."),(0,r.kt)("p",null,"For advanced scenarios, Heft also provides an optional ",(0,r.kt)("a",{parentName:"p",href:"/pages/heft_configs/typescript_json"},"typescript.json")," config file that can be used to configure toolchain features such as multiple emit targets for the TypeScript compiler."))}u.isMDXComponent=!0}}]);