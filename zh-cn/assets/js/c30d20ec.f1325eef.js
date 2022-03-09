"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[64215],{45242:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(63929);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,c=s["".concat(p,".").concat(f)]||s[f]||d[f]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(95464),i=n(20134),r=(n(63929),n(45242)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"pages/api/module-minifier-plugin",id:"pages/api/module-minifier-plugin",title:"module-minifier-plugin",description:"Home &gt; @rushstack/module-minifier-plugin",source:"@site/docs/pages/api/module-minifier-plugin.md",sourceDirName:"pages/api",slug:"/pages/api/module-minifier-plugin",permalink:"/zh-cn/pages/api/module-minifier-plugin",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},d=[{value:"module-minifier-plugin package",id:"module-minifier-plugin-package",level:2},{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],s={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")),(0,r.kt)("h2",{id:"module-minifier-plugin-package"},"module-minifier-plugin package"),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.moduleminifierplugin"},"ModuleMinifierPlugin")),(0,r.kt)("td",{parentName:"tr",align:null},"Webpack plugin that minifies code on a per-module basis rather than per-asset. The actual minification is handled by the input ",(0,r.kt)("code",null,"minifier")," object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.noopminifier"},"NoopMinifier")),(0,r.kt)("td",{parentName:"tr",align:null},"Minifier implementation that does not actually transform the code, for debugging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.portableminifiermoduleidsplugin"},"PortableMinifierModuleIdsPlugin")),(0,r.kt)("td",{parentName:"tr",align:null},"Plugin responsible for converting the Webpack module ids (of whatever variety) to stable ids before code is handed to the minifier, then back again. Uses the node module identity of the target module. Will emit an error if it encounters multiple versions of the same package in the same compilation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.synchronousminifier"},"SynchronousMinifier")),(0,r.kt)("td",{parentName:"tr",align:null},"Minifier implementation that synchronously minifies code on the main thread.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.workerpoolminifier"},"WorkerPoolMinifier")),(0,r.kt)("td",{parentName:"tr",align:null},"Minifier implementation that uses a thread pool for minification.")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.generatelicensefileforasset"},"generateLicenseFileForAsset(compilation, asset, minifiedModules)")),(0,r.kt)("td",{parentName:"tr",align:null},"Generates a companion asset containing all extracted comments. If it is non-empty, returns a banner comment directing users to said companion asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.rehydrateasset"},"rehydrateAsset(asset, moduleMap, banner)")),(0,r.kt)("td",{parentName:"tr",align:null},"Rehydrates an asset with minified modules.")))),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Interface"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.iassetinfo"},"IAssetInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Information about a dehydrated webpack ECMAScript asset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.idehydratedassets"},"IDehydratedAssets")),(0,r.kt)("td",{parentName:"tr",align:null},"The set of data remaining to rehydrate in the current compilation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.iextendedmodule"},"IExtendedModule")),(0,r.kt)("td",{parentName:"tr",align:null},"Extension of the webpack Module typings with members that are used by this Plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleinfo"},"IModuleInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"Information about a minified module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminificationcallback"},"IModuleMinificationCallback")),(0,r.kt)("td",{parentName:"tr",align:null},"Callback passed to a minifier function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminificationerrorresult"},"IModuleMinificationErrorResult")),(0,r.kt)("td",{parentName:"tr",align:null},"Result from the minifier function when an error is encountered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminificationrequest"},"IModuleMinificationRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"Request to the minifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminificationsuccessresult"},"IModuleMinificationSuccessResult")),(0,r.kt)("td",{parentName:"tr",align:null},"Result from the minifier on a successful minification.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminifier"},"IModuleMinifier")),(0,r.kt)("td",{parentName:"tr",align:null},"Object that can be invoked to minify code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminifierfunction"},"IModuleMinifierFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"An async function called to minify a module (or dehydrated chunk)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminifierpluginhooks"},"IModuleMinifierPluginHooks")),(0,r.kt)("td",{parentName:"tr",align:null},"Hooks provided by the ModuleMinifierPlugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminifierpluginoptions"},"IModuleMinifierPluginOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Options to the ModuleMinifierPlugin constructor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.isynchronousminifieroptions"},"ISynchronousMinifierOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Options for configuring the SynchronousMinifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.iworkerpoolminifieroptions"},"IWorkerPoolMinifierOptions")),(0,r.kt)("td",{parentName:"tr",align:null},"Options for configuring the WorkerPoolMinifier")))),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.chunk_modules_token"},"CHUNK","_","MODULES","_","TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"Token to replace the object or array of module definitions so that the minifier can operate on the Webpack runtime or chunk boilerplate in isolation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.identifier_leading_digits"},"IDENTIFIER","_","LEADING","_","DIGITS")),(0,r.kt)("td",{parentName:"tr",align:null},"The sorted sequence of leading digits for mangled identifiers Computed from character frequency analysis of the source code for OneDrive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.identifier_trailing_digits"},"IDENTIFIER","_","TRAILING","_","DIGITS")),(0,r.kt)("td",{parentName:"tr",align:null},"The sorted sequence of trailing digits for mangled identifiers Computed from character frequency analysis of the source code for OneDrive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.module_wrapper_prefix"},"MODULE","_","WRAPPER","_","PREFIX")),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix to wrap ",(0,r.kt)("code",null,"function (module, ",(0,r.kt)("strong",{parentName:"td"},"webpack_exports"),", ",(0,r.kt)("strong",{parentName:"td"},"webpack_require"),") { ... }")," so that the minifier doesn't delete it. Public because alternate Minifier implementations may wish to know about it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.module_wrapper_suffix"},"MODULE","_","WRAPPER","_","SUFFIX")),(0,r.kt)("td",{parentName:"tr",align:null},"Suffix to wrap ",(0,r.kt)("code",null,"function (module, ",(0,r.kt)("strong",{parentName:"td"},"webpack_exports"),", ",(0,r.kt)("strong",{parentName:"td"},"webpack_require"),") { ... }")," so that the minifier doesn't delete it. Public because alternate Minifier implementations may wish to know about it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.stage_after"},"STAGE","_","AFTER")),(0,r.kt)("td",{parentName:"tr",align:null},"Stage ","#"," to use when this should be the last tap in the hook")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.stage_before"},"STAGE","_","BEFORE")),(0,r.kt)("td",{parentName:"tr",align:null},"Stage ","#"," to use when this should be the first tap in the hook")))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.iassetmap"},"IAssetMap")),(0,r.kt)("td",{parentName:"tr",align:null},"A map from file names to dehydrated assets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imodulemap"},"IModuleMap")),(0,r.kt)("td",{parentName:"tr",align:null},"A map from module ids to minified modules")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-cn/pages/api/module-minifier-plugin.imoduleminificationresult"},"IModuleMinificationResult")),(0,r.kt)("td",{parentName:"tr",align:null},"Result from the minifier.")))))}f.isMDXComponent=!0}}]);