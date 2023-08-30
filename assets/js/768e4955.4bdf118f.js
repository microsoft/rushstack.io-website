/*! For license information please see 768e4955.4bdf118f.js.LICENSE.txt */
"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[3518],{6184:(e,t,i)=>{i.r(t),i.d(t,{ProfilePage:()=>y,default:()=>S});var n=i(6393);const s="formHeading_VzCc",a="privacyNoticeBox_Wg1H";var r=i(5146),o=i(7600),l=i(8903),c=i(8851),d=i(6477);class h{}class u{constructor(e){this.updated=new c.m(this),this._fields=new Set,this._resetting=!1,this._modified=!1,e&&this.updated.subscribe(e,(()=>e.forceUpdate()))}get modified(){return this._modified}add(e){this._fields.add(e)}notifyFieldChanged(e){this._resetting||(this._modified=!0,this.updated.fire({}))}resetFields(e){if(this._resetting)throw new Error("assignFields() cannot be nested");try{this._resetting=!0,e()}finally{this._modified=!1,this._resetting=!1}this.updated.fire({})}}class m extends h{constructor(e){super(),this._value="",this.onChange=e=>{this.value=e.target.value},this.formFieldSet=e,this.formFieldSet.add(this)}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.formFieldSet.notifyFieldChanged(this))}}function p(e){return e.readOnly?n.createElement("input",{type:"text",style:{width:"20em"},value:e.field.value,readOnly:!0,disabled:!0}):n.createElement("input",{type:"text",style:{width:"20em"},value:e.field.value,onChange:e.field.onChange})}class f extends m{constructor(){super(...arguments),this._choices=[]}get choices(){return this._choices}set choices(e){this._choices=Array.from(e),this.formFieldSet.notifyFieldChanged(this)}}function v(e){let t=0;const i=e.field.choices.map((i=>n.createElement("option",{key:t++,value:i},""===i?e.emptyStringMessage??i:i)));return n.createElement("select",{style:{width:"20em"},value:e.field.value,onChange:e.field.onChange},i)}var g=i(4060);class E extends h{constructor(e){super(),this._checked=!1,this.onChange=e=>{this.checked=e.target.checked},this.formFieldSet=e,this.formFieldSet.add(this)}get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,this.formFieldSet.notifyFieldChanged(this))}}function _(e){return n.createElement("input",{type:"checkbox",disabled:e.disabled,checked:e.field.checked,onChange:e.field.onChange})}var w=i(7376);class b extends n.Component{constructor(e){super(e),this._formFieldSet=new u(this),this._fullNameField=new m(this._formFieldSet),this._nickNameField=new m(this._formFieldSet),this._pronounsField=new m(this._formFieldSet),this._locationField=new m(this._formFieldSet),this._verifiedEmailField=new f(this._formFieldSet),this._organizationNameField=new m(this._formFieldSet),this._organizationUrlField=new m(this._formFieldSet),this._gitHubUsernameField=new m(this._formFieldSet),this._twitterAliasField=new m(this._formFieldSet),this._optOutOfAllEmails=new E(this._formFieldSet),this._notifyAboutNewEvents=new E(this._formFieldSet),this._discloseOrganization=new E(this._formFieldSet),this._allowUseOfLogo=new E(this._formFieldSet),this._apiDataService_updated=()=>{this._formFieldSet.modified||this._resetFields()},this._saveButton_onClick=()=>{const e=this._appSession.apiDataService.initiateGetProfile(this,!0);if(e.status!==g.f.Success)return;const t=e.result.apiUser;this._formFieldSet.resetFields((()=>{})),this._appSession.apiDataService.updateProfileAsync({dbUserId:t.dbUserId,verifiedEmail:this._verifiedEmailField.value,fullName:this._fullNameField.value,nickName:this._nickNameField.value,pronouns:this._pronounsField.value,location:this._locationField.value,organizationName:this._organizationNameField.value,organizationUrl:this._organizationUrlField.value,twitterAlias:this._twitterAliasField.value,optOutOfAllEmails:this._optOutOfAllEmails.checked,notifyAboutNewEvents:this._notifyAboutNewEvents.checked,discloseOrganization:this._discloseOrganization.checked,allowUseOfLogo:this._allowUseOfLogo.checked}).catch((e=>{console.error(e.toString())}))},this._cancelButton_onClick=()=>{this._resetFields()},this._appSession=l.w.instance}componentDidMount(){this._appSession.apiDataService.updated.subscribe(this,this._apiDataService_updated),this._formFieldSet.updated.subscribe(this,(()=>{this.forceUpdate()}))}componentWillUnmount(){c.m.disposeSubscriptionsInvolving(this)}_resetFields(){const e=this._appSession.apiDataService.initiateGetProfile(this,!0);if(e.status===g.f.Success){const t=e.result.apiUser;this._formFieldSet.resetFields((()=>{this._fullNameField.value=t.fullName,this._nickNameField.value=t.nickName,this._pronounsField.value=t.pronouns,this._locationField.value=t.location,this._verifiedEmailField.value=t.verifiedEmail;const e=t.verifiedEmailChoices||[];e.indexOf(t.verifiedEmail)<0&&e.push(t.verifiedEmail),e.sort(),this._verifiedEmailField.choices=e,this._organizationNameField.value=t.organizationName,this._organizationUrlField.value=t.organizationUrl,this._gitHubUsernameField.value=t.gitHubUsername,this._twitterAliasField.value=t.twitterAlias,this._optOutOfAllEmails.checked=t.optOutOfAllEmails,this._notifyAboutNewEvents.checked=t.notifyAboutNewEvents,this._discloseOrganization.checked=t.discloseOrganization,this._allowUseOfLogo.checked=t.allowUseOfLogo}))}}render(){if(!this._appSession.loggedInUser)return n.createElement(o.c,{appSession:this._appSession});const e=this._appSession.apiDataService.initiateGetProfile(this,!0);return e.status===g.f.Error?n.createElement("div",null,"ERROR: ",e.error.message):e.status===g.f.Pending?n.createElement(n.Fragment,null):n.createElement(r.s,{appSession:this._appSession,navItem:"profile",style:{paddingTop:"100px",maxWidth:"600px"}},n.createElement("h1",null,"Your Profile"),n.createElement("div",{className:s},"Full Name"),n.createElement("div",null,n.createElement(p,{field:this._fullNameField})),n.createElement("p",null,n.createElement("i",null,'Example: "Cameron Codesmith"')),n.createElement("div",{className:s},"Nick Name"),n.createElement("div",null,"What name should we use to address you in a meeting or discussion?"),n.createElement("div",null,n.createElement(p,{field:this._nickNameField})),n.createElement("div",null,n.createElement("i",null,'Example: "Cam"')),n.createElement("div",{className:s},"Email Notifications"),n.createElement("div",null,"What email address should be used for notifications such as video call links?"),n.createElement("div",null,n.createElement(v,{field:this._verifiedEmailField,emptyStringMessage:"(unspecified)"})),n.createElement("div",null,n.createElement("label",null,n.createElement(_,{field:this._optOutOfAllEmails}),"Unsubscribe me from all Rush Stack email communications")),n.createElement("div",null,n.createElement("label",null,n.createElement(_,{field:this._notifyAboutNewEvents,disabled:this._optOutOfAllEmails.checked}),"Send me email notifications when new Rush Stack events are posted")),n.createElement("p",{style:{paddingTop:"20px"}},"This website relies on GitHub to verify your email address. The choices above are obtained from your"," ",n.createElement("a",{href:"https://github.com/settings/emails",target:"_blank"},"GitHub profile emails"),". After adding a new email address to your GitHub account, you must sign out from the Rush Stack website to refresh the choices. This is necessary because our database does not store a GitHub API token."),n.createElement("p",null,n.createElement("b",null,"Email privacy:")," The website does not display your email address to other users, and we make a best effort to avoid disclosing it to other parties such as advertisers or spammers. We intend for email notifications to be infrequent and relevant to topics that you expressed interest in. If you have feedback regarding this service, please"," ",n.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/issues",target:"_blank"},"create a GitHub issue.")),n.createElement("div",{className:s},"Company/Organization Name"),n.createElement("div",null,n.createElement(p,{field:this._organizationNameField})),n.createElement("div",{className:s},"Company/Organization URL"),n.createElement("div",null,n.createElement(p,{field:this._organizationUrlField})),n.createElement("div",null,n.createElement("label",null,n.createElement(_,{field:this._discloseOrganization}),"I want people to know that I'm affiliated with my company/organization.")),n.createElement("div",null,n.createElement("label",null,n.createElement(_,{field:this._allowUseOfLogo}),"My company/organization would like to support Rush Stack by having our logo displayed on the website for the components that we use.")),n.createElement("div",{className:s},"GitHub Alias"),n.createElement("div",null,n.createElement(p,{field:this._gitHubUsernameField,readOnly:!0})),n.createElement("div",{className:s},"Twitter Alias"),n.createElement("div",null,n.createElement(p,{field:this._twitterAliasField})),n.createElement("div",{className:s},"Pronouns"),n.createElement("div",null,n.createElement(p,{field:this._pronounsField})),n.createElement("div",{className:s},"Location"),n.createElement("div",null,n.createElement(p,{field:this._locationField})),n.createElement("div",null,n.createElement("i",null,'Example: "New York, USA"')),n.createElement("div",null,n.createElement(d.b,{style:{paddingTop:"20px",paddingRight:"20px"},theme:"default",disabled:!this._formFieldSet.modified,onClick:this._saveButton_onClick},"Save"),n.createElement(d.b,{theme:"notice",disabled:!this._formFieldSet.modified,onClick:this._cancelButton_onClick},"Cancel")),n.createElement("div",{className:a},n.createElement("p",null,n.createElement("b",null,"Privacy notice:")," Sharing your personal information is optional. We value your privacy. Our intent is to implement effective security practices and to protect your private data from being disclosed without your consent. However, be aware that the Rush Stack events, website, and associated software are operated by community volunteers and without any guarantees. Mistakes can happen sometimes."),n.createElement("p",null,n.createElement("b",null,"Disclaimer:"),' Use this Service AT YOUR OWN RISK. It is provided "as is", without warranty of any kind, express or implied. In no event shall any Operators of this Service be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. For details consult the GitHub repository'," ",n.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/"},"legal notices"),".")))}}function y(e){return n.createElement(w.t,null,n.createElement(b,null))}const S=y},4060:(e,t,i)=>{let n;i.d(t,{f:()=>n}),function(e){e[e.Error=0]="Error",e[e.Pending=1]="Pending",e[e.Success=2]="Success"}(n||(n={}))},8903:(e,t,i)=>{function n(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)e[n]=i[n]}return e}i.d(t,{w:()=>h});var s=function e(t,i){function s(e,s,a){if("undefined"!=typeof document){"number"==typeof(a=n({},i,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var o in a)a[o]&&(r+="; "+o,!0!==a[o]&&(r+="="+a[o].split(";")[0]));return document.cookie=e+"="+t.write(s,e)+r}}return Object.create({set:s,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],n={},s=0;s<i.length;s++){var a=i[s].split("="),r=a.slice(1).join("=");try{var o=decodeURIComponent(a[0]);if(n[o]=t.read(r,o),e===o)break}catch(l){}}return e?n[e]:n}},remove:function(e,t){s(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const a=s;var r=i(8851),o=i(4060);class l{constructor(e,t){this.onNavigateToEventDetailPage=()=>{this.appSession.navigateToEventDetailPage(this.apiEvent.dbEventId)},this.onNavigateToEventDetailPageRequireLogin=()=>{this.appSession.navigateToEventDetailPage(this.apiEvent.dbEventId,!0)},this.onAddReservation=()=>{this.appSession.apiDataService.addReservationAsync(this).catch((e=>{console.error(e.toString())}))},this.onAddReservationAndNavigate=()=>{(async()=>{await this.appSession.apiDataService.addReservationAsync(this),await this.onNavigateToEventDetailPage()})().catch((e=>{console.error(e.toString())}))},this.onRemoveReservation=()=>{this.appSession.apiDataService.removeReservationAsync(this).catch((e=>{console.error(e.toString())}))},this.apiEvent=e,this.appSession=t}}class c{constructor(e,t){this.apiUser=e,this.appSession=t}}class d{constructor(e){this.updated=new r.m(this),this._cache=new Map,this.appSession=e}initiateGetProfile(e,t){const i=`profile:${t}`;return this._startApiTask(i,e,(async()=>{console.log("Fetching profile...");const e=t?"?emails=1":"",i=await fetch(`${this.appSession.serviceUrl}/api/profile${e}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!i.ok)throw new Error("Server Error: "+i.statusText);const n=await i.json();return new c(n,this.appSession)}))}async updateProfileAsync(e){try{this._requireLoggedIn(),console.log("Posting profile update...");const t=await fetch(`${this.appSession.serviceUrl}/api/profile`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)});if(!t.ok)throw new Error("Server Error: "+t.statusText)}finally{this._invalidateCache()}}initiateGetEvent(e,t){const i=`event:${t}`;return this._startApiTask(i,e,(async()=>{console.log("Fetching event...");const e=await fetch(`${this.appSession.serviceUrl}/api/event/${t.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)throw new Error("Server Error: "+e.statusText);const i=await e.json();return new l(i,this.appSession)}))}initiateGetEvents(e,t){const i=`events:${t}`;return this._startApiTask(i,e,(async()=>{let e;"preview"!==t&&this._requireLoggedIn(),console.log("Fetching events..."),e="preview"===t?`${this.appSession.serviceUrl}/api/events-preview`:`${this.appSession.serviceUrl}/api/events?filter=${t}`;const i=await fetch(e,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!i.ok)throw new Error("Server Error: "+i.statusText);return(await i.json()).map((e=>new l(e,this.appSession)))}))}async addReservationAsync(e){try{this._requireLoggedIn(),console.log("Posting reservation...");const t=await fetch(`${this.appSession.serviceUrl}/api/event-reservation/${e.apiEvent.dbEventId}`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!t.ok)throw new Error("Server Error: "+t.statusText)}finally{this._invalidateCache()}}async removeReservationAsync(e){try{this._requireLoggedIn(),console.log("Deleting reservation...");const t=await fetch(`${this.appSession.serviceUrl}/api/event-reservation/${e.apiEvent.dbEventId}`,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});if(!t.ok)throw new Error("Server Error: "+t.statusText)}finally{this._invalidateCache()}}_invalidateCache(){this._cache.clear(),this.updated.fire({})}_startApiTask(e,t,i){let n=this._cache.get(e);if(void 0!==n){const t=18e4;Math.abs(Date.now()-n.timestamp)>t&&(n=void 0,this._cache.delete(e))}if(void 0===n){n={key:e,timestamp:Date.now(),task:{status:o.f.Pending},components:new Set},this._cache.set(e,n);const s=n;s.components.add(t),(async()=>{try{const e=await i();s.task={status:o.f.Success,result:e}}catch(e){s.task={status:o.f.Error,error:e}}finally{this.updated.fire({})}})()}return n.task}_requireLoggedIn(){if(!this.appSession.loggedInUser)throw new Error("Not signed in")}}class h{constructor(){this._history=void 0,this.onNavigateToSignIn=()=>{a.set("rscommunity-login-return-url",document.location.href,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),this.navigateToPage(this.serviceUrl+"/login-github")},this.onNavigateToSignOut=()=>{const e=new URL("/",document.location.href).href;a.set("rscommunity-login-return-url",e,{sameSite:"Strict",domain:document.location.hostname,path:"/"}),this.navigateToPage(this.serviceUrl+"/logout")},this.loggedInUser=a.get("rscommunity-logged-in-user"),this.serviceUrl="localhost"===document.location.hostname?"http://localhost:8000":"https://service.rushstack.io",this.apiDataService=new d(this)}registerHistory(e){this._history=e}getEventDetailPageUrl(e){return`/community/event?id=${e}`}navigateToEventDetailPage(e,t){let i=this.getEventDetailPageUrl(e);t&&(i+="&login"),this.navigateToPage(i)}navigateToPage(e){console.log("navigateToPage(): "+e);const t=new URL(window.location.href),i=new URL(e,t);if(i.protocol===t.protocol&&i.host===t.host){if(!this._history)throw new Error("registerHistory() was not called");this._history.push(e)}else window.location.assign(e)}static get instance(){return void 0===h._instance&&(h._instance=new h),h._instance}}},8851:(e,t,i)=>{i.d(t,{m:()=>n});class n{constructor(e){if(this._subscriptionsByHandler=new Map,this._cachedHandlers=void 0,void 0===e)throw new Error("eventOwner is undefined");this._eventOwner=e;n._fetchTrackedParticipant(this._eventOwner).ownedEvents.add(this)}subscribe(e,t){if(void 0===e)throw new Error("handlerOwner is undefined");if(void 0===t)throw new Error("handlerOwner is undefined");if(this._subscriptionsByHandler.has(t))throw new Error("Event handler has already been subscribed");const i={event:this,handlerOwner:e,handler:t};this._subscriptionsByHandler.set(t,i),this._cachedHandlers=void 0;n._fetchTrackedParticipant(e).subscriptions.add(i)}unsubscribe(e){const t=this._subscriptionsByHandler.get(e);if(void 0!==t){this._subscriptionsByHandler.delete(e),this._cachedHandlers=void 0;n._fetchTrackedParticipant(t.handlerOwner).subscriptions.delete(t)}}unsubscribeAll(){for(const e of Array.from(this._subscriptionsByHandler.values())){n._fetchTrackedParticipant(e.handlerOwner).subscriptions.delete(e)}this._subscriptionsByHandler.clear(),this._cachedHandlers=void 0}fire(e){if(void 0===e)throw new Error("eventArgs is undefined");if(void 0===this._cachedHandlers&&(this._cachedHandlers=[],this._subscriptionsByHandler.size>0))for(const t of Array.from(this._subscriptionsByHandler.values()))this._cachedHandlers.push(t.handler);for(const t of this._cachedHandlers)t(e)}static disposeSubscriptionsInvolving(e){if(void 0===e)throw new Error("eventOwner is undefined");const t=n._fetchTrackedParticipant(e);for(const i of Array.from(t.ownedEvents))i.unsubscribeAll();for(const i of Array.from(t.subscriptions.values())){const e=i.event;e._subscriptionsByHandler.delete(i.handler),e._cachedHandlers=void 0;n._fetchTrackedParticipant(i.handlerOwner).subscriptions.delete(i)}}static _fetchTrackedParticipant(e){let t=this._participantsByObject.get(e);return void 0===t&&(t={participant:e,ownedEvents:new Set,subscriptions:new Set},this._participantsByObject.set(e,t)),t}}n._participantsByObject=new WeakMap},7376:(e,t,i)=>{i.d(t,{t:()=>c});var n=i(6393),s=i(7499);function a(e){let{children:t,fallback:i}=e;return(0,s.Z)()?n.createElement(n.Fragment,null,t?.()):i??null}var r=i(8791),o=i(9594),l=i(8903);function c(e){return n.createElement(o.Z,null,n.createElement(a,null,(()=>{const t=(0,r.k6)();return l.w.instance.registerHistory(t),n.createElement(n.Fragment,null,e.children)})))}},5146:(e,t,i)=>{i.d(t,{s:()=>a});var n=i(6393);function s(e){let t;return e.focused?t=n.createElement("div",{style:{paddingTop:"10px",textDecoration:"underline"}},e.title):(t=n.createElement("div",{style:{paddingTop:"10px"}},e.title),e.linkUrl?t=n.createElement("a",{href:e.linkUrl},t):e.linkOnClick&&(t=n.createElement("a",{href:"#",onClick:e.linkOnClick},t))),t}function a(e){return n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.createElement("div",{style:{paddingTop:"100px",paddingLeft:"50px",paddingRight:"50px",flexGrow:0,whiteSpace:"nowrap"}},n.createElement("div",{style:{fontWeight:"bold"}},"Member Actions"),n.createElement(s,{title:"Upcoming events",focused:"events"===e.navItem,linkUrl:"/community/events"}),n.createElement(s,{title:"Past events",focused:"past-events"===e.navItem,linkUrl:"/community/past-events"}),n.createElement(s,{title:"Your profile",focused:"profile"===e.navItem,linkUrl:"/community/profile"}),n.createElement(s,{title:"Sign out",linkOnClick:e.appSession.onNavigateToSignOut})),n.createElement("div",{style:{flexGrow:1,...e.style,paddingBottom:"100px"}},e.children,n.createElement("div",{style:{paddingTop:"50px"}},"\u26a0"," ",n.createElement("i",null,"This feature is experimental. Please"," ",n.createElement("a",{href:"https://github.com/microsoft/rushstack-websites/issues",target:"_blank"},"let us know")," ","if anything is broken.")))))}},7600:(e,t,i)=>{i.d(t,{c:()=>r});var n=i(6393),s=i(6477);const a={dialogContainer:"dialogContainer_Ho9F",dialogBox:"dialogBox_kwFO"};function r(e){return n.createElement("div",{className:a.dialogContainer},n.createElement("div",{className:a.dialogBox},n.createElement("h2",null,"Join the Rush Stack Community!"),"Signing in enables you to:",n.createElement("ul",null,n.createElement("li",null,'Join our monthly "Rush Hour" meetings'),n.createElement("li",null,"Sign up for technical breakout sessions and other events"),n.createElement("li",null,"Request to add your organization logo to our website"),n.createElement("li",null,"Participate in occasional giveaways such as free T-shirts")),n.createElement("h2",null,"This feature requires a GitHub account"),"We use your existing GitHub account for authentication. ",n.createElement("br",null),"If you don't have an account, you will need to"," ",n.createElement("a",{href:"https://github.com/signup",target:"_blank"},"create one"),".",n.createElement("div",{style:{textAlign:"center",paddingTop:"40px"}},n.createElement(s.b,{onClick:e.appSession.onNavigateToSignIn,theme:"white"},n.createElement("img",{src:"/images/github-button.svg",width:"24px"}),n.createElement("div",{style:{paddingLeft:"10px"}},"Sign in with GitHub")))))}},6477:(e,t,i)=>{i.d(t,{b:()=>a});var n=i(6393);const s={buttonOuter:"buttonOuter_hkd4",buttonBorder:"buttonBorder_qgfT",buttonBorderEffect:"buttonBorderEffect_azpd",buttonInner:"buttonInner_J_Vi",buttonInnerWhiteEffect:"buttonInnerWhiteEffect_t_yx",buttonInnerRegularEffect:"buttonInnerRegularEffect_fRkO"};function a(e){let t,i,a;const r=[s.buttonBorder],o=[s.buttonInner];if(e.disabled)t="#ffffff",i="#c0c0c0",a=i;else{switch(e.theme){case"notice":t="#ffffff",i="#c95228",a=i;break;case"white":t="#000000",i="#ffffff",a="#c0c0c0";break;default:t="#ffffff",i="#108938",a=i}r.push(s.buttonBorderEffect),o.push("white"===e.theme?s.buttonInnerWhiteEffect:s.buttonInnerRegularEffect)}return n.createElement("div",{className:s.buttonOuter,role:"button",tabIndex:0,style:e.style},n.createElement("div",{className:r.join(" "),style:{color:t,backgroundColor:i,borderColor:a},onClick:e.disabled?void 0:e.onClick},n.createElement("div",{className:o.join(" ")},e.children)))}}}]);