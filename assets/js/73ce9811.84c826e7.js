"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[46285],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=n,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58207:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=r(61731),n=r(70396),o=(r(46393),r(50158)),i=["components"],s={title:"Project roadmap"},l=void 0,p={unversionedId:"pages/overview/roadmap",id:"pages/overview/roadmap",title:"Project roadmap",description:"Our News page and Twitter feed is the best way to find out what's happening.",source:"@site/docs/pages/overview/roadmap.md",sourceDirName:"pages/overview",slug:"/pages/overview/roadmap",permalink:"/pages/overview/roadmap",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/overview/roadmap.md",tags:[],version:"current",frontMatter:{title:"Project roadmap"},sidebar:"docsSidebar",previous:{title:"Who's involved?",permalink:"/pages/overview/people"},next:{title:"Heft introduction",permalink:"/pages/heft/overview"}},u=[{value:"Recently Completed",id:"recently-completed",children:[],level:2},{value:"In progress",id:"in-progress",children:[],level:2},{value:"Soon, hopefully",id:"soon-hopefully",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our ",(0,o.kt)("a",{parentName:"p",href:"./news"},"News page")," and Twitter feed is the best way to find out what's happening.\nThis roadmap supplements that with more general information about future directions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Last update: September 2021"))),(0,o.kt)("h2",{id:"recently-completed"},"Recently Completed"),(0,o.kt)("p",null,"These milestones were completed recently:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shell tab completion for Rush"),(0,o.kt)("li",{parentName:"ul"},"Rush integration with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/BuildXL"},"BuildXL")," for sharded builds"),(0,o.kt)("li",{parentName:"ul"},"Optimize Rush startup time, adding a new tool ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rundown"},"@rushstack/rundown")),(0,o.kt)("li",{parentName:"ul"},'Redesign the "rush build" collator, based around a new ',(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/terminal"},"@rushstack/terminal")," model"),(0,o.kt)("li",{parentName:"ul"},"Introduce a model for ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"rig packages")),(0,o.kt)("li",{parentName:"ul"},"Move the TSDoc project documentation to a dedicated website ",(0,o.kt)("a",{parentName:"li",href:"https://tsdoc.org/"},"https://tsdoc.org/")),(0,o.kt)("li",{parentName:"ul"},"Get the Rush ",(0,o.kt)("a",{parentName:"li",href:"https://rushjs.io/pages/maintainer/build_cache/"},"build cache")," feature released and documented"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rushjs.io/pages/maintainer/npm_registry_auth/"},"Artifactory integration"),"  for Rush"),(0,o.kt)("li",{parentName:"ul"},"Merge API Extractor to support ",(0,o.kt)("inlineCode",{parentName:"li"},'import * as ___ from "___";')," namespaces (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/1029"},"issue #1029"),")"),(0,o.kt)("li",{parentName:"ul"},"Merge API Extractor to support ",(0,o.kt)("inlineCode",{parentName:"li"},"import()")," type expressions (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/1050"},"issue #1050"),")"),(0,o.kt)("li",{parentName:"ul"},"Start a new ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/eslint-plugin-security"},"@rushstack/eslint-plugin-security")," package"),(0,o.kt)("li",{parentName:"ul"},"Improve Heft support for developing ",(0,o.kt)("a",{parentName:"li",href:"https://rushstack.io/pages/heft_tasks/node-service/"},"Node.js services"))),(0,o.kt)("h2",{id:"in-progress"},"In progress"),(0,o.kt)("p",null,"Contributor availability is difficult to predict, so we try not to make commitments about when (or whether)\na particular feature will get implemented.  That said, here's some areas which people are actively working on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Heft plugin for StorybookJS"),(0,o.kt)("li",{parentName:"ul"},"Upgrade the Jest package used by Heft"),(0,o.kt)("li",{parentName:"ul"},"Upgrade the baseline TypeScript version to be 4.x"),(0,o.kt)("li",{parentName:"ul"},"Set up a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack-samples/"},"rushstack-samples")," repo with fully worked out projects\nillustrating realistic usage patterns"),(0,o.kt)("li",{parentName:"ul"},"Share samples for using ReactNative with Rush+PNPM"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rushjs.io/pages/advanced/watch_mode/"},"Multi-project watch mode")," for Rush"),(0,o.kt)("li",{parentName:"ul"},"Working towards a 1.0 release of Heft, to stabilize the config file and plugin API contracts")),(0,o.kt)("h2",{id:"soon-hopefully"},"Soon, hopefully"),(0,o.kt)("p",null,"The Rush Stack maintainers currently see these feature areas as the main priorities for upcoming investments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multiphase builds for Rush"),(0,o.kt)("li",{parentName:"ul"},"Improve the design of Rush publishing (",(0,o.kt)("inlineCode",{parentName:"li"},"rush publish"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"rush version"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"rush change"),")")),(0,o.kt)("p",null,"If there's a specific area that's important to you, let us know in the\n",(0,o.kt)("a",{parentName:"p",href:"https://rushstack.zulipchat.com/"},"Zulip chat room"),".\nAnd of course, even if a feature isn't listed on the road map, pull requests are always welcome!"))}m.isMDXComponent=!0}}]);