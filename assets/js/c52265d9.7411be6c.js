"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[705],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||g[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(9122),r=(n(6393),n(158));const i={title:"Using rig packages"},o=void 0,s={unversionedId:"pages/heft/rig_packages",id:"pages/heft/rig_packages",title:"Using rig packages",description:"In a large scale environment, it's common for many projects to be built using the exact same Heft configuration.",source:"@site/docs/pages/heft/rig_packages.md",sourceDirName:"pages/heft",slug:"/pages/heft/rig_packages",permalink:"/pages/heft/rig_packages",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft/rig_packages.md",tags:[],version:"current",frontMatter:{title:"Using rig packages"},sidebar:"docsSidebar",previous:{title:"Core plugins",permalink:"/pages/heft/core_plugins"},next:{title:"Heft command line",permalink:"/pages/heft/cli"}},l={},p=[{value:"1. Base files for <code>&quot;extends&quot;</code>",id:"1-base-files-for-extends",level:2},{value:"2. &quot;Riggable&quot; config files",id:"2-riggable-config-files",level:2},{value:"3. Riggable dependencies",id:"3-riggable-dependencies",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'In a large scale environment, it\'s common for many projects to be built using the exact same Heft configuration.\nThere may be some differences -- for example, a Node.js project may emit CommonJS modules, whereas a web application\nproject may need to emit ESNext modules. But generally a small handful of common "profiles" will cover most projects.\nWe can avoid this duplication by moving common settings into an NPM package which gets added to the ',(0,r.kt)("inlineCode",{parentName:"p"},'"devDependencies"'),"\nfor the projects that consume it. This is called a ",(0,r.kt)("strong",{parentName:"p"},"rig package"),". Note that several different ",(0,r.kt)("strong",{parentName:"p"},"rig profiles")," may\ncome from the same NPM package; each profile is a folder containing a set of config files."),(0,r.kt)("p",null,"Heft also provides two standard rig packages that you can use in your projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/heft-node-rig"},"@rushstack/heft-node-rig")," with a profile called ",(0,r.kt)("inlineCode",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/heft-web-rig"},"@rushstack/heft-web-rig")," with a profile called ",(0,r.kt)("inlineCode",{parentName:"li"},"library"))),(0,r.kt)("p",null,"It's also easy to define your own custom rig packages."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-rig-tutorial"},"heft-node-rig-tutorial"),"\nsample project illustrates how to consume ",(0,r.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-node-rig"),"."),(0,r.kt)("p",null,"Let's look at three different ways that rig packages influence the build."),(0,r.kt)("h2",{id:"1-base-files-for-extends"},"1. Base files for ",(0,r.kt)("inlineCode",{parentName:"h2"},'"extends"')),(0,r.kt)("p",null,"Many config files provide a facility for inheriting shared settings from another file. For example, in our\nsample project, the TypeScript configuration is reduced to just a few lines:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"heft-node-rig-tutorial/tsconfig.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "extends": "./node_modules/@rushstack/heft-node-rig/profiles/default/tsconfig-base.json",\n  "compilerOptions": {\n    "types": ["heft-jest", "node"]\n  }\n}\n')),(0,r.kt)("p",null,"The bulk of the settings come from ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig-base.json")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," profile. But our local ",(0,r.kt)("strong",{parentName:"p"},"tsconfig.json"),"\nfile can add custom settings such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"types"')," as needed."),(0,r.kt)("p",null,"The following config files all support a field such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"extends"')," that enables settings to be inherited from another NPM package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},".eslintrc.js")," for the ",(0,r.kt)("a",{parentName:"li",href:"/pages/heft_tasks/eslint"},"eslint task"),", provided that you use the ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/eslint-patch"},"@rushstack/eslint-patch")," workaround or the ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/eslint-config"},"@rushstack/eslint-config")," ruleset (which includes the patch)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"config/api-extractor.json")," for the ",(0,r.kt)("a",{parentName:"li",href:"/pages/heft_tasks/api-extractor"},"api-extractor task")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"config/jest.config.json")," for the ",(0,r.kt)("a",{parentName:"li",href:"/pages/heft_tasks/jest"},"jest task")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tsconfig.json")," for the ",(0,r.kt)("a",{parentName:"li",href:"/pages/heft_tasks/typescript"},"typescript task")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tslint.json")," for the ",(0,r.kt)("a",{parentName:"li",href:"/pages/heft_tasks/tslint"},"tslint task")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"webpack.config.js")," does not explicitly support inheritance, but being a JavaScript module, it can call ",(0,r.kt)("inlineCode",{parentName:"li"},"require()")," to load shared settings.")),(0,r.kt)("h2",{id:"2-riggable-config-files"},'2. "Riggable" config files'),(0,r.kt)("p",null,"In the above example, we cannot eliminate ",(0,r.kt)("strong",{parentName:"p"},"tsconfig.json")," entirely because tools such as VS Code expect to find\nthis file in the root of your project folder. This is true of a few other files such as ",(0,r.kt)("strong",{parentName:"p"},".eslintrc.js"),".\nAside from these special cases, most other Heft config files can be eliminated entirely by creating a ",(0,r.kt)("strong",{parentName:"p"},"rig.json"),"\nfile, as seen in the ",(0,r.kt)("inlineCode",{parentName:"p"},"heft-node-rig-tutorial")," project:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"heft-node-rig-tutorial/config/rig.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// The "rig.json" file directs tools to look for their config files in an external package.\n// Documentation for this system: https://www.npmjs.com/package/@rushstack/rig-package\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",\n\n  /**\n   * (Required) The name of the rig package to inherit from.\n   * It should be an NPM package name with the "-rig" suffix.\n   */\n  "rigPackageName": "@rushstack/heft-node-rig"\n\n  /**\n   * (Optional) Selects a config profile from the rig package.  The name must consist of\n   * lowercase alphanumeric words separated by hyphens, for example "sample-profile".\n   * If omitted, then the "default" profile will be used."\n   */\n  // "rigProfile": "your-profile-name"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"rig.json")," file tells Heft that if it doesn't find a file in the ",(0,r.kt)("strong",{parentName:"p"},"heft-node-rig-tutorial/config"),", it should\ntry looking in the ",(0,r.kt)("strong",{parentName:"p"},"@rushstack/heft-node-rig/profiles/default/common")," folder instead."),(0,r.kt)("p",null,'Examples of "riggable" config files:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"<","project folder",">","/config/api-extractor-task.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"<","project folder",">","/config/heft.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"<","project folder",">","/config/typescript.json"))),(0,r.kt)("h2",{id:"3-riggable-dependencies"},"3. Riggable dependencies"),(0,r.kt)("p",null,"The rig package can also provide NPM dependencies, to avoid having to specify them as ",(0,r.kt)("inlineCode",{parentName:"p"},'"devDependencies"')," for\nyour project. The following tool packages can be provided by the rig:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typescript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@microsoft/api-extractor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tslint"))),(0,r.kt)("p",null,"Today, only these packages can be provided via a rig. Providing dependencies via a rig is optional. Your local\nproject's ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," take precedence over the rig."),(0,r.kt)("p",null,"Heft resolves each riggable tool independently, using the following procedure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the tool package is listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," for the local project, then the tool is resolved from\nthe current project folder. (This step does NOT consider ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),".)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OTHERWISE, if the current project has a ",(0,r.kt)("strong",{parentName:"p"},"rig.json")," file, and if the rig's ",(0,r.kt)("strong",{parentName:"p"},"package.json")," lists the tool in its\n",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", then the tool is resolved from the rig package folder. (This step does NOT consider\n",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),".)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OTHERWISE, the tool is resolved from the current project folder. If it can't be found there, then an error\nis reported."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Prior to version 0.25.0, Heft used a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/pull/2539"},"different lookup strategy"),"\nthat did not rely on ",(0,r.kt)("strong",{parentName:"p"},"rig.json"),". It worked like this: While parsing the ",(0,r.kt)("strong",{parentName:"p"},"tsconfig.json")," file for a project,\nif the ",(0,r.kt)("inlineCode",{parentName:"p"},'"extends"')," field referred to a file from an NPM package, Heft would look to see if that package had\na direct dependency on the ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript")," package. If so, ALL riggable tools would be resolved from that folder.")),(0,r.kt)("p",null,"Heft itself has a direct dependency on the following packages, so your project does not need to depend on them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webpack")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack-dev-server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jest")," and its core dependencies")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," documentation provides the complete specification for the ",(0,r.kt)("strong",{parentName:"li"},"rig.json")," system"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-rig-tutorial"},"heft-node-rig-tutorial")," sample project")))}g.isMDXComponent=!0}}]);