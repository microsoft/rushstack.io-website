/*! For license information please see 3f4691c3.4af40703.js.LICENSE.txt */
(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[3595],{9158:function(e,t,n){"use strict";n.r(t),n.d(t,{EventsPage:function(){return h}});var r=n(2087),i=n(3929),a=n(2094),s=n(2533),o=n(1581),c=n(9744),u=n(6039),l=n(8618),d=n(2044),f=function(e){function t(t){var n;return(n=e.call(this,t)||this)._appSession=o.w.instance,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._appSession.apiDataService.updated.subscribe(this,(function(){return e.forceUpdate()}))},n.componentWillUnmount=function(){u.m.disposeSubscriptionsInvolving(this)},n.render=function(){var e=this;if(!this._appSession.loggedInUser)return i.createElement(s.c,{appSession:this._appSession});var t=this._appSession.apiDataService.initiateGetEvents(this,"current");if(t.status===l.f.Error)return i.createElement("div",null,"ERROR: ",t.error.message);if(t.status===l.f.Pending)return i.createElement(i.Fragment,null);var n=t.result,r=i.createElement("i",null,"No events have been posted yet.");return n.length>0&&(r=i.createElement(i.Fragment,null,n.map((function(t){return i.createElement(c.K,{cardType:"summary",eventModel:t,apiDataService:e._appSession.apiDataService,key:t.apiEvent.dbEventId})})))),i.createElement(a.s,{appSession:this._appSession,navItem:"events",style:{paddingTop:"100px"}},i.createElement("h1",null,"Upcoming Events"),i.createElement("div",{style:{maxWidth:"800px"}},r))},t}(i.Component);function h(e){return i.createElement(d.t,null,i.createElement(f,null))}t.default=h},8618:function(e,t,n){"use strict";var r;n.d(t,{f:function(){return r}}),function(e){e[e.Error=0]="Error",e[e.Pending=1]="Pending",e[e.Success=2]="Success"}(r||(r={}))},1581:function(e,t,n){"use strict";n.d(t,{w:function(){return v}});var r=n(4702);function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var a=function e(t,n){function r(e,r,a){if("undefined"!=typeof document){"number"==typeof(a=i({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var o in a)a[o]&&(s+="; "+o,!0!==a[o]&&(s+="="+a[o].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+s}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var a=n[i].split("="),s=a.slice(1).join("=");try{var o=decodeURIComponent(a[0]);if(r[o]=t.read(s,o),e===o)break}catch(c){}}return e?r[e]:r}},remove:function(e,t){r(e,"",i({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,i({},this.attributes,t))},withConverter:function(t){return e(i({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),s=a,o=n(6281),c=n(3688),u=n.n(c),l=n(6039),d=n(8618),f=function(e,t){var n=this;this.onNavigateToEventDetailPage=function(){n.appSession.navigateToEventDetailPage(n.apiEvent.dbEventId)},this.onAddReservation=function(){n.appSession.apiDataService.addReservationAsync(n).catch((function(e){console.error(e.toString())}))},this.onAddReservationAndNavigate=function(){(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.appSession.apiDataService.addReservationAsync(n);case 2:return e.next=4,n.onNavigateToEventDetailPage();case 4:case"end":return e.stop()}}),e)})))().catch((function(e){console.error(e.toString())}))},this.onRemoveReservation=function(){n.appSession.apiDataService.removeReservationAsync(n).catch((function(e){console.error(e.toString())}))},this.apiEvent=e,this.appSession=t},h=function(e,t){this.apiUser=e,this.appSession=t},p=function(){function e(e){this.updated=new l.m(this),this._cache=new Map,this.appSession=e}var t=e.prototype;return t.initiateGetProfile=function(e,t){var n=this,r="profile:"+t;return this._startApiTask(r,e,(0,o.Z)(u().mark((function e(){var r,i,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching profile..."),r=t?"?emails=1":"",e.next=4,fetch(n.appSession.serviceUrl+"/api/profile"+r,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:if((i=e.sent).ok){e.next=7;break}throw new Error("Server Error: "+i.statusText);case 7:return e.next=9,i.json();case 9:return a=e.sent,s=new h(a,n.appSession),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))))},t.updateProfileAsync=function(){var e=(0,o.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Posting profile update..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t.initiateGetEvent=function(e,t){var n=this,r="event:"+t;return this._startApiTask(r,e,(0,o.Z)(u().mark((function e(){var r,i,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching event..."),e.next=3,fetch(n.appSession.serviceUrl+"/api/event/"+t.toString(),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Server Error: "+r.statusText);case 6:return e.next=8,r.json();case 8:return i=e.sent,a=new f(i,n.appSession),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)}))))},t.initiateGetEvents=function(e,t){var n=this,r="events:"+t;return this._startApiTask(r,e,(0,o.Z)(u().mark((function e(){var r,i,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._requireLoggedIn(),console.log("Fetching events..."),e.next=4,fetch(n.appSession.serviceUrl+"/api/events?filter="+t,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Server Error: "+r.statusText);case 7:return e.next=9,r.json();case 9:return i=e.sent,a=i.map((function(e){return new f(e,n.appSession)})),e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)}))))},t.addReservationAsync=function(){var e=(0,o.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Posting reservation..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/event-reservation/"+t.apiEvent.dbEventId,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t.removeReservationAsync=function(){var e=(0,o.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Deleting reservation..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/event-reservation/"+t.apiEvent.dbEventId,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t._invalidateCache=function(){this._cache.clear(),this.updated.fire({})},t._startApiTask=function(e,t,n){var r=this,i=this._cache.get(e);if(void 0!==i){Math.abs(Date.now()-i.timestamp)>18e4&&(i=void 0,this._cache.delete(e))}if(void 0===i){i={key:e,timestamp:Date.now(),task:{status:d.f.Pending},components:new Set},this._cache.set(e,i);var a=i;a.components.add(t),(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:t=e.sent,a.task={status:d.f.Success,result:t},e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a.task={status:d.f.Error,error:e.t0};case 10:return e.prev=10,r.updated.fire({}),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}return i.task},t._requireLoggedIn=function(){if(!this.appSession.loggedInUser)throw new Error("Not signed in")},e}(),v=function(){function e(){var t=this;this.onNavigateToSignIn=function(){s.set("rscommunity-login-return-url",document.location.href,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),e.navigateToPage(t.serviceUrl+"/login-github")},this.onNavigateToSignOut=function(){var n=new URL("/",document.location.href).href;s.set("rscommunity-login-return-url",n,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),e.navigateToPage(t.serviceUrl+"/logout")},this.loggedInUser=s.get("rscommunity-logged-in-user"),this.serviceUrl="localhost"===document.location.hostname?"http://localhost:8000":"https://service.rushstack.io",this.apiDataService=new p(this)}var t=e.prototype;return t.getEventDetailPageUrl=function(e){return"/community/event?id="+e},t.navigateToEventDetailPage=function(t){var n=this.getEventDetailPageUrl(t);e.navigateToPage(n)},e.navigateToPage=function(e){var t=new URL(e,window.location.href).toString();console.log("Navigate: "+t),document.location.assign(t)},(0,r.Z)(e,null,[{key:"instance",get:function(){return void 0===e._instance&&(e._instance=new e),e._instance}}]),e}()},6039:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(9792),i=function(){function e(t){if(this._subscriptionsByHandler=new Map,this._cachedHandlers=void 0,void 0===t)throw new Error("eventOwner is undefined");this._eventOwner=t,e._fetchTrackedParticipant(this._eventOwner).ownedEvents.add(this)}var t=e.prototype;return t.subscribe=function(t,n){if(void 0===t)throw new Error("handlerOwner is undefined");if(void 0===n)throw new Error("handlerOwner is undefined");if(this._subscriptionsByHandler.has(n))throw new Error("Event handler has already been subscribed");var r={event:this,handlerOwner:t,handler:n};this._subscriptionsByHandler.set(n,r),this._cachedHandlers=void 0,e._fetchTrackedParticipant(t).subscriptions.add(r)},t.unsubscribe=function(t){var n=this._subscriptionsByHandler.get(t);void 0!==n&&(this._subscriptionsByHandler.delete(t),this._cachedHandlers=void 0,e._fetchTrackedParticipant(n.handlerOwner).subscriptions.delete(n))},t.unsubscribeAll=function(){for(var t=0,n=Array.from(this._subscriptionsByHandler.values());t<n.length;t++){var r=n[t];e._fetchTrackedParticipant(r.handlerOwner).subscriptions.delete(r)}this._subscriptionsByHandler.clear(),this._cachedHandlers=void 0},t.fire=function(e){if(void 0===e)throw new Error("eventArgs is undefined");if(void 0===this._cachedHandlers&&(this._cachedHandlers=[],this._subscriptionsByHandler.size>0))for(var t=0,n=Array.from(this._subscriptionsByHandler.values());t<n.length;t++){var i=n[t];this._cachedHandlers.push(i.handler)}for(var a,s=(0,r.Z)(this._cachedHandlers);!(a=s()).done;){(0,a.value)(e)}},e.disposeSubscriptionsInvolving=function(t){if(void 0===t)throw new Error("eventOwner is undefined");for(var n=e._fetchTrackedParticipant(t),r=0,i=Array.from(n.ownedEvents);r<i.length;r++){i[r].unsubscribeAll()}for(var a=0,s=Array.from(n.subscriptions.values());a<s.length;a++){var o=s[a],c=o.event;c._subscriptionsByHandler.delete(o.handler),c._cachedHandlers=void 0,e._fetchTrackedParticipant(o.handlerOwner).subscriptions.delete(o)}},e._fetchTrackedParticipant=function(e){var t=this._participantsByObject.get(e);return void 0===t&&(t={participant:e,ownedEvents:new Set,subscriptions:new Set},this._participantsByObject.set(e,t)),t},e}();i._participantsByObject=new WeakMap},2044:function(e,t,n){"use strict";n.d(t,{t:function(){return o}});var r=n(3929),i=n(5015);function a(e){var t=e.children,n=e.fallback;return(0,i.Z)()?r.createElement(r.Fragment,null,t()):null!=n?n:null}var s=n(7552);function o(e){return r.createElement(s.Z,null,r.createElement(a,null,(function(){return r.createElement(r.Fragment,null,e.children)})))}},2094:function(e,t,n){"use strict";n.d(t,{s:function(){return a}});var r=n(3929);function i(e){var t;return e.focused?t=r.createElement("div",{style:{paddingTop:"10px",textDecoration:"underline"}},e.title):(t=r.createElement("div",{style:{paddingTop:"10px"}},e.title),e.linkUrl?t=r.createElement("a",{href:e.linkUrl},t):e.linkOnClick&&(t=r.createElement("a",{href:"#",onClick:e.linkOnClick},t))),t}function a(e){return r.createElement(r.Fragment,null,r.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.createElement("div",{style:{paddingTop:"100px",paddingLeft:"50px",paddingRight:"50px",flexGrow:0,whiteSpace:"nowrap"}},r.createElement("div",{style:{fontWeight:"bold"}},"Member Actions"),r.createElement(i,{title:"Upcoming events",focused:"events"===e.navItem,linkUrl:"/community/events"}),r.createElement(i,{title:"Past events",focused:"past-events"===e.navItem,linkUrl:"/community/past-events"}),r.createElement(i,{title:"Your profile",focused:"profile"===e.navItem,linkUrl:"/community/profile"}),r.createElement(i,{title:"Sign out",linkOnClick:e.appSession.onNavigateToSignOut})),r.createElement("div",{style:Object.assign({flexGrow:1},e.style,{paddingBottom:"100px"})},e.children,r.createElement("div",{style:{paddingTop:"50px"}},"\u26a0"," ",r.createElement("i",null,"This feature is experimental. Please"," ",r.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/issues",target:"_blank"},"let us know")," ","if anything is broken.")))))}},2533:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(3929),i=n(7243),a="dialogContainer_Ho9F",s="dialogBox_kwFO";function o(e){return r.createElement("div",{className:a},r.createElement("div",{className:s},r.createElement("h2",null,"Join the Rush Stack Community!"),"Signing in enables you to:",r.createElement("ul",null,r.createElement("li",null,'Join our monthly "Rush Hour" meetings'),r.createElement("li",null,"Sign up for technical breakout sessions and other events"),r.createElement("li",null,"Request to add your organization logo to our website"),r.createElement("li",null,"Participate in occasional giveaways such as free T-shirts")),r.createElement("h2",null,"This feature requires a GitHub account"),"We use your existing GitHub account for authentication. ",r.createElement("br",null),"If you don't have an account, you will need to"," ",r.createElement("a",{href:"https://github.com/signup",target:"_blank"},"create one"),".",r.createElement("div",{style:{textAlign:"center",paddingTop:"40px"}},r.createElement(i.b,{onClick:e.appSession.onNavigateToSignIn,theme:"white"},r.createElement("img",{src:"/images/github-button.svg",width:"24px"}),r.createElement("div",{style:{paddingLeft:"10px"}},"Sign in with GitHub")))))}},7243:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(3929),i="buttonOuter_hkd4",a="buttonBorder_qgfT",s="buttonBorderEffect_azpd",o="buttonInner_J_Vi",c="buttonInnerWhiteEffect_t_yx",u="buttonInnerRegularEffect_fRkO";function l(e){var t,n,l,d=[a],f=[o];if(e.disabled)t="#ffffff",l=n="#c0c0c0";else{switch(e.theme){case"notice":t="#ffffff",l=n="#c95228";break;case"white":t="#000000",n="#ffffff",l="#c0c0c0";break;default:t="#ffffff",l=n="#108938"}d.push(s),f.push("white"===e.theme?c:u)}return r.createElement("div",{className:i,role:"button",tabIndex:0,style:e.style},r.createElement("div",{className:d.join(" "),style:{color:t,backgroundColor:n,borderColor:l},onClick:e.disabled?void 0:e.onClick},r.createElement("div",{className:f.join(" ")},e.children)))}},9744:function(e,t,n){"use strict";n.d(t,{K:function(){return g}});var r=n(2087),i=n(3929),a=n(5428),s=n.n(a),o=n(4420),c=n.n(o),u=n(4377),l=n.n(u),d=n(4867),f=n.n(d);s().extend(c()),s().extend(l()),s().extend(f());var h=n(7243),p=n(8618),v={eventCardBorder:"eventCardBorder_LBfh",eventCardBorderDefunct:"eventCardBorderDefunct_cpmf",detailBox:"detailBox_r5Kg",titleUrlLink:"titleUrlLink_JFlG"};function m(e){var t=e.eventModel.apiEvent,n=function(e){if(void 0!==e.startTime&&void 0!==e.duration&&"minutes"===e.durationUnits)return s()(e.startTime).add(e.duration,"minute").toDate()}(t),r=t.startTime?s()(t.startTime).format("dddd MMM D, YYYY"):"(event date is unspecified)",a="";t.startTime&&(a+=s()(t.startTime).format("h:mma"),n&&(a+="-"+s()(n).format("h:mma")));var o,c=t.startTime?s()(t.startTime).format("zzz ([UTC]Z)"):"",u=void 0;t.hostedBy&&(o=t.hostedByUrl?i.createElement("a",{href:t.hostedByUrl,target:"_blank"},t.hostedBy):i.createElement(i.Fragment,null,t.hostedBy),u=i.createElement("div",{style:{paddingTop:"10px"}},"Hosted by: ",o));var l=void 0;""!==t.agendaHtml.trim()&&(l=i.createElement("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:t.agendaHtml.replace(/^\<p\>/,"<p>Agenda: ")}}));var d=e.titleSuffix?t.eventTitle+" "+e.titleSuffix:t.eventTitle,f=e.titleUrl?i.createElement("a",{className:v.titleUrlLink,href:e.titleUrl},d):i.createElement(i.Fragment,null,d);return i.createElement(i.Fragment,null,i.createElement("h2",null,f),i.createElement("div",{style:{display:"flex",flexDirection:"row",paddingTop:"10px"}},i.createElement("div",{style:{whiteSpace:"nowrap",fontWeight:"bold"}},r,i.createElement("br",null),a),i.createElement("div",{style:{flexGrow:1,textAlign:"right",fontStyle:"italic"}},c)),u,l)}var g=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n,r,a=this.props.eventModel,s=a.apiEvent;if("CANCELLED"===s.status||"RESCHEDULED"===s.status){var o="CANCELLED"===s.status?"(cancelled)":"(old listing)",c="CANCELLED"===s.status?"THIS EVENT WAS CANCELLED.":"THIS EVENT WAS RESCHEDULED. PLEASE REFER TO THE NEW LISTING.";return i.createElement(i.Fragment,null,i.createElement("div",{className:[v.eventCardBorder,v.eventCardBorderDefunct].join(" ")},i.createElement(m,{eventModel:a,titleSuffix:o}),i.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:"10px"}},i.createElement("div",{style:{flexGrow:1,alignSelf:"flex-end",fontWeight:"bold",color:"#c95228"}},c))))}if(s.isCompleted?(s.userIsSignedUp&&(e=i.createElement(i.Fragment,null,"You signed up for this event")),"summary"===this.props.cardType&&(t=i.createElement(h.b,{theme:"default",onClick:a.onNavigateToEventDetailPage},s.notesHtml?"Meeting Notes":"Details"))):s.userIsSignedUp?(e=i.createElement(i.Fragment,null,"You are attending this event"),t="summary"===this.props.cardType?i.createElement(h.b,{theme:"notice",onClick:a.onNavigateToEventDetailPage},"Edit Reservation"):i.createElement(h.b,{theme:"notice",onClick:a.onRemoveReservation},"Cancel your reservation")):(t=i.createElement(h.b,{onClick:"summary"===this.props.cardType?a.onAddReservationAndNavigate:a.onAddReservation},"Reserve a spot - I will attend"),n=i.createElement("div",{style:{paddingTop:"20px"}},"Spots left: ",s.spotsLeftNotice)),"detail"===this.props.cardType)if(s.isCompleted)r=s.notesHtml?i.createElement("div",{className:v.detailBox},i.createElement("h2",null,"Meeting Notes"),i.createElement("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:s.notesHtml}})):i.createElement("div",{className:v.detailBox},i.createElement("h2",null,"Meeting Notes"),i.createElement("div",{style:{paddingTop:"20px"}},i.createElement("i",null,"No notes were posted for this meeting.")));else if(s.userIsSignedUp){var u=this.props.apiDataService.initiateGetProfile(this,!0);if(u.status===p.f.Success){var l=u.result.apiUser.verifiedEmail;r=l?i.createElement("div",{className:v.detailBox},i.createElement("h2",null,"Join the video call"),i.createElement("div",{style:{paddingTop:"20px"}},"On the day before this event, the MS Teams video call URL will be sent to the email address from your profile:"),i.createElement("div",{style:{paddingTop:"20px",paddingLeft:"50px",paddingBottom:"50px"}},i.createElement("code",null,l),i.createElement("a",{style:{paddingLeft:"20px"},href:"/community/profile"},"Update email"))):i.createElement("div",{className:v.detailBox},i.createElement("h2",{style:{color:"#c95228"}},"* * * Problem! * * *"),i.createElement("div",{style:{paddingTop:"20px"}},"We cannot notify you about this event because you have not specified an email address."),i.createElement("div",{style:{paddingTop:"20px"}},"Please ",i.createElement("a",{href:"/community/profile"},"update your profile"),"."))}}var d="summary"===this.props.cardType?a.appSession.getEventDetailPageUrl(s.dbEventId):void 0;return i.createElement(i.Fragment,null,i.createElement("div",{className:v.eventCardBorder},i.createElement(m,{eventModel:a,titleUrl:d}),n,i.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:"10px"}},i.createElement("div",{style:{flexGrow:1,alignSelf:"flex-end",fontWeight:"bold",color:"#c95228"}},e),t)),r)},t}(i.Component)},5428:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",s="hour",o="day",c="week",u="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),a=n-i<0,s=t.clone().add(r+(a?-1:1),u);return+(-(r+(n-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:c,d:o,D:f,h:s,m:a,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},E="en",w={};w[E]=m;var S=function(e){return e instanceof T},$=function(e,t,n){var r;if(!e)return E;if("string"==typeof e)w[e]&&(r=e),t&&(w[e]=t,r=e);else{var i=e.name;w[i]=e,r=i}return!n&&r&&(E=r),r||!n&&E},b=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},x=y;x.l=$,x.i=S,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e)}var g=m.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return x},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return b(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<b(e)},g.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!x.u(t)||t,l=x.p(e),h=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(o)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case u:return r?h(1,m):h(0,m+1);case c:var E=this.$locale().weekStart||0,w=(v<E?v+7:v)-E;return h(r?g-w:g+(6-w),m);case o:case f:return p(y+"Hours",0);case s:return p(y+"Minutes",1);case a:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,c=x.p(e),l="set"+(this.$u?"UTC":""),h=(n={},n[o]=l+"Date",n[f]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[s]=l+"Hours",n[a]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===o?this.$D+(t-this.$W):t;if(c===u||c===d){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[x.p(e)]()},g.add=function(r,l){var f,h=this;r=Number(r);var p=x.p(l),v=function(e){var t=b(h);return x.w(t.date(t.date()+Math.round(e*r)),h)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===o)return v(1);if(p===c)return v(7);var m=(f={},f[a]=t,f[s]=n,f[i]=e,f)[p]||1,g=this.$d.getTime()+r*m;return x.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),a=this.$H,s=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].substr(0,a)},d=function(e){return x.s(a%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:x.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:x.s(a,2,"0"),h:d(1),hh:d(2),a:f(a,s,!0),A:f(a,s,!1),m:String(s),mm:x.s(s,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(e,t){return t||p[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,f,h){var p,v=x.p(f),m=b(r),g=(m.utcOffset()-this.utcOffset())*t,y=this-m,E=x.m(this,m);return E=(p={},p[d]=E/12,p[u]=E,p[l]=E/3,p[c]=(y-g)/6048e5,p[o]=(y-g)/864e5,p[s]=y/n,p[a]=y/t,p[i]=y/e,p)[v]||y,h?E:x.a(E)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return w[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return x.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),D=T.prototype;return b.prototype=D,[["$ms",r],["$s",i],["$m",a],["$H",s],["$W",o],["$M",u],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,T,b),e.$i=!0),b},b.locale=$,b.isDayjs=S,b.unix=function(e){return b(1e3*e)},b.en=w[E],b.Ls=w,b.p={},b}()},4867:function(e){e.exports=function(){"use strict";return function(e,t,n){var r=t.prototype,i=r.format;n.en.ordinal=function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"},r.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return i.bind(this)(e);var r=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return r.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return r.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return r.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return i.bind(this)(a)}}}()},4377:function(e){e.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,i){var a,s=function(e,n,r){void 0===r&&(r={});var i=new Date(e),a=function(e,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=e+"|"+r,a=t[i];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),t[i]=a),a}(n,r);return a.formatToParts(i)},o=function(t,n){for(var r=s(t,n),a=[],o=0;o<r.length;o+=1){var c=r[o],u=c.type,l=c.value,d=e[u];d>=0&&(a[d]=parseInt(l,10))}var f=a[3],h=24===f?0:f,p=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",v=+t;return(i.utc(p).valueOf()-(v-=v%1e3))/6e4},c=r.prototype;c.tz=function(e,t){void 0===e&&(e=a);var n=this.utcOffset(),r=this.toDate(),s=r.toLocaleString("en-US",{timeZone:e}),o=Math.round((r-new Date(s))/1e3/60),c=i(s).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-o,!0);if(t){var u=c.utcOffset();c=c.add(n-u,"minute")}return c.$x.$timezone=e,c},c.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),n=s(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var u=c.startOf;c.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return u.call(this,e,t);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return u.call(n,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,n){var r=n&&t,s=n||t||a,c=o(+i(),s);if("string"!=typeof e)return i(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(i.utc(e,r).valueOf(),c,s),l=u[0],d=u[1],f=i(l).utcOffset(d);return f.$x.$timezone=s,f},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){a=e}}}()},4420:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,a){var s=i.prototype;a.utc=function(e){return new i({date:e,utc:!0,args:arguments})},s.utc=function(t){var n=a(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},s.local=function(){return a(this.toDate(),{locale:this.$L,utc:!1})};var o=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var c=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else c.call(this)};var u=s.utcOffset;s.utcOffset=function(r,i){var a=this.$utils().u;if(a(r))return this.$u?0:a(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],a=i[0],s=60*+i[1]+ +i[2];return 0===s?0:"+"===a?s:-s}(r),null===r))return this;var s=Math.abs(r)<=16?60*r:r,o=this;if(i)return o.$offset=s,o.$u=0===r,o;if(0!==r){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(s+c,e)).$offset=s,o.$x.$localOffset=c}else o=this.utc();return o};var l=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=s.diff;s.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),i=a(e).local();return f.call(r,i,t,n)}}}()},4702:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return i}})}}]);