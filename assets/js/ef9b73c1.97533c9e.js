"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[47945],{50158:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return s}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(a),s=r,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13590:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=a(61731),r=a(70396),i=(a(46393),a(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"pages/api/api-documenter",id:"pages/api/api-documenter",title:"api-documenter",description:"Home &gt; @microsoft/api-documenter",source:"@site/docs/pages/api/api-documenter.md",sourceDirName:"pages/api",slug:"/pages/api/api-documenter",permalink:"/pages/api/api-documenter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"api-documenter package",id:"api-documenter-package",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-documenter"},"@microsoft/api-documenter")),(0,i.kt)("h2",{id:"api-documenter-package"},"api-documenter package"),(0,i.kt)("p",null,"API Documenter generates an API reference website from the .api.json files created by API Extractor. The ",(0,i.kt)("inlineCode",{parentName:"p"},"@microsoft/api-documenter")," package provides the command-line tool. It also exposes a developer API that you can use to create plugins that customize how API Documenter generates documentation."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.markdowndocumenteraccessor"},"MarkdownDocumenterAccessor")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides access to the documenter that is generating the output.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.markdowndocumenterfeature"},"MarkdownDocumenterFeature")),(0,i.kt)("td",{parentName:"tr",align:null},"Inherit from this base class to implement an API Documenter plugin feature that customizes the generation of markdown output.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.markdowndocumenterfeaturecontext"},"MarkdownDocumenterFeatureContext")),(0,i.kt)("td",{parentName:"tr",align:null},"Context object for ",(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.markdowndocumenterfeature"},"MarkdownDocumenterFeature")," . Exposes various services that can be used by a plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.pluginfeature"},"PluginFeature")),(0,i.kt)("td",{parentName:"tr",align:null},"The abstract base class for all API Documenter plugin features.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.pluginfeaturecontext"},"PluginFeatureContext")),(0,i.kt)("td",{parentName:"tr",align:null},"Context object for ",(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.pluginfeature"},"PluginFeature")," . Exposes various services that can be used by a plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.pluginfeatureinitialization"},"PluginFeatureInitialization")),(0,i.kt)("td",{parentName:"tr",align:null},"This is an internal part of the plugin infrastructure.")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.iapidocumenterpluginmanifest"},"IApiDocumenterPluginManifest")),(0,i.kt)("td",{parentName:"tr",align:null},"The manifest for an API Documenter plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.ifeaturedefinition"},"IFeatureDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},'Defines a "feature" that is provided by an API Documenter plugin. A feature is a user-defined module that customizes the behavior of API Documenter.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.imarkdowndocumenterfeatureonbeforewritepageargs"},"IMarkdownDocumenterFeatureOnBeforeWritePageArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Event arguments for MarkdownDocumenterFeature.onBeforeWritePage()")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.imarkdowndocumenterfeatureonfinishedargs"},"IMarkdownDocumenterFeatureOnFinishedArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Event arguments for MarkdownDocumenterFeature.onFinished()")))))}d.isMDXComponent=!0}}]);