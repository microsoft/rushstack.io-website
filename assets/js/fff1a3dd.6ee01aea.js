"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[22926],{45242:function(e,r,a){a.d(r,{Zo:function(){return c},kt:function(){return f}});var t=a(63929);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=t.createContext({}),s=function(e){var r=t.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return a?t.createElement(m,i(i({ref:r},c),{},{components:a})):t.createElement(m,i({ref:r},c))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56115:function(e,r,a){a.r(r),a.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var t=a(95464),n=a(20134),o=(a(63929),a(45242)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields",id:"pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields",title:"node-core-library.ipackagejsonlookupparameters.loadextrafields",description:"Home &gt; @rushstack/node-core-library &gt; IPackageJsonLookupParameters &gt; loadExtraFields",source:"@site/docs/pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields",permalink:"/pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c={},u=[{value:"IPackageJsonLookupParameters.loadExtraFields property",id:"ipackagejsonlookupparametersloadextrafields-property",level:2}],d={toc:u};function f(e){var r=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.ipackagejsonlookupparameters"},"IPackageJsonLookupParameters")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields"},"loadExtraFields")),(0,o.kt)("h2",{id:"ipackagejsonlookupparametersloadextrafields-property"},"IPackageJsonLookupParameters.loadExtraFields property"),(0,o.kt)("p",null,'Certain package.json fields such as "contributors" can be very large, and may significantly increase the memory footprint for the PackageJsonLookup cache. By default, PackageJsonLookup only loads a subset of standard commonly used fields names. Set loadExtraFields=true to always return all fields.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"loadExtraFields?: boolean;\n")))}f.isMDXComponent=!0}}]);