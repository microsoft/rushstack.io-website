"use strict";
(self["webpackChunkrushstack_io"] = self["webpackChunkrushstack_io"] || []).push([[44411],{

/***/ 13102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ SearchIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);

function SearchIcon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: "20",
    height: "20",
    className: "DocSearch-Search-Icon",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
    stroke: "currentColor",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/***/ }),

/***/ 55645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_IconExternalLink; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(46393);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconExternalLink":"iconExternalLink_EouZ"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconExternalLink=function IconExternalLink(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?13.5:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?13.5:_ref$height;return/*#__PURE__*/react.createElement("svg",{width:width,height:height,"aria-hidden":"true",viewBox:"0 0 24 24",className:styles_module.iconExternalLink},/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}));};/* harmony default export */ var theme_IconExternalLink = (IconExternalLink);

/***/ }),

/***/ 44411:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_Layout; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(46393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4722);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(84083);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(63827);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-common@2.0.0-beta.9_cf03b7458ee8070c9e09362c20b6f0a1/node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(17725);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"skipToContent":"skipToContent_D+4B"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/SkipToContent/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function programmaticFocus(el){el.setAttribute('tabindex','-1');el.focus();el.removeAttribute('tabindex');}function SkipToContent(){var containerRef=(0,react.useRef)(null);var _useHistory=(0,react_router/* useHistory */.k6)(),action=_useHistory.action;var handleSkip=function handleSkip(e){e.preventDefault();var targetElement=document.querySelector('main:first-of-type')||document.querySelector('.main-wrapper');if(targetElement){programmaticFocus(targetElement);}};(0,lib/* useLocationChange */.SL)(function(_ref){var location=_ref.location;if(containerRef.current&&!location.hash&&action==='PUSH'){programmaticFocus(containerRef.current);}});return/*#__PURE__*/react.createElement("div",{ref:containerRef},/*#__PURE__*/react.createElement("a",{href:"#",className:styles_module.skipToContent,onClick:handleSkip},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")));}/* harmony default export */ var theme_SkipToContent = (SkipToContent);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(74834);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(28265);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconClose/index.js
var _excluded=["width","height","color","strokeWidth","className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconClose(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?21:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?21:_ref$height,_ref$color=_ref.color,color=_ref$color===void 0?'currentColor':_ref$color,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=_ref$strokeWidth===void 0?1.2:_ref$strokeWidth,className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({viewBox:"0 0 15 15",width:width,height:height},restProps),/*#__PURE__*/react.createElement("g",{stroke:color,strokeWidth:strokeWidth},/*#__PURE__*/react.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})));}
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var AnnouncementBar_styles_module = ({"announcementBar":"announcementBar_h4Iv","announcementBarPlaceholder":"announcementBarPlaceholder_YVFZ","announcementBarClose":"announcementBarClose_1hCO","announcementBarContent":"announcementBarContent_7mgl"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/AnnouncementBar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function AnnouncementBar(){var _useAnnouncementBar=(0,lib/* useAnnouncementBar */.nT)(),isActive=_useAnnouncementBar.isActive,close=_useAnnouncementBar.close;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),announcementBar=_useThemeConfig.announcementBar;if(!isActive){return null;}var content=announcementBar.content,backgroundColor=announcementBar.backgroundColor,textColor=announcementBar.textColor,isCloseable=announcementBar.isCloseable;return/*#__PURE__*/react.createElement("div",{className:AnnouncementBar_styles_module.announcementBar,style:{backgroundColor:backgroundColor,color:textColor},role:"banner"},isCloseable&&/*#__PURE__*/react.createElement("div",{className:AnnouncementBar_styles_module.announcementBarPlaceholder}),/*#__PURE__*/react.createElement("div",{className:AnnouncementBar_styles_module.announcementBarContent// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:content}}),isCloseable?/*#__PURE__*/react.createElement("button",{type:"button",className:(0,clsx_m/* default */.Z)('clean-btn close',AnnouncementBar_styles_module.announcementBarClose),onClick:close,"aria-label":(0,Translate/* translate */.I)({id:'theme.AnnouncementBar.closeButtonAriaLabel',message:'Close',description:'The ARIA label for close button of announcement bar'})},/*#__PURE__*/react.createElement(IconClose,{width:14,height:14,strokeWidth:3.1})):null);}/* harmony default export */ var theme_AnnouncementBar = (AnnouncementBar);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-search-algolia@2.0.0-beta.9_a9782a83b7daad1a97bf91cabc1c578c/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchBar/index.js + 6 modules
var SearchBar = __webpack_require__(15191);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(74396);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Toggle_styles_module = ({"toggle":"toggle_wTAR","toggleScreenReader":"toggleScreenReader_u7IM","toggleDisabled":"toggleDisabled_3228","toggleTrack":"toggleTrack_-R4Z","toggleTrackCheck":"toggleTrackCheck_BjON","toggleChecked":"toggleChecked_uhcN","toggleTrackX":"toggleTrackX_oFZc","toggleTrackThumb":"toggleTrackThumb_a1hc","toggleFocused":"toggleFocused_g85N","toggleIcon":"toggleIcon_kRWS"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Toggle/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dark=function Dark(_ref){var icon=_ref.icon,style=_ref.style;return/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(Toggle_styles_module.toggleIcon,Toggle_styles_module.dark),style:style},icon);};var Light=function Light(_ref2){var icon=_ref2.icon,style=_ref2.style;return/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(Toggle_styles_module.toggleIcon,Toggle_styles_module.light),style:style},icon);};// Based on react-toggle (https://github.com/aaronshaf/react-toggle/).
var Toggle=/*#__PURE__*/(0,react.memo)(function(_ref3){var _clsx;var className=_ref3.className,icons=_ref3.icons,defaultChecked=_ref3.checked,disabled=_ref3.disabled,onChange=_ref3.onChange;var _useState=(0,react.useState)(defaultChecked),checked=_useState[0],setChecked=_useState[1];var _useState2=(0,react.useState)(false),focused=_useState2[0],setFocused=_useState2[1];var inputRef=(0,react.useRef)(null);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(Toggle_styles_module.toggle,className,(_clsx={},_clsx[Toggle_styles_module.toggleChecked]=checked,_clsx[Toggle_styles_module.toggleFocused]=focused,_clsx[Toggle_styles_module.toggleDisabled]=disabled,_clsx))},/*#__PURE__*/react.createElement("div",{className:Toggle_styles_module.toggleTrack,role:"button",tabIndex:-1,onClick:function onClick(){var _inputRef$current;return(_inputRef$current=inputRef.current)==null?void 0:_inputRef$current.click();}},/*#__PURE__*/react.createElement("div",{className:Toggle_styles_module.toggleTrackCheck},icons.checked),/*#__PURE__*/react.createElement("div",{className:Toggle_styles_module.toggleTrackX},icons.unchecked),/*#__PURE__*/react.createElement("div",{className:Toggle_styles_module.toggleTrackThumb})),/*#__PURE__*/react.createElement("input",{ref:inputRef,checked:checked,type:"checkbox",className:Toggle_styles_module.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:onChange,onClick:function onClick(){return setChecked(!checked);},onFocus:function onFocus(){return setFocused(true);},onBlur:function onBlur(){return setFocused(false);},onKeyDown:function onKeyDown(e){if(e.key==='Enter'){var _inputRef$current2;(_inputRef$current2=inputRef.current)==null?void 0:_inputRef$current2.click();}}}));});/* harmony default export */ function theme_Toggle(props){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),_useThemeConfig$color=_useThemeConfig.colorMode.switchConfig,darkIcon=_useThemeConfig$color.darkIcon,darkIconStyle=_useThemeConfig$color.darkIconStyle,lightIcon=_useThemeConfig$color.lightIcon,lightIconStyle=_useThemeConfig$color.lightIconStyle;var isBrowser=(0,useIsBrowser/* default */.Z)();return/*#__PURE__*/react.createElement(Toggle,(0,esm_extends/* default */.Z)({disabled:!isBrowser,icons:{checked:/*#__PURE__*/react.createElement(Dark,{icon:darkIcon,style:darkIconStyle}),unchecked:/*#__PURE__*/react.createElement(Light,{icon:lightIcon,style:lightIconStyle})}},props));}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(60434);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useHideableNavbar.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var useHideableNavbar=function useHideableNavbar(hideOnScroll){var _useState=(0,react.useState)(hideOnScroll),isNavbarVisible=_useState[0],setIsNavbarVisible=_useState[1];var isFocusedAnchor=(0,react.useRef)(false);var navbarHeight=(0,react.useRef)(0);var navbarRef=(0,react.useCallback)(function(node){if(node!==null){navbarHeight.current=node.getBoundingClientRect().height;}},[]);(0,lib/* useScrollPosition */.RF)(function(currentPosition,lastPosition){if(!hideOnScroll){return;}var scrollTop=currentPosition.scrollY;// It needed for mostly to handle rubber band scrolling
if(scrollTop<navbarHeight.current){setIsNavbarVisible(true);return;}if(isFocusedAnchor.current){isFocusedAnchor.current=false;return;}var lastScrollTop=lastPosition==null?void 0:lastPosition.scrollY;var documentHeight=document.documentElement.scrollHeight-navbarHeight.current;var windowHeight=window.innerHeight;if(lastScrollTop&&scrollTop>=lastScrollTop){setIsNavbarVisible(false);}else if(scrollTop+windowHeight<documentHeight){setIsNavbarVisible(true);}});(0,lib/* useLocationChange */.SL)(function(locationChangeEvent){if(!hideOnScroll){return;}if(locationChangeEvent.location.hash){isFocusedAnchor.current=true;setIsNavbarVisible(false);return;}setIsNavbarVisible(true);});return{navbarRef:navbarRef,isNavbarVisible:isNavbarVisible};};/* harmony default export */ var hooks_useHideableNavbar = (useHideableNavbar);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useLockBodyScroll.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useLockBodyScroll(lock){if(lock===void 0){lock=true;}(0,react.useEffect)(function(){document.body.style.overflow=lock?'hidden':'visible';return function(){document.body.style.overflow='visible';};},[lock]);}/* harmony default export */ var hooks_useLockBodyScroll = (useLockBodyScroll);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(19586);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(91850);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/index.js + 4 modules
var NavbarItem = __webpack_require__(96809);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Logo/index.js
var Logo = __webpack_require__(65582);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconMenu/index.js
var IconMenu_excluded=["width","height","className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconMenu=function IconMenu(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?30:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?30:_ref$height,className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,IconMenu_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({className:className,width:width,height:height,viewBox:"0 0 30 30","aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}));};/* harmony default export */ var theme_IconMenu = (IconMenu);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Navbar_styles_module = ({"toggle":"toggle_dbmH","navbarHideable":"navbarHideable_Z3W3","navbarHidden":"navbarHidden_nI47","navbarSidebarToggle":"navbarSidebarToggle_g9dU"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Navbar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// retrocompatible with v1
var DefaultNavItemPosition='right';function useNavbarItems(){// TODO temporary casting until ThemeConfig type is improved
return (0,lib/* useThemeConfig */.LU)().navbar.items;}// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items){var leftItems=items.filter(function(item){var _item$position;return((_item$position=item.position)!=null?_item$position:DefaultNavItemPosition)==='left';});var rightItems=items.filter(function(item){var _item$position2;return((_item$position2=item.position)!=null?_item$position2:DefaultNavItemPosition)==='right';});return{leftItems:leftItems,rightItems:rightItems};}function useMobileSidebar(){var windowSize=(0,useWindowSize/* default */.Z)();// Mobile sidebar not visible on hydration: can avoid SSR rendering
var shouldRender=windowSize==='mobile';// || windowSize === 'ssr';
var _useState=(0,react.useState)(false),shown=_useState[0],setShown=_useState[1];// Close mobile sidebar on navigation pop
// Most likely firing when using the Android back button (but not only)
(0,lib/* useHistoryPopHandler */.Rb)(function(){if(shown){setShown(false);// Should we prevent the navigation here?
// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
return false;// prevent pop navigation
}return undefined;});var toggle=(0,react.useCallback)(function(){setShown(function(s){return!s;});},[]);(0,react.useEffect)(function(){if(windowSize==='desktop'){setShown(false);}},[windowSize]);return{shouldRender:shouldRender,toggle:toggle,shown:shown};}function useColorModeToggle(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),disableSwitch=_useThemeConfig.colorMode.disableSwitch;var _useThemeContext=(0,useThemeContext/* default */.Z)(),isDarkTheme=_useThemeContext.isDarkTheme,setLightTheme=_useThemeContext.setLightTheme,setDarkTheme=_useThemeContext.setDarkTheme;var toggle=(0,react.useCallback)(function(e){return e.target.checked?setDarkTheme():setLightTheme();},[setLightTheme,setDarkTheme]);return{isDarkTheme:isDarkTheme,toggle:toggle,disabled:disableSwitch};}function useSecondaryMenu(_ref){var _useMobileSecondaryMe;var sidebarShown=_ref.sidebarShown,toggleSidebar=_ref.toggleSidebar;var content=(_useMobileSecondaryMe=(0,lib/* useMobileSecondaryMenuRenderer */.g8)())==null?void 0:_useMobileSecondaryMe({toggleSidebar:toggleSidebar});var previousContent=(0,lib/* usePrevious */.D9)(content);var _useState2=(0,react.useState)(function(){// /!\ content is set with useEffect,
// so it's not available on mount anyway
// "return !!content" => always returns false
return false;}),shown=_useState2[0],setShown=_useState2[1];// When content is become available for the first time (set in useEffect)
// we set this content to be shown!
(0,react.useEffect)(function(){var contentBecameAvailable=content&&!previousContent;if(contentBecameAvailable){setShown(true);}},[content,previousContent]);var hasContent=!!content;// On sidebar close, secondary menu is set to be shown on next re-opening
// (if any secondary menu content available)
(0,react.useEffect)(function(){if(!hasContent){setShown(false);return;}if(!sidebarShown){setShown(true);}},[sidebarShown,hasContent]);var hide=(0,react.useCallback)(function(){setShown(false);},[]);return{shown:shown,hide:hide,content:content};}function NavbarMobileSidebar(_ref2){var sidebarShown=_ref2.sidebarShown,toggleSidebar=_ref2.toggleSidebar;hooks_useLockBodyScroll(sidebarShown);var items=useNavbarItems();var colorModeToggle=useColorModeToggle();var secondaryMenu=useSecondaryMenu({sidebarShown:sidebarShown,toggleSidebar:toggleSidebar});return/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar"},/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__brand"},/*#__PURE__*/react.createElement(Logo/* default */.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!colorModeToggle.disabled&&/*#__PURE__*/react.createElement(theme_Toggle,{className:Navbar_styles_module.navbarSidebarToggle,checked:colorModeToggle.isDarkTheme,onChange:colorModeToggle.toggle}),/*#__PURE__*/react.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:toggleSidebar},/*#__PURE__*/react.createElement(IconClose,{color:"var(--ifm-color-emphasis-600)",className:Navbar_styles_module.navbarSidebarCloseSvg}))),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('navbar-sidebar__items',{'navbar-sidebar__items--show-secondary':secondaryMenu.shown})},/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__item menu"},/*#__PURE__*/react.createElement("ul",{className:"menu__list"},items.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem/* default */.Z,(0,esm_extends/* default */.Z)({mobile:true},item,{onClick:toggleSidebar,key:i}));}))),/*#__PURE__*/react.createElement("div",{className:"navbar-sidebar__item menu"},items.length>0&&/*#__PURE__*/react.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:secondaryMenu.hide},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),secondaryMenu.content)));}function Navbar(){var _clsx;var _useThemeConfig2=(0,lib/* useThemeConfig */.LU)(),_useThemeConfig2$navb=_useThemeConfig2.navbar,hideOnScroll=_useThemeConfig2$navb.hideOnScroll,style=_useThemeConfig2$navb.style;var mobileSidebar=useMobileSidebar();var colorModeToggle=useColorModeToggle();var activeDocPlugin=(0,useDocs/* useActivePlugin */.gA)();var _useHideableNavbar=hooks_useHideableNavbar(hideOnScroll),navbarRef=_useHideableNavbar.navbarRef,isNavbarVisible=_useHideableNavbar.isNavbarVisible;var items=useNavbarItems();var hasSearchNavbarItem=items.some(function(item){return item.type==='search';});var _splitNavItemsByPosit=splitNavItemsByPosition(items),leftItems=_splitNavItemsByPosit.leftItems,rightItems=_splitNavItemsByPosit.rightItems;return/*#__PURE__*/react.createElement("nav",{ref:navbarRef,className:(0,clsx_m/* default */.Z)('navbar','navbar--fixed-top',(_clsx={'navbar--dark':style==='dark','navbar--primary':style==='primary','navbar-sidebar--show':mobileSidebar.shown},_clsx[Navbar_styles_module.navbarHideable]=hideOnScroll,_clsx[Navbar_styles_module.navbarHidden]=hideOnScroll&&!isNavbarVisible,_clsx))},/*#__PURE__*/react.createElement("div",{className:"navbar__inner"},/*#__PURE__*/react.createElement("div",{className:"navbar__items"},((items==null?void 0:items.length)>0||activeDocPlugin)&&/*#__PURE__*/react.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:mobileSidebar.toggle,onKeyDown:mobileSidebar.toggle},/*#__PURE__*/react.createElement(theme_IconMenu,null)),/*#__PURE__*/react.createElement(Logo/* default */.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),leftItems.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem/* default */.Z,(0,esm_extends/* default */.Z)({},item,{key:i}));})),/*#__PURE__*/react.createElement("div",{className:"navbar__items navbar__items--right"},rightItems.map(function(item,i){return/*#__PURE__*/react.createElement(NavbarItem/* default */.Z,(0,esm_extends/* default */.Z)({},item,{key:i}));}),!colorModeToggle.disabled&&/*#__PURE__*/react.createElement(theme_Toggle,{className:Navbar_styles_module.toggle,checked:colorModeToggle.isDarkTheme,onChange:colorModeToggle.toggle}),!hasSearchNavbarItem&&/*#__PURE__*/react.createElement(SearchBar/* default */.Z,null))),/*#__PURE__*/react.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:mobileSidebar.toggle}),mobileSidebar.shouldRender&&/*#__PURE__*/react.createElement(NavbarMobileSidebar,{sidebarShown:mobileSidebar.shown,toggleSidebar:mobileSidebar.toggle}));}/* harmony default export */ var theme_Navbar = (Navbar);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(18112);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86757);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(42409);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Footer_styles_module = ({"footerLogoLink":"footerLogoLink_OGCz"});
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js + 1 modules
var ThemedImage = __webpack_require__(74381);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconExternalLink/index.js + 1 modules
var IconExternalLink = __webpack_require__(55645);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Footer/index.js
var Footer_excluded=["to","href","label","prependBaseUrlToHref"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function FooterLink(_ref){var to=_ref.to,href=_ref.href,label=_ref.label,prependBaseUrlToHref=_ref.prependBaseUrlToHref,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,Footer_excluded);var toUrl=(0,useBaseUrl/* default */.Z)(to);var normalizedHref=(0,useBaseUrl/* default */.Z)(href,{forcePrependBaseUrl:true});return/*#__PURE__*/react.createElement(Link/* default */.Z,(0,esm_extends/* default */.Z)({className:"footer__link-item"},href?{href:prependBaseUrlToHref?normalizedHref:href}:{to:toUrl},props),href&&!(0,isInternalUrl/* default */.Z)(href)?/*#__PURE__*/react.createElement("span",null,label,/*#__PURE__*/react.createElement(IconExternalLink/* default */.Z,null)):label);}var FooterLogo=function FooterLogo(_ref2){var sources=_ref2.sources,alt=_ref2.alt,width=_ref2.width,height=_ref2.height;return/*#__PURE__*/react.createElement(ThemedImage/* default */.Z,{className:"footer__logo",alt:alt,sources:sources,width:width,height:height});};function Footer(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),footer=_useThemeConfig.footer;var _ref3=footer||{},copyright=_ref3.copyright,_ref3$links=_ref3.links,links=_ref3$links===void 0?[]:_ref3$links,_ref3$logo=_ref3.logo,logo=_ref3$logo===void 0?{}:_ref3$logo;var sources={light:(0,useBaseUrl/* default */.Z)(logo.src),dark:(0,useBaseUrl/* default */.Z)(logo.srcDark||logo.src)};if(!footer){return null;}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)('footer',{'footer--dark':footer.style==='dark'})},/*#__PURE__*/react.createElement("div",{className:"container"},links&&links.length>0&&/*#__PURE__*/react.createElement("div",{className:"row footer__links"},links.map(function(linkItem,i){return/*#__PURE__*/react.createElement("div",{key:i,className:"col footer__col"},linkItem.title!=null?/*#__PURE__*/react.createElement("div",{className:"footer__title"},linkItem.title):null,linkItem.items!=null&&Array.isArray(linkItem.items)&&linkItem.items.length>0?/*#__PURE__*/react.createElement("ul",{className:"footer__items"},linkItem.items.map(function(item,key){return item.html?/*#__PURE__*/react.createElement("li",{key:key,className:"footer__item"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:item.html}}):/*#__PURE__*/react.createElement("li",{key:item.href||item.to,className:"footer__item"},/*#__PURE__*/react.createElement(FooterLink,item));})):null);})),(logo||copyright)&&/*#__PURE__*/react.createElement("div",{className:"footer__bottom text--center"},logo&&(logo.src||logo.srcDark)&&/*#__PURE__*/react.createElement("div",{className:"margin-bottom--sm"},logo.href?/*#__PURE__*/react.createElement(Link/* default */.Z,{href:logo.href,className:Footer_styles_module.footerLogoLink},/*#__PURE__*/react.createElement(FooterLogo,{alt:logo.alt,sources:sources,width:logo.width,height:logo.height})):/*#__PURE__*/react.createElement(FooterLogo,{alt:logo.alt,sources:sources})),copyright?/*#__PURE__*/react.createElement("div",{className:"footer__copyright"// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:copyright}}):null)));}/* harmony default export */ var theme_Footer = (Footer);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(29101);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemeStorage=(0,lib/* createStorageSlot */.WA)('theme');var themes={light:'light',dark:'dark'};// Ensure to always return a valid theme even if input is invalid
var coerceToTheme=function coerceToTheme(theme){return theme===themes.dark?themes.dark:themes.light;};var getInitialTheme=function getInitialTheme(defaultMode){if(!ExecutionEnvironment/* default.canUseDOM */.Z.canUseDOM){return coerceToTheme(defaultMode);}return coerceToTheme(document.documentElement.getAttribute('data-theme'));};var storeTheme=function storeTheme(newTheme){(0,lib/* createStorageSlot */.WA)('theme').set(coerceToTheme(newTheme));};var useTheme=function useTheme(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),_useThemeConfig$color=_useThemeConfig.colorMode,defaultMode=_useThemeConfig$color.defaultMode,disableSwitch=_useThemeConfig$color.disableSwitch,respectPrefersColorScheme=_useThemeConfig$color.respectPrefersColorScheme;var _useState=(0,react.useState)(getInitialTheme(defaultMode)),theme=_useState[0],setTheme=_useState[1];var setLightTheme=(0,react.useCallback)(function(){setTheme(themes.light);storeTheme(themes.light);},[]);var setDarkTheme=(0,react.useCallback)(function(){setTheme(themes.dark);storeTheme(themes.dark);},[]);(0,react.useEffect)(function(){document.documentElement.setAttribute('data-theme',coerceToTheme(theme));},[theme]);(0,react.useEffect)(function(){if(disableSwitch){return;}try{var storedTheme=ThemeStorage.get();if(storedTheme!==null){setTheme(coerceToTheme(storedTheme));}}catch(err){console.error(err);}},[disableSwitch,setTheme]);(0,react.useEffect)(function(){if(disableSwitch&&!respectPrefersColorScheme){return;}window.matchMedia('(prefers-color-scheme: dark)').addListener(function(_ref){var matches=_ref.matches;setTheme(matches?themes.dark:themes.light);});},[disableSwitch,respectPrefersColorScheme]);return{isDarkTheme:theme===themes.dark,setLightTheme:setLightTheme,setDarkTheme:setDarkTheme};};/* harmony default export */ var hooks_useTheme = (useTheme);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeContext.js
var ThemeContext = __webpack_require__(96115);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/ThemeProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ThemeProvider(props){var _useTheme=hooks_useTheme(),isDarkTheme=_useTheme.isDarkTheme,setLightTheme=_useTheme.setLightTheme,setDarkTheme=_useTheme.setDarkTheme;return/*#__PURE__*/react.createElement(ThemeContext/* default.Provider */.Z.Provider,{value:{isDarkTheme:isDarkTheme,setLightTheme:setLightTheme,setDarkTheme:setDarkTheme}},props.children);}/* harmony default export */ var theme_ThemeProvider = (ThemeProvider);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useTabGroupChoice.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TAB_CHOICE_PREFIX='docusaurus.tab.';var useTabGroupChoice=function useTabGroupChoice(){var _useState=(0,react.useState)({}),tabGroupChoices=_useState[0],setChoices=_useState[1];var setChoiceSyncWithLocalStorage=(0,react.useCallback)(function(groupId,newChoice){(0,lib/* createStorageSlot */.WA)(""+TAB_CHOICE_PREFIX+groupId).set(newChoice);},[]);(0,react.useEffect)(function(){try{var localStorageChoices={};(0,lib/* listStorageKeys */._f)().forEach(function(storageKey){if(storageKey.startsWith(TAB_CHOICE_PREFIX)){var groupId=storageKey.substring(TAB_CHOICE_PREFIX.length);localStorageChoices[groupId]=(0,lib/* createStorageSlot */.WA)(storageKey).get();}});setChoices(localStorageChoices);}catch(err){console.error(err);}},[]);return{tabGroupChoices:tabGroupChoices,setTabGroupChoices:function setTabGroupChoices(groupId,newChoice){setChoices(function(oldChoices){var _Object$assign;return Object.assign({},oldChoices,(_Object$assign={},_Object$assign[groupId]=newChoice,_Object$assign));});setChoiceSyncWithLocalStorage(groupId,newChoice);}};};/* harmony default export */ var hooks_useTabGroupChoice = (useTabGroupChoice);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesContext.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UserPreferencesContext=/*#__PURE__*/(0,react.createContext)(undefined);/* harmony default export */ var theme_UserPreferencesContext = (UserPreferencesContext);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/UserPreferencesProvider/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UserPreferencesProvider(props){var _useTabGroupChoice=hooks_useTabGroupChoice(),tabGroupChoices=_useTabGroupChoice.tabGroupChoices,setTabGroupChoices=_useTabGroupChoice.setTabGroupChoices;return/*#__PURE__*/react.createElement(theme_UserPreferencesContext.Provider,{value:{tabGroupChoices:tabGroupChoices,setTabGroupChoices:setTabGroupChoices}},props.children);}/* harmony default export */ var theme_UserPreferencesProvider = (UserPreferencesProvider);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutProviders/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LayoutProviders(_ref){var children=_ref.children;return/*#__PURE__*/react.createElement(theme_ThemeProvider,null,/*#__PURE__*/react.createElement(lib/* AnnouncementBarProvider */.pl,null,/*#__PURE__*/react.createElement(theme_UserPreferencesProvider,null,/*#__PURE__*/react.createElement(lib/* ScrollControllerProvider */.OC,null,/*#__PURE__*/react.createElement(lib/* DocsPreferredVersionContextProvider */.L5,null,/*#__PURE__*/react.createElement(lib/* MobileSecondaryMenuProvider */.Cn,null,children))))));}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(5293);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(7977);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-search-algolia@2.0.0-beta.9_a9782a83b7daad1a97bf91cabc1c578c/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchMetadatas/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Override default/agnostic SearchMetas to use Algolia-specific metadatas
function AlgoliaSearchMetadatas(_ref){var locale=_ref.locale,version=_ref.version,tag=_ref.tag;// Seems safe to consider here the locale is the language,
// as the existing docsearch:language filter is afaik a regular string-based filter
var language=locale;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,language&&/*#__PURE__*/react.createElement("meta",{name:"docsearch:language",content:language}),version&&/*#__PURE__*/react.createElement("meta",{name:"docsearch:version",content:version}),tag&&/*#__PURE__*/react.createElement("meta",{name:"docsearch:docusaurus_tag",content:tag}));}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(88025);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/LayoutHead/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Useful for SEO
// See https://developers.google.com/search/docs/advanced/crawling/localized-versions
// See https://github.com/facebook/docusaurus/issues/3317
function AlternateLangHeaders(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,defaultLocale=_useDocusaurusContext2.defaultLocale,locales=_useDocusaurusContext2.locales;var alternatePageUtils=(0,lib/* useAlternatePageUtils */.l5)();// Note: it is fine to use both "x-default" and "en" to target the same url
// See https://www.searchviu.com/en/multiple-hreflang-tags-one-url/
return/*#__PURE__*/react.createElement(Head/* default */.Z,null,locales.map(function(locale){return/*#__PURE__*/react.createElement("link",{key:locale,rel:"alternate",href:alternatePageUtils.createUrl({locale:locale,fullyQualified:true}),hrefLang:locale});}),/*#__PURE__*/react.createElement("link",{rel:"alternate",href:alternatePageUtils.createUrl({locale:defaultLocale,fullyQualified:true}),hrefLang:"x-default"}));}// Default canonical url inferred from current page location pathname
function useDefaultCanonicalUrl(){var _useDocusaurusContext3=(0,useDocusaurusContext/* default */.Z)(),siteUrl=_useDocusaurusContext3.siteConfig.url;var _useLocation=(0,react_router/* useLocation */.TH)(),pathname=_useLocation.pathname;return siteUrl+(0,useBaseUrl/* default */.Z)(pathname);}function CanonicalUrlHeaders(_ref){var permalink=_ref.permalink;var _useDocusaurusContext4=(0,useDocusaurusContext/* default */.Z)(),siteUrl=_useDocusaurusContext4.siteConfig.url;var defaultCanonicalUrl=useDefaultCanonicalUrl();var canonicalUrl=permalink?""+siteUrl+permalink:defaultCanonicalUrl;return/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{property:"og:url",content:canonicalUrl}),/*#__PURE__*/react.createElement("link",{rel:"canonical",href:canonicalUrl}));}function LayoutHead(props){var _useDocusaurusContext5=(0,useDocusaurusContext/* default */.Z)(),favicon=_useDocusaurusContext5.siteConfig.favicon,_useDocusaurusContext6=_useDocusaurusContext5.i18n,currentLocale=_useDocusaurusContext6.currentLocale,localeConfigs=_useDocusaurusContext6.localeConfigs;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),metadatas=_useThemeConfig.metadatas,defaultImage=_useThemeConfig.image;var title=props.title,description=props.description,image=props.image,keywords=props.keywords,searchMetadatas=props.searchMetadatas;var faviconUrl=(0,useBaseUrl/* default */.Z)(favicon);var pageTitle=(0,lib/* useTitleFormatter */.pe)(title);// See https://github.com/facebook/docusaurus/issues/3317#issuecomment-754661855
// const htmlLang = currentLocale.split('-')[0];
var htmlLang=currentLocale;// should we allow the user to override htmlLang with localeConfig?
var htmlDir=localeConfigs[currentLocale].direction;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("html",{lang:htmlLang,dir:htmlDir}),favicon&&/*#__PURE__*/react.createElement("link",{rel:"shortcut icon",href:faviconUrl}),/*#__PURE__*/react.createElement("title",null,pageTitle),/*#__PURE__*/react.createElement("meta",{property:"og:title",content:pageTitle}),/*#__PURE__*/react.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),defaultImage&&/*#__PURE__*/react.createElement(Seo/* default */.Z,{image:defaultImage}),image&&/*#__PURE__*/react.createElement(Seo/* default */.Z,{image:image}),/*#__PURE__*/react.createElement(Seo/* default */.Z,{description:description,keywords:keywords}),/*#__PURE__*/react.createElement(CanonicalUrlHeaders,null),/*#__PURE__*/react.createElement(AlternateLangHeaders,null),/*#__PURE__*/react.createElement(AlgoliaSearchMetadatas,(0,esm_extends/* default */.Z)({tag:lib/* DEFAULT_SEARCH_TAG */.HX,locale:currentLocale},searchMetadatas)),/*#__PURE__*/react.createElement(Head/* default */.Z// it's important to have an additional <Head> element here,
// as it allows react-helmet to override values set in previous <Head>
// ie we can override default metadatas such as "twitter:card"
// In same Head, the same meta would appear twice instead of overriding
// See react-helmet doc
,null,metadatas.map(function(metadata,i){return/*#__PURE__*/react.createElement("meta",(0,esm_extends/* default */.Z)({key:"metadata_"+i},metadata));})));}
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useKeyboardNavigation.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// This hook detect keyboard focus indicator to not show outline for mouse users
// Inspired by https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
function useKeyboardNavigation(){(0,react.useEffect)(function(){var keyboardFocusedClassName='navigation-with-keyboard';function handleOutlineStyles(e){if(e.type==='keydown'&&e.key==='Tab'){document.body.classList.add(keyboardFocusedClassName);}if(e.type==='mousedown'){document.body.classList.remove(keyboardFocusedClassName);}}document.addEventListener('keydown',handleOutlineStyles);document.addEventListener('mousedown',handleOutlineStyles);return function(){document.body.classList.remove(keyboardFocusedClassName);document.removeEventListener('keydown',handleOutlineStyles);document.removeEventListener('mousedown',handleOutlineStyles);};},[]);}/* harmony default export */ var hooks_useKeyboardNavigation = (useKeyboardNavigation);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Layout(props){var children=props.children,noFooter=props.noFooter,wrapperClassName=props.wrapperClassName,pageClassName=props.pageClassName;hooks_useKeyboardNavigation();return/*#__PURE__*/react.createElement(LayoutProviders,null,/*#__PURE__*/react.createElement(LayoutHead,props),/*#__PURE__*/react.createElement(theme_SkipToContent,null),/*#__PURE__*/react.createElement(theme_AnnouncementBar,null),/*#__PURE__*/react.createElement(theme_Navbar,null),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.wrapper.main */.kM.wrapper.main,wrapperClassName,pageClassName)},children),!noFooter&&/*#__PURE__*/react.createElement(theme_Footer,null));}/* harmony default export */ var theme_Layout = (Layout);

/***/ }),

/***/ 65582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18112);
/* harmony import */ var _theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74381);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86757);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7977);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17725);
var _excluded=["imageClassName","titleClassName"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Logo=function Logo(props){var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(),title=_useDocusaurusContext.siteConfig.title;var _useThemeConfig=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .useThemeConfig */ .LU)(),_useThemeConfig$navba=_useThemeConfig.navbar,navbarTitle=_useThemeConfig$navba.title,_useThemeConfig$navba2=_useThemeConfig$navba.logo,logo=_useThemeConfig$navba2===void 0?{src:''}:_useThemeConfig$navba2;var imageClassName=props.imageClassName,titleClassName=props.titleClassName,propsRest=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(props,_excluded);var logoLink=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(logo.href||'/');var sources={light:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(logo.src),dark:(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(logo.srcDark||logo.src)};var themedImage=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_ThemedImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{sources:sources,height:logo.height,width:logo.width,alt:logo.alt||navbarTitle||title});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({to:logoLink},propsRest,logo.target&&{target:logo.target}),logo.src&&(imageClassName?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:imageClassName},themedImage):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,themedImage)),navbarTitle!=null&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",{className:titleClassName},navbarTitle));};/* harmony default export */ __webpack_exports__["Z"] = (Logo);

/***/ }),

/***/ 83571:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": function() { return /* binding */ NavLink; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4722);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18112);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86757);
/* harmony import */ var _theme_IconExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55645);
/* harmony import */ var _docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42409);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17725);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96809);
var _excluded=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],_excluded2=["className","isDropdownItem"],_excluded3=["className","isDropdownItem"],_excluded4=["mobile","position"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dropdownLinkActiveClass='dropdown__link--active';function NavLink(_ref){var _props$className;var activeBasePath=_ref.activeBasePath,activeBaseRegex=_ref.activeBaseRegex,to=_ref.to,href=_ref.href,label=_ref.label,_ref$activeClassName=_ref.activeClassName,activeClassName=_ref$activeClassName===void 0?'':_ref$activeClassName,prependBaseUrlToHref=_ref.prependBaseUrlToHref,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref,_excluded);// TODO all this seems hacky
// {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
var toUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(to);var activeBaseUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(activeBasePath);var normalizedHref=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(href,{forcePrependBaseUrl:true});var isExternalLink=label&&href&&!(0,_docusaurus_isInternalUrl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(href);var isDropdownLink=activeClassName===dropdownLinkActiveClass;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({},href?{href:prependBaseUrlToHref?normalizedHref:href}:Object.assign({isNavLink:true,activeClassName:!((_props$className=props.className)!=null&&_props$className.includes(activeClassName))?activeClassName:'',to:toUrl},activeBasePath||activeBaseRegex?{isActive:function isActive(_match,location){return activeBaseRegex?(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .isRegexpStringMatch */ .Fx)(activeBaseRegex,location.pathname):location.pathname.startsWith(activeBaseUrl);}}:null),props),isExternalLink?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,label,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_IconExternalLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,isDropdownLink&&{width:12,height:12})):label);}function DefaultNavbarItemDesktop(_ref2){var className=_ref2.className,_ref2$isDropdownItem=_ref2.isDropdownItem,isDropdownItem=_ref2$isDropdownItem===void 0?false:_ref2$isDropdownItem,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref2,_excluded2);var element=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(isDropdownItem?'dropdown__link':'navbar__item navbar__link',className)},props));if(isDropdownItem){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,element);}return element;}function DefaultNavbarItemMobile(_ref3){var className=_ref3.className,_isDropdownItem=_ref3.isDropdownItem,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref3,_excluded3);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:"menu__list-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavLink,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)('menu__link',className)},props)));}function DefaultNavbarItem(_ref4){var _props$activeClassNam;var _ref4$mobile=_ref4.mobile,mobile=_ref4$mobile===void 0?false:_ref4$mobile,_position=_ref4.position,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref4,_excluded4);var Comp=mobile?DefaultNavbarItemMobile:DefaultNavbarItemDesktop;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({},props,{activeClassName:(_props$activeClassNam=props.activeClassName)!=null?_props$activeClassNam:(0,_index__WEBPACK_IMPORTED_MODULE_5__/* .getInfimaActiveClassName */ .E)(mobile)}));}/* harmony default export */ __webpack_exports__["Z"] = (DefaultNavbarItem);

/***/ }),

/***/ 37485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocNavbarItem; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83571);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91850);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4722);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96809);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17725);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79725);
/* harmony import */ var _docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__);
var _excluded=["docId","label","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function getDocInVersions(versions,docId){var allDocs=versions.flatMap(function(version){return version.docs;});var doc=allDocs.find(function(versionDoc){return versionDoc.id===docId;});if(!doc){var docIds=allDocs.map(function(versionDoc){return versionDoc.id;}).join('\n- ');throw new Error("DocNavbarItem: couldn't find any doc with id \""+docId+"\" in version"+(versions.length?'s':'')+" "+versions.map(function(version){return version.name;}).join(', ')+"\".\nAvailable doc ids are:\n- "+docIds);}return doc;}function DocNavbarItem(_ref){var _clsx;var docId=_ref.docId,staticLabel=_ref.label,docsPluginId=_ref.docsPluginId,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref,_excluded);var _useActiveDocContext=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useActiveDocContext */ .Iw)(docsPluginId),activeVersion=_useActiveDocContext.activeVersion,activeDoc=_useActiveDocContext.activeDoc;var _useDocsPreferredVers=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useDocsPreferredVersion */ .J)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion;var latestVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useLatestVersion */ .yW)(docsPluginId);// Versions used to look for the doc to link to, ordered + no duplicate
var versions=(0,_docusaurus_utils_common__WEBPACK_IMPORTED_MODULE_5__.uniq)([activeVersion,preferredVersion,latestVersion].filter(Boolean));var doc=getDocInVersions(versions,docId);var activeDocInfimaClassName=(0,_index__WEBPACK_IMPORTED_MODULE_3__/* .getInfimaActiveClassName */ .E)(props.mobile);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({exact:true},props,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(props.className,(_clsx={},_clsx[activeDocInfimaClassName]=(activeDoc==null?void 0:activeDoc.sidebar)&&activeDoc.sidebar===doc.sidebar,_clsx)),activeClassName:activeDocInfimaClassName,label:staticLabel!=null?staticLabel:doc.id,to:doc.path}));}

/***/ }),

/***/ 63701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocsVersionDropdownNavbarItem; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83571);
/* harmony import */ var _theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79146);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91850);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17725);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63827);
var _excluded=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocsVersionDropdownNavbarItem(_ref){var _ref2,_activeDocContext$act;var mobile=_ref.mobile,docsPluginId=_ref.docsPluginId,dropdownActiveClassDisabled=_ref.dropdownActiveClassDisabled,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_ref,_excluded);var activeDocContext=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__/* .useActiveDocContext */ .Iw)(docsPluginId);var versions=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__/* .useVersions */ .gB)(docsPluginId);var latestVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_3__/* .useLatestVersion */ .yW)(docsPluginId);var _useDocsPreferredVers=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useDocsPreferredVersion */ .J)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion,savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;function getItems(){var versionLinks=versions.map(function(version){// We try to link to the same doc, in another version
// When not possible, fallback to the "main doc" of the version
var versionDoc=(activeDocContext==null?void 0:activeDocContext.alternateDocVersions[version.name])||getVersionMainDoc(version);return{isNavLink:true,label:version.label,to:versionDoc.path,isActive:function isActive(){return version===(activeDocContext==null?void 0:activeDocContext.activeVersion);},onClick:function onClick(){savePreferredVersionName(version.name);}};});return[].concat(dropdownItemsBefore,versionLinks,dropdownItemsAfter);}var items=getItems();var dropdownVersion=(_ref2=(_activeDocContext$act=activeDocContext.activeVersion)!=null?_activeDocContext$act:preferredVersion)!=null?_ref2:latestVersion;// Mobile dropdown is handled a bit differently
var dropdownLabel=mobile&&items?(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_5__/* .translate */ .I)({id:'theme.navbar.mobileVersionsDropdown.label',message:'Versions',description:'The label for the navbar versions dropdown on mobile view'}):dropdownVersion.label;var dropdownTo=mobile&&items?undefined:getVersionMainDoc(dropdownVersion).path;// We don't want to render a version dropdown with 0 or 1 item
// If we build the site with a single docs version (onlyIncludeVersions: ['1.0.0'])
// We'd rather render a button instead of a dropdown
if(items.length<=1){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,isActive:dropdownActiveClassDisabled?function(){return false;}:undefined}));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DropdownNavbarItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({},props,{mobile:mobile,label:dropdownLabel,to:dropdownTo,items:items,isActive:dropdownActiveClassDisabled?function(){return false;}:undefined}));}

/***/ }),

/***/ 22292:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DocsVersionNavbarItem; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83571);
/* harmony import */ var _theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91850);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17725);
var _excluded=["label","to","docsPluginId"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};function DocsVersionNavbarItem(_ref){var _ref2;var staticLabel=_ref.label,staticTo=_ref.to,docsPluginId=_ref.docsPluginId,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref,_excluded);var activeVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useActiveVersion */ .zu)(docsPluginId);var _useDocsPreferredVers=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useDocsPreferredVersion */ .J)(docsPluginId),preferredVersion=_useDocsPreferredVers.preferredVersion;var latestVersion=(0,_theme_hooks_useDocs__WEBPACK_IMPORTED_MODULE_2__/* .useLatestVersion */ .yW)(docsPluginId);var version=(_ref2=activeVersion!=null?activeVersion:preferredVersion)!=null?_ref2:latestVersion;var label=staticLabel!=null?staticLabel:version.label;var path=staticTo!=null?staticTo:getVersionMainDoc(version).path;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({},props,{label:label,to:path}));}

/***/ }),

/***/ 79146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4722);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17725);
/* harmony import */ var _theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83571);
/* harmony import */ var _theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96809);
var _excluded=["items","position","className"],_excluded2=["items","className","position"],_excluded3=["mobile"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dropdownLinkActiveClass='dropdown__link--active';function isItemActive(item,localPathname){if((0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .isSamePath */ .Mg)(item.to,localPathname)){return true;}if((0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .isRegexpStringMatch */ .Fx)(item.activeBaseRegex,localPathname)){return true;}if(item.activeBasePath&&localPathname.startsWith(item.activeBasePath)){return true;}return false;}function containsActiveItems(items,localPathname){return items.some(function(item){return isItemActive(item,localPathname);});}function DropdownNavbarItemDesktop(_ref){var _props$children;var items=_ref.items,position=_ref.position,className=_ref.className,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref,_excluded);var dropdownRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var dropdownMenuRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),showDropdown=_useState[0],setShowDropdown=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleClickOutside=function handleClickOutside(event){if(!dropdownRef.current||dropdownRef.current.contains(event.target)){return;}setShowDropdown(false);};document.addEventListener('mousedown',handleClickOutside);document.addEventListener('touchstart',handleClickOutside);return function(){document.removeEventListener('mousedown',handleClickOutside);document.removeEventListener('touchstart',handleClickOutside);};},[dropdownRef]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:dropdownRef,className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('navbar__item','dropdown','dropdown--hoverable',{'dropdown--right':position==='right','dropdown--show':showDropdown})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__/* .NavLink */ .O,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('navbar__link',className)},props,{onClick:props.to?undefined:function(e){return e.preventDefault();},onKeyDown:function onKeyDown(e){if(e.key==='Enter'){e.preventDefault();setShowDropdown(!showDropdown);}}}),(_props$children=props.children)!=null?_props$children:props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{ref:dropdownMenuRef,className:"dropdown__menu"},items.map(function(childItemProps,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({isDropdownItem:true,onKeyDown:function onKeyDown(e){if(i===items.length-1&&e.key==='Tab'){e.preventDefault();setShowDropdown(false);var nextNavbarItem=dropdownRef.current.nextElementSibling;if(nextNavbarItem){nextNavbarItem.focus();}}},activeClassName:dropdownLinkActiveClass},childItemProps,{key:i}));})));}function DropdownNavbarItemMobile(_ref2){var _props$children2;var items=_ref2.items,className=_ref2.className,_position=_ref2.position,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref2,_excluded2);var localPathname=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useLocalPathname */ .be)();var containsActive=containsActiveItems(items,localPathname);var _useCollapsible=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useCollapsible */ .uR)({initialState:function initialState(){return!containsActive;}}),collapsed=_useCollapsible.collapsed,toggleCollapsed=_useCollapsible.toggleCollapsed,setCollapsed=_useCollapsible.setCollapsed;// Expand/collapse if any item active after a navigation
(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(containsActive){setCollapsed(!containsActive);}},[localPathname,containsActive,setCollapsed]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('menu__list-item',{'menu__list-item--collapsed':collapsed})},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem_DefaultNavbarItem__WEBPACK_IMPORTED_MODULE_2__/* .NavLink */ .O,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({role:"button",className:(0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('menu__link menu__link--sublist',className)},props,{onClick:function onClick(e){e.preventDefault();toggleCollapsed();}}),(_props$children2=props.children)!=null?_props$children2:props.label),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .Collapsible */ .zF,{lazy:true,as:"ul",className:"menu__list",collapsed:collapsed},items.map(function(childItemProps,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_NavbarItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({mobile:true,isDropdownItem:true,onClick:props.onClick,activeClassName:"menu__link--active"},childItemProps,{key:i}));})));}function DropdownNavbarItem(_ref3){var _ref3$mobile=_ref3.mobile,mobile=_ref3$mobile===void 0?false:_ref3$mobile,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(_ref3,_excluded3);var Comp=mobile?DropdownNavbarItemMobile:DropdownNavbarItemDesktop;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,props);}/* harmony default export */ __webpack_exports__["Z"] = (DropdownNavbarItem);

/***/ }),

/***/ 96809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ NavbarItem; },
  "E": function() { return /* binding */ getInfimaActiveClassName; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(28265);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(46393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/DefaultNavbarItem.js
var DefaultNavbarItem = __webpack_require__(83571);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/DropdownNavbarItem.js
var DropdownNavbarItem = __webpack_require__(79146);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(74834);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconLanguage/index.js
var _excluded=["width","height"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconLanguage=function IconLanguage(_ref){var _ref$width=_ref.width,width=_ref$width===void 0?20:_ref$width,_ref$height=_ref.height,height=_ref$height===void 0?20:_ref$height,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({viewBox:"0 0 20 20",width:width,height:height,"aria-hidden":"true"},props),/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}));};/* harmony default export */ var theme_IconLanguage = (IconLanguage);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(7977);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-common@2.0.0-beta.9_cf03b7458ee8070c9e09362c20b6f0a1/node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(17725);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/LocaleDropdownNavbarItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconLanguage":"iconLanguage_448i"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/LocaleDropdownNavbarItem/index.js
var LocaleDropdownNavbarItem_excluded=["mobile","dropdownItemsBefore","dropdownItemsAfter"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LocaleDropdownNavbarItem(_ref){var mobile=_ref.mobile,dropdownItemsBefore=_ref.dropdownItemsBefore,dropdownItemsAfter=_ref.dropdownItemsAfter,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,LocaleDropdownNavbarItem_excluded);var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),_useDocusaurusContext2=_useDocusaurusContext.i18n,currentLocale=_useDocusaurusContext2.currentLocale,locales=_useDocusaurusContext2.locales,localeConfigs=_useDocusaurusContext2.localeConfigs;var alternatePageUtils=(0,lib/* useAlternatePageUtils */.l5)();function getLocaleLabel(locale){return localeConfigs[locale].label;}var localeItems=locales.map(function(locale){var to="pathname://"+alternatePageUtils.createUrl({locale:locale,fullyQualified:false});return{isNavLink:true,label:getLocaleLabel(locale),to:to,target:'_self',autoAddBaseUrl:false,className:locale===currentLocale?'dropdown__link--active':'',style:{textTransform:'capitalize'}};});var items=[].concat(dropdownItemsBefore,localeItems,dropdownItemsAfter);// Mobile is handled a bit differently
var dropdownLabel=mobile?'Languages':getLocaleLabel(currentLocale);return/*#__PURE__*/react.createElement(DropdownNavbarItem/* default */.Z,(0,esm_extends/* default */.Z)({},props,{href:"#",mobile:mobile,label:/*#__PURE__*/react.createElement("span",null,/*#__PURE__*/react.createElement(theme_IconLanguage,{className:styles_module.iconLanguage}),/*#__PURE__*/react.createElement("span",null,dropdownLabel)),items:items}));}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-search-algolia@2.0.0-beta.9_a9782a83b7daad1a97bf91cabc1c578c/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchBar/index.js + 6 modules
var SearchBar = __webpack_require__(15191);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/SearchNavbarItem.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function SearchNavbarItem(_ref){var mobile=_ref.mobile;if(mobile){return null;}return/*#__PURE__*/react.createElement(SearchBar/* default */.Z,null);}
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/NavbarItem/index.js
var NavbarItem_excluded=["type"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NavbarItemComponents={default:function _default(){return DefaultNavbarItem/* default */.Z;},localeDropdown:function localeDropdown(){return LocaleDropdownNavbarItem;},search:function search(){return SearchNavbarItem;},dropdown:function dropdown(){return DropdownNavbarItem/* default */.Z;},// Need to lazy load these items as we don't know for sure the docs plugin is loaded
// See https://github.com/facebook/docusaurus/issues/3360
/* eslint-disable @typescript-eslint/no-var-requires, global-require */docsVersion:function docsVersion(){return (__webpack_require__(22292)/* ["default"] */ .Z);},docsVersionDropdown:function docsVersionDropdown(){return (__webpack_require__(63701)/* ["default"] */ .Z);},doc:function doc(){return (__webpack_require__(37485)/* ["default"] */ .Z);}/* eslint-enable @typescript-eslint/no-var-requires, global-require */};var getNavbarItemComponent=function getNavbarItemComponent(type){var navbarItemComponentFn=NavbarItemComponents[type];if(!navbarItemComponentFn){throw new Error("No NavbarItem component found for type \""+type+"\".");}return navbarItemComponentFn();};function getComponentType(type,isDropdown){// Backward compatibility: navbar item with no type set
// but containing dropdown items should use the type "dropdown"
if(!type||type==='default'){return isDropdown?'dropdown':'default';}return type;}var getInfimaActiveClassName=function getInfimaActiveClassName(mobile){return mobile?'menu__link--active':'navbar__link--active';};function NavbarItem(_ref){var type=_ref.type,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,NavbarItem_excluded);var componentType=getComponentType(type,props.items!==undefined);var NavbarItemComponent=getNavbarItemComponent(componentType);return/*#__PURE__*/react.createElement(NavbarItemComponent,props);}

/***/ }),

/***/ 96115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemeContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);/* harmony default export */ __webpack_exports__["Z"] = (ThemeContext);

/***/ }),

/***/ 74381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_ThemedImage; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(74834);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(28265);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(46393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4722);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(74396);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(60434);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"themedImage":"themedImage_ouTn","themedImage--light":"themedImage--light_zKjh","themedImage--dark":"themedImage--dark_bAn0"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/ThemedImage/index.js
var _excluded=["sources","className","alt"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ThemedImage=function ThemedImage(props){var isBrowser=(0,useIsBrowser/* default */.Z)();var _useThemeContext=(0,useThemeContext/* default */.Z)(),isDarkTheme=_useThemeContext.isDarkTheme;var sources=props.sources,className=props.className,_props$alt=props.alt,alt=_props$alt===void 0?'':_props$alt,propsRest=(0,objectWithoutPropertiesLoose/* default */.Z)(props,_excluded);var clientThemes=isDarkTheme?['dark']:['light'];var renderedSourceNames=isBrowser?clientThemes// We need to render both images on the server to avoid flash
:// See https://github.com/facebook/docusaurus/pull/3730
['light','dark'];return/*#__PURE__*/react.createElement(react.Fragment,null,renderedSourceNames.map(function(sourceName){return/*#__PURE__*/react.createElement("img",(0,esm_extends/* default */.Z)({key:sourceName,src:sources[sourceName],alt:alt,className:(0,clsx_m/* default */.Z)(styles_module.themedImage,styles_module["themedImage--"+sourceName],className)},propsRest));}));};/* harmony default export */ var theme_ThemedImage = (ThemedImage);

/***/ }),

/***/ 60434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96115);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeContext(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);if(context==null){throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');}return context;}/* harmony default export */ __webpack_exports__["Z"] = (useThemeContext);

/***/ }),

/***/ 15191:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_SearchBar; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(74834);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(28265);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(46393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js
var react_dom = __webpack_require__(5104);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(7977);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(84083);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(86757);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(18112);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(5293);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-search-algolia@2.0.0-beta.9_a9782a83b7daad1a97bf91cabc1c578c/node_modules/@docusaurus/theme-search-algolia/src/theme/hooks/useSearchQuery.js
var useSearchQuery = __webpack_require__(2247);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-common@2.0.0-beta.9_cf03b7458ee8070c9e09362c20b6f0a1/node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(17725);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docsearch+react@3.0.0-alpha.41_5539cae010396b202b015f3568914e95/node_modules/@docsearch/react/dist/esm/useDocSearchKeyboardEvents.js


function isEditingContent(event) {
  var element = event.target;
  var tagName = element.tagName;
  return element.isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA';
}

function useDocSearchKeyboardEvents(_ref) {
  var isOpen = _ref.isOpen,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onInput = _ref.onInput,
      searchButtonRef = _ref.searchButtonRef;
  react.useEffect(function () {
    function onKeyDown(event) {
      function open() {
        // We check that no other DocSearch modal is showing before opening
        // another one.
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen();
        }
      }

      if (event.keyCode === 27 && isOpen || event.key === 'k' && (event.metaKey || event.ctrlKey) || !isEditingContent(event) && event.key === '/' && !isOpen) {
        event.preventDefault();

        if (isOpen) {
          onClose();
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open();
        }
      }

      if (searchButtonRef && searchButtonRef.current === document.activeElement && onInput) {
        if (/[a-zA-Z0-9]/.test(String.fromCharCode(event.keyCode))) {
          onInput(event);
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onOpen, onClose, onInput, searchButtonRef]);
}
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docsearch+react@3.0.0-alpha.41_5539cae010396b202b015f3568914e95/node_modules/@docsearch/react/dist/esm/icons/ControlKeyIcon.js

function ControlKeyIcon() {
  return /*#__PURE__*/react.createElement("svg", {
    width: "15",
    height: "15",
    className: "DocSearch-Control-Key-Icon"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
    strokeWidth: "1.2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "square"
  }));
}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docsearch+react@3.0.0-alpha.41_5539cae010396b202b015f3568914e95/node_modules/@docsearch/react/dist/esm/icons/SearchIcon.js
var SearchIcon = __webpack_require__(13102);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docsearch+react@3.0.0-alpha.41_5539cae010396b202b015f3568914e95/node_modules/@docsearch/react/dist/esm/DocSearchButton.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ACTION_KEY_DEFAULT = 'Ctrl';
var ACTION_KEY_APPLE = '⌘';

function isAppleDevice() {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

var DocSearchButton = react.forwardRef(function (_ref, ref) {
  var _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? {} : _ref$translations,
      props = _objectWithoutProperties(_ref, ["translations"]);

  var _translations$buttonT = translations.buttonText,
      buttonText = _translations$buttonT === void 0 ? 'Search' : _translations$buttonT,
      _translations$buttonA = translations.buttonAriaLabel,
      buttonAriaLabel = _translations$buttonA === void 0 ? 'Search' : _translations$buttonA;
  var key = (0,react.useMemo)(function () {
    if (typeof navigator !== 'undefined') {
      return isAppleDevice() ? ACTION_KEY_APPLE : ACTION_KEY_DEFAULT;
    }

    return null;
  }, []);
  return /*#__PURE__*/react.createElement("button", _extends({
    type: "button",
    className: "DocSearch DocSearch-Button",
    "aria-label": buttonAriaLabel
  }, props, {
    ref: ref
  }), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Button-Container"
  }, /*#__PURE__*/react.createElement(SearchIcon/* SearchIcon */.W, null), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Button-Placeholder"
  }, buttonText)), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Button-Keys"
  }, key !== null && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Button-Key"
  }, key === ACTION_KEY_DEFAULT ? /*#__PURE__*/react.createElement(ControlKeyIcon, null) : key), /*#__PURE__*/react.createElement("span", {
    className: "DocSearch-Button-Key"
  }, "K"))));
});
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(91850);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useContextualSearchFilters.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We may want to support multiple search engines, don't couple that to Algolia/DocSearch
// Maybe users will want to use its own search engine solution
function useContextualSearchFilters(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),i18n=_useDocusaurusContext.i18n;var allDocsData=(0,useDocs/* useAllDocsData */._r)();var activePluginAndVersion=(0,useDocs/* useActivePluginAndVersion */.WS)();var docsPreferredVersionByPluginId=(0,lib/* useDocsPreferredVersionByPluginId */.Oh)();function getDocPluginTags(pluginId){var _activePluginAndVersi,_ref;var activeVersion=(activePluginAndVersion==null?void 0:(_activePluginAndVersi=activePluginAndVersion.activePlugin)==null?void 0:_activePluginAndVersi.pluginId)===pluginId?activePluginAndVersion.activeVersion:undefined;var preferredVersion=docsPreferredVersionByPluginId[pluginId];var latestVersion=allDocsData[pluginId].versions.find(function(v){return v.isLast;});var version=(_ref=activeVersion!=null?activeVersion:preferredVersion)!=null?_ref:latestVersion;return (0,lib/* docVersionSearchTag */.os)(pluginId,version.name);}var tags=[lib/* DEFAULT_SEARCH_TAG */.HX].concat(Object.keys(allDocsData).map(getDocPluginTags));return{locale:i18n.currentLocale,tags:tags};}
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-search-algolia@2.0.0-beta.9_a9782a83b7daad1a97bf91cabc1c578c/node_modules/@docusaurus/theme-search-algolia/src/theme/hooks/useAlgoliaContextualFacetFilters.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Translate search-engine agnostic search filters to Algolia search filters
function useAlgoliaContextualFacetFilters(){var _useContextualSearchF=useContextualSearchFilters(),locale=_useContextualSearchF.locale,tags=_useContextualSearchF.tags;// seems safe to convert locale->language, see AlgoliaSearchMetadatas comment
var languageFilter="language:"+locale;var tagsFilter=tags.map(function(tag){return"docusaurus_tag:"+tag;});return[languageFilter,tagsFilter];}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(63827);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-search-algolia@2.0.0-beta.9_a9782a83b7daad1a97bf91cabc1c578c/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchBar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"searchBox":"searchBox_QK-O"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-search-algolia@2.0.0-beta.9_a9782a83b7daad1a97bf91cabc1c578c/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchBar/index.js
var _excluded=["contextualSearch","externalUrlRegex"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DocSearchModal=null;function Hit(_ref){var hit=_ref.hit,children=_ref.children;return/*#__PURE__*/react.createElement(Link/* default */.Z,{to:hit.url},children);}function ResultsFooter(_ref2){var state=_ref2.state,onClose=_ref2.onClose;var _useSearchQuery=(0,useSearchQuery/* default */.Z)(),generateSearchPageLink=_useSearchQuery.generateSearchPageLink;return/*#__PURE__*/react.createElement(Link/* default */.Z,{to:generateSearchPageLink(state.query),onClick:onClose},"See all ",state.context.nbHits," results");}function DocSearch(_ref3){var _props$searchParamete,_props$searchParamete2;var contextualSearch=_ref3.contextualSearch,externalUrlRegex=_ref3.externalUrlRegex,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref3,_excluded);var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),siteMetadata=_useDocusaurusContext.siteMetadata;var contextualSearchFacetFilters=useAlgoliaContextualFacetFilters();var configFacetFilters=(_props$searchParamete=(_props$searchParamete2=props.searchParameters)==null?void 0:_props$searchParamete2.facetFilters)!=null?_props$searchParamete:[];var facetFilters=contextualSearch?// Merge contextual search filters with config filters
[].concat(contextualSearchFacetFilters,configFacetFilters):// ... or use config facetFilters
configFacetFilters;// we let user override default searchParameters if he wants to
var searchParameters=Object.assign({},props.searchParameters,{facetFilters:facetFilters});var _useBaseUrlUtils=(0,useBaseUrl/* useBaseUrlUtils */.C)(),withBaseUrl=_useBaseUrlUtils.withBaseUrl;var history=(0,react_router/* useHistory */.k6)();var searchContainer=(0,react.useRef)(null);var searchButtonRef=(0,react.useRef)(null);var _useState=(0,react.useState)(false),isOpen=_useState[0],setIsOpen=_useState[1];var _useState2=(0,react.useState)(null),initialQuery=_useState2[0],setInitialQuery=_useState2[1];var importDocSearchModalIfNeeded=(0,react.useCallback)(function(){if(DocSearchModal){return Promise.resolve();}return Promise.all([__webpack_require__.e(/* import() */ 19113).then(__webpack_require__.bind(__webpack_require__, 19113)),Promise.all(/* import() */[__webpack_require__.e(40532), __webpack_require__.e(82382)]).then(__webpack_require__.bind(__webpack_require__, 82382)),Promise.all(/* import() */[__webpack_require__.e(40532), __webpack_require__.e(40457)]).then(__webpack_require__.bind(__webpack_require__, 40457))]).then(function(_ref4){var Modal=_ref4[0].DocSearchModal;DocSearchModal=Modal;});},[]);var onOpen=(0,react.useCallback)(function(){importDocSearchModalIfNeeded().then(function(){searchContainer.current=document.createElement('div');document.body.insertBefore(searchContainer.current,document.body.firstChild);setIsOpen(true);});},[importDocSearchModalIfNeeded,setIsOpen]);var onClose=(0,react.useCallback)(function(){setIsOpen(false);searchContainer.current.remove();},[setIsOpen]);var onInput=(0,react.useCallback)(function(event){importDocSearchModalIfNeeded().then(function(){setIsOpen(true);setInitialQuery(event.key);});},[importDocSearchModalIfNeeded,setIsOpen,setInitialQuery]);var navigator=(0,react.useRef)({navigate:function navigate(_ref5){var itemUrl=_ref5.itemUrl;// Algolia results could contain URL's from other domains which cannot
// be served through history and should navigate with window.location
if((0,lib/* isRegexpStringMatch */.Fx)(externalUrlRegex,itemUrl)){window.location.href=itemUrl;}else{history.push(itemUrl);}}}).current;var transformItems=(0,react.useRef)(function(items){return items.map(function(item){// If Algolia contains a external domain, we should navigate without relative URL
if((0,lib/* isRegexpStringMatch */.Fx)(externalUrlRegex,item.url)){return item;}// We transform the absolute URL into a relative URL.
var url=new URL(item.url);return Object.assign({},item,{url:withBaseUrl(""+url.pathname+url.hash)});});}).current;var resultsFooterComponent=(0,react.useMemo)(function(){return function(footerProps){return/*#__PURE__*/react.createElement(ResultsFooter,(0,esm_extends/* default */.Z)({},footerProps,{onClose:onClose}));};},[onClose]);var transformSearchClient=(0,react.useCallback)(function(searchClient){searchClient.addAlgoliaAgent('docusaurus',siteMetadata.docusaurusVersion);return searchClient;},[siteMetadata.docusaurusVersion]);useDocSearchKeyboardEvents({isOpen:isOpen,onOpen:onOpen,onClose:onClose,onInput:onInput,searchButtonRef:searchButtonRef});var translatedSearchLabel=(0,Translate/* translate */.I)({id:'theme.SearchBar.label',message:'Search',description:'The ARIA label and placeholder for search button'});return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("link",{rel:"preconnect",href:"https://"+props.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),/*#__PURE__*/react.createElement("div",{className:styles_module.searchBox},/*#__PURE__*/react.createElement(DocSearchButton,{onTouchStart:importDocSearchModalIfNeeded,onFocus:importDocSearchModalIfNeeded,onMouseOver:importDocSearchModalIfNeeded,onClick:onOpen,ref:searchButtonRef,translations:{buttonText:translatedSearchLabel,buttonAriaLabel:translatedSearchLabel}})),isOpen&&/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/react.createElement(DocSearchModal,(0,esm_extends/* default */.Z)({onClose:onClose,initialScrollY:window.scrollY,initialQuery:initialQuery,navigator:navigator,transformItems:transformItems,hitComponent:Hit,resultsFooterComponent:resultsFooterComponent,transformSearchClient:transformSearchClient},props,{searchParameters:searchParameters})),searchContainer.current));}function SearchBar(){var _useDocusaurusContext2=(0,useDocusaurusContext/* default */.Z)(),siteConfig=_useDocusaurusContext2.siteConfig;return/*#__PURE__*/react.createElement(DocSearch,siteConfig.themeConfig.algolia);}/* harmony default export */ var theme_SearchBar = (SearchBar);

/***/ }),

/***/ 2247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84083);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7977);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46393);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SEARCH_PARAM_QUERY='q';function useSearchQuery(){var history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_2__/* .useHistory */ .k6)();var _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),searchQuery=_useState[0],setSearchQueryState=_useState[1];// Init search query just after React hydration
(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var _URLSearchParams$get;var searchQueryStringValue=(_URLSearchParams$get=new URLSearchParams(window.location.search).get(SEARCH_PARAM_QUERY))!=null?_URLSearchParams$get:'';setSearchQueryState(searchQueryStringValue);},[]);var setSearchQuery=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(newSearchQuery){var searchParams=new URLSearchParams(window.location.search);if(newSearchQuery){searchParams.set(SEARCH_PARAM_QUERY,newSearchQuery);}else{searchParams.delete(SEARCH_PARAM_QUERY);}history.replace({search:searchParams.toString()});setSearchQueryState(newSearchQuery);},[history]);var generateSearchPageLink=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(targetSearchQuery){// Refer to https://github.com/facebook/docusaurus/pull/2838
return baseUrl+"search?q="+encodeURIComponent(targetSearchQuery);},[baseUrl]);return{searchQuery:searchQuery,setSearchQuery:setSearchQuery,generateSearchPageLink:generateSearchPageLink};}/* harmony default export */ __webpack_exports__["Z"] = (useSearchQuery);

/***/ })

}]);