"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[76500],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(46393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32724:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(61731),r=n(70396),i=(n(46393),n(50158)),s=["components"],o={title:'"eslint" task'},l=void 0,p={unversionedId:"pages/heft_tasks/eslint",id:"pages/heft_tasks/eslint",title:'"eslint" task',description:"This task invokes the ESLint tool which reports errors about common coding problems.",source:"@site/docs/pages/heft_tasks/eslint.md",sourceDirName:"pages/heft_tasks",slug:"/pages/heft_tasks/eslint",permalink:"/pages/heft_tasks/eslint",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/heft_tasks/eslint.md",tags:[],version:"current",frontMatter:{title:'"eslint" task'},sidebar:"docsSidebar",previous:{title:'"delete-globs" task',permalink:"/pages/heft_tasks/delete-globs"},next:{title:'"jest" task',permalink:"/pages/heft_tasks/jest"}},c=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[{value:"Profiles and mixins",id:"profiles-and-mixins",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This task invokes the ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," tool which reports errors about common coding problems."),(0,i.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,i.kt)("p",null,"ESLint fits together with several other tools as part of Rush Stack's recommended strategy for code validation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/enabling_prettier/"},"Prettier"),": This tool manages trivial syntax aspects such as spaces, commas, and semicolons. Because these aspects normally don't affect code semantics, we never bother the developer with error messages about it, nor is it part of the build. Instead, Prettier reformats the code automatically via a ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," hook. To se this up, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/enabling_prettier/"},"Enabling Prettier")," tutorial on the Rush website.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/pages/heft_tasks/typescript"},"TypeScript"),": The TypeScript compiler performs sophisticated type checking and semantic analysis that is the most important safeguard for program correctness.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ESLint"),": The lint rules supplement the compiler's checks with additional stylistic rules that are more subjective and highly customizable. Whereas TypeScript might detect that ",(0,i.kt)("em",{parentName:"p"},'"This function parameter is a string but was declared as a number"'),", the linter might detect an issue such as ",(0,i.kt)("em",{parentName:"p"},'"This class name should use PascalCase instead of camelCase."')," Unlike Prettier issues, fixing an ESLint issue may involve a significant code change, and may even break an API contract.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/pages/heft_tasks/api-extractor"},"API Extractor"),": This is an additional validation check for library packages only. It ensures their API contracts are well-formed and properly documented."))),(0,i.kt)("p",null,"Although it's recommended to set up your build system in this way, Heft doesn't require a particular approach. Each of these components is optional, and other configurations are possible. For example, older code bases may need to use ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft_tasks/tslint"},"TSLint")," instead of ESLint."),(0,i.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,i.kt)("p",null,"You will need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," package to your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package eslint --dev\n")),(0,i.kt)("p",null,'Alternatively, you can avoid this dependency by loading it from a "rig package", as described in the ',(0,i.kt)("a",{parentName:"p",href:"/pages/heft_tutorials/heft_and_rush"},"Interfacing with Rush")," article. However, if you use the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint extension for VS Code"),", it will try to resolve the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," package from your project folder. Thus it may still be useful to add ESLint to your ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file. (The extension is able to load a globally installed ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," package; however, its version may not match the version required by the local branch.)"),(0,i.kt)("h2",{id:"config-files"},"Config files"),(0,i.kt)("p",null,"There isn't a Heft-specific file for this task. Heft looks for ESLint's config file. Although ESLint supports ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring#configuration-file-formats"},"7 different")," names/formats for this file, Heft requires it to be named ",(0,i.kt)("strong",{parentName:"p"},'".eslintrc.js"'),". This has a couple benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consistency:")," Using one standard name ",(0,i.kt)("strong",{parentName:"li"},'".eslintrc.js"')," makes it easy to search for these files, perform bulk edits, and copy configuration recipes between projects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Workarounds:")," Using the ",(0,i.kt)("inlineCode",{parentName:"li"},".js")," file extension enables JavaScript expressions in the file. This is practice is generally discouraged because code expressions are harder to validate, and expressions can depend on environmental inputs that are invisible to caches. However, for historical reasons, ESLint's config file format has some limitations that can only be solved with scripts (for example using ",(0,i.kt)("inlineCode",{parentName:"li"},"__dirname")," to resolve file paths).")),(0,i.kt)("p",null,"It's not recommended to place a centralized ",(0,i.kt)("strong",{parentName:"p"},".eslintrc.js")," in the monorepo root folder. This violates Rush's principle that projects should be independent and easily movable between monorepos."),(0,i.kt)("p",null,"Instead, each project should have its own ",(0,i.kt)("strong",{parentName:"p"},".eslintrc.js")," file. We recommend to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@rushstack/eslint-config")," shared configuration, which is specifically tailored for large scale monorepos, and based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint"},"typescript-eslint")," parser and ruleset. If you need additional custom lint rules, it's recommended to create a custom NPM package that extends from ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/eslint-config"),"."),(0,i.kt)("p",null,"With this approach, a typical ESLint config file will have very minimal boilerplate. For example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"<","project folder",">","/.eslintrc.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// This is a workaround for https://github.com/eslint/eslint/issues/3458\nrequire('@rushstack/eslint-config/patch/modern-module-resolution');\n\nmodule.exports = {\n  extends: ['@rushstack/eslint-config/profile/node'],\n  parserOptions: { tsconfigRootDir: __dirname }\n};\n")),(0,i.kt)("h3",{id:"profiles-and-mixins"},"Profiles and mixins"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@rushstack/eslint-config")," package currently provides three different ",(0,i.kt)("strong",{parentName:"p"},"lint profiles"),". Choose one:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/profile/node"),"- for Node.js services"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/profile/node-trusted-tool")," - for Node.js tools"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/profile/web-app")," - for web browser applications")),(0,i.kt)("p",null,"It also supports ",(0,i.kt)("strong",{parentName:"p"},"lint mixins"),". Add as many as you like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/mixins/react")," - if you use the React framework"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/mixins/friendly-locals")," - if you prefer more verbose declarations to make"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@rushstack/eslint-config/mixins/tsdoc")," - if you are using API Extractor in your workspace")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@rushstack/eslint-config documentation")," explains these options in more detail."))}m.isMDXComponent=!0}}]);