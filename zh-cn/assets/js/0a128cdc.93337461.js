"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[1962],{5242:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(3929);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return b}});var r=n(394),o=n(1614),a=n(3929),i=n(5242);function c(e){return a.createElement("div",{className:"people-item"},a.createElement("a",{href:"https://github.com/"+e.person.github},a.createElement("img",{src:"https://github.com/"+e.person.github+".png?s=100",width:"100",style:{borderRadius:"50%"}})),a.createElement("div",null,a.createElement("a",{href:"https://github.com/"+e.person.github},e.person.name)),a.createElement("div",null,a.createElement("b",null,"@",e.person.github)),a.createElement("div",null,a.createElement("i",null,e.person.caption)))}function u(e){return a.createElement("div",{className:"people-container"},e.people.map((function(e){return a.createElement(c,{person:e})})))}var l=JSON.parse('{"maintainers":[{"name":"Apostolis Haitalis","github":"apostolisms","caption":"manages the team that hosts the Rush Stack projects"},{"name":"Daniel Nadeau","github":"D4N14L","caption":"feature implementation, focusing on Rush workspaces and Heft"},{"name":"David Michon","github":"dmichon-msft","caption":"feature implementation, focusing on performance and watch mode"},{"name":"Ian Clanton-Thuon","github":"iclanton","caption":"architecture, focusing on Heft and Rush build cache"},{"name":"Pete Gonzalez","github":"octogonz","caption":"architecture, community engagement, docs and TSDoc"}],"collaborators":[{"name":"Claudia Sun","github":"Claudiazhaoya"},{"name":"Elliot Nelson","github":"elliot-nelson"},{"name":"Josh Wedekind","github":"halfnibble"},{"name":"Sachin Joseph","github":"sachinjoseph"}],"alumni":[{"name":"Nick Pape","github":"nickpape","role":"Maintainer 2016-2018","caption":"broad contributions including Rush\'s task scheduler and stream collator"},{"name":"QZ","github":"qz2017","role":"Maintainer 2016-2018","caption":"broad contributions including Rush version policies and publishing features"},{"name":"Daniel Gaeta","github":"dgaeta","role":"Collaborator 2017","caption":"implemented API Extractor and API Documenter features"}],"star_contributors":[{"name":"Cheng","sort_month":"2021-12","github":"chengcyber","caption":"designed and implemented the plugin system for Rush"},{"name":"Yunfei","sort_month":"2021-07","github":"adventure-yunfei","caption":"recognized for major contributions to API Extractor and API Documenter"},{"name":"William Bernting","sort_month":"2020-12","caption":"helped design Rush\'s multi-project watch mode feature, implemented the @telia/rush-select console","github":"wbern"},{"name":"Ron Buckton","sort_month":"2019-09","github":"rbuckton","caption":"recognized for major contributions to API Extractor and TSDoc, including the declaration reference syntax"},{"name":"Thomas Michon","sort_month":"2018-11","caption":"contributed the \\"installation variants\\" feature for Rush","github":"ThomasMichon"},{"name":"David Zearing","sort_month":"2016-01","caption":"pioneered early components such as package-deps-hash, gulp-core-build, and load-themed-styles","github":"dzearing"}]}'),s=n.t(l,2);function p(e){var t=s[e.category];return a.createElement(u,{people:t})}var m=["components"],d={title:"\u8c01\u53c2\u4e0e\u5176\u4e2d\uff1f",custom_edit_url:null},h=void 0,g={unversionedId:"pages/overview/people",id:"pages/overview/people",title:"\u8c01\u53c2\u4e0e\u5176\u4e2d\uff1f",description:"",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/overview/people.md",sourceDirName:"pages/overview",slug:"/pages/overview/people",permalink:"/zh-cn/pages/overview/people",editUrl:null,tags:[],version:"current",frontMatter:{title:"\u8c01\u53c2\u4e0e\u5176\u4e2d\uff1f",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Rush Stack \u662f\u4ec0\u4e48",permalink:"/zh-cn/"},next:{title:"\u9879\u76ee\u89c4\u5212",permalink:"/zh-cn/pages/overview/roadmap"}},f={},b=[{value:"\u7ef4\u62a4\u8005",id:"\u7ef4\u62a4\u8005",level:2},{value:"\u5408\u4f5c\u4f19\u4f34",id:"\u5408\u4f5c\u4f19\u4f34",level:2},{value:"\u6821\u53cb",id:"\u6821\u53cb",level:2},{value:"\u660e\u661f\u8d21\u732e\u8005",id:"\u660e\u661f\u8d21\u732e\u8005",level:2}],v={toc:b};function y(e){var t=e.components,n=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7ef4\u62a4\u8005"},"\u7ef4\u62a4\u8005"),(0,i.kt)("p",null,"\u7ef4\u62a4\u8005\u4eec\u5b9a\u671f\u5f00\u4f1a\uff0c\u76f4\u63a5\u8d1f\u8d23\u76d1\u7763 Rush Stack \u5185\u7684\u9879\u76ee\u3002\u6309\u7167\u5b57\u6bcd\u987a\u5e8f\uff1a"),(0,i.kt)(p,{category:"maintainers",mdxType:"PeopleGrid"}),(0,i.kt)("h2",{id:"\u5408\u4f5c\u4f19\u4f34"},"\u5408\u4f5c\u4f19\u4f34"),(0,i.kt)("p",null,"\u5408\u4f5c\u4f19\u4f34\u5e2e\u52a9\u9879\u76ee\u6b63\u5e38\u8fd0\u884c\uff0c\u4f46\u662f\u5b83\u4eec\u5e76\u4e0d\u50cf\u7ef4\u62a4\u8005\u4e00\u6837\u76f4\u63a5\u53c2\u4e0e\u5f00\u53d1\u3002\u5408\u4f5c\u7684\u65b9\u5f0f\u6709\u5f88\u4f5c\uff0c\u4f8b\u5982\uff1a\u521b\u5efa issues, \u5ba1\u67e5 PR, \u8bbe\u8ba1\u8ba8\u8bba\uff0c\u5199\u6587\u6863\uff0c\u6216\u8005\u56de\u7b54\u4e00\u4e9b\u95ee\u9898\u7b49\u3002\u6309\u7167\u5b57\u6bcd\u987a\u5e8f\uff1a"),(0,i.kt)(p,{category:"collaborators",mdxType:"PeopleGrid"}),(0,i.kt)("h2",{id:"\u6821\u53cb"},"\u6821\u53cb"),(0,i.kt)("p",null,"\u5f53\u7ef4\u62a4\u8005\u6216\u8005\u5408\u4f5c\u8005\u4e0d\u5728\u4e4e\u79ef\u6781\u53c2\u4e0e\u65f6\uff0c\u4fbf\u6210\u4e3a\u4e86\u6821\u53cb\u3002\u6309\u7167\u65f6\u95f4\u987a\u5e8f\uff1a"),(0,i.kt)(p,{category:"alumni",mdxType:"PeopleGrid"}),(0,i.kt)("h2",{id:"\u660e\u661f\u8d21\u732e\u8005"},"\u660e\u661f\u8d21\u732e\u8005"),(0,i.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u4e86\u6ca1\u6709\u52a0\u5165\u5230 Rush Stack \u7684\u5f00\u53d1\u8005\uff0c\u4f46\u662f\u4ed6\u4eec\u4e5f\u4e3a\u9879\u76ee\u505a\u51fa\u4e86\u5de8\u5927\u7684\u8d21\u732e\uff0c\u7ef4\u62a4\u8005\u5bf9\u5176\u6df1\u8868\u611f\u8c22\u3002\u5982\u679c\u4f60\u60f3\u63d0\u540d\u67d0\u4eba\uff0c\u8bf7\u544a\u8bc9\u6211\u4eec\u3002\u6309\u7167\u65f6\u95f4\u5012\u5e8f\u987a\u5e8f\uff1a"),(0,i.kt)(p,{category:"star_contributors",mdxType:"PeopleGrid"}))}y.isMDXComponent=!0}}]);