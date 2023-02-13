"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[270],{158:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(6393);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(9122),n=(a(6393),a(158));const i={title:"Heft architecture"},o=void 0,s={unversionedId:"pages/heft/architecture",id:"pages/heft/architecture",title:"Heft architecture",description:"Terminology",source:"@site/docs/pages/heft/architecture.md",sourceDirName:"pages/heft",slug:"/pages/heft/architecture",permalink:"/pages/heft/architecture",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft/architecture.md",tags:[],version:"current",frontMatter:{title:"Heft architecture"},sidebar:"docsSidebar",previous:{title:"Heft introduction",permalink:"/pages/heft/overview"},next:{title:"Core plugins",permalink:"/pages/heft/core_plugins"}},l={},p=[{value:"Terminology",id:"terminology",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("p",null,"The following concepts are important for understanding Heft's design:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"action")," - a Heft command-line verb (as formalized by Rush Stack's ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/ts-command-line"},"ts-command-line"),' system). For example, the "test" action appears in the ',(0,n.kt)("inlineCode",{parentName:"li"},"heft test --clean")," command. Actions are the user interface, essentially macros tailored for typical developer activities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"plugin")," - a TypeScript class that implements the ",(0,n.kt)("inlineCode",{parentName:"li"},"IHeftPlugin")," contract to provide arbitrary functionality. Plugins are loaded optionally based on Heft's configuration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"plugin package")," - an NPM package that provides one or more Heft plugins. You can create your own NPM package that exports custom plugins for Heft to use. See ",(0,n.kt)("a",{parentName:"li",href:"/pages/heft/core_plugins"},"Core Plugins")," for a list of the built-in plugins."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hook")," - Heft leverages Webpack's ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/tapable"},"tapable")," system for enabling plugins to register handlers for various events during the build."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"task")," - a conceptual Heft operation that produces an output, typically by invoking some tool. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"typescript")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"eslint")," are Heft tasks. Unlike in other systems, Heft's tasks are not a formal coding contract or component; for example the ",(0,n.kt)("inlineCode",{parentName:"li"},"TypeScriptPlugin")," object implements three separate tasks (",(0,n.kt)("inlineCode",{parentName:"li"},"typescript"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"eslint"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"tslint"),") whose code is closely integrated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stage"),' - a larger sequence of work encompassing multiple Heft tasks. When invoking Heft, the command line typically selects a meaningful set of stages to run. The stage names are also used to group logging output. Examples of Heft stages: "clean", "build", "test"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rig package")," - an NPM package that provides Heft configurations that can be reused across multiple projects with similar requirements See the ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," documentation for details about this system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rig profile")," - a named configuration obtained from a rig package. A single rig package can provide more than one configuration. For example, it might provide separate profiles for application projects versus library projects.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Future plans:"),' Today Rush commands can only invoke Heft actions. However, in the future we want to implement a "multiphase build" feature that will enable Rush to orchestrate more granular steps of work. For example, once a library dependency has compiled its output, Rush could start building the application before the library finishes running its unit tests. This feature will bring some additional jargon:'),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"command")," - A monorepo command-line action as defined globally in ",(0,n.kt)("a",{parentName:"li",href:"https://rushjs.io/pages/configs/command-line_json/"},"command-line.json"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"phase"),' - This is similar to Heft\'s "stage", except that phases will be defined globally so that Rush can model their dependency relationships.'))))}m.isMDXComponent=!0}}]);