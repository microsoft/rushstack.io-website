(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[33595],{64381:function(e,t,n){"use strict";n.r(t),n.d(t,{EventsPage:function(){return h}});var r=n(48728),i=n(46393),s=n(12234),a=n(55674),o=n(76698),c=n(17718),u=n(12436),l=n(84027),d=n(51525),f=function(e){function t(t){var n;return(n=e.call(this,t)||this)._appSession=o.w.instance,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._appSession.apiDataService.updated.subscribe(this,(function(){return e.forceUpdate()}))},n.componentWillUnmount=function(){u.m.disposeSubscriptionsInvolving(this)},n.render=function(){var e=this;if(!this._appSession.loggedInUser)return i.createElement(a.c,{appSession:this._appSession});var t=this._appSession.apiDataService.initiateGetEvents(this,"current");if(t.status===l.f.Error)return i.createElement("div",null,"ERROR: ",t.error.message);if(t.status===l.f.Pending)return i.createElement(i.Fragment,null);var n=t.result,r=i.createElement("i",null,"No events have been posted yet.");return n.length>0&&(r=i.createElement(i.Fragment,null,n.map((function(t){return i.createElement(c.K,{cardType:"summary",eventModel:t,apiDataService:e._appSession.apiDataService,key:t.apiEvent.dbEventId})})))),i.createElement(s.s,{appSession:this._appSession,navItem:"events",style:{paddingTop:"100px"}},i.createElement("h1",null,"Upcoming Events"),i.createElement("div",{style:{maxWidth:"800px"}},r))},t}(i.Component);function h(e){return i.createElement(d.t,null,i.createElement(f,null))}t.default=h},84027:function(e,t,n){"use strict";var r;n.d(t,{f:function(){return r}}),function(e){e[e.Error=0]="Error",e[e.Pending=1]="Pending",e[e.Success=2]="Success"}(r||(r={}))},76698:function(e,t,n){"use strict";n.d(t,{w:function(){return h}});var r=n(84989),i=n(85411),s=n(43486),a=n(50960),o=n.n(a),c=n(12436),u=n(84027),l=function(e,t){var n=this;this.onNavigateToEventDetailPage=function(){n.appSession.navigateToEventDetailPage(n.apiEvent.dbEventId)},this.onAddReservation=function(){(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.appSession.apiDataService.addReservationAsync(n);case 2:n.appSession.navigateToEventDetailPage(n.apiEvent.dbEventId);case 3:case"end":return e.stop()}}),e)})))().catch((function(e){console.error(e.toString())}))},this.onRemoveReservation=function(){n.appSession.apiDataService.removeReservationAsync(n).catch((function(e){console.error(e.toString())}))},this.apiEvent=e,this.appSession=t},d=function(e,t){this.apiUser=e,this.appSession=t},f=function(){function e(e){this.updated=new c.m(this),this._cache=new Map,this.appSession=e}var t=e.prototype;return t.initiateGetProfile=function(e,t){var n=this,r="profile:"+t;return this._startApiTask(r,e,(0,s.Z)(o().mark((function e(){var r,i,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching profile..."),r=t?"?emails=1":"",e.next=4,fetch(n.appSession.serviceUrl+"/api/profile"+r,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:if((i=e.sent).ok){e.next=7;break}throw new Error("Server Error: "+i.statusText);case 7:return e.next=9,i.json();case 9:return s=e.sent,a=new d(s,n.appSession),e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)}))))},t.updateProfileAsync=function(){var e=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Posting profile update..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t.initiateGetEvent=function(e,t){var n=this,r="event:"+t;return this._startApiTask(r,e,(0,s.Z)(o().mark((function e(){var r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching event..."),e.next=3,fetch(n.appSession.serviceUrl+"/api/event/"+t.toString(),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Server Error: "+r.statusText);case 6:return e.next=8,r.json();case 8:return i=e.sent,s=new l(i,n.appSession),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)}))))},t.initiateGetEvents=function(e,t){var n=this,r="events:"+t;return this._startApiTask(r,e,(0,s.Z)(o().mark((function e(){var r,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._requireLoggedIn(),console.log("Fetching events..."),e.next=4,fetch(n.appSession.serviceUrl+"/api/events?filter="+t,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Server Error: "+r.statusText);case 7:return e.next=9,r.json();case 9:return i=e.sent,s=i.map((function(e){return new l(e,n.appSession)})),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))))},t.addReservationAsync=function(){var e=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Posting reservation..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/event-reservation/"+t.apiEvent.dbEventId,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t.removeReservationAsync=function(){var e=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Deleting reservation..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/event-reservation/"+t.apiEvent.dbEventId,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t._invalidateCache=function(){this._cache.clear(),this.updated.fire({})},t._startApiTask=function(e,t,n){var r=this,i=this._cache.get(e);if(void 0!==i){Math.abs(Date.now()-i.timestamp)>18e4&&(i=void 0,this._cache.delete(e))}if(void 0===i){i={key:e,timestamp:Date.now(),task:{status:u.f.Pending},components:new Set},this._cache.set(e,i);var a=i;a.components.add(t),(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:t=e.sent,a.task={status:u.f.Success,result:t},e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a.task={status:u.f.Error,error:e.t0};case 10:return e.prev=10,r.updated.fire({}),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}return i.task},t._requireLoggedIn=function(){if(!this.appSession.loggedInUser)throw new Error("Not signed in")},e}(),h=function(){function e(){var e=this;this.onNavigateToSignIn=function(){i.Z.set("rscommunity-login-return-path",document.location.pathname,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),document.location.href=e.serviceUrl+"/login-github"},this.onNavigateToSignOut=function(){i.Z.set("rscommunity-login-return-path","/",{sameSite:"Strict",domain:document.location.hostname,path:"/"}),document.location.href=e.serviceUrl+"/logout"},this.loggedInUser=i.Z.get("rscommunity-logged-in-user"),this.serviceUrl="localhost"===document.location.hostname?"http://localhost:8000":"https://service.rushstack.io",this.apiDataService=new f(this)}return e.prototype.navigateToEventDetailPage=function(e){document.location.href="/community/event?id="+e},(0,r.Z)(e,null,[{key:"instance",get:function(){return void 0===e._instance&&(e._instance=new e),e._instance}}]),e}()},12436:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(56925),i=function(){function e(t){if(this._subscriptionsByHandler=new Map,this._cachedHandlers=void 0,void 0===t)throw new Error("eventOwner is undefined");this._eventOwner=t,e._fetchTrackedParticipant(this._eventOwner).ownedEvents.add(this)}var t=e.prototype;return t.subscribe=function(t,n){if(void 0===t)throw new Error("handlerOwner is undefined");if(void 0===n)throw new Error("handlerOwner is undefined");if(this._subscriptionsByHandler.has(n))throw new Error("Event handler has already been subscribed");var r={event:this,handlerOwner:t,handler:n};this._subscriptionsByHandler.set(n,r),this._cachedHandlers=void 0,e._fetchTrackedParticipant(t).subscriptions.add(r)},t.unsubscribe=function(t){var n=this._subscriptionsByHandler.get(t);void 0!==n&&(this._subscriptionsByHandler.delete(t),this._cachedHandlers=void 0,e._fetchTrackedParticipant(n.handlerOwner).subscriptions.delete(n))},t.unsubscribeAll=function(){for(var t=0,n=Array.from(this._subscriptionsByHandler.values());t<n.length;t++){var r=n[t];e._fetchTrackedParticipant(r.handlerOwner).subscriptions.delete(r)}this._subscriptionsByHandler.clear(),this._cachedHandlers=void 0},t.fire=function(e){if(void 0===e)throw new Error("eventArgs is undefined");if(void 0===this._cachedHandlers&&(this._cachedHandlers=[],this._subscriptionsByHandler.size>0))for(var t=0,n=Array.from(this._subscriptionsByHandler.values());t<n.length;t++){var i=n[t];this._cachedHandlers.push(i.handler)}for(var s,a=(0,r.Z)(this._cachedHandlers);!(s=a()).done;){(0,s.value)(e)}},e.disposeSubscriptionsInvolving=function(t){if(void 0===t)throw new Error("eventOwner is undefined");for(var n=e._fetchTrackedParticipant(t),r=0,i=Array.from(n.ownedEvents);r<i.length;r++){i[r].unsubscribeAll()}for(var s=0,a=Array.from(n.subscriptions.values());s<a.length;s++){var o=a[s],c=o.event;c._subscriptionsByHandler.delete(o.handler),c._cachedHandlers=void 0,e._fetchTrackedParticipant(o.handlerOwner).subscriptions.delete(o)}},e._fetchTrackedParticipant=function(e){var t=this._participantsByObject.get(e);return void 0===t&&(t={participant:e,ownedEvents:new Set,subscriptions:new Set},this._participantsByObject.set(e,t)),t},e}();i._participantsByObject=new WeakMap},51525:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var r=n(46393),i=n(562),s=n(62200);function a(e){return r.createElement(s.Z,null,r.createElement(i.Z,null,(function(){return r.createElement(r.Fragment,null,e.children)})))}},12234:function(e,t,n){"use strict";n.d(t,{s:function(){return s}});var r=n(46393);function i(e){var t;return e.focused?t=r.createElement("div",{style:{paddingTop:"10px",textDecoration:"underline"}},e.title):(t=r.createElement("div",{style:{paddingTop:"10px"}},e.title),e.linkUrl?t=r.createElement("a",{href:e.linkUrl},t):e.linkOnClick&&(t=r.createElement("a",{href:"#",onClick:e.linkOnClick},t))),t}function s(e){return r.createElement(r.Fragment,null,r.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.createElement("div",{style:{paddingTop:"100px",paddingLeft:"50px",paddingRight:"50px",flexGrow:0,whiteSpace:"nowrap"}},r.createElement("div",{style:{fontWeight:"bold"}},"Member Actions"),r.createElement(i,{title:"Upcoming events",focused:"events"===e.navItem,linkUrl:"/community/events"}),r.createElement(i,{title:"Past events",focused:"past-events"===e.navItem,linkUrl:"/community/past-events"}),r.createElement(i,{title:"Your profile",focused:"profile"===e.navItem,linkUrl:"/community/profile"}),r.createElement(i,{title:"Sign out",linkOnClick:e.appSession.onNavigateToSignOut})),r.createElement("div",{style:Object.assign({flexGrow:1},e.style,{paddingBottom:"100px"})},e.children,r.createElement("div",{style:{paddingTop:"50px"}},"\u26a0"," ",r.createElement("i",null,"This feature is experimental. Please"," ",r.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/issues",target:"_blank"},"let us know")," ","if anything is broken.")))))}},55674:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(46393),i=n(80952),s="dialogContainer_2s3L",a="dialogBox_qRTv";function o(e){return r.createElement("div",{className:s},r.createElement("div",{className:a},r.createElement("h2",null,"Join the Rush Stack Community!"),"Signing in enables you to:",r.createElement("ul",null,r.createElement("li",null,'Join our monthly "Rush Hour" meetings'),r.createElement("li",null,"Sign up for technical breakout sessions and other events"),r.createElement("li",null,"Request to add your organization logo to our website"),r.createElement("li",null,"Participate in occasional giveaways such as free T-shirts")),r.createElement("h2",null,"This feature requires a GitHub account"),"We use your existing GitHub account for authentication. ",r.createElement("br",null),"If you don't have an account, you will need to"," ",r.createElement("a",{href:"https://github.com/signup",target:"_blank"},"create one"),".",r.createElement("div",{style:{textAlign:"center",paddingTop:"40px"}},r.createElement(i.b,{onClick:e.appSession.onNavigateToSignIn,theme:"white"},r.createElement("img",{src:"/images/github-button.svg",width:"24px"}),r.createElement("div",{style:{paddingLeft:"10px"}},"Sign in with GitHub")))))}},80952:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var r=n(46393),i="buttonOuter_wB6b",s="buttonBorder_elbr",a="buttonBorderEffect_hWBi",o="buttonInner_xSBY",c="buttonInnerWhiteEffect_cVj8",u="buttonInnerRegularEffect_LpzX";function l(e){var t,n,l,d=[s],f=[o];if(e.disabled)t="#ffffff",l=n="#c0c0c0";else{switch(e.theme){case"notice":t="#ffffff",l=n="#c95228";break;case"white":t="#000000",n="#ffffff",l="#c0c0c0";break;default:t="#ffffff",l=n="#108938"}d.push(a),f.push("white"===e.theme?c:u)}return r.createElement("div",{className:i,role:"button",tabIndex:0,style:e.style},r.createElement("div",{className:d.join(" "),style:{color:t,backgroundColor:n,borderColor:l},onClick:e.disabled?void 0:e.onClick},r.createElement("div",{className:f.join(" ")},e.children)))}},17718:function(e,t,n){"use strict";n.d(t,{K:function(){return y}});var r=n(48728),i=n(46393),s=n(72835),a=n.n(s),o=n(94115),c=n.n(o),u=n(43693),l=n.n(u),d=n(8128),f=n.n(d);a().extend(c()),a().extend(l()),a().extend(f());var h=n(80952),p=n(84027),v="eventCardBorder_N1ly",m="detailBox_9aXK";function g(e){var t=e.eventModel.apiEvent,n=function(e){if(void 0!==e.startTime&&void 0!==e.duration&&"minutes"===e.durationUnits)return a()(e.startTime).add(e.duration,"minute").toDate()}(t),r=t.startTime?a()(t.startTime).format("dddd MMM D, YYYY"):"(event date is unspecified)",s="";t.startTime&&(s+=a()(t.startTime).format("h:mma"),n&&(s+="-"+a()(n).format("h:mma")));var o,c=t.startTime?a()(t.startTime).format("zzz ([UTC]Z)"):"",u=void 0;t.hostedBy&&(o=t.hostedByUrl?i.createElement("a",{href:t.hostedByUrl,target:"_blank"},t.hostedBy):i.createElement(i.Fragment,null,t.hostedBy),u=i.createElement("div",{style:{paddingTop:"10px"}},"Hosted by: ",o));var l=void 0;return""!==t.agendaHtml.trim()&&(l=i.createElement("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:t.agendaHtml.replace(/^\<p\>/,"<p>Agenda: ")}})),i.createElement(i.Fragment,null,i.createElement("h2",null,t.eventTitle),i.createElement("div",{style:{display:"flex",flexDirection:"row",paddingTop:"10px"}},i.createElement("div",{style:{whiteSpace:"nowrap",fontWeight:"bold"}},r,i.createElement("br",null),s),i.createElement("div",{style:{flexGrow:1,textAlign:"right",fontStyle:"italic"}},c)),u,l)}var y=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n,r,s=this.props.eventModel,a=s.apiEvent;if(a.isCompleted?(a.userIsSignedUp&&(e=i.createElement(i.Fragment,null,"You signed up for this event")),"summary"===this.props.cardType&&(t=i.createElement(h.b,{theme:"default",onClick:s.onNavigateToEventDetailPage},a.notesHtml?"Meeting Notes":"Details"))):a.userIsSignedUp?(e=i.createElement(i.Fragment,null,"You are attending this event"),t="summary"===this.props.cardType?i.createElement(h.b,{theme:"notice",onClick:s.onNavigateToEventDetailPage},"Edit Reservation"):i.createElement(h.b,{theme:"notice",onClick:s.onRemoveReservation},"Cancel your reservation")):(t=i.createElement(h.b,{onClick:s.onAddReservation},"Reserve a spot - I will attend"),n=i.createElement("div",{style:{paddingTop:"20px"}},"Spots left: ",a.spotsLeftNotice)),"detail"===this.props.cardType)if(a.isCompleted)r=a.notesHtml?i.createElement("div",{className:m},i.createElement("h2",null,"Meeting Notes"),i.createElement("div",{style:{paddingTop:"20px"},dangerouslySetInnerHTML:{__html:a.notesHtml}})):i.createElement("div",{className:m},i.createElement("h2",null,"Meeting Notes"),i.createElement("div",{style:{paddingTop:"20px"}},i.createElement("i",null,"No notes were posted for this meeting.")));else if(a.userIsSignedUp){var o=this.props.apiDataService.initiateGetProfile(this,!0);if(o.status===p.f.Success){var c=o.result.apiUser.verifiedEmail;r=c?i.createElement("div",{className:m},i.createElement("h2",null,"Join the video call"),i.createElement("div",{style:{paddingTop:"20px"}},"On the day before this event, the MS Teams video call URL will be sent to this email address:"),i.createElement("div",{style:{paddingTop:"20px",paddingLeft:"50px"}},i.createElement("code",null,c)),i.createElement("div",{style:{paddingTop:"20px",paddingBottom:"50px"}},"To select a different email address, you can"," ",i.createElement("a",{href:"/community/profile"},"edit your user profile"),".")):i.createElement("div",{className:m},i.createElement("h2",{style:{color:"#c95228"}},"* * * Problem! * * *"),i.createElement("div",{style:{paddingTop:"20px"}},"We cannot notify you about this event because you have not specified an email address."),i.createElement("div",{style:{paddingTop:"20px"}},"Please ",i.createElement("a",{href:"/community/profile"},"update your profile"),"."))}}return i.createElement(i.Fragment,null,i.createElement("div",{className:v},i.createElement(g,{eventModel:s}),n,i.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:"10px"}},i.createElement("div",{style:{flexGrow:1,alignSelf:"flex-end",fontWeight:"bold",color:"#c95228"}},e),t)),r)},t}(i.Component)},72835:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",c="week",u="month",l="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),s=n-i<0,a=t.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:c,d:o,D:f,h:a,m:s,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},E="en",w={};w[E]=m;var $=function(e){return e instanceof x},S=function(e,t,n){var r;if(!e)return E;if("string"==typeof e)w[e]&&(r=e),t&&(w[e]=t,r=e);else{var i=e.name;w[i]=e,r=i}return!n&&r&&(E=r),r||!n&&E},b=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},T=y;T.l=S,T.i=$,T.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var g=m.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return T},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return b(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<b(e)},g.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!T.u(t)||t,l=T.p(e),h=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(o)},p=function(e,t){return T.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case d:return r?h(1,0):h(31,11);case u:return r?h(1,m):h(0,m+1);case c:var E=this.$locale().weekStart||0,w=(v<E?v+7:v)-E;return h(r?g-w:g+(6-w),m);case o:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,c=T.p(e),l="set"+(this.$u?"UTC":""),h=(n={},n[o]=l+"Date",n[f]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],p=c===o?this.$D+(t-this.$W):t;if(c===u||c===d){var v=this.clone().set(f,1);v.$d[h](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[T.p(e)]()},g.add=function(r,l){var f,h=this;r=Number(r);var p=T.p(l),v=function(e){var t=b(h);return T.w(t.date(t.date()+Math.round(e*r)),h)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===o)return v(1);if(p===c)return v(7);var m=(f={},f[s]=t,f[a]=n,f[i]=e,f)[p]||1,g=this.$d.getTime()+r*m;return T.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=T.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].substr(0,s)},d=function(e){return T.s(s%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:T.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:T.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:T.s(a,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:i};return r.replace(v,(function(e,t){return t||p[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,f,h){var p,v=T.p(f),m=b(r),g=(m.utcOffset()-this.utcOffset())*t,y=this-m,E=T.m(this,m);return E=(p={},p[d]=E/12,p[u]=E,p[l]=E/3,p[c]=(y-g)/6048e5,p[o]=(y-g)/864e5,p[a]=y/n,p[s]=y/t,p[i]=y/e,p)[v]||y,h?E:T.a(E)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return w[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return T.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),_=x.prototype;return b.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",u],["$y",d],["$D",f]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,x,b),e.$i=!0),b},b.locale=S,b.isDayjs=$,b.unix=function(e){return b(1e3*e)},b.en=w[E],b.Ls=w,b.p={},b}()},8128:function(e){e.exports=function(){"use strict";return function(e,t,n){var r=t.prototype,i=r.format;n.en.ordinal=function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"},r.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return i.bind(this)(e);var r=this.$utils(),s=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return r.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return r.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return r.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return i.bind(this)(s)}}}()},43693:function(e){e.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,i){var s,a=function(e,n,r){void 0===r&&(r={});var i=new Date(e);return function(e,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=e+"|"+r,s=t[i];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),t[i]=s),s}(n,r).formatToParts(i)},o=function(t,n){for(var r=a(t,n),s=[],o=0;o<r.length;o+=1){var c=r[o],u=c.type,l=c.value,d=e[u];d>=0&&(s[d]=parseInt(l,10))}var f=s[3],h=24===f?0:f,p=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",v=+t;return(i.utc(p).valueOf()-(v-=v%1e3))/6e4},c=r.prototype;c.tz=function(e,t){void 0===e&&(e=s);var n=this.utcOffset(),r=this.toDate(),a=r.toLocaleString("en-US",{timeZone:e}),o=Math.round((r-new Date(a))/1e3/60),c=i(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-o,!0);if(t){var u=c.utcOffset();c=c.add(n-u,"minute")}return c.$x.$timezone=e,c},c.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var u=c.startOf;c.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return u.call(this,e,t);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return u.call(n,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,n){var r=n&&t,a=n||t||s,c=o(+i(),a);if("string"!=typeof e)return i(e).tz(a);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var s=o(r-=60*(i-t)*1e3,n);return i===s?[r,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(i.utc(e,r).valueOf(),c,a),l=u[0],d=u[1],f=i(l).utcOffset(d);return f.$x.$timezone=a,f},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){s=e}}}()},94115:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,s){var a=i.prototype;s.utc=function(e){return new i({date:e,utc:!0,args:arguments})},a.utc=function(t){var n=s(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},a.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var o=a.parse;a.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),o.call(this,e)};var c=a.init;a.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else c.call(this)};var u=a.utcOffset;a.utcOffset=function(r,i){var s=this.$utils().u;if(s(r))return this.$u?0:s(this.$offset)?u.call(this):this.$offset;if("string"==typeof r&&null===(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],s=i[0],a=60*+i[1]+ +i[2];return 0===a?0:"+"===s?a:-a}(r)))return this;var a=Math.abs(r)<=16?60*r:r,o=this;if(i)return o.$offset=a,o.$u=0===r,o;if(0!==r){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(a+c,e)).$offset=a,o.$x.$localOffset=c}else o=this.utc();return o};var l=a.format;a.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,t)},a.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*e},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var d=a.toDate;a.toDate=function(e){return"s"===e&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=a.diff;a.diff=function(e,t,n){if(e&&this.$u===e.$u)return f.call(this,e,t,n);var r=this.local(),i=s(e).local();return f.call(r,i,t,n)}}}()}}]);