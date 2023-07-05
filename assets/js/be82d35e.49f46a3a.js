"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[4602],{158:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(6393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>h});var a=n(9122),i=n(6393),o=n(158);const r=JSON.parse('{"//":"Include the month when they were added in YYYY-MM format","maintainers":[{"name":"Apostolis Haitalis","githubAlias":"apostolisms","caption":"manages the team that hosts the Rush Stack projects"},{"name":"Daniel Nadeau","githubAlias":"D4N14L","caption":"feature implementation, focusing on Rush workspaces and Heft"},{"name":"David Michon","githubAlias":"dmichon-msft","caption":"feature implementation, focusing on performance and watch mode"},{"name":"Ian Clanton-Thuon","githubAlias":"iclanton","caption":"architecture, focusing on Heft and Rush build cache"},{"name":"Pete Gonzalez","githubAlias":"octogonz","caption":"architecture, community engagement, docs and TSDoc"},{"name":"Sean Larkin","githubAlias":"TheLarkInn","caption":"Webpack integration, community engagement; Sean is also a maintainer for Webpack and angular-cli"}],"collaborators":[{"name":"Cheng","githubAlias":"chengcyber","caption":"facilitating: Rush; contributed many features including the Rush plugin system"},{"name":"Elliot Nelson","githubAlias":"elliot-nelson","caption":"facilitating: Rush, Heft, Docusaurus"},{"name":"Sachin Joseph","githubAlias":"sachinjoseph","caption":"facilitating: Rush"},{"name":"Zack Elliott","githubAlias":"zelliott","caption":"facilitating: API Extractor"}],"alumni":[{"name":"Claudia Sun","githubAlias":"Claudiazhaoya","role":"Maintainer 2019-2022","caption":"contributed fixes and enhancements while migrating many projects to build using Heft"},{"name":"Josh Wedekind","githubAlias":"halfnibble","role":"Maintainer 2019-2021","caption":"contributed the sass-typings-generator, heft-dev-cert-plugin, and the Heft APIs for custom actions/parameters"},{"name":"Nick Pape","githubAlias":"nickpape","role":"Maintainer 2016-2018","caption":"broad contributions including Rush\'s task scheduler and stream collator"},{"name":"QZ","githubAlias":"qz2017","role":"Maintainer 2016-2018","caption":"broad contributions including Rush version policies and publishing features"},{"name":"Daniel Gaeta","githubAlias":"dgaeta","role":"Collaborator 2017","caption":"implemented API Extractor and API Documenter features"}],"starContributors":[{"//":"month when added: 2023-02","name":"William Huang","githubAlias":"william2958","caption":"contributed the Lockfile Explorer app"},{"//":"month when added: 2021-12","name":"Cheng","githubAlias":"chengcyber","caption":"designed and implemented the plugin system for Rush"},{"//":"month when added: 2021-07","name":"Yunfei","githubAlias":"adventure-yunfei","caption":"recognized for major contributions to API Extractor and API Documenter"},{"//":"month when added: 2020-12","name":"William Bernting","caption":"helped design Rush\'s multi-project watch mode feature, implemented the @telia/rush-select console","githubAlias":"wbern"},{"//":"month when added: 2019-09","name":"Ron Buckton","githubAlias":"rbuckton","caption":"recognized for major contributions to API Extractor and TSDoc, including the declaration reference syntax"},{"//":"month when added: 2018-11","name":"Thomas Michon","caption":"contributed the \\"installation variants\\" feature for Rush","githubAlias":"ThomasMichon"},{"//":"month when added: 2016-01","name":"David Zearing","caption":"pioneered early components such as package-deps-hash, gulp-core-build, and load-themed-styles","githubAlias":"dzearing"}]}');const l=n.t(r,2);function s(e){return i.createElement("div",{className:"people-item",style:{marginBottom:"20px"}},i.createElement("a",{href:`https://github.com/${e.person.githubAlias}`,className:"no-external-link-icon"},i.createElement("img",{src:`https://github.com/${e.person.githubAlias}.png?s=100`,width:"100",style:{borderRadius:"50%"}})),i.createElement("div",null,i.createElement("a",{href:`https://github.com/${e.person.githubAlias}`,className:"no-external-link-icon"},e.person.name)),i.createElement("div",{style:{paddingBottom:"12px"}},i.createElement("b",null,"@",e.person.githubAlias)),e.person.role?i.createElement("div",null,i.createElement("i",null,e.person.role.toUpperCase())):void 0,e.person.caption?i.createElement("div",null,i.createElement("i",null,e.person.caption)):void 0)}function c(e){const t=l[e.category];if(!t)throw new Error(`Missing category ${e.category}`);return i.createElement("div",{className:"people-container"},t.map((e=>i.createElement(s,{key:e.githubAlias,person:e}))))}const u={title:"Who's involved?",custom_edit_url:null},p=void 0,m={unversionedId:"pages/overview/people",id:"pages/overview/people",title:"Who's involved?",description:"Maintainers",source:"@site/docs/pages/overview/people.md",sourceDirName:"pages/overview",slug:"/pages/overview/people",permalink:"/pages/overview/people",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{title:"Who's involved?",custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"What is Rush Stack?",permalink:"/"},next:{title:"Project roadmap",permalink:"/pages/overview/roadmap"}},d={},h=[{value:"Maintainers",id:"maintainers",level:2},{value:"Affiliate Collaborators",id:"affiliate-collaborators",level:2},{value:"Alumni",id:"alumni",level:2},{value:"Star Contributors",id:"star-contributors",level:2}],g={toc:h},b="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("p",null,"Maintainers meet regularly and have direct responsibility for overseeing the Rush Stack family of projects. In alphabetical order:"),(0,o.kt)(c,{category:"maintainers",mdxType:"PeopleGrid"}),(0,o.kt)("h2",{id:"affiliate-collaborators"},"Affiliate Collaborators"),(0,o.kt)("p",null,"Affiliate Collaborators help keep things running smoothly, but are not as directly involved as the maintainers. Collaboration can take many forms such as triaging issues, reviewing PRs, facilitating design discussions, writing docs, or answering support questions. In alphabetical order:"),(0,o.kt)(c,{category:"collaborators",mdxType:"PeopleGrid"}),(0,o.kt)("h2",{id:"alumni"},"Alumni"),(0,o.kt)("p",null,"When a Maintainer or Collaborator is no longer actively involved, they become Alumni. In reverse chronological order:"),(0,o.kt)(c,{category:"alumni",mdxType:"PeopleGrid"}),(0,o.kt)("h2",{id:"star-contributors"},"Star Contributors"),(0,o.kt)("p",null,"This list recognizes individuals who are not formally affiliated with Rush Stack, but who nonetheless made major contributions that the maintainers would like to acknowledge. If you'd like to nominate someone, let us know. In reverse chronological order:"),(0,o.kt)(c,{category:"starContributors",mdxType:"PeopleGrid"}))}f.isMDXComponent=!0}}]);