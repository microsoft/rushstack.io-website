"use strict";
(self["webpackChunkrushstack_io"] = self["webpackChunkrushstack_io"] || []).push([[64577],{

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

/***/ 73024:
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
var _excluded=["components"];var frontMatter={title:'Heft command line'};var contentTitle=undefined;var metadata={"unversionedId":"heft/cli","id":"heft/cli","isDocsHomePage":false,"title":"Heft command line","description":"heft","source":"@site/docs/heft/cli.md","sourceDirName":"heft","slug":"/heft/cli","permalink":"/pages/heft/cli","editUrl":"https://github.com/microsoft/rushstack-websites/docs/heft/cli.md","tags":[],"version":"current","frontMatter":{"title":"Heft command line"},"sidebar":"docsSidebar","previous":{"title":"Using rig packages","permalink":"/pages/heft/rig_packages"},"next":{"title":"Getting started with Heft","permalink":"/pages/heft_tutorials/getting_started"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'heft',id:'heft',children:[],level:2},{value:'heft clean',id:'heft-clean',children:[],level:2},{value:'heft build',id:'heft-build',children:[],level:2},{value:'heft start',id:'heft-start',children:[],level:2},{value:'heft test',id:'heft-test',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,C_Git_rushstack_websites_common_temp_node_modules_pnpm_babel_runtime_7_16_3_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"heft"},"heft"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"usage: heft [-h] [--unmanaged] [-d] [--plugin PATH] <command> ...\n\nHeft is a pluggable build system designed for web projects.\n\nPositional arguments:\n  <command>\n    clean        Clean the project\n    build        Build the project.\n    start        Run the local server for the current project\n    test         Build the project and run tests.\n\nOptional arguments:\n  -h, --help     Show this help message and exit.\n  --unmanaged    Disables the Heft version selector: When Heft is invoked via\n                 the shell path, normally it will examine the project's\n                 package.json dependencies and try to use the locally\n                 installed version of Heft. Specify \"--unmanaged\" to force\n                 the invoked version of Heft to be used. This is useful for\n                 example if you want to test a different version of Heft.\n  -d, --debug    Show the full call stack if an error occurs while executing\n                 the tool\n  --plugin PATH  Used to specify Heft plugins.\n\nFor detailed help about a specific command, use: heft <command> -h\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"heft-clean"},"heft clean"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"usage: heft clean [-h] [-v] [--clear-cache]\n\nOptional arguments:\n  -h, --help     Show this help message and exit.\n  -v, --verbose  If specified, log information useful for debugging.\n  --clear-cache  If this flag is provided, the compiler cache will also be\n                 cleared. This isn't dangerous, but may lead to longer\n                 compile times\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"heft-build"},"heft build"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"usage: heft build [-h] [-v] [--production] [--locale LOCALE] [-l]\n                  [--typescript-max-write-parallelism PARALLEILSM]\n                  [--max-old-space-size SIZE] [--watch] [--clean]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -v, --verbose         If specified, log information useful for debugging.\n  --production          If specified, build ship/production output\n  --locale LOCALE       Only build the specified locale, if applicable.\n  -l, --lite            Perform a minimal build, skipping optional steps like\n                        linting.\n  --typescript-max-write-parallelism PARALLEILSM\n                        Set this to change the maximum write parallelism.\n                        This parameter overrides what is set in typescript.\n                        json. The default is 50.\n  --max-old-space-size SIZE\n                        Used to specify the max old space size.\n  --watch               If provided, run tests in watch mode.\n  --clean               If specified, clean the package before building.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"heft-start"},"heft start"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"usage: heft start [-h] [-v] [--production] [--locale LOCALE] [-l]\n                  [--typescript-max-write-parallelism PARALLEILSM]\n                  [--max-old-space-size SIZE] [--clean]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -v, --verbose         If specified, log information useful for debugging.\n  --production          If specified, build ship/production output\n  --locale LOCALE       Only build the specified locale, if applicable.\n  -l, --lite            Perform a minimal build, skipping optional steps like\n                        linting.\n  --typescript-max-write-parallelism PARALLEILSM\n                        Set this to change the maximum write parallelism.\n                        This parameter overrides what is set in typescript.\n                        json. The default is 50.\n  --max-old-space-size SIZE\n                        Used to specify the max old space size.\n  --clean               If specified, clean the package before starting the\n                        development server.\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"heft-test"},"heft test"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"usage: heft test [-h] [-v] [--production] [--locale LOCALE] [-l]\n                 [--typescript-max-write-parallelism PARALLEILSM]\n                 [--max-old-space-size SIZE] [--watch] [--clean] [--no-test]\n                 [--no-build] [-u] [--find-related-tests SOURCE_FILE]\n                 [--silent] [-t REGEXP] [--test-path-pattern REGEXP]\n                 [--test-timeout-ms INTEGER] [--debug-heft-reporter]\n\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -v, --verbose         If specified, log information useful for debugging.\n  --production          If specified, build ship/production output\n  --locale LOCALE       Only build the specified locale, if applicable.\n  -l, --lite            Perform a minimal build, skipping optional steps like\n                        linting.\n  --typescript-max-write-parallelism PARALLEILSM\n                        Set this to change the maximum write parallelism.\n                        This parameter overrides what is set in typescript.\n                        json. The default is 50.\n  --max-old-space-size SIZE\n                        Used to specify the max old space size.\n  --watch               If provided, run tests in watch mode.\n  --clean               If specified, clean the package before building.\n  --no-test             If specified, run the build without testing.\n  --no-build            If provided, only run tests. Do not build first.\n  -u, --update-snapshots\n                        Update Jest snapshots while running the tests. This\n                        corresponds to the \"--updateSnapshots\" parameter in\n                        Jest\n  --find-related-tests SOURCE_FILE\n                        Find and run the tests that cover a space separated\n                        list of source files that were passed in as arguments.\n                         This corresponds to the \"--findRelatedTests\"\n                        parameter in Jest's documentation.\n  --silent              Prevent tests from printing messages through the\n                        console. This corresponds to the \"--silent\" parameter\n                        in Jest's documentation.\n  -t REGEXP, --test-name-pattern REGEXP\n                        Run only tests with a name that matches a regular\n                        expression. The REGEXP is matched against the full\n                        name, which is a combination of the test name and all\n                        its surrounding describe blocks. This corresponds to\n                        the \"--testNamePattern\" parameter in Jest's\n                        documentation.\n  --test-path-pattern REGEXP\n                        Run only tests with a source file path that matches a\n                        regular expression. On Windows you will need to use\n                        \"/\" instead of \"\" This corresponds to the\n                        \"--testPathPattern\" parameter in Jest's documentation.\n  --test-timeout-ms INTEGER\n                        Change the default timeout for tests; if a test\n                        doesn't complete within this many milliseconds, it\n                        will fail. Individual tests can override the default.\n                        If unspecified, the default is normally 5000 ms. This\n                        corresponds to the \"--testTimeout\" parameter in\n                        Jest's documentation.\n  --debug-heft-reporter\n                        Normally Heft installs a custom Jest reporter so that\n                        test results are presented consistently with other\n                        task logging. If you suspect a problem with the\n                        HeftJestReporter, specify \"--debug-heft-reporter\" to\n                        temporarily disable it so that you can compare with\n                        how Jest's default reporter would have presented it.\n                        Include this output in your bug report. Do not use\n                        \"--debug-heft-reporter\" in production.\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);