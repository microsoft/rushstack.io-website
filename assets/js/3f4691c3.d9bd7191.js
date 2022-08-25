/*! For license information please see 3f4691c3.d9bd7191.js.LICENSE.txt */
(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[3595],{6117:(e,t,n)=>{"use strict";n.r(t),n.d(t,{EventsPage:()=>h,default:()=>f});var i=n(6393),r=n(3519),s=n(8490),a=n(8872),o=n(7151),c=n(168),l=n(3564),u=n(6855);class d extends i.Component{constructor(e){super(e),this._appSession=a.w.instance}componentDidMount(){this._appSession.apiDataService.updated.subscribe(this,(()=>this.forceUpdate()))}componentWillUnmount(){c.m.disposeSubscriptionsInvolving(this)}render(){if(!this._appSession.loggedInUser)return i.createElement(s.c,{appSession:this._appSession});const e=this._appSession.apiDataService.initiateGetEvents(this,"current");if(e.status===l.f.Error)return i.createElement("div",null,"ERROR: ",e.error.message);if(e.status===l.f.Pending)return i.createElement(i.Fragment,null);const t=e.result;let n=i.createElement("i",null,"No events have been posted yet.");return t.length>0&&(n=i.createElement(i.Fragment,null,t.map((e=>i.createElement(o.K,{cardType:"summary",eventModel:e,apiDataService:this._appSession.apiDataService,key:e.apiEvent.dbEventId}))))),i.createElement(r.s,{appSession:this._appSession,navItem:"events",style:{paddingTop:"100px"}},i.createElement("h1",null,"Upcoming Events"),i.createElement("div",{style:{maxWidth:"800px"}},n))}}function h(e){return i.createElement(u.t,null,i.createElement(d,null))}const f=h},3564:(e,t,n)=>{"use strict";let i;n.d(t,{f:()=>i}),function(e){e[e.Error=0]="Error",e[e.Pending=1]="Pending",e[e.Success=2]="Success"}(i||(i={}))},8872:(e,t,n)=>{"use strict";function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}n.d(t,{w:()=>d});var r=function e(t,n){function r(e,r,s){if("undefined"!=typeof document){"number"==typeof(s=i({},n,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var o in s)s[o]&&(a+="; "+o,!0!==s[o]&&(a+="="+s[o].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+a}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],i={},r=0;r<n.length;r++){var s=n[r].split("="),a=s.slice(1).join("=");try{var o=decodeURIComponent(s[0]);if(i[o]=t.read(a,o),e===o)break}catch(c){}}return e?i[e]:i}},remove:function(e,t){r(e,"",i({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,i({},this.attributes,t))},withConverter:function(t){return e(i({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const s=r;var a=n(168),o=n(3564);class c{constructor(e,t){this.onNavigateToEventDetailPage=()=>{this.appSession.navigateToEventDetailPage(this.apiEvent.dbEventId)},this.onAddReservation=()=>{this.appSession.apiDataService.addReservationAsync(this).catch((e=>{console.error(e.toString())}))},this.onAddReservationAndNavigate=()=>{(async()=>{await this.appSession.apiDataService.addReservationAsync(this),await this.onNavigateToEventDetailPage()})().catch((e=>{console.error(e.toString())}))},this.onRemoveReservation=()=>{this.appSession.apiDataService.removeReservationAsync(this).catch((e=>{console.error(e.toString())}))},this.apiEvent=e,this.appSession=t}}class l{constructor(e,t){this.apiUser=e,this.appSession=t}}class u{constructor(e){this.updated=new a.m(this),this._cache=new Map,this.appSession=e}initiateGetProfile(e,t){const n="profile:"+t;return this._startApiTask(n,e,(async()=>{console.log("Fetching profile...");const e=t?"?emails=1":"",n=await fetch(this.appSession.serviceUrl+"/api/profile"+e,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!n.ok)throw new Error("Server Error: "+n.statusText);const i=await n.json();return new l(i,this.appSession)}))}async updateProfileAsync(e){try{this._requireLoggedIn(),console.log("Posting profile update...");const t=await fetch(this.appSession.serviceUrl+"/api/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});if(!t.ok)throw new Error("Server Error: "+t.statusText)}finally{this._invalidateCache()}}initiateGetEvent(e,t){const n="event:"+t;return this._startApiTask(n,e,(async()=>{console.log("Fetching event...");const e=await fetch(this.appSession.serviceUrl+"/api/event/"+t.toString(),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)throw new Error("Server Error: "+e.statusText);const n=await e.json();return new c(n,this.appSession)}))}initiateGetEvents(e,t){const n="events:"+t;return this._startApiTask(n,e,(async()=>{this._requireLoggedIn(),console.log("Fetching events...");const e=await fetch(this.appSession.serviceUrl+"/api/events?filter="+t,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)throw new Error("Server Error: "+e.statusText);return(await e.json()).map((e=>new c(e,this.appSession)))}))}async addReservationAsync(e){try{this._requireLoggedIn(),console.log("Posting reservation...");const t=await fetch(this.appSession.serviceUrl+"/api/event-reservation/"+e.apiEvent.dbEventId,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!t.ok)throw new Error("Server Error: "+t.statusText)}finally{this._invalidateCache()}}async removeReservationAsync(e){try{this._requireLoggedIn(),console.log("Deleting reservation...");const t=await fetch(this.appSession.serviceUrl+"/api/event-reservation/"+e.apiEvent.dbEventId,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});if(!t.ok)throw new Error("Server Error: "+t.statusText)}finally{this._invalidateCache()}}_invalidateCache(){this._cache.clear(),this.updated.fire({})}_startApiTask(e,t,n){let i=this._cache.get(e);if(void 0!==i){const t=18e4;Math.abs(Date.now()-i.timestamp)>t&&(i=void 0,this._cache.delete(e))}if(void 0===i){i={key:e,timestamp:Date.now(),task:{status:o.f.Pending},components:new Set},this._cache.set(e,i);const r=i;r.components.add(t),(async()=>{try{const e=await n();r.task={status:o.f.Success,result:e}}catch(e){r.task={status:o.f.Error,error:e}}finally{this.updated.fire({})}})()}return i.task}_requireLoggedIn(){if(!this.appSession.loggedInUser)throw new Error("Not signed in")}}class d{constructor(){this._history=void 0,this.onNavigateToSignIn=()=>{s.set("rscommunity-login-return-url",document.location.href,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),this.navigateToPage(this.serviceUrl+"/login-github")},this.onNavigateToSignOut=()=>{const e=new URL("/",document.location.href).href;s.set("rscommunity-login-return-url",e,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),this.navigateToPage(this.serviceUrl+"/logout")},this.loggedInUser=s.get("rscommunity-logged-in-user"),this.serviceUrl="localhost"===document.location.hostname?"http://localhost:8000":"https://service.rushstack.io",this.apiDataService=new u(this)}registerHistory(e){this._history=e}getEventDetailPageUrl(e){return"/community/event?id="+e}navigateToEventDetailPage(e){const t=this.getEventDetailPageUrl(e);this.navigateToPage(t)}navigateToPage(e){console.log("navigateToPage(): "+e);const t=new URL(window.location.href),n=new URL(e,t);if(n.protocol===t.protocol&&n.host===t.host){if(!this._history)throw new Error("registerHistory() was not called");this._history.push(e)}else window.location.assign(e)}static get instance(){return void 0===d._instance&&(d._instance=new d),d._instance}}},168:(e,t,n)=>{"use strict";n.d(t,{m:()=>i});class i{constructor(e){if(this._subscriptionsByHandler=new Map,this._cachedHandlers=void 0,void 0===e)throw new Error("eventOwner is undefined");this._eventOwner=e;i._fetchTrackedParticipant(this._eventOwner).ownedEvents.add(this)}subscribe(e,t){if(void 0===e)throw new Error("handlerOwner is undefined");if(void 0===t)throw new Error("handlerOwner is undefined");if(this._subscriptionsByHandler.has(t))throw new Error("Event handler has already been subscribed");const n={event:this,handlerOwner:e,handler:t};this._subscriptionsByHandler.set(t,n),this._cachedHandlers=void 0;i._fetchTrackedParticipant(e).subscriptions.add(n)}unsubscribe(e){const t=this._subscriptionsByHandler.get(e);if(void 0!==t){this._subscriptionsByHandler.delete(e),this._cachedHandlers=void 0;i._fetchTrackedParticipant(t.handlerOwner).subscriptions.delete(t)}}unsubscribeAll(){for(const e of Array.from(this._subscriptionsByHandler.values())){i._fetchTrackedParticipant(e.handlerOwner).subscriptions.delete(e)}this._subscriptionsByHandler.clear(),this._cachedHandlers=void 0}fire(e){if(void 0===e)throw new Error("eventArgs is undefined");if(void 0===this._cachedHandlers&&(this._cachedHandlers=[],this._subscriptionsByHandler.size>0))for(const t of Array.from(this._subscriptionsByHandler.values()))this._cachedHandlers.push(t.handler);for(const t of this._cachedHandlers)t(e)}static disposeSubscriptionsInvolving(e){if(void 0===e)throw new Error("eventOwner is undefined");const t=i._fetchTrackedParticipant(e);for(const n of Array.from(t.ownedEvents))n.unsubscribeAll();for(const n of Array.from(t.subscriptions.values())){const e=n.event;e._subscriptionsByHandler.delete(n.handler),e._cachedHandlers=void 0;i._fetchTrackedParticipant(n.handlerOwner).subscriptions.delete(n)}}static _fetchTrackedParticipant(e){let t=this._participantsByObject.get(e);return void 0===t&&(t={participant:e,ownedEvents:new Set,subscriptions:new Set},this._participantsByObject.set(e,t)),t}}i._participantsByObject=new WeakMap},6855:(e,t,n)=>{"use strict";n.d(t,{t:()=>l});var i=n(6393),r=n(6785);function s(e){let{children:t,fallback:n}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,null==t?void 0:t()):null!=n?n:null}var a=n(3175),o=n(7112),c=n(8872);function l(e){return i.createElement(o.Z,null,i.createElement(s,null,(()=>{const t=(0,a.k6)();return c.w.instance.registerHistory(t),i.createElement(i.Fragment,null,e.children)})))}},3519:(e,t,n)=>{"use strict";n.d(t,{s:()=>s});var i=n(6393);function r(e){let t;return e.focused?t=i.createElement("div",{style:{paddingTop:"10px",textDecoration:"underline"}},e.title):(t=i.createElement("div",{style:{paddingTop:"10px"}},e.title),e.linkUrl?t=i.createElement("a",{href:e.linkUrl},t):e.linkOnClick&&(t=i.createElement("a",{href:"#",onClick:e.linkOnClick},t))),t}function s(e){return i.createElement(i.Fragment,null,i.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.createElement("div",{style:{paddingTop:"100px",paddingLeft:"50px",paddingRight:"50px",flexGrow:0,whiteSpace:"nowrap"}},i.createElement("div",{style:{fontWeight:"bold"}},"Member Actions"),i.createElement(r,{title:"Upcoming events",focused:"events"===e.navItem,linkUrl:"/community/events"}),i.createElement(r,{title:"Past events",focused:"past-events"===e.navItem,linkUrl:"/community/past-events"}),i.createElement(r,{title:"Your profile",focused:"profile"===e.navItem,linkUrl:"/community/profile"}),i.createElement(r,{title:"Sign out",linkOnClick:e.appSession.onNavigateToSignOut})),i.createElement("div",{style:{flexGrow:1,...e.style,paddingBottom:"100px"}},e.children,i.createElement("div",{style:{paddingTop:"50px"}},"\u26a0"," ",i.createElement("i",null,"This feature is experimental. Please"," ",i.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/issues",target:"_blank"},"let us know")," ","if anything is broken.")))))}},8490:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var i=n(6393),r=n(6115);const s="dialogContainer_Ho9F",a="dialogBox_kwFO";function o(e){return i.createElement("div",{className:s},i.createElement("div",{className:a},i.createElement("h2",null,"Join the Rush Stack Community!"),"Signing in enables you to:",i.createElement("ul",null,i.createElement("li",null,'Join our monthly "Rush Hour" meetings'),i.createElement("li",null,"Sign up for technical breakout sessions and other events"),i.createElement("li",null,"Request to add your organization logo to our website"),i.createElement("li",null,"Participate in occasional giveaways such as free T-shirts")),i.createElement("h2",null,"This feature requires a GitHub account"),"We use your existing GitHub account for authentication. ",i.createElement("br",null),"If you don't have an account, you will need to"," ",i.createElement("a",{href:"https://github.com/signup",target:"_blank"},"create one"),".",i.createElement("div",{style:{textAlign:"center",paddingTop:"40px"}},i.createElement(r.b,{onClick:e.appSession.onNavigateToSignIn,theme:"white"},i.createElement("img",{src:"/images/github-button.svg",width:"24px"}),i.createElement("div",{style:{paddingLeft:"10px"}},"Sign in with GitHub")))))}},6115:(e,t,n)=>{"use strict";n.d(t,{b:()=>u});var i=n(6393);const r="buttonOuter_hkd4",s="buttonBorder_qgfT",a="buttonBorderEffect_azpd",o="buttonInner_J_Vi",c="buttonInnerWhiteEffect_t_yx",l="buttonInnerRegularEffect_fRkO";function u(e){let t,n,u;const d=[s],h=[o];if(e.disabled)t="#ffffff",n="#c0c0c0",u=n;else{switch(e.theme){case"notice":t="#ffffff",n="#c95228",u=n;break;case"white":t="#000000",n="#ffffff",u="#c0c0c0";break;default:t="#ffffff",n="#108938",u=n}d.push(a),h.push("white"===e.theme?c:l)}return i.createElement("div",{className:r,role:"button",tabIndex:0,style:e.style},i.createElement("div",{className:d.join(" "),style:{color:t,backgroundColor:n,borderColor:u},onClick:e.disabled?void 0:e.onClick},i.createElement("div",{className:h.join(" ")},e.children)))}},7151:(e,t,n)=>{"use strict";n.d(t,{K:()=>v});var i=n(6393),r=n(431),s=n.n(r),a=n(6407),o=n.n(a),c=n(950),l=n.n(c),u=n(771),d=n.n(u);s().extend(o()),s().extend(l()),s().extend(d());var h=n(6115),f=n(3564);const p={eventCardBorder:"eventCardBorder_LBfh",eventCardBorderDefunct:"eventCardBorderDefunct_cpmf",detailBox:"detailBox_r5Kg",titleUrlLink:"titleUrlLink_JFlG"};function m(e){const t=e.eventModel.apiEvent,n=function(e){if(void 0!==e.startTime&&void 0!==e.duration&&"minutes"===e.durationUnits)return s()(e.startTime).add(e.duration,"minute").toDate()}(t),r=t.startTime?s()(t.startTime).format("dddd MMM D, YYYY"):"(event date is unspecified)";let a="";t.startTime&&(a+=s()(t.startTime).format("h:mma"),n&&(a+="-"+s()(n).format("h:mma")));const o=t.startTime?s()(t.startTime).format("zzz ([UTC]Z)"):"";let c,l;if(t.hostedBy){let e;e=t.hostedByUrl?i.createElement("a",{href:t.hostedByUrl,target:"_blank"},t.hostedBy):i.createElement(i.Fragment,null,t.hostedBy),c=i.createElement("div",{style:{paddingTop:"10px"}},"Hosted by: ",e)}""!==t.agendaHtml.trim()&&(l=i.createElement("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:t.agendaHtml.replace(/^\<p\>/,"<p>Agenda: ")}}));const u=e.titleSuffix?t.eventTitle+" "+e.titleSuffix:t.eventTitle,d=e.titleUrl?i.createElement("a",{className:p.titleUrlLink,href:e.titleUrl},u):i.createElement(i.Fragment,null,u);return i.createElement(i.Fragment,null,i.createElement("h2",null,d),i.createElement("div",{style:{display:"flex",flexDirection:"row",paddingTop:"10px"}},i.createElement("div",{style:{whiteSpace:"nowrap",fontWeight:"bold"}},r,i.createElement("br",null),a),i.createElement("div",{style:{flexGrow:1,textAlign:"right",fontStyle:"italic"}},o)),c,l)}class v extends i.Component{render(){const e=this.props.eventModel,t=e.apiEvent;if("CANCELLED"===t.status||"RESCHEDULED"===t.status){const n="CANCELLED"===t.status?"(cancelled)":"(old listing)",r="CANCELLED"===t.status?"THIS EVENT WAS CANCELLED.":"THIS EVENT WAS RESCHEDULED. PLEASE REFER TO THE NEW LISTING.";return i.createElement(i.Fragment,null,i.createElement("div",{className:[p.eventCardBorder,p.eventCardBorderDefunct].join(" ")},i.createElement(m,{eventModel:e,titleSuffix:n}),i.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:"10px"}},i.createElement("div",{style:{flexGrow:1,alignSelf:"flex-end",fontWeight:"bold",color:"#c95228"}},r))))}let n,r,s,a;if(t.isCompleted?(t.userIsSignedUp&&(n=i.createElement(i.Fragment,null,"You signed up for this event")),"summary"===this.props.cardType&&(r=i.createElement(h.b,{theme:"default",onClick:e.onNavigateToEventDetailPage},t.notesHtml?"Meeting Notes":"Details"))):t.userIsSignedUp?(n=i.createElement(i.Fragment,null,"You are attending this event"),r="summary"===this.props.cardType?i.createElement(h.b,{theme:"notice",onClick:e.onNavigateToEventDetailPage},"Edit Reservation"):i.createElement(h.b,{theme:"notice",onClick:e.onRemoveReservation},"Cancel your reservation")):(r=i.createElement(h.b,{onClick:"summary"===this.props.cardType?e.onAddReservationAndNavigate:e.onAddReservation},"Reserve a spot - I will attend"),s=i.createElement("div",{style:{paddingTop:"20px"}},"Spots left: ",t.spotsLeftNotice)),"detail"===this.props.cardType)if(t.isCompleted)a=t.notesHtml?i.createElement("div",{className:p.detailBox},i.createElement("h2",null,"Meeting Notes"),i.createElement("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:t.notesHtml}})):i.createElement("div",{className:p.detailBox},i.createElement("h2",null,"Meeting Notes"),i.createElement("div",{style:{paddingTop:"20px"}},i.createElement("i",null,"No notes were posted for this meeting.")));else if(t.userIsSignedUp){const e=this.props.apiDataService.initiateGetProfile(this,!0);if(e.status===f.f.Success){const t=e.result.apiUser.verifiedEmail;a=t?i.createElement("div",{className:p.detailBox},i.createElement("h2",null,"Join the video call"),i.createElement("div",{style:{paddingTop:"20px"}},"On the day before this event, the MS Teams video call URL will be sent to the email address from your profile:"),i.createElement("div",{style:{paddingTop:"20px",paddingLeft:"50px",paddingBottom:"50px"}},i.createElement("code",null,t),i.createElement("a",{style:{paddingLeft:"20px"},href:"/community/profile"},"Update email"))):i.createElement("div",{className:p.detailBox},i.createElement("h2",{style:{color:"#c95228"}},"* * * Problem! * * *"),i.createElement("div",{style:{paddingTop:"20px"}},"We cannot notify you about this event because you have not specified an email address."),i.createElement("div",{style:{paddingTop:"20px"}},"Please ",i.createElement("a",{href:"/community/profile"},"update your profile"),"."))}}const o="summary"===this.props.cardType?e.appSession.getEventDetailPageUrl(t.dbEventId):void 0;return i.createElement(i.Fragment,null,i.createElement("div",{className:p.eventCardBorder},i.createElement(m,{eventModel:e,titleUrl:o}),s,i.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:"10px"}},i.createElement("div",{style:{flexGrow:1,alignSelf:"flex-end",fontWeight:"bold",color:"#c95228"}},n),r)),a)}}},431:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},y={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,l),s=n-r<0,a=t.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:o,D:h,h:a,m:s,s:r,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},E="en",w={};w[E]=v;var S=function(e){return e instanceof D},$=function e(t,n,i){var r;if(!t)return E;if("string"==typeof t){var s=t.toLowerCase();w[s]&&(r=s),n&&(w[s]=n,r=s);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var o=t.name;w[o]=t,r=o}return!i&&r&&(E=r),r||!i&&E},T=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},b=y;b.l=$,b.i=S,b.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e)}var g=v.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return b},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var n=T(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return T(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<T(e)},g.$g=function(e,t,n){return b.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,i=!!b.u(t)||t,u=b.p(e),f=function(e,t){var r=b.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(o)},p=function(e,t){return b.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return i?f(1,0):f(31,11);case l:return i?f(1,v):f(0,v+1);case c:var E=this.$locale().weekStart||0,w=(m<E?m+7:m)-E;return f(i?g-w:g+(6-w),v);case o:case h:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case r:return p(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,c=b.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[o]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[s]=u+"Minutes",n[r]=u+"Seconds",n[i]=u+"Milliseconds",n)[c],p=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[b.p(e)]()},g.add=function(i,u){var h,f=this;i=Number(i);var p=b.p(u),m=function(e){var t=T(f);return b.w(t.date(t.date()+Math.round(e*i)),f)};if(p===l)return this.set(l,this.$M+i);if(p===d)return this.set(d,this.$y+i);if(p===o)return m(1);if(p===c)return m(7);var v=(h={},h[s]=t,h[a]=n,h[r]=e,h)[p]||1,g=this.$d.getTime()+i*v;return b.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},d=function(e){return b.s(s%12||12,e,"0")},h=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:u(n.monthsShort,o,l,3),MMMM:u(l,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:b.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return i.replace(m,(function(e,t){return t||p[e]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,h,f){var p,m=b.p(h),v=T(i),g=(v.utcOffset()-this.utcOffset())*t,y=this-v,E=b.m(this,v);return E=(p={},p[d]=E/12,p[l]=E,p[u]=E/3,p[c]=(y-g)/6048e5,p[o]=(y-g)/864e5,p[a]=y/n,p[s]=y/t,p[r]=y/e,p)[m]||y,f?E:b.a(E)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return w[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},g.clone=function(){return b.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),_=D.prototype;return T.prototype=_,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",l],["$y",d],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,D,T),e.$i=!0),T},T.locale=$,T.isDayjs=S,T.unix=function(e){return T(1e3*e)},T.en=w[E],T.Ls=w,T.p={},T}()},771:function(e){e.exports=function(){"use strict";return function(e,t,n){var i=t.prototype,r=i.format;n.en.ordinal=function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"},i.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return r.bind(this)(e);var i=this.$utils(),s=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return i.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return i.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return i.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return r.bind(this)(s)}}}()},950:function(e){e.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,i,r){var s,a=function(e,n,i){void 0===i&&(i={});var r=new Date(e),s=function(e,n){void 0===n&&(n={});var i=n.timeZoneName||"short",r=e+"|"+i,s=t[r];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),t[r]=s),s}(n,i);return s.formatToParts(r)},o=function(t,n){for(var i=a(t,n),s=[],o=0;o<i.length;o+=1){var c=i[o],l=c.type,u=c.value,d=e[l];d>=0&&(s[d]=parseInt(u,10))}var h=s[3],f=24===h?0:h,p=s[0]+"-"+s[1]+"-"+s[2]+" "+f+":"+s[4]+":"+s[5]+":000",m=+t;return(r.utc(p).valueOf()-(m-=m%1e3))/6e4},c=i.prototype;c.tz=function(e,t){void 0===e&&(e=s);var n=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),o=Math.round((i-new Date(a))/1e3/60),c=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-o,!0);if(t){var l=c.utcOffset();c=c.add(n-l,"minute")}return c.$x.$timezone=e,c},c.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=c.startOf;c.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,n){var i=n&&t,a=n||t||s,c=o(+r(),a);if("string"!=typeof e)return r(e).tz(a);var l=function(e,t,n){var i=e-60*t*1e3,r=o(i,n);if(t===r)return[i,t];var s=o(i-=60*(r-t)*1e3,n);return r===s?[i,r]:[e-60*Math.min(r,s)*1e3,Math.max(r,s)]}(r.utc(e,i).valueOf(),c,a),u=l[0],d=l[1],h=r(u).utcOffset(d);return h.$x.$timezone=a,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){s=e}}}()},6407:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(i,r,s){var a=r.prototype;s.utc=function(e){return new r({date:e,utc:!0,args:arguments})},a.utc=function(t){var n=s(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},a.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var o=a.parse;a.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var c=a.init;a.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else c.call(this)};var l=a.utcOffset;a.utcOffset=function(i,r){var s=this.$utils().u;if(s(i))return this.$u?0:s(this.$offset)?l.call(this):this.$offset;if("string"==typeof i&&(i=function(e){void 0===e&&(e="");var i=e.match(t);if(!i)return null;var r=(""+i[0]).match(n)||["-",0,0],s=r[0],a=60*+r[1]+ +r[2];return 0===a?0:"+"===s?a:-a}(i),null===i))return this;var a=Math.abs(i)<=16?60*i:i,o=this;if(r)return o.$offset=a,o.$u=0===i,o;if(0!==i){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(a+c,e)).$offset=a,o.$x.$localOffset=c}else o=this.utc();return o};var u=a.format;a.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,t)},a.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var d=a.toDate;a.toDate=function(e){return"s"===e&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var h=a.diff;a.diff=function(e,t,n){if(e&&this.$u===e.$u)return h.call(this,e,t,n);var i=this.local(),r=s(e).local();return h.call(i,r,t,n)}}}()}}]);