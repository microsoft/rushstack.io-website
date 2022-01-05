"use strict";
(self["webpackChunkrushstack_io"] = self["webpackChunkrushstack_io"] || []).push([[563],{

/***/ 50158:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 21513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; }
/* harmony export */ });
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74834);
/* harmony import */ var C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28265);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46393);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50158);
var _excluded=["components"];var frontMatter={title:'heft.json'};var contentTitle=undefined;var metadata={"unversionedId":"heft_configs/heft_json","id":"heft_configs/heft_json","isDocsHomePage":false,"title":"heft.json","description":"| | |","source":"@site/docs/heft_configs/heft_json.md","sourceDirName":"heft_configs","slug":"/heft_configs/heft_json","permalink":"/pages/heft_configs/heft_json","editUrl":"https://github.com/microsoft/rushstack-websites/docs/heft_configs/heft_json.md","tags":[],"version":"current","frontMatter":{"title":"heft.json"},"sidebar":"docsSidebar","previous":{"title":"api-extractor-task.json","permalink":"/pages/heft_configs/api-extractor-task_json"},"next":{"title":"node-service.json","permalink":"/pages/heft_configs/node-service_json"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Template',id:'template',children:[],level:2},{value:'See also',id:'see-also',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"td"},"File path:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"td"},"<","project folder",">","/config/heft.json"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"td","href":"../heft/rig_packages"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"a"},"Riggable?"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},"Yes")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"td"},"Associated plugins:")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"td","href":"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyFilesPlugin.ts"},"CopyFilesPlugin"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"td","href":"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/DeleteGlobsPlugin.ts"},"DeleteGlobsPlugin"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"template"},"Template"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-js"},"/**\n * Defines configuration used by core Heft.\n */\n{\n  \"$schema\": \"https://developer.microsoft.com/json-schemas/heft/heft.schema.json\",\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // \"extends\": \"base-project/config/heft.json\",\n\n  \"eventActions\": [\n    // {\n    //   /**\n    //    * (Required) The kind of built-in operation that should be performed.\n    //    * The \"deleteGlobs\" action deletes files or folders that match the specified glob patterns.\n    //    */\n    //   \"actionKind\": \"deleteGlobs\",\n    //\n    //   /**\n    //    * (Required) The Heft stage when this action should be performed.  Note that heft.json event actions\n    //    * are scheduled after any plugin tasks have processed the event.  For example, a \"compile\" event action\n    //    * will be performed after the TypeScript compiler has been invoked.\n    //    *\n    //    * Options: \"clean\", \"pre-compile\", \"compile\", \"bundle\", \"post-build\"\n    //    */\n    //   \"heftEvent\": \"clean\",\n    //\n    //   /**\n    //    * (Required) A user-defined tag whose purpose is to allow configs to replace/delete handlers that\n    //    * were added by other configs.\n    //    */\n    //   \"actionId\": \"my-example-action\",\n    //\n    //   /**\n    //    * (Required) Glob patterns to be deleted. The paths are resolved relative to the project folder.\n    //    * Documentation for supported glob syntaxes: https://www.npmjs.com/package/fast-glob\n    //    */\n    //   \"globsToDelete\": [\n    //     \"dist\",\n    //     \"lib\",\n    //     \"lib-esnext\",\n    //     \"temp\"\n    //   ]\n    // },\n    //\n    // {\n    //   /**\n    //    * (Required) The kind of built-in operation that should be performed.\n    //    * The \"copyFiles\" action copies files that match the specified patterns.\n    //    */\n    //   \"actionKind\": \"copyFiles\",\n    //\n    //   /**\n    //    * (Required) The Heft stage when this action should be performed.  Note that heft.json event actions\n    //    * are scheduled after any plugin tasks have processed the event.  For example, a \"compile\" event action\n    //    * will be performed after the TypeScript compiler has been invoked.\n    //    *\n    //    * Options: \"pre-compile\", \"compile\", \"bundle\", \"post-build\"\n    //    */\n    //   \"heftEvent\": \"pre-compile\",\n    //\n    //   /**\n    //    * (Required) A user-defined tag whose purpose is to allow configs to replace/delete handlers that\n    //    * were added by other configs.\n    //    */\n    //   \"actionId\": \"my-example-action\",\n    //\n    //   /**\n    //    * (Required) An array of copy operations to run perform during the specified Heft event.\n    //    */\n    //   \"copyOperations\": [\n    //     {\n    //       /**\n    //        * (Required) The base folder that files will be copied from, relative to the project root.\n    //        * Settings such as \"includeGlobs\" and \"excludeGlobs\" will be resolved relative\n    //        * to this folder.\n    //        * NOTE: Assigning \"sourceFolder\" does not by itself select any files to be copied.\n    //        */\n    //       \"sourceFolder\": \"src\",\n    //\n    //       /**\n    //        * (Required) One or more folders that files will be copied into, relative to the project root.\n    //        * If you specify more than one destination folder, Heft will read the input files only once, using\n    //        * streams to efficiently write multiple outputs.\n    //        */\n    //       \"destinationFolders\": [\"dist/assets\"],\n    //\n    //       /**\n    //        * If specified, this option recursively scans all folders under \"sourceFolder\" and includes any files\n    //        * that match the specified extensions.  (If \"fileExtensions\" and \"includeGlobs\" are both\n    //        * specified, their selections are added together.)\n    //        */\n    //       \"fileExtensions\": [\".jpg\", \".png\"],\n    //\n    //       /**\n    //        * A list of glob patterns that select files to be copied.  The paths are resolved relative\n    //        * to \"sourceFolder\".\n    //        * Documentation for supported glob syntaxes: https://www.npmjs.com/package/fast-glob\n    //        */\n    //       \"includeGlobs\": [\"assets/*.md\"],\n    //\n    //       /**\n    //        * A list of glob patterns that exclude files/folders from being copied.  The paths are resolved relative\n    //        * to \"sourceFolder\".  These exclusions eliminate items that were selected by the \"includeGlobs\"\n    //        * or \"fileExtensions\" setting.\n    //        */\n    //       \"excludeGlobs\": [],\n    //\n    //       /**\n    //        * Normally, when files are selected under a child folder, a corresponding folder will be created in\n    //        * the destination folder.  Specify flatten=true to discard the source path and copy all matching files\n    //        * to the same folder.  If two files have the same name an error will be reported.\n    //        * The default value is false.\n    //        */\n    //       \"flatten\": false,\n    //\n    //       /**\n    //        * If true, filesystem hard links will be created instead of copying the file.  Depending on the\n    //        * operating system, this may be faster. (But note that it may cause unexpected behavior if a tool\n    //        * modifies the link.)  The default value is false.\n    //        */\n    //       \"hardlink\": false\n    //     }\n    //   ]\n    // }\n  ],\n\n  /**\n   * The list of Heft plugins to be loaded.\n   */\n  \"heftPlugins\": [\n    // {\n    //  /**\n    //   * The path to the plugin package.\n    //   */\n    //  \"plugin\": \"path/to/my-plugin\",\n    //\n    //  /**\n    //   * An optional object that provides additional settings that may be defined by the plugin.\n    //   */\n    //  // \"options\": { }\n    // }\n  ]\n}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../heft_tasks/copy-files"},"copy-files")," task"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../heft_tasks/delete-globs"},"delete-globs")," task")));};MDXContent.isMDXComponent=true;

/***/ })

}]);