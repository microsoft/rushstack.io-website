"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[43007],{45242:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(63929);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=i,d=s["".concat(u,".").concat(f)]||s[f]||c[f]||a;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},96689:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(95464),i=t(20134),a=(t(63929),t(45242)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"pages/api/module-minifier-plugin.synchronousminifier.minify",id:"pages/api/module-minifier-plugin.synchronousminifier.minify",title:"module-minifier-plugin.synchronousminifier.minify",description:"Home &gt; @rushstack/module-minifier-plugin &gt; SynchronousMinifier &gt; minify",source:"@site/docs/pages/api/module-minifier-plugin.synchronousminifier.minify.md",sourceDirName:"pages/api",slug:"/pages/api/module-minifier-plugin.synchronousminifier.minify",permalink:"/pages/api/module-minifier-plugin.synchronousminifier.minify",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m={},c=[{value:"SynchronousMinifier.minify() method",id:"synchronousminifierminify-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.synchronousminifier"},"SynchronousMinifier")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.synchronousminifier.minify"},"minify")),(0,a.kt)("h2",{id:"synchronousminifierminify-method"},"SynchronousMinifier.minify() method"),(0,a.kt)("p",null,"Transform that synchronously invokes Terser"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"minify(request: IModuleMinificationRequest, callback: IModuleMinificationCallback): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.imoduleminificationrequest"},"IModuleMinificationRequest")),(0,a.kt)("td",{parentName:"tr",align:null},"The request to process")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.imoduleminificationcallback"},"IModuleMinificationCallback")),(0,a.kt)("td",{parentName:"tr",align:null},"The callback to invoke")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"void"))}f.isMDXComponent=!0}}]);