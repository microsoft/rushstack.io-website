(self["webpackChunkrushstack_io"] = self["webpackChunkrushstack_io"] || []).push([[9161],{

/***/ 8690:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastEventsPage": function() { return /* binding */ PastEventsPage; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6393);
/* harmony import */ var _rscommunity_view_CommunitySidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2234);
/* harmony import */ var _rscommunity_view_CommunitySignInPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5674);
/* harmony import */ var _rscommunity_api_AppSession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6698);
/* harmony import */ var _rscommunity_view_EventCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7718);
/* harmony import */ var _rscommunity_library_ObjectEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2436);
/* harmony import */ var _rscommunity_api_ApiTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4027);
/* harmony import */ var _rscommunity_view_BrowserOnlyLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1525);
var PastEventsPageBody=/*#__PURE__*/function(_React$Component){(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(PastEventsPageBody,_React$Component);function PastEventsPageBody(props){var _this;_this=_React$Component.call(this,props)||this;_this._appSession=_rscommunity_api_AppSession__WEBPACK_IMPORTED_MODULE_3__/* .AppSession.instance */ .w.instance;return _this;}var _proto=PastEventsPageBody.prototype;_proto.componentDidMount=function componentDidMount(){var _this2=this;this._appSession.apiDataService.updated.subscribe(this,function(){return _this2.forceUpdate();});};_proto.componentWillUnmount=function componentWillUnmount(){_rscommunity_library_ObjectEvent__WEBPACK_IMPORTED_MODULE_5__/* .ObjectEvent.disposeSubscriptionsInvolving */ .m.disposeSubscriptionsInvolving(this);};_proto.render=function render(){var _this3=this;if(!this._appSession.loggedInUser){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_rscommunity_view_CommunitySignInPage__WEBPACK_IMPORTED_MODULE_2__/* .CommunitySignInPage */ .c,{appSession:this._appSession});}var eventTask=this._appSession.apiDataService.initiateGetEvents(this,"past");if(eventTask.status===_rscommunity_api_ApiTask__WEBPACK_IMPORTED_MODULE_6__/* .ApiTaskStatus.Error */ .f.Error){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"ERROR: ",eventTask.error.message);}if(eventTask.status===_rscommunity_api_ApiTask__WEBPACK_IMPORTED_MODULE_6__/* .ApiTaskStatus.Pending */ .f.Pending){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null);}var eventModels=eventTask.result;var content=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",null,"No events found.");if(eventModels.length>0){content=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,eventModels.map(function(eventModel){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_rscommunity_view_EventCard__WEBPACK_IMPORTED_MODULE_4__/* .EventCard */ .K,{cardType:"summary",eventModel:eventModel,apiDataService:_this3._appSession.apiDataService,key:eventModel.apiEvent.dbEventId});}));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_rscommunity_view_CommunitySidebar__WEBPACK_IMPORTED_MODULE_1__/* .CommunitySidebar */ .s,{appSession:this._appSession,navItem:"past-events",style:{paddingTop:"100px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,"Past Events"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{maxWidth:"800px"}},content));};return PastEventsPageBody;}(react__WEBPACK_IMPORTED_MODULE_0__.Component);function PastEventsPage(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_rscommunity_view_BrowserOnlyLayout__WEBPACK_IMPORTED_MODULE_7__/* .BrowserOnlyLayout */ .t,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PastEventsPageBody,null));}/* harmony default export */ __webpack_exports__["default"] = (PastEventsPage);

/***/ }),

/***/ 4027:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": function() { return /* binding */ ApiTaskStatus; }
/* harmony export */ });
var ApiTaskStatus;(function(ApiTaskStatus){ApiTaskStatus[ApiTaskStatus["Error"]=0]="Error";ApiTaskStatus[ApiTaskStatus["Pending"]=1]="Pending";ApiTaskStatus[ApiTaskStatus["Success"]=2]="Success";})(ApiTaskStatus||(ApiTaskStatus={}));

/***/ }),

/***/ 6698:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": function() { return /* binding */ AppSession; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(4989);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/js-cookie@3.0.1/node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(5411);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(3486);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(960);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./src/rscommunity/library/ObjectEvent.ts
var ObjectEvent = __webpack_require__(2436);
// EXTERNAL MODULE: ./src/rscommunity/api/ApiTask.ts
var ApiTask = __webpack_require__(4027);
;// CONCATENATED MODULE: ./src/rscommunity/api/models.ts
var EventModel=function EventModel(apiEvent,appSession){var _this=this;this.onNavigateToEventDetailPage=function(){_this.appSession.navigateToEventDetailPage(_this.apiEvent.dbEventId);};this.onAddReservation=function(){_this.appSession.apiDataService.addReservationAsync(_this).catch(function(error){console.error(error.toString());});};this.onRemoveReservation=function(){_this.appSession.apiDataService.removeReservationAsync(_this).catch(function(error){console.error(error.toString());});};this.apiEvent=apiEvent;this.appSession=appSession;};var UserModel=function UserModel(apiUser,appSession){this.apiUser=apiUser;this.appSession=appSession;};
;// CONCATENATED MODULE: ./src/rscommunity/api/ApiDataService.ts
var ApiDataService=/*#__PURE__*/function(){function ApiDataService(appSession){this.updated=new ObjectEvent/* ObjectEvent */.m(this);this._cache=new Map();this.appSession=appSession;}var _proto=ApiDataService.prototype;_proto.initiateGetProfile=function initiateGetProfile(component,includeEmails){var _this=this;var apiTaskKey="profile:"+includeEmails;return this._startApiTask(apiTaskKey,component,/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var query,data,apiUser,userModel;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log("Fetching profile...");query=includeEmails?"?emails=1":"";_context.next=4;return fetch(_this.appSession.serviceUrl+"/api/profile"+query,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:data=_context.sent;if(data.ok){_context.next=7;break;}throw new Error("Server Error: "+data.statusText);case 7:_context.next=9;return data.json();case 9:apiUser=_context.sent;userModel=new UserModel(apiUser,_this.appSession);return _context.abrupt("return",userModel);case 12:case"end":return _context.stop();}}},_callee);})));};_proto.updateProfileAsync=/*#__PURE__*/function(){var _updateProfileAsync=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(apiUserUpdate){var data;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;this._requireLoggedIn();console.log("Posting profile update...");_context2.next=5;return fetch(this.appSession.serviceUrl+"/api/profile",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(apiUserUpdate)});case 5:data=_context2.sent;if(data.ok){_context2.next=8;break;}throw new Error("Server Error: "+data.statusText);case 8:_context2.prev=8;this._invalidateCache();return _context2.finish(8);case 11:case"end":return _context2.stop();}}},_callee2,this,[[0,,8,11]]);}));function updateProfileAsync(_x){return _updateProfileAsync.apply(this,arguments);}return updateProfileAsync;}();_proto.initiateGetEvent=function initiateGetEvent(component,eventId){var _this2=this;var apiTaskKey="event:"+eventId;return this._startApiTask(apiTaskKey,component,/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee3(){var data,apiEvent,eventModel;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log("Fetching event...");_context3.next=3;return fetch(_this2.appSession.serviceUrl+"/api/event/"+eventId.toString(),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:data=_context3.sent;if(data.ok){_context3.next=6;break;}throw new Error("Server Error: "+data.statusText);case 6:_context3.next=8;return data.json();case 8:apiEvent=_context3.sent;eventModel=new EventModel(apiEvent,_this2.appSession);return _context3.abrupt("return",eventModel);case 11:case"end":return _context3.stop();}}},_callee3);})));};_proto.initiateGetEvents=function initiateGetEvents(component,filter){var _this3=this;var apiTaskKey="events:"+filter;return this._startApiTask(apiTaskKey,component,/*#__PURE__*/(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee4(){var data,apiEvents,eventModels;return regenerator_default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_this3._requireLoggedIn();console.log("Fetching events...");_context4.next=4;return fetch(_this3.appSession.serviceUrl+"/api/events?filter="+filter,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:data=_context4.sent;if(data.ok){_context4.next=7;break;}throw new Error("Server Error: "+data.statusText);case 7:_context4.next=9;return data.json();case 9:apiEvents=_context4.sent;eventModels=apiEvents.map(function(x){return new EventModel(x,_this3.appSession);});return _context4.abrupt("return",eventModels);case 12:case"end":return _context4.stop();}}},_callee4);})));};_proto.addReservationAsync=/*#__PURE__*/function(){var _addReservationAsync=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee5(eventModel){var data;return regenerator_default().wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;this._requireLoggedIn();console.log("Posting reservation...");_context5.next=5;return fetch(this.appSession.serviceUrl+"/api/event-reservation/"+eventModel.apiEvent.dbEventId,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:data=_context5.sent;if(data.ok){_context5.next=8;break;}throw new Error("Server Error: "+data.statusText);case 8:_context5.prev=8;this._invalidateCache();return _context5.finish(8);case 11:case"end":return _context5.stop();}}},_callee5,this,[[0,,8,11]]);}));function addReservationAsync(_x2){return _addReservationAsync.apply(this,arguments);}return addReservationAsync;}();_proto.removeReservationAsync=/*#__PURE__*/function(){var _removeReservationAsync=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee6(eventModel){var data;return regenerator_default().wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.prev=0;this._requireLoggedIn();console.log("Deleting reservation...");_context6.next=5;return fetch(this.appSession.serviceUrl+"/api/event-reservation/"+eventModel.apiEvent.dbEventId,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});case 5:data=_context6.sent;if(data.ok){_context6.next=8;break;}throw new Error("Server Error: "+data.statusText);case 8:_context6.prev=8;this._invalidateCache();return _context6.finish(8);case 11:case"end":return _context6.stop();}}},_callee6,this,[[0,,8,11]]);}));function removeReservationAsync(_x3){return _removeReservationAsync.apply(this,arguments);}return removeReservationAsync;}();_proto._invalidateCache=function _invalidateCache(){this._cache.clear();this.updated.fire({});};_proto._startApiTask=function _startApiTask(apiTaskKey,component,action){var _this4=this;var cacheEntry=this._cache.get(apiTaskKey);if(cacheEntry!==undefined){var THREE_MINUTES_IN_MS=3*60*1000;if(Math.abs(Date.now()-cacheEntry.timestamp)>THREE_MINUTES_IN_MS){// Flush cache entries after a few minutes
// _invalidateCache() will also flush the cache whenever a change is saved
cacheEntry=undefined;this._cache.delete(apiTaskKey);}}if(cacheEntry===undefined){cacheEntry={key:apiTaskKey,timestamp:Date.now(),task:{status:ApiTask/* ApiTaskStatus.Pending */.f.Pending},components:new Set()};this._cache.set(apiTaskKey,cacheEntry);var cacheEntry2=cacheEntry;cacheEntry2.components.add(component);(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee7(){var result;return regenerator_default().wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.prev=0;_context7.next=3;return action();case 3:result=_context7.sent;cacheEntry2.task={status:ApiTask/* ApiTaskStatus.Success */.f.Success,result:result};_context7.next=10;break;case 7:_context7.prev=7;_context7.t0=_context7["catch"](0);cacheEntry2.task={status:ApiTask/* ApiTaskStatus.Error */.f.Error,error:_context7.t0};case 10:_context7.prev=10;_this4.updated.fire({});return _context7.finish(10);case 13:case"end":return _context7.stop();}}},_callee7,null,[[0,7,10,13]]);}))();}return cacheEntry.task;};_proto._requireLoggedIn=function _requireLoggedIn(){if(!this.appSession.loggedInUser){throw new Error("Not signed in");}};return ApiDataService;}();
;// CONCATENATED MODULE: ./src/rscommunity/api/AppSession.ts
var AppSession=/*#__PURE__*/function(){function AppSession(){var _this=this;this.onNavigateToSignIn=function(){// After logging in, return to the current page
js_cookie/* default.set */.Z.set("rscommunity-login-return-path",document.location.pathname,{sameSite:"Strict",domain:document.location.hostname,path:"/"});document.location.href=_this.serviceUrl+"/login-github";};this.onNavigateToSignOut=function(){// The "Sign Out" command should return us to the site homepage
js_cookie/* default.set */.Z.set("rscommunity-login-return-path","/",{sameSite:"Strict",domain:document.location.hostname,path:"/"});document.location.href=_this.serviceUrl+"/logout";};this.loggedInUser=js_cookie/* default.get */.Z.get("rscommunity-logged-in-user");this.serviceUrl=document.location.hostname==="localhost"?"http://localhost:8000":"https://service.rushstack.io";this.apiDataService=new ApiDataService(this);}var _proto=AppSession.prototype;_proto.navigateToEventDetailPage=function navigateToEventDetailPage(eventId){document.location.href="/community/event?id="+eventId;};(0,createClass/* default */.Z)(AppSession,null,[{key:"instance",get:function get(){if(AppSession._instance===undefined){AppSession._instance=new AppSession();}return AppSession._instance;}}]);return AppSession;}();

/***/ }),

/***/ 2436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ ObjectEvent; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6925);
// eslint-disable-next-line
// eslint-disable-next-line
var ObjectEvent=/*#__PURE__*/function(){function ObjectEvent(eventOwner){this._subscriptionsByHandler=new Map();this._cachedHandlers=undefined;if(eventOwner===undefined){throw new Error("eventOwner is undefined");}this._eventOwner=eventOwner;var participant=ObjectEvent._fetchTrackedParticipant(this._eventOwner);participant.ownedEvents.add(this);}/**
   * Adds a "handler" callback function that will be invoked when this event is fired.
   *
   * @param handlerOwner - the object that `handler` belongs to, for usage
   *   with {@link ObjectEvent.disposeSubscriptionsInvolving}
   * @param handler - the callback function to be invoked when the event is fired
   */var _proto=ObjectEvent.prototype;_proto.subscribe=function subscribe(handlerOwner,handler){if(handlerOwner===undefined){throw new Error("handlerOwner is undefined");}if(handler===undefined){throw new Error("handlerOwner is undefined");}if(this._subscriptionsByHandler.has(handler)){throw new Error("Event handler has already been subscribed");}var subscription={event:this,handlerOwner:handlerOwner,handler:handler};this._subscriptionsByHandler.set(handler,subscription);this._cachedHandlers=undefined;var handlerOwnerParticipant=ObjectEvent._fetchTrackedParticipant(handlerOwner);handlerOwnerParticipant.subscriptions.add(subscription);}/**
   * Removes a "handler" callback function that was added by {@link ObjectEvent.subscribe}.
   */;_proto.unsubscribe=function unsubscribe(handler){var subscription=this._subscriptionsByHandler.get(handler);if(subscription!==undefined){this._subscriptionsByHandler.delete(handler);this._cachedHandlers=undefined;var handlerOwnerParticipant=ObjectEvent._fetchTrackedParticipant(subscription.handlerOwner);handlerOwnerParticipant.subscriptions.delete(subscription);}}/**
   * Removes all "handler" callback functions that were added by {@link ObjectEvent.subscribe}.
   */;_proto.unsubscribeAll=function unsubscribeAll(){for(var _i=0,_Array$from=Array.from(this._subscriptionsByHandler.values());_i<_Array$from.length;_i++){var subscription=_Array$from[_i];var handlerOwnerParticipant=ObjectEvent._fetchTrackedParticipant(subscription.handlerOwner);handlerOwnerParticipant.subscriptions.delete(subscription);}this._subscriptionsByHandler.clear();this._cachedHandlers=undefined;}/**
   * Triggers the event, by invoking the "handler" callback functions that were added
   * by {@link ObjectEvent.subscribe}.  The handlers are called in the order in which they
   * were subscribed.
   */;_proto.fire=function fire(eventArgs){if(eventArgs===undefined){throw new Error("eventArgs is undefined");}if(this._cachedHandlers===undefined){this._cachedHandlers=[];if(this._subscriptionsByHandler.size>0){for(var _i2=0,_Array$from2=Array.from(this._subscriptionsByHandler.values());_i2<_Array$from2.length;_i2++){var subscription=_Array$from2[_i2];this._cachedHandlers.push(subscription.handler);}}}for(var _iterator=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_7_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelperLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this._cachedHandlers),_step;!(_step=_iterator()).done;){var handler=_step.value;handler(eventArgs);}}// STATIC MEMBERS
/**
   * Unsubscribes any event handlers belonging to `eventParticipant`, and also calls
   * {@link ObjectEvent.unsubscribeAll} for any events owned by `eventParticipant`.
   */;ObjectEvent.disposeSubscriptionsInvolving=function disposeSubscriptionsInvolving(participant){if(participant===undefined){throw new Error("eventOwner is undefined");}var trackedParticipant=ObjectEvent._fetchTrackedParticipant(participant);// Unsubscribe any handlers attached to any owned events
for(var _i3=0,_Array$from3=Array.from(trackedParticipant.ownedEvents);_i3<_Array$from3.length;_i3++){var event=_Array$from3[_i3];event.unsubscribeAll();}// Unsubscribe any handlers belonging to this object
for(var _i4=0,_Array$from4=Array.from(trackedParticipant.subscriptions.values());_i4<_Array$from4.length;_i4++){var subscription=_Array$from4[_i4];// INLINE: subscription.event.unsubscribe(subscription.handler);
var _event=subscription.event;_event._subscriptionsByHandler.delete(subscription.handler);_event._cachedHandlers=undefined;var handlerOwnerParticipant=ObjectEvent._fetchTrackedParticipant(subscription.handlerOwner);handlerOwnerParticipant.subscriptions.delete(subscription);}};ObjectEvent._fetchTrackedParticipant=function _fetchTrackedParticipant(participant){var trackedParticipant=this._participantsByObject.get(participant);if(trackedParticipant===undefined){trackedParticipant={participant:participant,ownedEvents:new Set(),subscriptions:new Set()};this._participantsByObject.set(participant,trackedParticipant);}return trackedParticipant;};return ObjectEvent;}();ObjectEvent._participantsByObject=new WeakMap();

/***/ }),

/***/ 1525:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ BrowserOnlyLayout; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6393);
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2200);
// Allow Docusaurus to prerender the <Layout> statically, but the rest of the web application must be
// rendered dynamically.
function BrowserOnlyLayout(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,props.children);}));}

/***/ }),

/***/ 2234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ CommunitySidebar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6393);
function MenuItem(props){var result;if(props.focused){result=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingTop:"10px",textDecoration:"underline"}},props.title);}else{result=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingTop:"10px"}},props.title);if(props.linkUrl){result=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:props.linkUrl},result);}else if(props.linkOnClick){result=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#",onClick:props.linkOnClick},result);}}return result;}function CommunitySidebar(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"row"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{paddingTop:"100px",paddingLeft:"50px",paddingRight:"50px",flexGrow:0,whiteSpace:"nowrap"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{fontWeight:"bold"}},"Member Actions"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuItem,{title:"Upcoming events",focused:props.navItem==="events",linkUrl:"/community/events"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuItem,{title:"Past events",focused:props.navItem==="past-events",linkUrl:"/community/past-events"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuItem,{title:"Your profile",focused:props.navItem==="profile",linkUrl:"/community/profile"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuItem,{title:"Sign out",linkOnClick:props.appSession.onNavigateToSignOut})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:Object.assign({flexGrow:1},props.style,{paddingBottom:"100px"})},props.children)));}

/***/ }),

/***/ 5674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": function() { return /* binding */ CommunitySignInPage; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(6393);
// EXTERNAL MODULE: ./src/rscommunity/view/DecoratedButton.tsx + 1 modules
var DecoratedButton = __webpack_require__(952);
;// CONCATENATED MODULE: ./src/rscommunity/view/CommunitySignInPage.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CommunitySignInPage_module = ({"dialogContainer":"dialogContainer_2s3L","dialogBox":"dialogBox_qRTv"});
;// CONCATENATED MODULE: ./src/rscommunity/view/CommunitySignInPage.tsx
function CommunitySignInPage(props){return/*#__PURE__*/react.createElement("div",{className:CommunitySignInPage_module.dialogContainer},/*#__PURE__*/react.createElement("div",{className:CommunitySignInPage_module.dialogBox},/*#__PURE__*/react.createElement("h2",null,"Join the Rush Stack Community!"),"Signing in enables you to:",/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,"Join our monthly \"Rush Hour\" meetings"),/*#__PURE__*/react.createElement("li",null,"Sign up for technical breakout sessions and other events"),/*#__PURE__*/react.createElement("li",null,"Request to add your organization logo to our website"),/*#__PURE__*/react.createElement("li",null,"Participate in occasional giveaways such as free T-shirts")),/*#__PURE__*/react.createElement("h2",null,"This feature requires a GitHub account"),"We use your existing GitHub account for authentication. ",/*#__PURE__*/react.createElement("br",null),"If you don't have an account, you will need to"," ",/*#__PURE__*/react.createElement("a",{href:"https://github.com/signup",target:"_blank"},"create one"),".",/*#__PURE__*/react.createElement("div",{style:{textAlign:"center",paddingTop:"40px"}},/*#__PURE__*/react.createElement(DecoratedButton/* DecoratedButton */.b,{onClick:props.appSession.onNavigateToSignIn,theme:"white"},/*#__PURE__*/react.createElement("img",{src:"/images/github-button.svg",width:"24px"}),/*#__PURE__*/react.createElement("div",{style:{paddingLeft:"10px"}},"Sign in with GitHub")))));}

/***/ }),

/***/ 952:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": function() { return /* binding */ DecoratedButton; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(6393);
;// CONCATENATED MODULE: ./src/rscommunity/view/DecoratedButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DecoratedButton_module = ({"buttonOuter":"buttonOuter_wB6b","buttonBorder":"buttonBorder_elbr","buttonBorderEffect":"buttonBorderEffect_hWBi","buttonInner":"buttonInner_xSBY","buttonInnerWhiteEffect":"buttonInnerWhiteEffect_cVj8","buttonInnerRegularEffect":"buttonInnerRegularEffect_LpzX"});
;// CONCATENATED MODULE: ./src/rscommunity/view/DecoratedButton.tsx
function DecoratedButton(props){var textColor;var backgroundColor;var borderColor;var borderStyles=[DecoratedButton_module.buttonBorder];var innerStyles=[DecoratedButton_module.buttonInner];if(props.disabled){textColor="#ffffff";backgroundColor="#c0c0c0";borderColor=backgroundColor;}else{switch(props.theme){case"notice":textColor="#ffffff";backgroundColor="#c95228";borderColor=backgroundColor;break;case"white":textColor="#000000";backgroundColor="#ffffff";borderColor="#c0c0c0";break;default:textColor="#ffffff";backgroundColor="#108938";borderColor=backgroundColor;break;}borderStyles.push(DecoratedButton_module.buttonBorderEffect);innerStyles.push(props.theme==="white"?DecoratedButton_module.buttonInnerWhiteEffect:DecoratedButton_module.buttonInnerRegularEffect);}return/*#__PURE__*/react.createElement("div",{className:DecoratedButton_module.buttonOuter,role:"button",tabIndex:0,style:props.style},/*#__PURE__*/react.createElement("div",{className:borderStyles.join(" "),style:{color:textColor,backgroundColor:backgroundColor,borderColor:borderColor},onClick:props.disabled?undefined:props.onClick},/*#__PURE__*/react.createElement("div",{className:innerStyles.join(" ")},props.children)));}

/***/ }),

/***/ 7718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": function() { return /* binding */ EventCard; }
});

// UNUSED EXPORTS: EventCardBody

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.7/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(8728);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(6393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(2835);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/utc.js
var utc = __webpack_require__(4115);
var utc_default = /*#__PURE__*/__webpack_require__.n(utc);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/timezone.js
var timezone = __webpack_require__(3693);
var timezone_default = /*#__PURE__*/__webpack_require__.n(timezone);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/dayjs@1.10.7/node_modules/dayjs/plugin/advancedFormat.js
var advancedFormat = __webpack_require__(8128);
var advancedFormat_default = /*#__PURE__*/__webpack_require__.n(advancedFormat);
;// CONCATENATED MODULE: ./src/rscommunity/dayjsExtensions.ts
dayjs_min_default().extend((utc_default()));dayjs_min_default().extend((timezone_default()));dayjs_min_default().extend((advancedFormat_default()));
// EXTERNAL MODULE: ./src/rscommunity/view/DecoratedButton.tsx + 1 modules
var DecoratedButton = __webpack_require__(952);
// EXTERNAL MODULE: ./src/rscommunity/api/ApiTask.ts
var ApiTask = __webpack_require__(4027);
;// CONCATENATED MODULE: ./src/rscommunity/view/EventCard.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var EventCard_module = ({"eventCardBorder":"eventCardBorder_N1ly","detailBox":"detailBox_9aXK"});
;// CONCATENATED MODULE: ./src/rscommunity/view/EventCard.tsx
function calculateEndTime(eventJson){if(eventJson.startTime===undefined||eventJson.duration===undefined){return undefined;}if(eventJson.durationUnits!=="minutes"){return undefined;}return dayjs_min_default()(eventJson.startTime).add(eventJson.duration,"minute").toDate();}function EventCardBody(props){var apiEvent=props.eventModel.apiEvent;var endTime=calculateEndTime(apiEvent);var formattedStartDate=apiEvent.startTime?dayjs_min_default()(apiEvent.startTime).format("dddd MMM D, YYYY"):"(event date is unspecified)";var formattedTime="";if(apiEvent.startTime){formattedTime+=dayjs_min_default()(apiEvent.startTime).format("h:mma");if(endTime){formattedTime+="-"+dayjs_min_default()(endTime).format("h:mma");}}var timeZoneLine=apiEvent.startTime?dayjs_min_default()(apiEvent.startTime).format("zzz ([UTC]Z)"):"";var hostedByDiv=undefined;if(apiEvent.hostedBy){var innerContent;if(apiEvent.hostedByUrl){innerContent=/*#__PURE__*/react.createElement("a",{href:apiEvent.hostedByUrl,target:"_blank"},apiEvent.hostedBy);}else{innerContent=/*#__PURE__*/react.createElement(react.Fragment,null,apiEvent.hostedBy);}hostedByDiv=/*#__PURE__*/react.createElement("div",{style:{paddingTop:"10px"}},"Hosted by: ",innerContent);}var agendaDiv=undefined;if(apiEvent.agendaHtml.trim()!==""){agendaDiv=/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px"}// The server scrubs this text to ensure it is safe HTML
,dangerouslySetInnerHTML:{__html:apiEvent.agendaHtml.replace(/^\<p\>/,"<p>Agenda: ")}});}return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("h2",null,apiEvent.eventTitle),/*#__PURE__*/react.createElement("div",{style:{display:"flex",flexDirection:"row",paddingTop:"10px"}},/*#__PURE__*/react.createElement("div",{style:{whiteSpace:"nowrap",fontWeight:"bold"}},formattedStartDate,/*#__PURE__*/react.createElement("br",null),formattedTime),/*#__PURE__*/react.createElement("div",{style:{flexGrow:1,textAlign:"right",fontStyle:"italic"}},timeZoneLine)),hostedByDiv,agendaDiv);}var EventCard=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(EventCard,_React$Component);function EventCard(){return _React$Component.apply(this,arguments)||this;}var _proto=EventCard.prototype;_proto.render=function render(){var eventModel=this.props.eventModel;var apiEvent=eventModel.apiEvent;var footnote;var actionButton;var spotsLeftDiv;if(!apiEvent.isCompleted){// UPCOMING EVENT
if(apiEvent.userIsSignedUp){footnote=/*#__PURE__*/react.createElement(react.Fragment,null,"You are attending this event");if(this.props.cardType==="summary"){actionButton=/*#__PURE__*/react.createElement(DecoratedButton/* DecoratedButton */.b,{theme:"notice",onClick:eventModel.onNavigateToEventDetailPage},"Edit Reservation");}else{actionButton=/*#__PURE__*/react.createElement(DecoratedButton/* DecoratedButton */.b,{theme:"notice",onClick:eventModel.onRemoveReservation},"Cancel your reservation");}}else{actionButton=/*#__PURE__*/react.createElement(DecoratedButton/* DecoratedButton */.b,{onClick:eventModel.onAddReservation},"Reserve a spot - I will attend");spotsLeftDiv=/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px"}},"Spots left: ",apiEvent.spotsLeftNotice);}}else{// PAST EVENT
if(apiEvent.userIsSignedUp){footnote=/*#__PURE__*/react.createElement(react.Fragment,null,"You signed up for this event");}if(this.props.cardType==="summary"){actionButton=/*#__PURE__*/react.createElement(DecoratedButton/* DecoratedButton */.b,{theme:"default",onClick:eventModel.onNavigateToEventDetailPage},apiEvent.notesHtml?"Meeting Notes":"Details");}}var detailBox;if(this.props.cardType==="detail"){if(!apiEvent.isCompleted){// UPCOMING EVENT
if(apiEvent.userIsSignedUp){var userTask=this.props.apiDataService.initiateGetProfile(this,true);if(userTask.status===ApiTask/* ApiTaskStatus.Success */.f.Success){var verifiedEmail=userTask.result.apiUser.verifiedEmail;if(verifiedEmail){detailBox=/*#__PURE__*/react.createElement("div",{className:EventCard_module.detailBox},/*#__PURE__*/react.createElement("h2",null,"Join the video call"),/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px"}},"On the day before this event, the MS Teams video call URL will be sent to the email address from your profile:"),/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px",paddingLeft:"50px",paddingBottom:"50px"}},/*#__PURE__*/react.createElement("code",null,verifiedEmail)));}else{detailBox=/*#__PURE__*/react.createElement("div",{className:EventCard_module.detailBox},/*#__PURE__*/react.createElement("h2",{style:{color:"#c95228"}},"* * * Problem! * * *"),/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px"}},"We cannot notify you about this event because you have not specified an email address."),/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px"}},"Please ",/*#__PURE__*/react.createElement("a",{href:"/community/profile"},"update your profile"),"."));}}}}else{// PAST EVENT
if(apiEvent.notesHtml){detailBox=/*#__PURE__*/react.createElement("div",{className:EventCard_module.detailBox},/*#__PURE__*/react.createElement("h2",null,"Meeting Notes"),/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px"}// The server scrubs this text to ensure it is safe HTML
,dangerouslySetInnerHTML:{__html:apiEvent.notesHtml}}));}else{detailBox=/*#__PURE__*/react.createElement("div",{className:EventCard_module.detailBox},/*#__PURE__*/react.createElement("h2",null,"Meeting Notes"),/*#__PURE__*/react.createElement("div",{style:{paddingTop:"20px"}},/*#__PURE__*/react.createElement("i",null,"No notes were posted for this meeting.")));}}}return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{className:EventCard_module.eventCardBorder},/*#__PURE__*/react.createElement(EventCardBody,{eventModel:eventModel}),spotsLeftDiv,/*#__PURE__*/react.createElement("div",{style:{display:"flex",justifyContent:"flex-end",paddingBottom:"10px"}},/*#__PURE__*/react.createElement("div",{style:{flexGrow:1,alignSelf:"flex-end",fontWeight:"bold",color:"#c95228"}},footnote),actionButton)),detailBox);};return EventCard;}(react.Component);

/***/ }),

/***/ 2835:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ 8128:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t,r){var n=t.prototype,s=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return s.bind(this)(e);var n=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return n.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return s.bind(this)(a)}}}));

/***/ }),

/***/ 3693:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,a=function(t,n,i){void 0===i&&(i={});var o=new Date(t);return function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i).formatToParts(o)},u=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10))}var d=r[3],l=24===d?0:d,v=r[0]+"-"+r[1]+"-"+r[2]+" "+l+":"+r[4]+":"+r[5]+":000",h=+e;return(o.utc(v).valueOf()-(h-=h%1e3))/6e4},f=i.prototype;f.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:t}),u=Math.round((i-new Date(a))/1e3/60),f=o(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-u,!0);if(e){var s=f.utcOffset();f=f.add(n-s,"minute")}return f.$x.$timezone=t,f},f.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,t,e).tz(this.$x.$timezone,!0)},o.tz=function(t,e,n){var i=n&&e,a=n||e||r,f=u(+o(),a);if("string"!=typeof t)return o(t).tz(a);var s=function(t,e,n){var i=t-60*e*1e3,o=u(i,n);if(e===o)return[i,e];var r=u(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(o.utc(t,i).valueOf(),f,a),m=s[0],c=s[1],d=o(m).utcOffset(c);return d.$x.$timezone=a,d},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t}}}));

/***/ }),

/***/ 4115:
/***/ (function(module) {

!function(t,i){ true?module.exports=i():0}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&null===(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s)))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

/***/ })

}]);