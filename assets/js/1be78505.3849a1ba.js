"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[29514,60276],{50158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27260:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var r=n(46393),a=n(50158),o=n(39641),l=n(62200),c=n(4722),i=n(41919),s=n(43105),u=n(42578),d=n(61731);var m=function(e){return r.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(15079),f=n(70396),h=n(67998),y=n(88512),b=n(46366),v="menuLinkText_oOyz",g="hasHref_iXEV",k=n(19505),E=["items"],T=["item"],Z=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],N=(0,r.memo)((function(e){var t=e.items,n=(0,f.Z)(e,E);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(_,(0,d.Z)({key:t,item:e},n))})))}));function _(e){var t=e.item,n=(0,f.Z)(e,T);return"category"===t.type?0===t.items.length?null:r.createElement(S,(0,d.Z)({item:t},n)):r.createElement(O,(0,d.Z)({item:t},n))}function S(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=e.level,s=(0,f.Z)(e,Z),u=n.items,m=n.label,y=n.collapsible,b=n.className,E=n.href,T=function(e){var t=(0,k.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),C=(0,i._F)(n,o),_=(0,i.uR)({initialState:function(){return!!y&&(!C&&n.collapsed)}}),S=_.collapsed,O=_.setCollapsed,P=_.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,i.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:C,collapsed:S,setCollapsed:O}),r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":S},b)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(h.Z,(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":y&&!E,"menu__link--active":C},t[v]=!y,t[g]=!!T,t)),onClick:y?function(e){null==a||a(n),E?O(!1):(e.preventDefault(),P())}:function(){null==a||a(n)},href:y?null!=T?T:"#":T},s),m),E&&y&&r.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),P()}})),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},r.createElement(N,{items:u,tabIndex:S?-1:0,onItemClick:a,activePath:o,level:l+1})))}function O(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(0,f.Z)(e,C),s=t.href,u=t.label,m=t.className,p=(0,i._F)(t,a);return r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},r.createElement(h.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,y.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,y.Z)(s)?u:r.createElement("span",null,u,r.createElement(b.Z,null))))}var P="sidebar_rYjd",I="sidebarWithHideableNavbar_HEiQ",x="sidebarHidden_Ip96",w="sidebarLogo_HpQy",L="menu_TBxP",j="menuWithAnnouncementBar_Dsra",A="collapseSidebarButton_1dW+",D="collapseSidebarButtonIcon_cmla";function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",A),onClick:t},r.createElement(m,{className:D}))}function B(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return r.createElement("div",{className:(0,c.Z)(P,(t={},t[I]=p,t[x]=s,t))},p&&r.createElement(u.Z,{tabIndex:-1,className:w}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(n={},n[j]=d,n))},r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(N,{items:o,activePath:a,level:1}))),f&&r.createElement(M,{onClick:l}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(N,{items:n,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function R(e){return r.createElement(i.Cv,{component:F,props:e})}var H=r.memo(B),W=r.memo(R);function z(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(H,e),a&&r.createElement(W,e))}var V=n(35481),U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},X={Prism:n(70217).default,theme:U};function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}var K=/\r\n|\r|\n/,Q=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},G=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},J=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=q({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=q({},n,{backgroundColor:null}),a};function $(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var ee=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),Y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?J(e.theme,e.language):void 0;return t.themeDict=n})),Y(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=q({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?q({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),Y(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),Y(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=q({},$(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?q({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),Y(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=G(u,d.type),d.alias&&(u=G(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(K),p=m.length;c.push({types:u,content:m[0]});for(var f=1;f<p;f++)Q(c),i.push(c=[]),c.push({types:u,content:m[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return Q(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),te=ee;var ne={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},re=n(97130),ae=function(){var e=(0,i.LU)().prism,t=(0,re.Z)().isDarkTheme,n=e.theme||ne,r=e.darkTheme||n;return t?r:n},oe="codeBlockContainer_YZw5",le="codeBlockContent_7FbP",ce="codeBlockTitle_-Vbo",ie="codeBlock_RCc7",se="copyButton_XkHl",ue="codeBlockLines_OuWf";function de(e){var t,n=e.children,a=e.className,o=e.metastring,l=e.title,s=(0,i.LU)().prism,u=(0,r.useState)(!1),m=u[0],f=u[1],h=(0,r.useState)(!1),y=h[0],b=h[1];(0,r.useEffect)((function(){b(!0)}),[]);var v=(0,i.bc)(o)||l,g=ae(),k=Array.isArray(n)?n.join(""):n,E=null!=(t=(0,i.Vo)(a))?t:s.defaultLanguage,T=(0,i.nZ)(k,o,E),Z=T.highlightLines,C=T.code,N=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let o=!1;a.rangeCount>0&&(o=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),o&&(a.removeAllRanges(),a.addRange(o)),r&&r.focus()}(C),f(!0),setTimeout((function(){return f(!1)}),2e3)};return r.createElement(te,(0,d.Z)({},X,{key:String(y),theme:g,code:C,language:E}),(function(e){var t=e.className,n=e.style,o=e.tokens,l=e.getLineProps,s=e.getTokenProps;return r.createElement("div",{className:(0,c.Z)(oe,a,i.kM.common.codeBlock)},v&&r.createElement("div",{style:n,className:ce},v),r.createElement("div",{className:(0,c.Z)(le,E)},r.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,ie,"thin-scrollbar"),style:n},r.createElement("code",{className:ue},o.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=l({line:e,key:t});return Z.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,d.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,d.Z)({key:t},s({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{type:"button","aria-label":(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(se,"clean-btn"),onClick:N},m?r.createElement(p.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(p.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var me=n(57403),pe="details_Icya";function fe(e){var t=Object.assign({},e);return r.createElement(i.PO,(0,d.Z)({},t,{className:(0,c.Z)("alert alert--info",pe,t.className)}))}var he=["mdxType","originalType"];var ye={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,f.Z)(a,he));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(V.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(de,e):r.createElement("code",e)},a:function(e){return r.createElement(h.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(de,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(fe,(0,d.Z)({},e,{summary:n}),a)},h1:(0,me.Z)("h1"),h2:(0,me.Z)("h2"),h3:(0,me.Z)("h3"),h4:(0,me.Z)("h4"),h5:(0,me.Z)("h5"),h6:(0,me.Z)("h6")},be=n(60276),ve="backToTopButton_DhKp",ge="backToTopButtonShow_oUUH";function ke(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Ee=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=ke(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||u(),n<300)a(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&a(!0)}else a(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,ve,(e={},e[ge]=n,e)),type:"button",onClick:function(){return s()}})},Te=n(18262),Ze={docPage:"docPage_H8Xm",docMainContainer:"docMainContainer_2rn9",docSidebarContainer:"docSidebarContainer_xEkI",docMainContainerEnhanced:"docMainContainerEnhanced_3Svn",docSidebarContainerHidden:"docSidebarContainerHidden_f4cv",collapsedDocSidebar:"collapsedDocSidebar_3hEv",expandSidebarButtonIcon:"expandSidebarButtonIcon_kbMp",docItemWrapperEnhanced:"docItemWrapperEnhanced_ytCc"};function Ce(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,f=e.sidebarName,h=(0,i.Vq)(),y=u.pluginId,b=u.version,v=(0,r.useState)(!1),g=v[0],k=v[1],E=(0,r.useState)(!1),T=E[0],Z=E[1],C=(0,r.useCallback)((function(){T&&Z(!1),k((function(e){return!e}))}),[T]);return r.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:b,tag:(0,i.os)(y,b)}},r.createElement("div",{className:Ze.docPage},r.createElement(Ee,null),h&&r.createElement("aside",{className:(0,c.Z)(Ze.docSidebarContainer,(t={},t[Ze.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ze.docSidebarContainer)&&g&&Z(!0)}},r.createElement(z,{key:f,sidebar:h,path:s.path,onCollapse:C,isHidden:T}),T&&r.createElement("div",{className:Ze.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},r.createElement(m,{className:Ze.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(Ze.docMainContainer,(n={},n[Ze.docMainContainerEnhanced]=g||!h,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",Ze.docItemWrapper,(o={},o[Ze.docItemWrapperEnhanced]=g,o))},r.createElement(a.Zo,{components:ye},d)))))}var Ne=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,Te.LX)(a.pathname,e)}));if(!l)return r.createElement(be.default,null);var c=l.sidebar,s=c?n.docsSidebars[c]:null;return r.createElement(r.Fragment,null,r.createElement(V.Z,null,r.createElement("html",{className:n.className})),r.createElement(i.qu,{version:n},r.createElement(i.bT,{sidebar:s},r.createElement(Ce,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.Z)(t,{versionMetadata:n})))))}},57403:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(70396),a=n(61731),o=n(46393),l=n(4722),c=n(15079),i=n(41919),s="anchorWithStickyNavbar_kfcd",u="anchorWithHideOnScrollNavbar_cPWz",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,r.Z)(e,d),f=(0,i.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=f,n[s]=!f,n)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},60276:function(e,t,n){n.r(t);var r=n(46393),a=n(62200),o=n(15079);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);