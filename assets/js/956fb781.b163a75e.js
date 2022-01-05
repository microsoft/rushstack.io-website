"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[18308],{50158:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return g}});var n=a(46393);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=p(a),g=i,d=f["".concat(c,".").concat(g)]||f[g]||u[g]||o;return a?n.createElement(d,r(r({ref:e},s),{},{components:a})):n.createElement(d,r({ref:e},s))}));function g(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},54741:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=a(61731),i=a(70396),o=(a(46393),a(50158)),r=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,p={unversionedId:"pages/api/localization-plugin.ilocalizationstatsoptions.callback",id:"pages/api/localization-plugin.ilocalizationstatsoptions.callback",title:"localization-plugin.ilocalizationstatsoptions.callback",description:"Home &gt; @rushstack/localization-plugin &gt; ILocalizationStatsOptions &gt; callback",source:"@site/docs/pages/api/localization-plugin.ilocalizationstatsoptions.callback.md",sourceDirName:"pages/api",slug:"/pages/api/localization-plugin.ilocalizationstatsoptions.callback",permalink:"/pages/api/localization-plugin.ilocalizationstatsoptions.callback",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ILocalizationStatsOptions.callback property",id:"ilocalizationstatsoptionscallback-property",children:[],level:2}],u={toc:s};function f(t){var e=t.components,a=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/localization-plugin"},"@rushstack/localization-plugin")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/localization-plugin.ilocalizationstatsoptions"},"ILocalizationStatsOptions")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/localization-plugin.ilocalizationstatsoptions.callback"},"callback")),(0,o.kt)("h2",{id:"ilocalizationstatsoptionscallback-property"},"ILocalizationStatsOptions.callback property"),(0,o.kt)("p",null,"This option is used to specify a callback to be called with the stats data that would be dropped at ",(0,o.kt)("inlineCode",{parentName:"p"},"localizationStats.dropPath")," after compilation completes."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"callback?: (stats: ILocalizationStats) => void;\n")))}f.isMDXComponent=!0}}]);