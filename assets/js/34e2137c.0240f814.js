"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[5250],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||h[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(9122),a=(n(6393),n(158));const i={title:"Environment variables"},o=void 0,s={unversionedId:"pages/heft_configs/environment_vars",id:"pages/heft_configs/environment_vars",title:"Environment variables",description:"Heft's behavior can be customized using the shell environment variables described below:",source:"@site/docs/pages/heft_configs/environment_vars.md",sourceDirName:"pages/heft_configs",slug:"/pages/heft_configs/environment_vars",permalink:"/pages/heft_configs/environment_vars",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushstack.io/docs/pages/heft_configs/environment_vars.md",tags:[],version:"current",frontMatter:{title:"Environment variables"},sidebar:"docsSidebar",previous:{title:'"webpack" task',permalink:"/pages/heft_tasks/webpack"},next:{title:"api-extractor-task.json",permalink:"/pages/heft_configs/api-extractor-task_json"}},l={},p=[{value:"HEFT_JEST_DETECT_OPEN_HANDLES",id:"heft_jest_detect_open_handles",level:2},{value:"HEFT_JEST_DISABLE_CODE_COVERAGE",id:"heft_jest_disable_code_coverage",level:2},{value:"HEFT_JEST_MAX_WORKERS",id:"heft_jest_max_workers",level:2},{value:"HEFT_JEST_TEST_TIMEOUT_MS",id:"heft_jest_test_timeout_ms",level:2},{value:"RUSHSTACK_FILE_ERROR_BASE_FOLDER",id:"rushstack_file_error_base_folder",level:2},{value:"WEBPACK_DEV_SERVER",id:"webpack_dev_server",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Heft's behavior can be customized using the shell environment variables described below:"),(0,a.kt)("h2",{id:"heft_jest_detect_open_handles"},"HEFT_JEST_DETECT_OPEN_HANDLES"),(0,a.kt)("p",null,"This environment variable provides an alternate method for specifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--detect-open-handles")," parameter for ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin"),"."),(0,a.kt)("h2",{id:"heft_jest_disable_code_coverage"},"HEFT_JEST_DISABLE_CODE_COVERAGE"),(0,a.kt)("p",null,"This environment variable provides an alternate method for specifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-code-coverage")," parameter for ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin"),"."),(0,a.kt)("h2",{id:"heft_jest_max_workers"},"HEFT_JEST_MAX_WORKERS"),(0,a.kt)("p",null,"This environment variable provides an alternate method for specifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--max-workers")," parameter for ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin"),"."),(0,a.kt)("h2",{id:"heft_jest_test_timeout_ms"},"HEFT_JEST_TEST_TIMEOUT_MS"),(0,a.kt)("p",null,"This environment variable provides an alternate method for specifying the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--test-timeout-ms")," parameter for ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-jest-plugin"),"."),(0,a.kt)("h2",{id:"rushstack_file_error_base_folder"},"RUSHSTACK_FILE_ERROR_BASE_FOLDER"),(0,a.kt)("p",null,"Controls how source file paths are displayed when printing diagnostic messages such as errors or warnings."),(0,a.kt)("p",null,"Possible values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"(an absolute path)")),": the printed path will be relative to the specified absolute path"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{PROJECT_FOLDER}"),": a special token indicating that the printed path will be relative to the project folder (that contains ",(0,a.kt)("strong",{parentName:"li"},"package.json"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{ABSOLUTE_PATH}"),": a special token indicating that the printed path should be an absolute path")),(0,a.kt)("p",null,"The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"{PROJECT_FOLDER}"),", however when Rush invokes commands such as Heft, it sets ",(0,a.kt)("inlineCode",{parentName:"p"},"RUSHSTACK_FILE_ERROR_BASE_FOLDER")," to be the path of the root folder that contains ",(0,a.kt)("strong",{parentName:"p"},"rush.json"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,a.kt)("inlineCode",{parentName:"p"},"RUSHSTACK_FILE_ERROR_BASE_FOLDER")," functionality is implemented by the general-purpose ",(0,a.kt)("a",{parentName:"p",href:"https://api.rushstack.io/pages/node-core-library.fileerror/"},"FileError")," API from ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/node-core-library"),".")),(0,a.kt)("h2",{id:"webpack_dev_server"},"WEBPACK_DEV_SERVER"),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-webpack4-plugin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@rushstack/heft-webpack5-plugin")," look for an NPM package called ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server")," when launching Webpack. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBPACK_DEV_SERVER")," environment to configure a different NPM package name, such as a private fork of this package."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-jest-plugin"},"@rushstack/heft-jest-plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-webpack5-plugin"},"@rushstack/heft-webpack5-plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/tree/main/heft-plugins/heft-webpack4-plugin"},"@rushstack/heft-webpack4-plugin"))))}h.isMDXComponent=!0}}]);