"use strict";
(self["webpackChunkrushstack_io"] = self["webpackChunkrushstack_io"] || []).push([[7918],{

/***/ 1654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ DocItem; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(6393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4722);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(9586);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(8112);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(3827);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){var metadata=props.metadata;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.I)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},metadata.previous&&/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"pagination-nav__link",to:metadata.previous.permalink},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},"\xAB ",metadata.previous.title))),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},metadata.next&&/*#__PURE__*/react.createElement(Link/* default */.Z,{className:"pagination-nav__link",to:metadata.next.permalink},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__sublabel"},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},metadata.next.title," \xBB"))));}/* harmony default export */ var theme_DocPaginator = (DocPaginator);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(7977);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useDocs.js
var useDocs = __webpack_require__(1850);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-common@2.0.0-beta.9_cf03b7458ee8070c9e09362c20b6f0a1/node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(7725);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){var siteTitle=_ref.siteTitle,versionMetadata=_ref.versionMetadata;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel(_ref2){var siteTitle=_ref2.siteTitle,versionMetadata=_ref2.versionMetadata;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}var BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){var BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/react.createElement(BannerLabelComponent,props);}function LatestVersionSuggestionLabel(_ref3){var versionLabel=_ref3.versionLabel,to=_ref3.to,onClick=_ref3.onClick;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:versionLabel,latestVersionLink:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:to,onClick:onClick},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}function DocVersionBannerEnabled(_ref4){var versionMetadata=_ref4.versionMetadata;var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),siteTitle=_useDocusaurusContext.siteConfig.title;var _useActivePlugin=(0,useDocs/* useActivePlugin */.gA)({failfast:true}),pluginId=_useActivePlugin.pluginId;var getVersionMainDoc=function getVersionMainDoc(version){return version.docs.find(function(doc){return doc.id===version.mainDocId;});};var _useDocsPreferredVers=(0,lib/* useDocsPreferredVersion */.J)(pluginId),savePreferredVersionName=_useDocsPreferredVers.savePreferredVersionName;var _useDocVersionSuggest=(0,useDocs/* useDocVersionSuggestions */.Jo)(pluginId),latestDocSuggestion=_useDocVersionSuggest.latestDocSuggestion,latestVersionSuggestion=_useDocVersionSuggest.latestVersionSuggestion;// try to link to same doc in latest version (not always possible)
// fallback to main doc of latest version
var latestVersionSuggestedDoc=latestDocSuggestion!=null?latestDocSuggestion:getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docVersionBanner */.kM.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})),/*#__PURE__*/react.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:function onClick(){return savePreferredVersionName(latestVersionSuggestion.name);}})));}function DocVersionBanner(_ref5){var versionMetadata=_ref5.versionMetadata;if(versionMetadata.banner){return/*#__PURE__*/react.createElement(DocVersionBannerEnabled,{versionMetadata:versionMetadata});}return/*#__PURE__*/react.createElement(react.Fragment,null);}/* harmony default export */ var theme_DocVersionBanner = (DocVersionBanner);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Seo/index.js
var Seo = __webpack_require__(8025);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){var lastUpdatedAt=_ref.lastUpdatedAt,formattedLastUpdatedAt=_ref.formattedLastUpdatedAt;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString()},formattedLastUpdatedAt))}},' on {date}');}function LastUpdatedByUser(_ref2){var lastUpdatedBy=_ref2.lastUpdatedBy;return/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/react.createElement("b",null,lastUpdatedBy)}},' by {user}');}function LastUpdated(_ref3){var lastUpdatedAt=_ref3.lastUpdatedAt,formattedLastUpdatedAt=_ref3.formattedLastUpdatedAt,lastUpdatedBy=_ref3.lastUpdatedBy;return/*#__PURE__*/react.createElement("span",{className:lib/* ThemeClassNames.common.lastUpdated */.kM.common.lastUpdated},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/react.createElement(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/react.createElement(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''}},'Last updated{atDate}{byUser}'), false&&/*#__PURE__*/0);}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4834);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8265);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"iconEdit":"iconEdit_-9Oa"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IconEdit=function IconEdit(_ref){var className=_ref.className,restProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.Z)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));};/* harmony default export */ var theme_IconEdit = (IconEdit);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){var editUrl=_ref.editUrl;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:lib/* ThemeClassNames.common.editThisPage */.kM.common.editThisPage},/*#__PURE__*/react.createElement(theme_IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Tag_styles_module = ({"tag":"tag_oq4w","tagRegular":"tagRegular_8iEj","tagWithCount":"tagWithCount_-kga"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(props){var _clsx;var permalink=props.permalink,name=props.name,count=props.count;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(Tag_styles_module.tag,(_clsx={},_clsx[Tag_styles_module.tagRegular]=!count,_clsx[Tag_styles_module.tagWithCount]=count,_clsx))},name,count&&/*#__PURE__*/react.createElement("span",null,count));}/* harmony default export */ var theme_Tag = (Tag);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TagsListInline_styles_module = ({"tags":"tags_9yQ5","tag":"tag_kGSq"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){var tags=_ref.tags;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(TagsListInline_styles_module.tags,'padding--none','margin-left--sm')},tags.map(function(_ref2){var label=_ref2.label,tagPermalink=_ref2.permalink;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:TagsListInline_styles_module.tag},/*#__PURE__*/react.createElement(theme_Tag,{name:label,permalink:tagPermalink}));})));}
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocItemFooter_styles_module = ({"lastUpdated":"lastUpdated_HjC8"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsRow(props){return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterTagsRow */.kM.docs.docFooterTagsRow,'row margin-bottom--sm')},/*#__PURE__*/react.createElement("div",{className:"col"},/*#__PURE__*/react.createElement(TagsListInline,props)));}function EditMetaRow(_ref){var editUrl=_ref.editUrl,lastUpdatedAt=_ref.lastUpdatedAt,lastUpdatedBy=_ref.lastUpdatedBy,formattedLastUpdatedAt=_ref.formattedLastUpdatedAt;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooterEditMetaRow */.kM.docs.docFooterEditMetaRow,'row')},/*#__PURE__*/react.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react.createElement(EditThisPage,{editUrl:editUrl})),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',DocItemFooter_styles_module.lastUpdated)},(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react.createElement(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy})));}function DocItemFooter(props){var DocContent=props.content;var metadata=DocContent.metadata;var editUrl=metadata.editUrl,lastUpdatedAt=metadata.lastUpdatedAt,formattedLastUpdatedAt=metadata.formattedLastUpdatedAt,lastUpdatedBy=metadata.lastUpdatedBy,tags=metadata.tags;var canDisplayTagsRow=tags.length>0;var canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);var canDisplayFooter=canDisplayTagsRow||canDisplayEditMetaRow;if(!canDisplayFooter){return/*#__PURE__*/react.createElement(react.Fragment,null);}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docFooter */.kM.docs.docFooter,'docusaurus-mt-lg')},canDisplayTagsRow&&/*#__PURE__*/react.createElement(TagsRow,{tags:tags}),canDisplayEditMetaRow&&/*#__PURE__*/react.createElement(EditMetaRow,{editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy,formattedLastUpdatedAt:formattedLastUpdatedAt}));}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(4715);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_raAS","tocCollapsibleButton":"tocCollapsibleButton_05hK","tocCollapsibleContent":"tocCollapsibleContent_nHxL","tocCollapsibleExpanded":"tocCollapsibleExpanded_XZRL"});
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems = __webpack_require__(6699);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsible(_ref){var _clsx;var toc=_ref.toc,className=_ref.className,minHeadingLevel=_ref.minHeadingLevel,maxHeadingLevel=_ref.maxHeadingLevel;var _useCollapsible=(0,lib/* useCollapsible */.uR)({initialState:true}),collapsed=_useCollapsible.collapsed,toggleCollapsed=_useCollapsible.toggleCollapsed;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible,(_clsx={},_clsx[TOCCollapsible_styles_module.tocCollapsibleExpanded]=!collapsed,_clsx),className)},/*#__PURE__*/react.createElement("button",{type:"button",className:(0,clsx_m/* default */.Z)('clean-btn',TOCCollapsible_styles_module.tocCollapsibleButton),onClick:toggleCollapsed},/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),/*#__PURE__*/react.createElement(lib/* Collapsible */.zF,{lazy:true,className:TOCCollapsible_styles_module.tocCollapsibleContent,collapsed:collapsed},/*#__PURE__*/react.createElement(TOCItems/* default */.Z,{toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel})));}
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(7909);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var DocItem_styles_module = ({"docItemContainer":"docItemContainer_J9DJ","docItemCol":"docItemCol_leei","tocMobile":"tocMobile_nAeo"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItem(props){var _clsx;var DocContent=props.content,versionMetadata=props.versionMetadata;var metadata=DocContent.metadata,frontMatter=DocContent.frontMatter;var image=frontMatter.image,keywords=frontMatter.keywords,hideTitle=frontMatter.hide_title,hideTableOfContents=frontMatter.hide_table_of_contents,tocMinHeadingLevel=frontMatter.toc_min_heading_level,tocMaxHeadingLevel=frontMatter.toc_max_heading_level;var description=metadata.description,title=metadata.title;// We only add a title if:
// - user asks to hide it with frontmatter
// - the markdown content does not already contain a top-level h1 heading
var shouldAddTitle=!hideTitle&&typeof DocContent.contentTitle==='undefined';var windowSize=(0,useWindowSize/* default */.Z)();var canRenderTOC=!hideTableOfContents&&DocContent.toc&&DocContent.toc.length>0;var renderTocDesktop=canRenderTOC&&(windowSize==='desktop'||windowSize==='ssr');return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Seo/* default */.Z,{title:title,description:description,keywords:keywords,image:image}),/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',(_clsx={},_clsx[DocItem_styles_module.docItemCol]=!hideTableOfContents,_clsx))},/*#__PURE__*/react.createElement(theme_DocVersionBanner,{versionMetadata:versionMetadata}),/*#__PURE__*/react.createElement("div",{className:DocItem_styles_module.docItemContainer},/*#__PURE__*/react.createElement("article",null,versionMetadata.badge&&/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docVersionBadge */.kM.docs.docVersionBadge,'badge badge--secondary')},"Version: ",versionMetadata.label),canRenderTOC&&/*#__PURE__*/react.createElement(TOCCollapsible,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docTocMobile */.kM.docs.docTocMobile,DocItem_styles_module.tocMobile)}),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(lib/* ThemeClassNames.docs.docMarkdown */.kM.docs.docMarkdown,'markdown')},shouldAddTitle&&/*#__PURE__*/react.createElement(Heading/* MainHeading */.N,null,title),/*#__PURE__*/react.createElement(DocContent,null)),/*#__PURE__*/react.createElement(DocItemFooter,props)),/*#__PURE__*/react.createElement(theme_DocPaginator,{metadata:metadata}))),renderTocDesktop&&/*#__PURE__*/react.createElement("div",{className:"col col--3"},/*#__PURE__*/react.createElement(TOC/* default */.Z,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:lib/* ThemeClassNames.docs.docTocDesktop */.kM.docs.docTocDesktop}))));}

/***/ }),

/***/ 7909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": function() { return /* binding */ MainHeading; },
  "Z": function() { return /* binding */ theme_Heading; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8265);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4834);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(6393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4722);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+core@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(3827);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-common@2.0.0-beta.9_cf03b7458ee8070c9e09362c20b6f0a1/node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(7725);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_BnT5","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_KxEg"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var _excluded=["id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MainHeading=function MainHeading(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.Z)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
}),props.children));};var createAnchorHeading=function createAnchorHeading(Tag){return function TargetComponent(_ref2){var _clsx;var id=_ref2.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded);var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react.createElement(Tag,props);}return/*#__PURE__*/react.createElement(Tag,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)('anchor',(_clsx={},_clsx[styles_module.anchorWithHideOnScrollNavbar]=hideOnScroll,_clsx[styles_module.anchorWithStickyNavbar]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));};};var Heading=function Heading(headingType){return headingType==='h1'?MainHeading:createAnchorHeading(headingType);};/* harmony default export */ var theme_Heading = (Heading);

/***/ }),

/***/ 6699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ TOCItems; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6393);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7725);
var _excluded=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
/* eslint-disable jsx-a11y/control-has-associated-label */function TOCItemList(_ref){var toc=_ref.toc,className=_ref.className,linkClassName=_ref.linkClassName,isChild=_ref.isChild;if(!toc.length){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:isChild?undefined:className},toc.map(function(heading){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:heading.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"+heading.id,className:linkClassName!=null?linkClassName:undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TOCItemList,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}));}));}function TOCItems(_ref2){var toc=_ref2.toc,_ref2$className=_ref2.className,className=_ref2$className===void 0?'table-of-contents table-of-contents__left-border':_ref2$className,_ref2$linkClassName=_ref2.linkClassName,linkClassName=_ref2$linkClassName===void 0?'table-of-contents__link':_ref2$linkClassName,_ref2$linkActiveClass=_ref2.linkActiveClassName,linkActiveClassName=_ref2$linkActiveClass===void 0?undefined:_ref2$linkActiveClass,minHeadingLevelOption=_ref2.minHeadingLevel,maxHeadingLevelOption=_ref2.maxHeadingLevel,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref2,_excluded);var themeConfig=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useThemeConfig */ .LU)();var minHeadingLevel=minHeadingLevelOption!=null?minHeadingLevelOption:themeConfig.tableOfContents.minHeadingLevel;var maxHeadingLevel=maxHeadingLevelOption!=null?maxHeadingLevelOption:themeConfig.tableOfContents.maxHeadingLevel;var tocFiltered=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useTOCFilter */ .DA)({toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel});var tocHighlightConfig=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){if(linkClassName&&linkActiveClassName){return{linkClassName:linkClassName,linkActiveClassName:linkActiveClassName,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useTOCHighlight */ .Si)(tocHighlightConfig);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TOCItemList,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({toc:tocFiltered,className:className,linkClassName:linkClassName},props));}

/***/ }),

/***/ 4715:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_TOC; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4834);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8265);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(6393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(4722);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
var TOCItems = __webpack_require__(6699);
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"tableOfContents":"tableOfContents_4goR","docItemContainer":"docItemContainer_+l4s"});
;// CONCATENATED MODULE: ../../common/temp/node_modules/.pnpm/@docusaurus+theme-classic@2.0.0-beta.9_react-dom@17.0.2+react@17.0.2/node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
var _excluded=["className"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOC highlighting to highlight TOCInline/TOCCollapsible by mistake
var LINK_CLASS_NAME='table-of-contents__link toc-highlight';var LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){var className=_ref.className,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems/* default */.Z,(0,esm_extends/* default */.Z)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}/* harmony default export */ var theme_TOC = (TOC);

/***/ })

}]);