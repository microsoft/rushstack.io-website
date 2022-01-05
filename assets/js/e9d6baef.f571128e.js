"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[76908],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,d=m["".concat(o,".").concat(g)]||m[g]||s[g]||p;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<p;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52103:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(61731),a=r(70396),p=(r(46393),r(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,u={unversionedId:"pages/api/tree-pattern.treepattern.tag",id:"pages/api/tree-pattern.treepattern.tag",title:"tree-pattern.treepattern.tag",description:"Home &gt; @rushstack/tree-pattern &gt; TreePattern &gt; tag",source:"@site/docs/pages/api/tree-pattern.treepattern.tag.md",sourceDirName:"pages/api",slug:"/pages/api/tree-pattern.treepattern.tag",permalink:"/pages/api/tree-pattern.treepattern.tag",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"TreePattern.tag() method",id:"treepatterntag-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/tree-pattern"},"@rushstack/tree-pattern")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/tree-pattern.treepattern"},"TreePattern")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/tree-pattern.treepattern.tag"},"tag")),(0,p.kt)("h2",{id:"treepatterntag-method"},"TreePattern.tag() method"),(0,p.kt)("p",null,"Labels a subtree within the search pattern, so that the matching object can be retrieved."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"static tag(tagName: string, subtree?: TreeNode): TreeNode;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"tagName"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"subtree"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/pages/api/tree-pattern.treenode"},"TreeNode")),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/api/tree-pattern.treenode"},"TreeNode")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"Used to build the ",(0,p.kt)("inlineCode",{parentName:"p"},"pattern")," tree for ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/tree-pattern.treepattern.match"},"TreePattern.match()")," . For the given ",(0,p.kt)("inlineCode",{parentName:"p"},"subtree")," of the pattern, if it is matched, that node will be assigned to the ",(0,p.kt)("inlineCode",{parentName:"p"},"captures")," object using ",(0,p.kt)("inlineCode",{parentName:"p"},"tagName")," as the key."),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"const myCaptures: { personName?: string } = {};\nconst myPattern = {\n  name: TreePattern.tag('personName')\n};\nif (myPattern.match({ name: 'Bob' }, myCaptures)) {\n  console.log(myCaptures.personName);\n}\n")))}m.isMDXComponent=!0}}]);