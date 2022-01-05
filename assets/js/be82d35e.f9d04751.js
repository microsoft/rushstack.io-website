"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[4602],{50158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(46393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73322:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var r=n(61731),o=n(70396),a=n(46393),i=n(50158);function l(e){return a.createElement("div",{className:"people-item"},a.createElement("a",{href:"https://github.com/"+e.person.github},a.createElement("img",{src:"https://github.com/"+e.person.github+".png?s=100",width:"100",style:{borderRadius:"50%"}})),a.createElement("div",null,a.createElement("a",{href:"https://github.com/"+e.person.github},e.person.name)),a.createElement("div",null,a.createElement("b",null,"@",e.person.github)),a.createElement("div",null,a.createElement("i",null,e.person.caption)))}function c(e){return a.createElement("div",{className:"people-container"},e.people.map((function(e){return a.createElement(l,{person:e})})))}var s=JSON.parse('{"maintainers":[{"name":"Apostolis Haitalis","github":"apostolisms","caption":"manages the team that hosts the Rush Stack projects"},{"name":"Daniel Nadeau","github":"D4N14L","caption":"feature implementation, focusing on Rush workspaces and Heft"},{"name":"David Michon","github":"dmichon-msft","caption":"feature implementation, focusing on performance and watch mode"},{"name":"Ian Clanton-Thuon","github":"iclanton","caption":"architecture, focusing on Heft and Rush build cache"},{"name":"Pete Gonzalez","github":"octogonz","caption":"architecture, community engagement, docs and TSDoc"}],"collaborators":[{"name":"Claudia Sun","github":"Claudiazhaoya"},{"name":"Elliot Nelson","github":"elliot-nelson"},{"name":"Josh Wedekind","github":"halfnibble"},{"name":"Sachin Joseph","github":"sachinjoseph"}],"alumni":[{"name":"Nick Pape","github":"nickpape","role":"Maintainer 2016-2018","caption":"broad contributions including Rush\'s task scheduler and stream collator"},{"name":"QZ","github":"qz2017","role":"Maintainer 2016-2018","caption":"broad contributions including Rush version policies and publishing features"},{"name":"Daniel Gaeta","github":"dgaeta","role":"Collaborator 2017","caption":"implemented API Extractor and API Documenter features"}],"star_contributors":[{"name":"Cheng","sort_month":"2021-12","github":"chengcyber","caption":"designed and implemented the plugin system for Rush"},{"name":"Yunfei","sort_month":"2021-07","github":"adventure-yunfei","caption":"recognized for major contributions to API Extractor and API Documenter"},{"name":"William Bernting","sort_month":"2020-12","caption":"helped design Rush\'s multi-project watch mode feature, implemented the @telia/rush-select console","github":"wbern"},{"name":"Ron Buckton","sort_month":"2019-09","github":"rbuckton","caption":"recognized for major contributions to API Extractor and TSDoc, including the declaration reference syntax"},{"name":"Thomas Michon","sort_month":"2018-11","caption":"contributed the \\"installation variants\\" feature for Rush","github":"ThomasMichon"},{"name":"David Zearing","sort_month":"2016-01","caption":"pioneered early components such as package-deps-hash, gulp-core-build, and load-themed-styles","github":"dzearing"}]}'),u=n.t(s,2);function p(e){var t=u[e.category];return a.createElement(c,{people:t})}var m=["components"],d={title:"Who's involved?",custom_edit_url:null},h=void 0,f={unversionedId:"pages/overview/people",id:"pages/overview/people",title:"Who's involved?",description:"Maintainers",source:"@site/docs/pages/overview/people.md",sourceDirName:"pages/overview",slug:"/pages/overview/people",permalink:"/pages/overview/people",editUrl:null,tags:[],version:"current",frontMatter:{title:"Who's involved?",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"What is Rush Stack?",permalink:"/"},next:{title:"Project roadmap",permalink:"/pages/overview/roadmap"}},g=[{value:"Maintainers",id:"maintainers",children:[],level:2},{value:"Affiliate Collaborators",id:"affiliate-collaborators",children:[],level:2},{value:"Alumni",id:"alumni",children:[],level:2},{value:"Star Contributors",id:"star-contributors",children:[],level:2}],b={toc:g};function v(e){var t=e.components,n=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"maintainers"},"Maintainers"),(0,i.kt)("p",null,"Maintainers meet regularly and have direct responsibility for overseeing the Rush Stack family of projects.  In alphabetical order:"),(0,i.kt)(p,{category:"maintainers",mdxType:"PeopleGrid"}),(0,i.kt)("h2",{id:"affiliate-collaborators"},"Affiliate Collaborators"),(0,i.kt)("p",null,"Affiliate Collaborators help keep things running smoothly, but are not as directly involved as the maintainers. Collaboration can take many forms such as triaging issues, reviewing PRs, facilitating design discussions, writing docs, or answering support questions.  In alphabetical order:"),(0,i.kt)(p,{category:"collaborators",mdxType:"PeopleGrid"}),(0,i.kt)("h2",{id:"alumni"},"Alumni"),(0,i.kt)("p",null,"When a Maintainer or Collaborator is no longer actively involved, they become Alumni.  In reverse chronological order:"),(0,i.kt)(p,{category:"alumni",mdxType:"PeopleGrid"}),(0,i.kt)("h2",{id:"star-contributors"},"Star Contributors"),(0,i.kt)("p",null,"This list recognizes individuals who are not formally affiliated with Rush Stack, but who nonetheless made major contributions that the maintainers would like to acknowledge.  If you'd like to nominate someone, let us know.  In reverse chronological order:"),(0,i.kt)(p,{category:"star_contributors",mdxType:"PeopleGrid"}))}v.isMDXComponent=!0}}]);