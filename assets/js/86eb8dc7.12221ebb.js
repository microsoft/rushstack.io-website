"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[22878],{45242:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var a=r(63929);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return r?a.createElement(m,i(i({ref:t},f),{},{components:r})):a.createElement(m,i({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},76980:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=r(95464),n=r(20134),o=(r(63929),r(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"pages/api/api-extractor.extractorconfig.loadfile",id:"pages/api/api-extractor.extractorconfig.loadfile",title:"api-extractor.extractorconfig.loadfile",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; loadFile",source:"@site/docs/pages/api/api-extractor.extractorconfig.loadfile.md",sourceDirName:"pages/api",slug:"/pages/api/api-extractor.extractorconfig.loadfile",permalink:"/pages/api/api-extractor.extractorconfig.loadfile",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f={},u=[{value:"ExtractorConfig.loadFile() method",id:"extractorconfigloadfile-method",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig.loadfile"},"loadFile")),(0,o.kt)("h2",{id:"extractorconfigloadfile-method"},"ExtractorConfig.loadFile() method"),(0,o.kt)("p",null,"Performs only the first half of ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig.loadfileandprepare"},"ExtractorConfig.loadFileAndPrepare()")," , providing an opportunity to modify the object before it is passed to ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig.prepare"},"ExtractorConfig.prepare()")," ."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadFile(jsonFilePath: string): IConfigFile;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jsonFilePath"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iconfigfile"},"IConfigFile")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'Loads the api-extractor.json config file from the specified file path. If the "extends" field is present, the referenced file(s) will be merged. For any omitted fields, the API Extractor default values are merged.'))}d.isMDXComponent=!0}}]);