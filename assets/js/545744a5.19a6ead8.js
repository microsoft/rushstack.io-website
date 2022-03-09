"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[84689],{45242:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10736:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(95464),a=n(20134),i=(n(63929),n(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/rush-lib.commonversionsconfiguration",id:"pages/api/rush-lib.commonversionsconfiguration",title:"rush-lib.commonversionsconfiguration",description:"Home &gt; @microsoft/rush-lib &gt; CommonVersionsConfiguration",source:"@site/docs/pages/api/rush-lib.commonversionsconfiguration.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.commonversionsconfiguration",permalink:"/pages/api/rush-lib.commonversionsconfiguration",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},c=[{value:"CommonVersionsConfiguration class",id:"commonversionsconfiguration-class",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")),(0,i.kt)("h2",{id:"commonversionsconfiguration-class"},"CommonVersionsConfiguration class"),(0,i.kt)("p",null,'Use this class to load and save the "common/config/rush/common-versions.json" config file. This config file stores dependency version information that affects all projects in the repo.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CommonVersionsConfiguration \n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.allowedalternativeversions"},"allowedAlternativeVersions")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Map","<","string, ReadonlyArray","<","string",">",">"),(0,i.kt)("td",{parentName:"tr",align:null},'A table that stores, for a given dependency, a list of SemVer ranges that will be accepted by "rush check" in addition to the normal version range.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.filepath"},"filePath")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Get the absolute file path of the common-versions.json file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.implicitlypreferredversions"},"implicitlyPreferredVersions")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"When set to true, for all projects in the repo, all dependencies will be automatically added as preferredVersions, except in cases where different projects specify different version ranges for a given dependency. For older package managers, this tended to reduce duplication of indirect dependencies. However, it can sometimes cause trouble for indirect dependencies with incompatible peerDependencies ranges. If the value is ",(0,i.kt)("code",null,"undefined"),", then the default value is ",(0,i.kt)("code",null,"true"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.preferredversions"},"preferredVersions")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Map","<","string, string",">"),(0,i.kt)("td",{parentName:"tr",align:null},'A table that specifies a "preferred version" for a given NPM package. This feature is typically used to hold back an indirect dependency to a specific older version, or to reduce duplication of indirect dependencies.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.xstitchpreferredversions"},"xstitchPreferredVersions")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Map","<","string, string",">"),(0,i.kt)("td",{parentName:"tr",align:null},"A table of specifies preferred versions maintained by the XStitch tool.")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.getallpreferredversions"},"getAllPreferredVersions()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the union of preferredVersions and xstitchPreferredVersions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.getpreferredversionshash"},"getPreferredVersionsHash()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Get a sha1 hash of the preferred versions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.loadfromfile"},"loadFromFile(jsonFilename)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"static")),(0,i.kt)("td",{parentName:"tr",align:null},"Loads the common-versions.json data from the specified file path. If the file has not been created yet, then an empty object is returned.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration.save"},"save()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},'Writes the "common-versions.json" file to disk, using the filename that was passed to loadFromFile().')))))}m.isMDXComponent=!0}}]);