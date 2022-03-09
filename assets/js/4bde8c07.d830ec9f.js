"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[63553],{45242:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(63929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,h=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27194:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(95464),a=n(20134),o=(n(63929),n(45242)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"pages/api/heft.compilesubstagehooks",id:"pages/api/heft.compilesubstagehooks",title:"heft.compilesubstagehooks",description:"Home &gt; @rushstack/heft &gt; CompileSubstageHooks",source:"@site/docs/pages/api/heft.compilesubstagehooks.md",sourceDirName:"pages/api",slug:"/pages/api/heft.compilesubstagehooks",permalink:"/pages/api/heft.compilesubstagehooks",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u={},c=[{value:"CompileSubstageHooks class",id:"compilesubstagehooks-class",level:2},{value:"Properties",id:"properties",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/heft"},"@rushstack/heft")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/heft.compilesubstagehooks"},"CompileSubstageHooks")),(0,o.kt)("h2",{id:"compilesubstagehooks-class"},"CompileSubstageHooks class"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CompileSubstageHooks extends BuildSubstageHooksBase \n")),(0,o.kt)("b",null,"Extends:")," [BuildSubstageHooksBase](/pages/api/heft.buildsubstagehooksbase)",(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/heft.compilesubstagehooks.aftercompile"},"afterCompile")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"AsyncParallelHook"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("code",null,"afterCompile"),' event is fired exactly once, after the "compile" stage completes its first operation. The "bundle" stage will not begin until all event handlers have resolved their promises. The behavior of this event is the same in watch mode and non-watch mode.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/heft.compilesubstagehooks.afterrecompile"},"afterRecompile")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"AsyncParallelHook"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("code",null,"afterRecompile")," event is only used in watch mode. It fires whenever the compiler's outputs have been rebuilt. The initial compilation fires the ",(0,o.kt)("code",null,"afterCompile")," event only, and then all subsequent iterations fire the ",(0,o.kt)("code",null,"afterRecompile")," event only. Heft does not wait for the ",(0,o.kt)("code",null,"afterRecompile")," promises to resolve.")))))}f.isMDXComponent=!0}}]);