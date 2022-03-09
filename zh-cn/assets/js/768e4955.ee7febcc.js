/*! For license information please see 768e4955.ee7febcc.js.LICENSE.txt */
"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[13518],{2755:function(e,t,n){function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t),n.d(t,{ProfilePage:function(){return F},default:function(){return x}});var r=n(49777),a=n(63929),o="formHeading_VzCc",s="privacyNoticeBox_Wg1H",l=n(74778),c=n(99538),u=n(64579),d=n(39381),f=n(2887),h=n(45379),p=function(){},m=function(){function e(e){this.updated=new d.m(this),this._fields=new Set,this._resetting=!1,this._modified=!1,e&&this.updated.subscribe(e,(function(){return e.forceUpdate()}))}var t=e.prototype;return t.add=function(e){this._fields.add(e)},t.notifyFieldChanged=function(e){this._resetting||(this._modified=!0,this.updated.fire({}))},t.resetFields=function(e){if(this._resetting)throw new Error("assignFields() cannot be nested");try{this._resetting=!0,e()}finally{this._modified=!1,this._resetting=!1}this.updated.fire({})},(0,h.Z)(e,[{key:"modified",get:function(){return this._modified}}]),e}(),v=function(e){function t(t){var n;return(n=e.call(this)||this)._value="",n.onChange=function(e){n.value=e.target.value},n.formFieldSet=t,n.formFieldSet.add(i(n)),n}return(0,r.Z)(t,e),(0,h.Z)(t,[{key:"value",get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,this.formFieldSet.notifyFieldChanged(this))}}]),t}(p);function g(e){return e.readOnly?a.createElement("input",{type:"text",style:{width:"20em"},value:e.field.value,readOnly:!0,disabled:!0}):a.createElement("input",{type:"text",style:{width:"20em"},value:e.field.value,onChange:e.field.onChange})}var E=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this)._choices=[],t}return(0,r.Z)(t,e),(0,h.Z)(t,[{key:"choices",get:function(){return this._choices},set:function(e){this._choices=Array.from(e),this.formFieldSet.notifyFieldChanged(this)}}]),t}(v);function _(e){var t=0,n=e.field.choices.map((function(n){var i;return a.createElement("option",{key:t++,value:n},""===n&&null!=(i=e.emptyStringMessage)?i:n)}));return a.createElement("select",{style:{width:"20em"},value:e.field.value,onChange:e.field.onChange},n)}var b=n(305),w=function(e){function t(t){var n;return(n=e.call(this)||this)._checked=!1,n.onChange=function(e){n.checked=e.target.checked},n.formFieldSet=t,n.formFieldSet.add(i(n)),n}return(0,r.Z)(t,e),(0,h.Z)(t,[{key:"checked",get:function(){return this._checked},set:function(e){this._checked!==e&&(this._checked=e,this.formFieldSet.notifyFieldChanged(this))}}]),t}(p);function y(e){return a.createElement("input",{type:"checkbox",disabled:e.disabled,checked:e.field.checked,onChange:e.field.onChange})}var k=n(93433),S=function(e){function t(t){var n;return(n=e.call(this,t)||this)._formFieldSet=new m(i(n)),n._fullNameField=new v(n._formFieldSet),n._nickNameField=new v(n._formFieldSet),n._pronounsField=new v(n._formFieldSet),n._locationField=new v(n._formFieldSet),n._verifiedEmailField=new E(n._formFieldSet),n._organizationNameField=new v(n._formFieldSet),n._organizationUrlField=new v(n._formFieldSet),n._gitHubUsernameField=new v(n._formFieldSet),n._twitterAliasField=new v(n._formFieldSet),n._optOutOfAllEmails=new w(n._formFieldSet),n._notifyAboutNewEvents=new w(n._formFieldSet),n._discloseOrganization=new w(n._formFieldSet),n._allowUseOfLogo=new w(n._formFieldSet),n._apiDataService_updated=function(){n._formFieldSet.modified||n._resetFields()},n._saveButton_onClick=function(){var e=n._appSession.apiDataService.initiateGetProfile(i(n),!0);if(e.status===b.f.Success){var t=e.result.apiUser;n._formFieldSet.resetFields((function(){})),n._appSession.apiDataService.updateProfileAsync({dbUserId:t.dbUserId,verifiedEmail:n._verifiedEmailField.value,fullName:n._fullNameField.value,nickName:n._nickNameField.value,pronouns:n._pronounsField.value,location:n._locationField.value,organizationName:n._organizationNameField.value,organizationUrl:n._organizationUrlField.value,twitterAlias:n._twitterAliasField.value,optOutOfAllEmails:n._optOutOfAllEmails.checked,notifyAboutNewEvents:n._notifyAboutNewEvents.checked,discloseOrganization:n._discloseOrganization.checked,allowUseOfLogo:n._allowUseOfLogo.checked}).catch((function(e){console.error(e.toString())}))}},n._cancelButton_onClick=function(){n._resetFields()},n._appSession=u.w.instance,n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this._appSession.apiDataService.updated.subscribe(this,this._apiDataService_updated),this._formFieldSet.updated.subscribe(this,(function(){e.forceUpdate()}))},n.componentWillUnmount=function(){d.m.disposeSubscriptionsInvolving(this)},n._resetFields=function(){var e=this,t=this._appSession.apiDataService.initiateGetProfile(this,!0);if(t.status===b.f.Success){var n=t.result.apiUser;this._formFieldSet.resetFields((function(){e._fullNameField.value=n.fullName,e._nickNameField.value=n.nickName,e._pronounsField.value=n.pronouns,e._locationField.value=n.location,e._verifiedEmailField.value=n.verifiedEmail;var t=n.verifiedEmailChoices||[];t.indexOf(n.verifiedEmail)<0&&t.push(n.verifiedEmail),t.sort(),e._verifiedEmailField.choices=t,e._organizationNameField.value=n.organizationName,e._organizationUrlField.value=n.organizationUrl,e._gitHubUsernameField.value=n.gitHubUsername,e._twitterAliasField.value=n.twitterAlias,e._optOutOfAllEmails.checked=n.optOutOfAllEmails,e._notifyAboutNewEvents.checked=n.notifyAboutNewEvents,e._discloseOrganization.checked=n.discloseOrganization,e._allowUseOfLogo.checked=n.allowUseOfLogo}))}},n.render=function(){if(!this._appSession.loggedInUser)return a.createElement(c.c,{appSession:this._appSession});var e=this._appSession.apiDataService.initiateGetProfile(this,!0);return e.status===b.f.Error?a.createElement("div",null,"ERROR: ",e.error.message):e.status===b.f.Pending?a.createElement(a.Fragment,null):a.createElement(l.s,{appSession:this._appSession,navItem:"profile",style:{paddingTop:"100px",maxWidth:"600px"}},a.createElement("h1",null,"Your Profile"),a.createElement("div",{className:o},"Full Name"),a.createElement("div",null,a.createElement(g,{field:this._fullNameField})),a.createElement("p",null,a.createElement("i",null,'Example: "Cameron Codesmith"')),a.createElement("div",{className:o},"Nick Name"),a.createElement("div",null,"What name should we use to address you in a meeting or discussion?"),a.createElement("div",null,a.createElement(g,{field:this._nickNameField})),a.createElement("div",null,a.createElement("i",null,'Example: "Cam"')),a.createElement("div",{className:o},"Email Notifications"),a.createElement("div",null,"What email address should be used for notifications such as video call links?"),a.createElement("div",null,a.createElement(_,{field:this._verifiedEmailField,emptyStringMessage:"(unspecified)"})),a.createElement("div",null,a.createElement("label",null,a.createElement(y,{field:this._optOutOfAllEmails}),"Unsubscribe me from all Rush Stack email communications")),a.createElement("div",null,a.createElement("label",null,a.createElement(y,{field:this._notifyAboutNewEvents,disabled:this._optOutOfAllEmails.checked}),"Send me email notifications when new Rush Stack events are posted")),a.createElement("p",{style:{paddingTop:"20px"}},"This website relies on GitHub to verify your email address. The choices above are obtained from your"," ",a.createElement("a",{href:"https://github.com/settings/emails",target:"_blank"},"GitHub profile emails"),". After adding a new email address to your GitHub account, you must sign out from the Rush Stack website to refresh the choices. This is necessary because our database does not store a GitHub API token."),a.createElement("p",null,a.createElement("b",null,"Email privacy:")," The website does not display your email address to other users, and we make a best effort to avoid disclosing it to other parties such as advertisers or spammers. We intend for email notifications to be infrequent and relevant to topics that you expressed interest in. If you have feedback regarding this service, please"," ",a.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/issues",target:"_blank"},"create a GitHub issue.")),a.createElement("div",{className:o},"Company/Organization Name"),a.createElement("div",null,a.createElement(g,{field:this._organizationNameField})),a.createElement("div",{className:o},"Company/Organization URL"),a.createElement("div",null,a.createElement(g,{field:this._organizationUrlField})),a.createElement("div",null,a.createElement("label",null,a.createElement(y,{field:this._discloseOrganization}),"I want people to know that I'm affiliated with my company/organization.")),a.createElement("div",null,a.createElement("label",null,a.createElement(y,{field:this._allowUseOfLogo}),"My company/organization would like to support Rush Stack by having our logo displayed on the website for the components that we use.")),a.createElement("div",{className:o},"GitHub Alias"),a.createElement("div",null,a.createElement(g,{field:this._gitHubUsernameField,readOnly:!0})),a.createElement("div",{className:o},"Twitter Alias"),a.createElement("div",null,a.createElement(g,{field:this._twitterAliasField})),a.createElement("div",{className:o},"Pronouns"),a.createElement("div",null,a.createElement(g,{field:this._pronounsField})),a.createElement("div",{className:o},"Location"),a.createElement("div",null,a.createElement(g,{field:this._locationField})),a.createElement("div",null,a.createElement("i",null,'Example: "New York, USA"')),a.createElement("div",null,a.createElement(f.b,{style:{paddingTop:"20px",paddingRight:"20px"},theme:"default",disabled:!this._formFieldSet.modified,onClick:this._saveButton_onClick},"Save"),a.createElement(f.b,{theme:"notice",disabled:!this._formFieldSet.modified,onClick:this._cancelButton_onClick},"Cancel")),a.createElement("div",{className:s},a.createElement("p",null,a.createElement("b",null,"Privacy notice:")," Sharing your personal information is optional. We value your privacy. Our intent is to implement effective security practices and to protect your private data from being disclosed without your consent. However, be aware that the Rush Stack events, website, and associated software are operated by community volunteers and without any guarantees. Mistakes can happen sometimes."),a.createElement("p",null,a.createElement("b",null,"Disclaimer:"),' Use this Service AT YOUR OWN RISK. It is provided "as is", without warranty of any kind, express or implied. In no event shall any Operators of this Service be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. For details consult the GitHub repository'," ",a.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/"},"legal notices"),".")))},t}(a.Component);function F(e){return a.createElement(k.t,null,a.createElement(S,null))}var x=F},305:function(e,t,n){var i;n.d(t,{f:function(){return i}}),function(e){e[e.Error=0]="Error",e[e.Pending=1]="Pending",e[e.Success=2]="Success"}(i||(i={}))},64579:function(e,t,n){n.d(t,{w:function(){return v}});var i=n(45379);function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var a=function e(t,n){function i(e,i,a){if("undefined"!=typeof document){"number"==typeof(a=r({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var s in a)a[s]&&(o+="; "+s,!0!==a[s]&&(o+="="+a[s].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+o}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],i={},r=0;r<n.length;r++){var a=n[r].split("="),o=a.slice(1).join("=");try{var s=decodeURIComponent(a[0]);if(i[s]=t.read(o,s),e===s)break}catch(l){}}return e?i[e]:i}},remove:function(e,t){i(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),o=a;function s(e,t,n,i,r,a,o){try{var s=e[a](o),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(i,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){s(a,i,r,o,l,"next",e)}function l(e){s(a,i,r,o,l,"throw",e)}o(void 0)}))}}var c=n(72537),u=n.n(c),d=n(39381),f=n(305),h=function(e,t){var n=this;this.onNavigateToEventDetailPage=function(){n.appSession.navigateToEventDetailPage(n.apiEvent.dbEventId)},this.onAddReservation=function(){n.appSession.apiDataService.addReservationAsync(n).catch((function(e){console.error(e.toString())}))},this.onAddReservationAndNavigate=function(){l(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.appSession.apiDataService.addReservationAsync(n);case 2:return e.next=4,n.onNavigateToEventDetailPage();case 4:case"end":return e.stop()}}),e)})))().catch((function(e){console.error(e.toString())}))},this.onRemoveReservation=function(){n.appSession.apiDataService.removeReservationAsync(n).catch((function(e){console.error(e.toString())}))},this.apiEvent=e,this.appSession=t},p=function(e,t){this.apiUser=e,this.appSession=t},m=function(){function e(e){this.updated=new d.m(this),this._cache=new Map,this.appSession=e}var t=e.prototype;return t.initiateGetProfile=function(e,t){var n=this,i="profile:"+t;return this._startApiTask(i,e,l(u().mark((function e(){var i,r,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching profile..."),i=t?"?emails=1":"",e.next=4,fetch(n.appSession.serviceUrl+"/api/profile"+i,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Server Error: "+r.statusText);case 7:return e.next=9,r.json();case 9:return a=e.sent,o=new p(a,n.appSession),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)}))))},t.updateProfileAsync=function(){var e=l(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Posting profile update..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t.initiateGetEvent=function(e,t){var n=this,i="event:"+t;return this._startApiTask(i,e,l(u().mark((function e(){var i,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching event..."),e.next=3,fetch(n.appSession.serviceUrl+"/api/event/"+t.toString(),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:if((i=e.sent).ok){e.next=6;break}throw new Error("Server Error: "+i.statusText);case 6:return e.next=8,i.json();case 8:return r=e.sent,a=new h(r,n.appSession),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)}))))},t.initiateGetEvents=function(e,t){var n=this,i="events:"+t;return this._startApiTask(i,e,l(u().mark((function e(){var i,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._requireLoggedIn(),console.log("Fetching events..."),e.next=4,fetch(n.appSession.serviceUrl+"/api/events?filter="+t,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:if((i=e.sent).ok){e.next=7;break}throw new Error("Server Error: "+i.statusText);case 7:return e.next=9,i.json();case 9:return r=e.sent,a=r.map((function(e){return new h(e,n.appSession)})),e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)}))))},t.addReservationAsync=function(){var e=l(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Posting reservation..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/event-reservation/"+t.apiEvent.dbEventId,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t.removeReservationAsync=function(){var e=l(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._requireLoggedIn(),console.log("Deleting reservation..."),e.next=5,fetch(this.appSession.serviceUrl+"/api/event-reservation/"+t.apiEvent.dbEventId,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("Server Error: "+n.statusText);case 8:return e.prev=8,this._invalidateCache(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])})));return function(t){return e.apply(this,arguments)}}(),t._invalidateCache=function(){this._cache.clear(),this.updated.fire({})},t._startApiTask=function(e,t,n){var i=this,r=this._cache.get(e);if(void 0!==r){Math.abs(Date.now()-r.timestamp)>18e4&&(r=void 0,this._cache.delete(e))}if(void 0===r){r={key:e,timestamp:Date.now(),task:{status:f.f.Pending},components:new Set},this._cache.set(e,r);var a=r;a.components.add(t),l(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:t=e.sent,a.task={status:f.f.Success,result:t},e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a.task={status:f.f.Error,error:e.t0};case 10:return e.prev=10,i.updated.fire({}),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()}return r.task},t._requireLoggedIn=function(){if(!this.appSession.loggedInUser)throw new Error("Not signed in")},e}(),v=function(){function e(){var e=this;this.onNavigateToSignIn=function(){o.set("rscommunity-login-return-url",document.location.href,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),document.location.href=e.serviceUrl+"/login-github"},this.onNavigateToSignOut=function(){var t=new URL("/",document.location.href).href;o.set("rscommunity-login-return-url",t,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),document.location.href=e.serviceUrl+"/logout"},this.loggedInUser=o.get("rscommunity-logged-in-user"),this.serviceUrl="localhost"===document.location.hostname?"http://localhost:8000":"https://service.rushstack.io",this.apiDataService=new m(this)}var t=e.prototype;return t.getEventDetailPageUrl=function(e){return"/community/event?id="+e},t.navigateToEventDetailPage=function(e){document.location.href=this.getEventDetailPageUrl(e)},(0,i.Z)(e,null,[{key:"instance",get:function(){return void 0===e._instance&&(e._instance=new e),e._instance}}]),e}()},39381:function(e,t,n){n.d(t,{m:function(){return r}});var i=n(71682),r=function(){function e(t){if(this._subscriptionsByHandler=new Map,this._cachedHandlers=void 0,void 0===t)throw new Error("eventOwner is undefined");this._eventOwner=t,e._fetchTrackedParticipant(this._eventOwner).ownedEvents.add(this)}var t=e.prototype;return t.subscribe=function(t,n){if(void 0===t)throw new Error("handlerOwner is undefined");if(void 0===n)throw new Error("handlerOwner is undefined");if(this._subscriptionsByHandler.has(n))throw new Error("Event handler has already been subscribed");var i={event:this,handlerOwner:t,handler:n};this._subscriptionsByHandler.set(n,i),this._cachedHandlers=void 0,e._fetchTrackedParticipant(t).subscriptions.add(i)},t.unsubscribe=function(t){var n=this._subscriptionsByHandler.get(t);void 0!==n&&(this._subscriptionsByHandler.delete(t),this._cachedHandlers=void 0,e._fetchTrackedParticipant(n.handlerOwner).subscriptions.delete(n))},t.unsubscribeAll=function(){for(var t=0,n=Array.from(this._subscriptionsByHandler.values());t<n.length;t++){var i=n[t];e._fetchTrackedParticipant(i.handlerOwner).subscriptions.delete(i)}this._subscriptionsByHandler.clear(),this._cachedHandlers=void 0},t.fire=function(e){if(void 0===e)throw new Error("eventArgs is undefined");if(void 0===this._cachedHandlers&&(this._cachedHandlers=[],this._subscriptionsByHandler.size>0))for(var t=0,n=Array.from(this._subscriptionsByHandler.values());t<n.length;t++){var r=n[t];this._cachedHandlers.push(r.handler)}for(var a,o=(0,i.Z)(this._cachedHandlers);!(a=o()).done;){(0,a.value)(e)}},e.disposeSubscriptionsInvolving=function(t){if(void 0===t)throw new Error("eventOwner is undefined");for(var n=e._fetchTrackedParticipant(t),i=0,r=Array.from(n.ownedEvents);i<r.length;i++){r[i].unsubscribeAll()}for(var a=0,o=Array.from(n.subscriptions.values());a<o.length;a++){var s=o[a],l=s.event;l._subscriptionsByHandler.delete(s.handler),l._cachedHandlers=void 0,e._fetchTrackedParticipant(s.handlerOwner).subscriptions.delete(s)}},e._fetchTrackedParticipant=function(e){var t=this._participantsByObject.get(e);return void 0===t&&(t={participant:e,ownedEvents:new Set,subscriptions:new Set},this._participantsByObject.set(e,t)),t},e}();r._participantsByObject=new WeakMap},93433:function(e,t,n){n.d(t,{t:function(){return s}});var i=n(63929),r=n(45747);function a(e){var t=e.children,n=e.fallback;return(0,r.Z)()?i.createElement(i.Fragment,null,t()):n||null}var o=n(87021);function s(e){return i.createElement(o.Z,null,i.createElement(a,null,(function(){return i.createElement(i.Fragment,null,e.children)})))}},74778:function(e,t,n){n.d(t,{s:function(){return a}});var i=n(63929);function r(e){var t;return e.focused?t=i.createElement("div",{style:{paddingTop:"10px",textDecoration:"underline"}},e.title):(t=i.createElement("div",{style:{paddingTop:"10px"}},e.title),e.linkUrl?t=i.createElement("a",{href:e.linkUrl},t):e.linkOnClick&&(t=i.createElement("a",{href:"#",onClick:e.linkOnClick},t))),t}function a(e){return i.createElement(i.Fragment,null,i.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.createElement("div",{style:{paddingTop:"100px",paddingLeft:"50px",paddingRight:"50px",flexGrow:0,whiteSpace:"nowrap"}},i.createElement("div",{style:{fontWeight:"bold"}},"Member Actions"),i.createElement(r,{title:"Upcoming events",focused:"events"===e.navItem,linkUrl:"/community/events"}),i.createElement(r,{title:"Past events",focused:"past-events"===e.navItem,linkUrl:"/community/past-events"}),i.createElement(r,{title:"Your profile",focused:"profile"===e.navItem,linkUrl:"/community/profile"}),i.createElement(r,{title:"Sign out",linkOnClick:e.appSession.onNavigateToSignOut})),i.createElement("div",{style:Object.assign({flexGrow:1},e.style,{paddingBottom:"100px"})},e.children,i.createElement("div",{style:{paddingTop:"50px"}},"\u26a0"," ",i.createElement("i",null,"This feature is experimental. Please"," ",i.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/issues",target:"_blank"},"let us know")," ","if anything is broken.")))))}},99538:function(e,t,n){n.d(t,{c:function(){return s}});var i=n(63929),r=n(2887),a="dialogContainer_Ho9F",o="dialogBox_kwFO";function s(e){return i.createElement("div",{className:a},i.createElement("div",{className:o},i.createElement("h2",null,"Join the Rush Stack Community!"),"Signing in enables you to:",i.createElement("ul",null,i.createElement("li",null,'Join our monthly "Rush Hour" meetings'),i.createElement("li",null,"Sign up for technical breakout sessions and other events"),i.createElement("li",null,"Request to add your organization logo to our website"),i.createElement("li",null,"Participate in occasional giveaways such as free T-shirts")),i.createElement("h2",null,"This feature requires a GitHub account"),"We use your existing GitHub account for authentication. ",i.createElement("br",null),"If you don't have an account, you will need to"," ",i.createElement("a",{href:"https://github.com/signup",target:"_blank"},"create one"),".",i.createElement("div",{style:{textAlign:"center",paddingTop:"40px"}},i.createElement(r.b,{onClick:e.appSession.onNavigateToSignIn,theme:"white"},i.createElement("img",{src:"/images/github-button.svg",width:"24px"}),i.createElement("div",{style:{paddingLeft:"10px"}},"Sign in with GitHub")))))}},2887:function(e,t,n){n.d(t,{b:function(){return u}});var i=n(63929),r="buttonOuter_hkd4",a="buttonBorder_qgfT",o="buttonBorderEffect_azpd",s="buttonInner_J_Vi",l="buttonInnerWhiteEffect_t_yx",c="buttonInnerRegularEffect_fRkO";function u(e){var t,n,u,d=[a],f=[s];if(e.disabled)t="#ffffff",u=n="#c0c0c0";else{switch(e.theme){case"notice":t="#ffffff",u=n="#c95228";break;case"white":t="#000000",n="#ffffff",u="#c0c0c0";break;default:t="#ffffff",u=n="#108938"}d.push(o),f.push("white"===e.theme?l:c)}return i.createElement("div",{className:r,role:"button",tabIndex:0,style:e.style},i.createElement("div",{className:d.join(" "),style:{color:t,backgroundColor:n,borderColor:u},onClick:e.disabled?void 0:e.onClick},i.createElement("div",{className:f.join(" ")},e.children)))}},45379:function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return r}})}}]);