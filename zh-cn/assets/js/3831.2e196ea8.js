/*! For license information please see 3831.2e196ea8.js.LICENSE.txt */
(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[3831],{158:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var r=n(6393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,p=f["".concat(l,".").concat(d)]||f[d]||m[d]||o;return n?r.createElement(p,a(a({ref:t},u),{},{components:n})):r.createElement(p,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4618:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",f="year",m="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},T={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:l,d:s,D:m,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},E="en",b={};b[E]=g;var _=function(e){return e instanceof w},v=function e(t,n,r){var i;if(!t)return E;if("string"==typeof t){var o=t.toLowerCase();b[o]&&(i=o),n&&(b[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(E=i),i||!r&&E},S=function(e,t){if(_(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},A=T;A.l=v,A.i=_,A.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function g(e){this.$L=v(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(A.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return A},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return A.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!A.u(t)||t,u=A.p(e),d=function(e,t){var i=A.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return A.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,y=this.$D,T="set"+(this.$u?"UTC":"");switch(u){case f:return r?d(1,0):d(31,11);case c:return r?d(1,g):d(0,g+1);case l:var E=this.$locale().weekStart||0,b=(h<E?h+7:h)-E;return d(r?y-b:y+(6-b),g);case s:case m:return p(T+"Hours",0);case a:return p(T+"Minutes",1);case o:return p(T+"Seconds",2);case i:return p(T+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=A.p(e),u="set"+(this.$u?"UTC":""),d=(n={},n[s]=u+"Date",n[m]=u+"Date",n[c]=u+"Month",n[f]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===f){var h=this.clone().set(m,1);h.$d[d](p),h.init(),this.$d=h.set(m,Math.min(this.$D,h.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[A.p(e)]()},y.add=function(r,u){var m,d=this;r=Number(r);var p=A.p(u),h=function(e){var t=S(d);return A.w(t.date(t.date()+Math.round(e*r)),d)};if(p===c)return this.set(c,this.$M+r);if(p===f)return this.set(f,this.$y+r);if(p===s)return h(1);if(p===l)return h(7);var g=(m={},m[o]=t,m[a]=n,m[i]=e,m)[p]||1,y=this.$d.getTime()+r*g;return A.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=A.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return A.s(o%12||12,e,"0")},m=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:A.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:A.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:A.s(o,2,"0"),h:f(1),hh:f(2),a:m(o,a,!0),A:m(o,a,!1),m:String(a),mm:A.s(a,2,"0"),s:String(this.$s),ss:A.s(this.$s,2,"0"),SSS:A.s(this.$ms,3,"0"),Z:i};return r.replace(h,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,m,d){var p,h=A.p(m),g=S(r),y=(g.utcOffset()-this.utcOffset())*t,T=this-g,E=A.m(this,g);return E=(p={},p[f]=E/12,p[c]=E,p[u]=E/3,p[l]=(T-y)/6048e5,p[s]=(T-y)/864e5,p[a]=T/n,p[o]=T/t,p[i]=T/e,p)[h]||T,d?E:A.a(E)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=v(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return A.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=w.prototype;return S.prototype=D,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",f],["$D",m]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,w,S),e.$i=!0),S},S.locale=v,S.isDayjs=_,S.unix=function(e){return S(1e3*e)},S.en=b[E],S.Ls=b,S.p={},S}()},3746:function(e){e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:r,getOwnPropertyDescriptor:i}=Object;let{freeze:o,seal:a,create:s}=Object,{apply:l,construct:c}="undefined"!=typeof Reflect&&Reflect;o||(o=function(e){return e}),a||(a=function(e){return e}),l||(l=function(e,t,n){return e.apply(t,n)}),c||(c=function(e,t){return new e(...t)});const u=_(Array.prototype.forEach),f=_(Array.prototype.pop),m=_(Array.prototype.push),d=_(String.prototype.toLowerCase),p=_(String.prototype.toString),h=_(String.prototype.match),g=_(String.prototype.replace),y=_(String.prototype.indexOf),T=_(String.prototype.trim),E=_(RegExp.prototype.test),b=v(TypeError);function _(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return l(e,t,r)}}function v(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return c(e,n)}}function S(e,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d;t&&t(e,null);let o=r.length;for(;o--;){let t=r[o];if("string"==typeof t){const e=i(t);e!==t&&(n(r)||(r[o]=e),t=e)}e[t]=!0}return e}function A(t){const n=s(null);for(const[r,o]of e(t))void 0!==i(t,r)&&(n[r]=o);return n}function w(e,t){for(;null!==e;){const n=i(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=r(e)}function n(e){return console.warn("fallback value for",e),null}return n}const D=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),N=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),M=o(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),x=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),R=o(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),k=o(["#text"]),C=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),L=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),U=a(/<%[\w\W]*|[\w\W]*%>/gm),H=a(/\${[\w\W]*}/gm),F=a(/^data-[\-\w.\u00B7-\uFFFF]/),z=a(/^aria-[\-\w]+$/),W=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),j=a(/^(?:\w+script|data):/i),Y=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),B=a(/^html$/i);var G=Object.freeze({__proto__:null,MUSTACHE_EXPR:P,ERB_EXPR:U,TMPLIT_EXPR:H,DATA_ATTR:F,ARIA_ATTR:z,IS_ALLOWED_URI:W,IS_SCRIPT_OR_DATA:j,ATTR_WHITESPACE:Y,DOCTYPE_NAME:B});const q=function(){return"undefined"==typeof window?null:window},X=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const i="dompurify"+(n?"#"+n:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(o){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function V(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q();const n=e=>V(e);if(n.version="3.0.6",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;let{document:r}=t;const i=r,a=i.currentScript,{DocumentFragment:l,HTMLTemplateElement:c,Node:_,Element:v,NodeFilter:P,NamedNodeMap:U=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:H,DOMParser:F,trustedTypes:z}=t,j=v.prototype,Y=w(j,"cloneNode"),Z=w(j,"nextSibling"),J=w(j,"childNodes"),K=w(j,"parentNode");if("function"==typeof c){const e=r.createElement("template");e.content&&e.content.ownerDocument&&(r=e.content.ownerDocument)}let Q,ee="";const{implementation:te,createNodeIterator:ne,createDocumentFragment:re,getElementsByTagName:ie}=r,{importNode:oe}=i;let ae={};n.isSupported="function"==typeof e&&"function"==typeof K&&te&&void 0!==te.createHTMLDocument;const{MUSTACHE_EXPR:se,ERB_EXPR:le,TMPLIT_EXPR:ce,DATA_ATTR:ue,ARIA_ATTR:fe,IS_SCRIPT_OR_DATA:me,ATTR_WHITESPACE:de}=G;let{IS_ALLOWED_URI:pe}=G,he=null;const ge=S({},[...D,...N,...O,...x,...k]);let ye=null;const Te=S({},[...C,...L,...I,...$]);let Ee=Object.seal(s(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),be=null,_e=null,ve=!0,Se=!0,Ae=!1,we=!0,De=!1,Ne=!1,Oe=!1,Me=!1,xe=!1,Re=!1,ke=!1,Ce=!0,Le=!1;const Ie="user-content-";let $e=!0,Pe=!1,Ue={},He=null;const Fe=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ze=null;const We=S({},["audio","video","img","source","image","track"]);let je=null;const Ye=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Be="http://www.w3.org/1998/Math/MathML",Ge="http://www.w3.org/2000/svg",qe="http://www.w3.org/1999/xhtml";let Xe=qe,Ve=!1,Ze=null;const Je=S({},[Be,Ge,qe],p);let Ke=null;const Qe=["application/xhtml+xml","text/html"],et="text/html";let tt=null,nt=null;const rt=r.createElement("form"),it=function(e){return e instanceof RegExp||e instanceof Function},ot=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!nt||nt!==e){if(e&&"object"==typeof e||(e={}),e=A(e),Ke=Ke=-1===Qe.indexOf(e.PARSER_MEDIA_TYPE)?et:e.PARSER_MEDIA_TYPE,tt="application/xhtml+xml"===Ke?p:d,he="ALLOWED_TAGS"in e?S({},e.ALLOWED_TAGS,tt):ge,ye="ALLOWED_ATTR"in e?S({},e.ALLOWED_ATTR,tt):Te,Ze="ALLOWED_NAMESPACES"in e?S({},e.ALLOWED_NAMESPACES,p):Je,je="ADD_URI_SAFE_ATTR"in e?S(A(Ye),e.ADD_URI_SAFE_ATTR,tt):Ye,ze="ADD_DATA_URI_TAGS"in e?S(A(We),e.ADD_DATA_URI_TAGS,tt):We,He="FORBID_CONTENTS"in e?S({},e.FORBID_CONTENTS,tt):Fe,be="FORBID_TAGS"in e?S({},e.FORBID_TAGS,tt):{},_e="FORBID_ATTR"in e?S({},e.FORBID_ATTR,tt):{},Ue="USE_PROFILES"in e&&e.USE_PROFILES,ve=!1!==e.ALLOW_ARIA_ATTR,Se=!1!==e.ALLOW_DATA_ATTR,Ae=e.ALLOW_UNKNOWN_PROTOCOLS||!1,we=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,De=e.SAFE_FOR_TEMPLATES||!1,Ne=e.WHOLE_DOCUMENT||!1,xe=e.RETURN_DOM||!1,Re=e.RETURN_DOM_FRAGMENT||!1,ke=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,Ce=!1!==e.SANITIZE_DOM,Le=e.SANITIZE_NAMED_PROPS||!1,$e=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,pe=e.ALLOWED_URI_REGEXP||W,Xe=e.NAMESPACE||qe,Ee=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&it(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ee.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&it(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ee.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ee.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),De&&(Se=!1),Re&&(xe=!0),Ue&&(he=S({},[...k]),ye=[],!0===Ue.html&&(S(he,D),S(ye,C)),!0===Ue.svg&&(S(he,N),S(ye,L),S(ye,$)),!0===Ue.svgFilters&&(S(he,O),S(ye,L),S(ye,$)),!0===Ue.mathMl&&(S(he,x),S(ye,I),S(ye,$))),e.ADD_TAGS&&(he===ge&&(he=A(he)),S(he,e.ADD_TAGS,tt)),e.ADD_ATTR&&(ye===Te&&(ye=A(ye)),S(ye,e.ADD_ATTR,tt)),e.ADD_URI_SAFE_ATTR&&S(je,e.ADD_URI_SAFE_ATTR,tt),e.FORBID_CONTENTS&&(He===Fe&&(He=A(He)),S(He,e.FORBID_CONTENTS,tt)),$e&&(he["#text"]=!0),Ne&&S(he,["html","head","body"]),he.table&&(S(he,["tbody"]),delete be.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw b('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw b('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');Q=e.TRUSTED_TYPES_POLICY,ee=Q.createHTML("")}else void 0===Q&&(Q=X(z,a)),null!==Q&&"string"==typeof ee&&(ee=Q.createHTML(""));o&&o(e),nt=e}},at=S({},["mi","mo","mn","ms","mtext"]),st=S({},["foreignobject","desc","title","annotation-xml"]),lt=S({},["title","style","font","a","script"]),ct=S({},N);S(ct,O),S(ct,M);const ut=S({},x);S(ut,R);const ft=function(e){let t=K(e);t&&t.tagName||(t={namespaceURI:Xe,tagName:"template"});const n=d(e.tagName),r=d(t.tagName);return!!Ze[e.namespaceURI]&&(e.namespaceURI===Ge?t.namespaceURI===qe?"svg"===n:t.namespaceURI===Be?"svg"===n&&("annotation-xml"===r||at[r]):Boolean(ct[n]):e.namespaceURI===Be?t.namespaceURI===qe?"math"===n:t.namespaceURI===Ge?"math"===n&&st[r]:Boolean(ut[n]):e.namespaceURI===qe?!(t.namespaceURI===Ge&&!st[r])&&!(t.namespaceURI===Be&&!at[r])&&!ut[n]&&(lt[n]||!ct[n]):!("application/xhtml+xml"!==Ke||!Ze[e.namespaceURI]))},mt=function(e){m(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},dt=function(e,t){try{m(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){m(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ye[e])if(xe||Re)try{mt(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},pt=function(e){let t=null,n=null;if(Me)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===Ke&&Xe===qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=Q?Q.createHTML(e):e;if(Xe===qe)try{t=(new F).parseFromString(i,Ke)}catch(a){}if(!t||!t.documentElement){t=te.createDocument(Xe,"template",null);try{t.documentElement.innerHTML=Ve?ee:i}catch(a){}}const o=t.body||t.documentElement;return e&&n&&o.insertBefore(r.createTextNode(n),o.childNodes[0]||null),Xe===qe?ie.call(t,Ne?"html":"body")[0]:Ne?t.documentElement:o},ht=function(e){return ne.call(e.ownerDocument||e,e,P.SHOW_ELEMENT|P.SHOW_COMMENT|P.SHOW_TEXT,null)},gt=function(e){return e instanceof H&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof U)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},yt=function(e){return"function"==typeof _&&e instanceof _},Tt=function(e,t,r){ae[e]&&u(ae[e],(e=>{e.call(n,t,r,nt)}))},Et=function(e){let t=null;if(Tt("beforeSanitizeElements",e,null),gt(e))return mt(e),!0;const r=tt(e.nodeName);if(Tt("uponSanitizeElement",e,{tagName:r,allowedTags:he}),e.hasChildNodes()&&!yt(e.firstElementChild)&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent))return mt(e),!0;if(!he[r]||be[r]){if(!be[r]&&_t(r)){if(Ee.tagNameCheck instanceof RegExp&&E(Ee.tagNameCheck,r))return!1;if(Ee.tagNameCheck instanceof Function&&Ee.tagNameCheck(r))return!1}if($e&&!He[r]){const t=K(e)||e.parentNode,n=J(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r)t.insertBefore(Y(n[r],!0),Z(e))}return mt(e),!0}return e instanceof v&&!ft(e)?(mt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!E(/<\/no(script|embed|frames)/i,e.innerHTML)?(De&&3===e.nodeType&&(t=e.textContent,u([se,le,ce],(e=>{t=g(t,e," ")})),e.textContent!==t&&(m(n.removed,{element:e.cloneNode()}),e.textContent=t)),Tt("afterSanitizeElements",e,null),!1):(mt(e),!0)},bt=function(e,t,n){if(Ce&&("id"===t||"name"===t)&&(n in r||n in rt))return!1;if(Se&&!_e[t]&&E(ue,t));else if(ve&&E(fe,t));else if(!ye[t]||_e[t]){if(!(_t(e)&&(Ee.tagNameCheck instanceof RegExp&&E(Ee.tagNameCheck,e)||Ee.tagNameCheck instanceof Function&&Ee.tagNameCheck(e))&&(Ee.attributeNameCheck instanceof RegExp&&E(Ee.attributeNameCheck,t)||Ee.attributeNameCheck instanceof Function&&Ee.attributeNameCheck(t))||"is"===t&&Ee.allowCustomizedBuiltInElements&&(Ee.tagNameCheck instanceof RegExp&&E(Ee.tagNameCheck,n)||Ee.tagNameCheck instanceof Function&&Ee.tagNameCheck(n))))return!1}else if(je[t]);else if(E(pe,g(n,de,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==y(n,"data:")||!ze[e])if(Ae&&!E(me,g(n,de,"")));else if(n)return!1;return!0},_t=function(e){return e.indexOf("-")>0},vt=function(e){Tt("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const r={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ye};let i=t.length;for(;i--;){const a=t[i],{name:s,namespaceURI:l,value:c}=a,m=tt(s);let d="value"===s?c:T(c);if(r.attrName=m,r.attrValue=d,r.keepAttr=!0,r.forceKeepAttr=void 0,Tt("uponSanitizeAttribute",e,r),d=r.attrValue,r.forceKeepAttr)continue;if(dt(s,e),!r.keepAttr)continue;if(!we&&E(/\/>/i,d)){dt(s,e);continue}De&&u([se,le,ce],(e=>{d=g(d,e," ")}));const p=tt(e.nodeName);if(bt(p,m,d)){if(!Le||"id"!==m&&"name"!==m||(dt(s,e),d=Ie+d),Q&&"object"==typeof z&&"function"==typeof z.getAttributeType)if(l);else switch(z.getAttributeType(p,m)){case"TrustedHTML":d=Q.createHTML(d);break;case"TrustedScriptURL":d=Q.createScriptURL(d)}try{l?e.setAttributeNS(l,s,d):e.setAttribute(s,d),f(n.removed)}catch(o){}}}Tt("afterSanitizeAttributes",e,null)},St=function e(t){let n=null;const r=ht(t);for(Tt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Tt("uponSanitizeShadowNode",n,null),Et(n)||(n.content instanceof l&&e(n.content),vt(n));Tt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null,o=null,a=null,s=null;if(Ve=!e,Ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!yt(e)){if("function"!=typeof e.toString)throw b("toString is not a function");if("string"!=typeof(e=e.toString()))throw b("dirty is not a string, aborting")}if(!n.isSupported)return e;if(Oe||ot(t),n.removed=[],"string"==typeof e&&(Pe=!1),Pe){if(e.nodeName){const t=tt(e.nodeName);if(!he[t]||be[t])throw b("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof _)r=pt("\x3c!----\x3e"),o=r.ownerDocument.importNode(e,!0),1===o.nodeType&&"BODY"===o.nodeName||"HTML"===o.nodeName?r=o:r.appendChild(o);else{if(!xe&&!De&&!Ne&&-1===e.indexOf("<"))return Q&&ke?Q.createHTML(e):e;if(r=pt(e),!r)return xe?null:ke?ee:""}r&&Me&&mt(r.firstChild);const c=ht(Pe?e:r);for(;a=c.nextNode();)Et(a)||(a.content instanceof l&&St(a.content),vt(a));if(Pe)return e;if(xe){if(Re)for(s=re.call(r.ownerDocument);r.firstChild;)s.appendChild(r.firstChild);else s=r;return(ye.shadowroot||ye.shadowrootmode)&&(s=oe.call(i,s,!0)),s}let f=Ne?r.outerHTML:r.innerHTML;return Ne&&he["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&E(B,r.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+f),De&&u([se,le,ce],(e=>{f=g(f,e," ")})),Q&&ke?Q.createHTML(f):f},n.setConfig=function(){ot(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Oe=!0},n.clearConfig=function(){nt=null,Oe=!1},n.isValidAttribute=function(e,t,n){nt||ot({});const r=tt(e),i=tt(t);return bt(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(ae[e]=ae[e]||[],m(ae[e],t))},n.removeHook=function(e){if(ae[e])return f(ae[e])},n.removeHooks=function(e){ae[e]&&(ae[e]=[])},n.removeAllHooks=function(){ae={}},n}return V()}()}}]);