"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[6971],{158:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(6393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,k=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4395:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(216),n=(a(6393),a(158));const o={title:"What is Rush Stack?",hide_title:!0},i=void 0,s={unversionedId:"index",id:"index",title:"What is Rush Stack?",description:"What is Rush Stack?",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/index.md",tags:[],version:"current",frontMatter:{title:"What is Rush Stack?",hide_title:!0},sidebar:"docsSidebar",next:{title:"Who's involved?",permalink:"/pages/overview/people"}},l={},p=[{value:"What is Rush Stack?",id:"what-is-rush-stack",level:2},{value:"What&#39;s in the stack?",id:"whats-in-the-stack",level:2},{value:"What&#39;s the relationship to Rush?",id:"whats-the-relationship-to-rush",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-rush-stack"},"What is Rush Stack?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rush Stack")," is a..."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mission")," to provide reusable tech for running large scale monorepos for the web"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Open collaboration")," among community partners with serious tooling requirements, who got tired of going it alone"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Specific strategy")," that integrates popular tools like Node.js, TypeScript, ESLint, Prettier, Webpack, Jest, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Family of projects")," that fill in the gaps for this strategy")),(0,n.kt)("p",null,"Although various pieces of this work have been underway for years, we're now bringing them together under a common charter as ",(0,n.kt)("strong",{parentName:"p"},"Rush Stack"),". Track our progress on the ",(0,n.kt)("a",{parentName:"p",href:"/pages/news"},"News")," page and ",(0,n.kt)("a",{parentName:"p",href:"/pages/overview/roadmap"},"Roadmap"),"."),(0,n.kt)("h2",{id:"whats-in-the-stack"},"What's in the stack?"),(0,n.kt)("p",null,"These major tools are developed under the ",(0,n.kt)("strong",{parentName:"p"},"Rush Stack")," umbrella:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rushjs.io/"},"Rush"),": the scalable monorepo build orchestrator"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pages/heft/overview"},"Heft"),": an extensible build system that interfaces with Rush"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor"),": coordinates API reviews for library packages, and generates .d.ts rollups"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api-extractor.com/pages/setup/generating_docs"},"API Documenter"),": generates your API documentation website"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@","rushstack/eslint-config"),": our standardized\nESLint rule set, specifically designed for large scale TypeScript monorepos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/eslint-plugin-packlets"},"@","rushstack/eslint-plugin-packlets"),':\n"Packlets" are a lightweight alternative to NPM packages for organizing source files within a single project'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rundown"},"Rundown"),": a tool for optimizing Node.js process startup times")),(0,n.kt)("p",null,"The projects are built on a common framework of reusable library packages, which includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/ts-command-line"},"ts-command-line"),": a strict command-line parser\nwhose options/docs can be augmented by toolchain packages with built-in support for tab-completion on PowerShell and Bash"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/node-core-library"},"node-core-library"),": the core framework\nused by all our projects"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/package-deps-hash"},"package-deps-hash"),": the incremental build engine\nused by Rush"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"rig-package"),": a system for sharing tool configurations between projects without duplicating config files"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/stream-collator"},"stream-collator"),": the magic behind how Rush can\ndisplay real-time log output from concurrent tasks, without ugly interleaving of the output"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/tree-pattern"},"tree-pattern"),": a pattern matcher for JavaScript tree structures, used by our lint rules"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/webpack"},"a family of webpack plugins")," useful for building web applications")),(0,n.kt)("h2",{id:"whats-the-relationship-to-rush"},"What's the relationship to Rush?"),(0,n.kt)("p",null,'The "Rush Stack" components are optional extras that you can use with ',(0,n.kt)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush"),"."),(0,n.kt)("p",null,"As a ",(0,n.kt)("strong",{parentName:"p"},"build orchestrator,")," Rush's job is to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure deterministic and reliable package installations (using Yarn, PNPM, or NPM)"),(0,n.kt)("li",{parentName:"ul"},"Build your projects in the right order, as fast as possible"),(0,n.kt)("li",{parentName:"ul"},"Apply policies to keep your monorepo running smoothly"),(0,n.kt)("li",{parentName:"ul"},"Manage your publishing workflows"),(0,n.kt)("li",{parentName:"ul"},"Establish a standard repo layout and familiar CLI, to facilitate developers who contribute to many different monorepos")),(0,n.kt)("p",null,"Beyond this role, Rush leaves the rest up to you. Individual projects can build with any tool chain you like.\nThis is very flexible!"),(0,n.kt)("p",null,"But flexibility has its downsides. Node.js tooling is notorious for its bewildering array of options:\nChoose your compiler. Choose your linter. Choose your bundler, your package manager, your task engine,\ntest runner, test assertion library, and so on. Once you've placed your bets, integrating all these pieces\nturns out to be a software project of its own. As you scale up, these costs can add up fast!"),(0,n.kt)("p",null,"In summer of 2019, we launched ",(0,n.kt)("strong",{parentName:"p"},"Rush Stack")," with the aim to provide a reusable solution for this broader set of problems. You can still use Rush by itself, of course. But if you're tired of going it alone, we invite you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trade your flexibility for an opinionated approach backed by tooling experts who run huge monorepos"),(0,n.kt)("li",{parentName:"ul"},"Join forces with the open community that's investing in this approach"),(0,n.kt)("li",{parentName:"ul"},'Help us to "go deep" with integrations, optimizations, documentation, and polish to achieve a world class developer experience')))}c.isMDXComponent=!0}}]);