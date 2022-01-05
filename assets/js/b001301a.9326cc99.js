"use strict";
(self["webpackChunkrushstack_io"] = self["webpackChunkrushstack_io"] || []).push([[81649],{

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

/***/ 70530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "contentTitle": function() { return /* binding */ contentTitle; },
  "default": function() { return /* binding */ MDXContent; },
  "frontMatter": function() { return /* binding */ frontMatter; },
  "metadata": function() { return /* binding */ metadata; },
  "toc": function() { return /* binding */ toc; }
});

// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(74834);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@babel+runtime@7.16.3/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(28265);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__(46393);
// EXTERNAL MODULE: ../../common/temp/node_modules/.pnpm/@mdx-js+react@1.6.22_react@17.0.2/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(50158);
;// CONCATENATED MODULE: ./src/components/GitHubCard.jsx
function GitHubCard(props){return/*#__PURE__*/react.createElement("div",{className:"people-item"},/*#__PURE__*/react.createElement("a",{href:"https://github.com/"+props.person.github},/*#__PURE__*/react.createElement("img",{src:"https://github.com/"+props.person.github+".png?s=100",width:"100",style:{borderRadius:"50%"}})),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("a",{href:"https://github.com/"+props.person.github},props.person.name)),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("b",null,"@",props.person.github)),/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("i",null,props.person.caption)));}function GitHubCardContainer(props){return/*#__PURE__*/react.createElement("div",{className:"people-container"},props.people.map(function(person){return/*#__PURE__*/react.createElement(GitHubCard,{person:person});}));}
;// CONCATENATED MODULE: ./data/people.json
var people_namespaceObject = JSON.parse('{"maintainers":[{"name":"Apostolis Haitalis","github":"apostolisms","caption":"manages the team that hosts the Rush Stack projects"},{"name":"Daniel Nadeau","github":"D4N14L","caption":"feature implementation, focusing on Rush workspaces and Heft"},{"name":"David Michon","github":"dmichon-msft","caption":"feature implementation, focusing on performance and watch mode"},{"name":"Ian Clanton-Thuon","github":"iclanton","caption":"architecture, focusing on Heft and Rush build cache"},{"name":"Pete Gonzalez","github":"octogonz","caption":"architecture, community engagement, docs and TSDoc"}],"collaborators":[{"name":"Claudia Sun","github":"Claudiazhaoya"},{"name":"Elliot Nelson","github":"elliot-nelson"},{"name":"Josh Wedekind","github":"halfnibble"},{"name":"Sachin Joseph","github":"sachinjoseph"}],"alumni":[{"name":"Nick Pape","github":"nickpape","role":"Maintainer 2016-2018","caption":"broad contributions including Rush\'s task scheduler and stream collator"},{"name":"QZ","github":"qz2017","role":"Maintainer 2016-2018","caption":"broad contributions including Rush version policies and publishing features"},{"name":"Daniel Gaeta","github":"dgaeta","role":"Collaborator 2017","caption":"implemented API Extractor and API Documenter features"}],"star_contributors":[{"name":"Yunfei","sort_month":"2021-07","github":"adventure-yunfei","caption":"recognized for major contributions to API Extractor and API Documenter"},{"name":"William Bernting","sort_month":"2020-12","caption":"helped design Rush\'s multi-project watch mode feature, implemented the @telia/rush-select console","github":"wbern"},{"name":"Ron Buckton","sort_month":"2019-09","github":"rbuckton","caption":"recognized for major contributions to API Extractor and TSDoc, including the declaration reference syntax"},{"name":"Thomas Michon","sort_month":"2018-11","caption":"contributed the \\"installation variants\\" feature for Rush","github":"ThomasMichon"},{"name":"David Zearing","sort_month":"2016-01","caption":"pioneered early components such as package-deps-hash, gulp-core-build, and load-themed-styles","github":"dzearing"}]}');
var data_people_namespaceObject = /*#__PURE__*/__webpack_require__.t(people_namespaceObject, 2);
;// CONCATENATED MODULE: ./src/components/People.jsx
function PeopleGrid(props){var people=data_people_namespaceObject[props.category];return/*#__PURE__*/react.createElement(GitHubCardContainer,{people:people});}
;// CONCATENATED MODULE: ./docs/overview/people.md
var _excluded=["components"];var frontMatter={title:'Who\'s involved?',custom_edit_url:null};var contentTitle=undefined;var metadata={"unversionedId":"overview/people","id":"overview/people","isDocsHomePage":false,"title":"Who's involved?","description":"Maintainers","source":"@site/docs/overview/people.md","sourceDirName":"overview","slug":"/overview/people","permalink":"/pages/overview/people","editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"Who's involved?","custom_edit_url":null},"sidebar":"docsSidebar","previous":{"title":"What is Rush Stack?","permalink":"/pages/index"},"next":{"title":"Project roadmap","permalink":"/pages/overview/roadmap"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Maintainers',id:'maintainers',children:[],level:2},{value:'Affiliate Collaborators',id:'affiliate-collaborators',children:[],level:2},{value:'Alumni',id:'alumni',children:[],level:2},{value:'Star Contributors',id:'star-contributors',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h2",{"id":"maintainers"},"Maintainers"),(0,esm/* mdx */.kt)("p",null,"Maintainers meet regularly and have direct responsibility for overseeing the Rush Stack family of projects.  In alphabetical order:"),(0,esm/* mdx */.kt)(PeopleGrid,{category:"maintainers",mdxType:"PeopleGrid"}),(0,esm/* mdx */.kt)("h2",{"id":"affiliate-collaborators"},"Affiliate Collaborators"),(0,esm/* mdx */.kt)("p",null,"Affiliate Collaborators help keep things running smoothly, but are not as directly involved as the maintainers. Collaboration can take many forms such as triaging issues, reviewing PRs, facilitating design discussions, writing docs, or answering support questions.  In alphabetical order:"),(0,esm/* mdx */.kt)(PeopleGrid,{category:"collaborators",mdxType:"PeopleGrid"}),(0,esm/* mdx */.kt)("h2",{"id":"alumni"},"Alumni"),(0,esm/* mdx */.kt)("p",null,"When a Maintainer or Collaborator is no longer actively involved, they become Alumni.  In reverse chronological order:"),(0,esm/* mdx */.kt)(PeopleGrid,{category:"alumni",mdxType:"PeopleGrid"}),(0,esm/* mdx */.kt)("h2",{"id":"star-contributors"},"Star Contributors"),(0,esm/* mdx */.kt)("p",null,"This list recognizes individuals who are not formally affiliated with Rush Stack, but who nonetheless made major contributions that the maintainers would like to acknowledge.  If you'd like to nominate someone, let us know.  In reverse chronological order:"),(0,esm/* mdx */.kt)(PeopleGrid,{category:"star_contributors",mdxType:"PeopleGrid"}));};MDXContent.isMDXComponent=true;

/***/ })

}]);