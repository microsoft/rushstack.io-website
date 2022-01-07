"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[78274],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(61731),a=n(70396),i=(n(46393),n(50158)),o=["components"],s={title:"Interfacing with Rush"},l=void 0,p={unversionedId:"pages/heft_tutorials/heft_and_rush",id:"pages/heft_tutorials/heft_and_rush",title:"Interfacing with Rush",description:"The Getting started with Heft tutorial showed how Heft can be used in a standalone project. Now let's look at how Heft works in the context of a Rush monorepo.",source:"@site/docs/pages/heft_tutorials/heft_and_rush.md",sourceDirName:"pages/heft_tutorials",slug:"/pages/heft_tutorials/heft_and_rush",permalink:"/pages/heft_tutorials/heft_and_rush",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/heft_tutorials/heft_and_rush.md",tags:[],version:"current",frontMatter:{title:"Interfacing with Rush"},sidebar:"docsSidebar",previous:{title:"Everyday Heft commands",permalink:"/pages/heft_tutorials/everyday_commands"},next:{title:'"api-extractor" task',permalink:"/pages/heft_tasks/api-extractor"}},c=[{value:"How Heft gets invoked",id:"how-heft-gets-invoked",children:[],level:2},{value:"Sharing configuration using rig packages",id:"sharing-configuration-using-rig-packages",children:[],level:2},{value:"Incremental builds",id:"incremental-builds",children:[],level:2}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft_tutorials/getting_started"},"Getting started with Heft")," tutorial showed how Heft can be used in a standalone project. Now let's look at how Heft works in the context of a Rush monorepo."),(0,i.kt)("h2",{id:"how-heft-gets-invoked"},"How Heft gets invoked"),(0,i.kt)("p",null,"If you're new to Rush, the ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo/"},"maintainer tutorials")," explain the basics of setting up a new repo. Heft takes over when Rush invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},'"build"')," script in a Rush project folder. In our sample project from the tutorial, the script looked like this:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"<","project folder",">","/package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  . . .\n  "scripts": {\n    "build": "heft build --clean",\n    "start": "node lib/start.js"\n  }\n  . . .\n}\n')),(0,i.kt)("h2",{id:"sharing-configuration-using-rig-packages"},"Sharing configuration using rig packages"),(0,i.kt)("p",null,"A major theme in monorepos will be ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},'minimizing "boilerplate" files')),". In other words, consolidating files and settings that would otherwise get copy+pasted into every single project folder in the monorepo. Boilerplate is a nuisance because it's difficult to keep in sync. When a fix is needed, if you have hundreds of projects, you would need to reapply the same fix hundreds of times."),(0,i.kt)("p",null,"At the same time however, we want to honor Rush's ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"principle of project isolation")),": Each project should build independently and should not become entangled with other projects (for example, by referencing files using relative paths like ",(0,i.kt)("inlineCode",{parentName:"p"},"../../other-project"),"). This discipline facilitates Rush features like subset builds and incremental builds. It also makes it very easy to move Rush project folders around, to migrate projects between monorepos, and even to stop using Rush later if you change your mind. For this reason, we discourage practices such as putting a centralized ",(0,i.kt)("strong",{parentName:"p"},".eslintrc.js")," file in the root of the monorepo and invoking ESLint globally for all projects."),(0,i.kt)("p",null,"Instead, Heft supports a formalism called ",(0,i.kt)("strong",{parentName:"p"},"rig packages"),", where common settings are provided by an NPM package that is added to each project's ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),". Rig packages offer three different ways to reduce duplication:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Config files can use a setting such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"extends"')," to inherit common settings from a rig. Example: ",(0,i.kt)("strong",{parentName:"li"},"tsconfig.json")),(0,i.kt)("li",{parentName:"ol"},"Riggable config files can be eliminated entirely, using a ",(0,i.kt)("strong",{parentName:"li"},"config/rig.json")," file that directs Heft to find them in the rig package. Example: ",(0,i.kt)("strong",{parentName:"li"},"config/heft.json")),(0,i.kt)("li",{parentName:"ol"},"Riggable dependencies can be provided by the rig package, avoiding the need to add them to your project's ",(0,i.kt)("inlineCode",{parentName:"li"},"devDependencies"),". Example: the ",(0,i.kt)("strong",{parentName:"li"},"typescript")," package")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/pages/heft/rig_packages"},"Using rig packages")," article describes this in detail."),(0,i.kt)("h2",{id:"incremental-builds"},"Incremental builds"),(0,i.kt)("p",null,"Another benefit of using Rush with Heft is support for incremental builds. For example, if you run ",(0,i.kt)("inlineCode",{parentName:"p"},"rush build")," twice, the second time it will complete instantly, since all projects have already been built. Interestingly, this incremental build analysis is performed by Rush itself, not Heft."),(0,i.kt)("p",null,"Since JavaScript is an interpreted language, there is a small overhead every time a Node.js process is launched in a project folder. Thus even if Heft performs no work at all, it might take 1 second simply to spin up the toolchain, analyze the input files, and determine that everything is up to date. For a monorepo with 500 projects, that adds up to 500 seconds of analysis. Rush avoids this by perform a global analysis of all projects, comparing the hash of your source files against a hash of the output files. If these hashes are the same, then Rush can determine that a project can be skipped entirely without even launching Heft. Rush's incremental build analysis works for any well-behaved script, not just Heft."))}h.isMDXComponent=!0}}]);