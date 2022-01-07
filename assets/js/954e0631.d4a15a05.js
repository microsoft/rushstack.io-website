"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[49591],{50158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8340:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(61731),a=n(70396),i=(n(46393),n(50158)),o=["components"],l={title:"Everyday Heft commands"},s=void 0,c={unversionedId:"pages/heft_tutorials/everyday_commands",id:"pages/heft_tutorials/everyday_commands",title:"Everyday Heft commands",description:"The Getting started with Heft tutorial introduced the heft build and heft test command-line actions. In this section, we'll call out a few everyday commands that are particularly useful to know about. Refer to the Heft command line reference for a full listing of actions and parameters.",source:"@site/docs/pages/heft_tutorials/everyday_commands.md",sourceDirName:"pages/heft_tutorials",slug:"/pages/heft_tutorials/everyday_commands",permalink:"/pages/heft_tutorials/everyday_commands",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/heft_tutorials/everyday_commands.md",tags:[],version:"current",frontMatter:{title:"Everyday Heft commands"},sidebar:"docsSidebar",previous:{title:"Adding more tasks",permalink:"/pages/heft_tutorials/adding_tasks"},next:{title:"Interfacing with Rush",permalink:"/pages/heft_tutorials/heft_and_rush"}},u=[{value:"Investigating problems",id:"investigating-problems",children:[],level:2},{value:"Building with --watch",id:"building-with---watch",children:[],level:2},{value:"Jest interactive shell",id:"jest-interactive-shell",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft_tutorials/getting_started"},"Getting started with Heft")," tutorial introduced the ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test")," command-line actions. In this section, we'll call out a few everyday commands that are particularly useful to know about. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft/cli"},"Heft command line")," reference for a full listing of actions and parameters."),(0,i.kt)("h2",{id:"investigating-problems"},"Investigating problems"),(0,i.kt)("p",null,"If you're diagnosing problems with the Heft build, there are a couple useful parameters to be aware of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--verbose"),": For example, instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"heft build"),", you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"heft build --verbose")," to see more details about how the tasks are invoked."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--debug"),": For even more detail, you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"heft --debug build")," to see call stacks and additional trace information. Note that ",(0,i.kt)("inlineCode",{parentName:"li"},"--debug")," is a global parameter, so it must precede the ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," action name.")),(0,i.kt)("h2",{id:"building-with---watch"},"Building with -","-watch"),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"heft build --watch"),", the TypeScript compiler will continue running and wait for changes to source files. Whenever a file is changed, Heft will rebuild only the affected files, as a minimal incremental update that can be very fast."),(0,i.kt)("p",null,"When using Webpack, ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start")," invokes a localhost dev server (see ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/"},"DevServer"),") that uses this mode to automatically reload the web browser with the recompiled code, every time a source file is saved. This can save a lot of time when tuning UI layouts! The ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," parameter is not needed with ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start"),", because watch mode is always enabled for that action."),(0,i.kt)("h2",{id:"jest-interactive-shell"},"Jest interactive shell"),(0,i.kt)("p",null,"For tests, you can also do ",(0,i.kt)("inlineCode",{parentName:"p"},"heft test --watch")," which invokes Jest's interactive shell. It shows a menu like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"No tests found related to files changed since last commit.\nPress `a` to run all tests, or run Jest with `--watchAll`.\n\nRun start. 0 test suites\n\nTests finished:\n  Successes: 0\n  Failures: 0\n  Total: 0\n\nWatch Usage\n \u203a Press a to run all tests.\n \u203a Press f to run only failed tests.\n \u203a Press p to filter by a filename regex pattern.\n \u203a Press t to filter by a test name regex pattern.\n \u203a Press q to quit watch mode.\n \u203a Press Enter to trigger a test run.\n")),(0,i.kt)("p",null,"Whenever you save a change to a source file, Heft will automatically recompile the project, and then Jest will rerun any affected tests, updating the report."))}p.isMDXComponent=!0}}]);