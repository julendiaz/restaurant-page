/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  min-width: 100%;\\n}\\n\\nbody {\\n  font-family: \\\"Big Shoulders Text\\\", cursive;\\n  margin: 0px;\\n  padding: 0px;\\n  min-width: 100%;\\n}\\n\\n/* -----------MAIN CONTAINER---------*/\\n\\n.main-container {\\n  border: solid #4770ff 2em;\\n  background-color: white;\\n}\\n/* ---------NAVBAR---------------- */\\n\\n.Navbar {\\n  display: flex;\\n  justify-content: space-between;\\n  max-width: 100%;\\n  align-items: center;\\n  padding: 30px 80px;\\n}\\n\\n.Navbar img {\\n  width: 12em;\\n}\\n\\n#nav__left {\\n  width: 11em;\\n}\\n\\n#nav__right {\\n  width: 12em;\\n}\\n\\n.nav__links ul {\\n  display: flex;\\n  justify-content: space-between;\\n  font-weight: 700;\\n  letter-spacing: 0.1em;\\n  list-style-type: none;\\n}\\n\\n.nav__links ul button {\\n  appearance: none;\\n  background-color: transparent;\\n  border: none;\\n  font-family: \\\"Big Shoulders Text\\\", cursive;\\n  font-size: 1.2em;\\n  font-weight: 600;\\n  text-decoration: none;\\n  color: rgb(33, 33, 33);\\n  transition: 0.2s;\\n  cursor: pointer;\\n}\\n\\n.nav__links ul button:hover {\\n  color: rgb(134, 134, 134);\\n}\\n\\n/* -------MAIN CONTENT--------- */\\n\\n#main-content {\\n  width: 100%;\\n  height: 75em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: center;\\n  margin-top: 7em;\\n  animation: fadein 2s;\\n}\\n\\n@keyframes fadein {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n#ramen__image {\\n  width: 38em;\\n}\\n\\n#main-content h1 {\\n  font-size: 4em;\\n  font-weight: 700;\\n  letter-spacing: 0.03em;\\n  color: rgb(53, 53, 53);\\n}\\n\\n/* ---------FOOTER-------*/\\n\\n#footer__nav {\\n  width: 27em;\\n  margin: 15em auto 6em auto;\\n}\\n\\n#footer__nav ul {\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 1.3em;\\n  font-weight: 700;\\n  letter-spacing: 0.1em;\\n}\\n\\n#footer__nav ul button {\\n  appearance: none;\\n  background-color: transparent;\\n  border: none;\\n  font-family: \\\"Big Shoulders Text\\\", cursive;\\n  font-size: 1.33em;\\n  font-weight: 600;\\n  text-decoration: none;\\n  color: rgb(33, 33, 33);\\n  transition: 0.2s;\\n  cursor: pointer;\\n}\\n\\n#footer__nav ul button:hover {\\n  color: rgb(134, 134, 134);\\n}\\n\\nfooter h3 {\\n  color: rgb(73, 73, 73);\\n  font-size: 1.5em;\\n  font-weight: 700;\\n  text-align: center;\\n  letter-spacing: 0.1em;\\n  margin-bottom: 5em;\\n}\\n\\nfooter h5 {\\n  color: rgb(206, 206, 206);\\n  font-size: 1.3em;\\n  font-weight: 500;\\n  text-align: center;\\n  margin-bottom: 0.8em;\\n}\\n\\n#developedBy {\\n  margin-bottom: 8em;\\n}\\n\\nfooter h5 a {\\n  color: rgb(160, 160, 160);\\n}\\n\\nfooter h5 a:hover {\\n  color: rgb(180, 180, 180);\\n}\\n\\n/* ----------MENU ITEMS----------- */\\n\\n.menu__container {\\n  animation: fadein 2s;\\n}\\n\\n.menu__title {\\n  width: 7em;\\n  text-align: left;\\n  margin-top: 2em;\\n}\\n\\n#small-plates {\\n  margin-top: -0.5em;\\n}\\n.item__container {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 30em;\\n  margin-top: 2.3em;\\n}\\n\\n.item__title {\\n  width: 18em;\\n  text-align: left;\\n  font-size: 1.3em;\\n  font-weight: 800;\\n}\\n\\n.item__price {\\n  width: 4em;\\n  text-align: right;\\n  font-size: 1.1em;\\n  font-weight: 500;\\n}\\n\\n.item__description {\\n  margin-top: 0.5em;\\n  font-weight: 200;\\n  font-size: 1.2em;\\n  letter-spacing: 0.05em;\\n  text-align: left;\\n}\\n\\n/* -----------CHEF DESCRIPTION----------- */\\n\\n.chef-container {\\n  margin-top: -5em;\\n  animation: fadein 2s;\\n}\\n\\n.chef-container h2 {\\n  width: 60%;\\n  margin: 1em auto;\\n  font-size: 2.4em;\\n  font-weight: 600;\\n  text-align: left;\\n  line-height: 2;\\n}\\n\\n.paragraph__container {\\n  display: flex;\\n  width: 90%;\\n  height: 28em;\\n  margin: 0 auto;\\n}\\n\\n.chef__image {\\n  width: 90%;\\n  margin: 3.3em auto;\\n}\\n\\n#chef__ramen {\\n  width: 20em;\\n  margin-top: 6em;\\n}\\n.chef__heading {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 14em;\\n  width: 48%;\\n}\\n\\n.chef__title {\\n  font-size: 3em;\\n  font-weight: 700;\\n}\\n\\n.chef__heading h5 {\\n  font-size: 1.2em;\\n  font-weight: 300;\\n  margin-top: 1em;\\n}\\n.chef__description {\\n  width: 50%;\\n  text-align: justify;\\n  font-size: 1.2em;\\n  line-height: 2.4;\\n}\\n\\n/* ------------RESERVATION-------------- */\\n\\n.reservations-text {\\n  width: 23em;\\n  height: auto;\\n  font-size: 1.3em;\\n  line-height: 2.2;\\n  text-align: justify;\\n  margin-top: 6em;\\n}\\n\\n/* ----------COMMON STYLES------------ */\\n\\n.hide {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_chef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/chef */ \"./src/pages/chef.js\");\n/* harmony import */ var _pages_HomeContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomeContent */ \"./src/pages/HomeContent.js\");\n/* harmony import */ var _pages_reservations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reservations */ \"./src/pages/reservations.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\ncontent.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.home)());\n\nconst mainContent = document.querySelector(\"#main-content\");\nconst homeBtn = document.querySelector(\"#homeBtn\");\nconst menuBtn = document.querySelector(\"#menuBtn\");\nconst chefBtn = document.querySelector(\"#chefBtn\");\nconst reservationsBtn = document.querySelector(\"#reservationsBtn\");\nconst locationBtn = document.querySelector(\"#locationBtn\");\n\nconst removeMainContent = () => {\n    while(mainContent.firstChild) {\n        mainContent.firstChild.remove();\n    }\n}\n\nmenuBtn.addEventListener(\"click\", function() {\n    removeMainContent();\n\n    mainContent.appendChild((0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.Menu)());\n    mainContent.style.height = \"120em\";\n})\n\nhomeBtn.addEventListener(\"click\", function() {\n    removeMainContent();\n\n    mainContent.appendChild((0,_pages_HomeContent__WEBPACK_IMPORTED_MODULE_3__.HomeContent)());\n    mainContent.style.height = \"75em\";\n})\n\nchefBtn.addEventListener(\"click\", function() {\n    removeMainContent();\n\n    mainContent.style.height = \"280em\";\n    mainContent.appendChild((0,_pages_chef__WEBPACK_IMPORTED_MODULE_2__.chef)());\n})\n\nreservationsBtn.addEventListener(\"click\", function() {\n    removeMainContent();\n\n    mainContent.style.height = \"25em\";\n    mainContent.appendChild((0,_pages_reservations__WEBPACK_IMPORTED_MODULE_4__.Reservations)());\n})\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/ChefParagraph.js":
/*!************************************!*\
  !*** ./src/pages/ChefParagraph.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChefParagraph\": () => (/* binding */ ChefParagraph)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\n\nconst ChefParagraph = (place, title, year, description) => {\n\n    const paragraphContainer = document.createElement(\"div\");\n    paragraphContainer.classList.add(\"paragraph__container\");\n\n    const chefPlace = document.createElement(\"h5\");\n    chefPlace.classList.add(\"chef__place\"); \n    chefPlace.innerHTML = place;\n\n    const chefTitle = document.createElement(\"h2\");\n    chefTitle.classList.add(\"chef__title\"); \n    chefTitle.innerHTML = title;\n\n    const chefYear = document.createElement(\"h5\");\n    chefYear.classList.add(\"chef__year\"); \n    chefYear.innerHTML = year;\n\n    const chefHeading = document.createElement(\"div\");\n    chefHeading.classList.add(\"chef__heading\");\n\n    chefHeading.append(chefPlace, chefTitle, chefYear);\n\n    const chefDescription = document.createElement(\"p\");\n    chefDescription.classList.add(\"chef__description\"); \n    chefDescription.innerHTML = description;\n\n    paragraphContainer.append(chefHeading, chefDescription);\n\n    return paragraphContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/ChefParagraph.js?");

/***/ }),

/***/ "./src/pages/HomeContent.js":
/*!**********************************!*\
  !*** ./src/pages/HomeContent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeContent\": () => (/* binding */ HomeContent)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\n\nconst HomeContent = () => {\n\n    const mainContent = document.createElement(\"div\");\n    const locationTitle = document.createElement(\"h1\");\n    const ramenImg = document.createElement(\"img\");\n    const scheduleTitle = document.createElement(\"h1\");\n\n    mainContent.id = \"main-content\";\n    locationTitle.innerHTML = \"Eberhardstrasse 47<br> Stuttgart\";\n    ramenImg.src = \"/src/assets/kaido-ramen.jpeg\";\n    ramenImg.alt = \"Ramen Image\";\n    scheduleTitle.innerHTML = \"12:00 to 0:00<br /> Every day\";\n\n    mainContent.append(locationTitle, ramenImg, scheduleTitle);\n\n    mainContent.style.marginTop = \"0\";\n\n    return mainContent;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/HomeContent.js?");

/***/ }),

/***/ "./src/pages/MenuItem.js":
/*!*******************************!*\
  !*** ./src/pages/MenuItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuItem\": () => (/* binding */ MenuItem)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\n\nconst MenuItem = (title, price, description) => {\n\n    const itemContainer = document.createElement(\"div\");\n\n    itemContainer.classList.add(\"item__container\");\n\n    const itemTitle = document.createElement(\"h3\");\n\n    itemTitle.classList.add(\"item__title\");\n\n    itemTitle.innerHTML = title; \n    \n    const itemDescription = document.createElement(\"h3\");\n\n    itemDescription.classList.add(\"item__description\");\n\n    itemDescription.innerHTML = description; \n\n    const itemPrice = document.createElement(\"h4\");\n\n    itemPrice.classList.add(\"item__price\");\n\n    itemPrice.innerHTML = price;\n\n    itemContainer.append(itemTitle, itemPrice, itemDescription);\n\n    return itemContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/MenuItem.js?");

/***/ }),

/***/ "./src/pages/chef.js":
/*!***************************!*\
  !*** ./src/pages/chef.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chef\": () => (/* binding */ chef)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _ChefParagraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChefParagraph */ \"./src/pages/ChefParagraph.js\");\n \n\n\nconst chef = () => {\n\n    const chefContainer = document.createElement(\"div\");\n    chefContainer.classList.add(\"chef-container\");\n\n    const bigTitle = document.createElement(\"h2\");\n    bigTitle.innerHTML = \"Classically trained in the art of kaiseki, Chef Sakamoto decided to leap into the world of ramen with his latest venture, Kaido Ramen.\";\n\n    const firstImage = document.createElement(\"img\");\n    firstImage.src = \"../src/assets/chef01.jpeg\";\n    firstImage.classList.add(\"chef__image\"); \n    \n    const secondImage = document.createElement(\"img\"); \n    secondImage.src = \"../src/assets/chef02.jpeg\"; \n    secondImage.classList.add(\"chef__image\");  \n    \n    const thirdImage = document.createElement(\"img\"); \n    thirdImage.src = \"../src/assets/chef03.jpg\"; \n    thirdImage.classList.add(\"chef__image\");\n    \n    const fourthImage = document.createElement(\"img\");\n    fourthImage.src = \"../src/assets/chef04.jpeg\";\n    fourthImage.id = \"chef__ramen\";\n\n    const firstParagraph = (0,_ChefParagraph__WEBPACK_IMPORTED_MODULE_1__.ChefParagraph)(\"SAPPORO, JP\", \"The Beginning\", \"1972\", \"Daichi Sakamoto started cooking at age five, helping his mother prepare bentos for his father, younger sister, and himself. Chashu was never a missing component. Mother Sakamoto had learned how to make it when she studied abroad in Hong Kong. It was young Chef Sakamoto who mixed the marinade, a formula he perfected as he grew into his teens. <br /> <br /> Many years later, he apprenticed under famed Chef Kazue Inoue at a luxury ryokan in the Nagano prefecture. There, he studied the art of kaiseki for seven years, and took a particular shine to the futamono and tome-wan soup-based dishes. His calling was starting to simmer.\" )\n    const secondParagraph = (0,_ChefParagraph__WEBPACK_IMPORTED_MODULE_1__.ChefParagraph)(\"TOKYO, JP\", \"The First Venture\", \"1998\", \"After saving his wages from the Nagano apprenticeship, Chef Sakamoto took out a loan and opened Chotto Kai, his first restaurant in Tokyo. Using simple, seasonal ingredients, he was able to bring the luxury of kaiseki to all. Because he incorporated some of the Hong Kong flavors his mother had inspired in him, Chotto Kai was both a huge success and a unique contribution to Tokyos culinary landscape. <br /> <br /> During his eighth year at Chotto Kai, he befriended ramen shop owner Rei Fukui. Chef Sakamoto had stopped by her front stall for a quick dinner and fell instantly in love with her take on the springy yet soft noodle. Every ingredient was meticulously prepared, just like each kaiseki course.\" )\n    const thirdParagraph = (0,_ChefParagraph__WEBPACK_IMPORTED_MODULE_1__.ChefParagraph)(\"HONG KONG\", \"A New Challenge\", \"2016\", \"Chef Sakamoto implored chef Fukui to share her methods. She said that she would only teach him the basics if he promised to bring the art of ramen abroad. He brought the proposition to his family, and his mother immediately urged him to go to Hong Kong. <br /> <br /> The next week, Chef Sakamoto flew to the ???Pearl City??? and discovered that he felt more at home than ever. He knew that he could meld the umami flavors and smoky scents of Cantonese cuisine with the richness and nuances of ramen. He went back to Tokyo to learn from Chef Fukui, and with her blessing, returned to Hong Kong seven years later.\" )\n\n    chefContainer.append(bigTitle, firstImage, firstParagraph, secondImage, secondParagraph, thirdImage, thirdParagraph, fourthImage);\n\n    return chefContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/chef.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/pages/menu.js\");\n\n\n\nconst home = () => {\n\n    const superContainer = document.createElement(\"div\");\n    superContainer.classList.add(\"main-container\");\n\n    //----------------NAVBAR-------------------//\n    const navbar = document.createElement(\"div\");\n\n    navbar.classList.add(\"Navbar\"); \n\n    // Navbar Left elements\n    const navLeft = document.createElement(\"nav\");\n    const navLeft__links = document.createElement(\"ul\");\n    const linkHome_Container = document.createElement(\"li\");\n    const linkHome = document.createElement(\"button\");\n    const linkMenu_Container = document.createElement(\"li\");\n    const linkMenu = document.createElement(\"button\");\n    const linkChef_Container = document.createElement(\"li\");\n    const linkChef= document.createElement(\"button\");\n    // add Classes\n    navLeft.classList.add(\"nav__links\"); \n    navLeft.id = \"nav__left\"; \n    linkHome.innerHTML = \"HOME\";\n    linkMenu.innerHTML = \"MENU\";\n    linkChef.innerHTML = \"CHEF\";\n\n    // Add Button ID\n    linkHome.id = \"homeBtn\";\n    linkMenu.id = \"menuBtn\";\n    linkChef.id = \"chefBtn\";\n\n    // append elements\n    navLeft.append(navLeft__links);\n    navLeft__links.append(linkHome_Container, linkMenu_Container, linkChef_Container);\n    linkHome_Container.append(linkHome);\n    linkMenu_Container.append(linkMenu);\n    linkChef_Container.append(linkChef);\n\n    // Logo\n    const logo = document.createElement(\"img\");\n    logo.src = \"/src/assets/logo.svg\";\n    logo.alt = \"Kaido Ramen Logo\";\n\n    // Navbar Right Elements\n    const navRight = document.createElement(\"nav\");\n    const navRight__links = document.createElement(\"ul\");\n    const linkReservations_Container = document.createElement(\"li\");\n    const linkReservations = document.createElement(\"button\");\n    const linkLocation_Container = document.createElement(\"li\");\n    const linkLocation = document.createElement(\"button\");\n    \n    // add Classes\n    navRight.classList.add(\"nav__links\"); \n    navRight.id = \"nav__right\"; \n    linkReservations.innerHTML = \"RESERVATIONS\";\n    linkLocation.innerHTML = \"LOCATION\";\n\n    linkReservations.id = \"reservationsBtn\";\n    linkLocation.id = \"locationBtn\";\n      // Add links\n\n    // append elements\n    navRight.append(navRight__links);\n    navRight__links.append(linkReservations_Container, linkLocation_Container);\n    linkReservations_Container.append(linkReservations);\n    linkLocation_Container.append(linkLocation);\n\n    // Append the big elements to the Navbar\n    navbar.append(navLeft, logo, navRight);\n\n    //-----------MAIN CONTENT-------------------// \n    const mainContent = document.createElement(\"div\");\n    const locationTitle = document.createElement(\"h1\");\n    const ramenImg = document.createElement(\"img\");\n    const scheduleTitle = document.createElement(\"h1\");\n\n    mainContent.id = \"main-content\";\n    locationTitle.innerHTML = \"Eberhardstrasse 47<br> Stuttgart\";\n    ramenImg.src = \"/src/assets/kaido-ramen.jpeg\";\n    ramenImg.alt = \"Ramen Image\";\n    ramenImg.id = \"ramen__image\";\n    scheduleTitle.innerHTML = \"12:00 to 0:00<br /> Every day\";\n\n    mainContent.append(locationTitle, ramenImg, scheduleTitle);\n\n    //------------------------FOOTER--------------------------//\n    const footer = document.createElement(\"footer\");\n\n    // Footer Navbar\n\n    const footerNav = document.createElement(\"nav\");\n    const footer__links = document.createElement(\"ul\");\n    const footer__links__home = document.createElement(\"li\");\n    const footer__home = document.createElement(\"button\");\n    const footer__links__chef = document.createElement(\"li\");\n    const footer__chef = document.createElement(\"button\");\n    const footer__links__reservations = document.createElement(\"li\");\n    const footer__reservations= document.createElement(\"button\");\n    const footer__links__location = document.createElement(\"li\");\n    const footer__location = document.createElement(\"button\");\n\n    footerNav.id = \"footer__nav\"; \n    footer__home.innerHTML = \"HOME\";\n    footer__chef.innerHTML = \"CHEF\";\n    footer__reservations.innerHTML = \"RESERVATIONS\";\n    footer__location.innerHTML = \"LOCATION\";\n     \n\n    footerNav.append(footer__links);\n    footer__links.append(footer__links__home, footer__links__chef, footer__links__reservations, footer__links__location);\n    footer__links__home.append(footer__home);\n    footer__links__chef.append(footer__chef);\n    footer__links__reservations.append(footer__reservations);\n    footer__links__location.append(footer__location);\n\n    // Final details\n    const number = document.createElement(\"h3\");\n    const poweredBy = document.createElement(\"h5\");\n    const inspiredBy = document.createElement(\"h5\");\n    const developedBy = document.createElement(\"h5\");\n\n    number.innerHTML = \"+34 659  771 594\";\n    poweredBy.innerHTML = \"Powered by <a href='https://www.theodinproject.com/'>The Odin Project</a>\";\n    inspiredBy.innerHTML = \"Inspired by <a href='https://motto-demo.squarespace.com/'>Chotto Motto</a>\";\n    developedBy.innerHTML = \"Developed by Julen Diaz\";\n\n    developedBy.id = \"developedBy\";\n\n    footer.append(footerNav, number, poweredBy, inspiredBy, developedBy);\n\n    //--------------------FINAL APPEND------------------//\n    superContainer.append(navbar, mainContent, footer);\n\n    //------------------PAGE-CHANGE----------------// \n\n    //  linkM.addEventListener(\"click\", function () {\n    //    superContainer.classList.add(\"hide\");\n    //    // content.appendChild(Menu());\n    //    console.log(\"Hole ke ase\");\n    //  })\n\n    return superContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ \"./src/pages/MenuItem.js\");\n\n\n\nconst Menu = () => {\n\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menu__container\");\n    \n    const smallPlates = document.createElement(\"h1\");\n    smallPlates.classList.add(\"menu__title\");\n    smallPlates.innerHTML = \"SMALL PLATES\";\n    smallPlates.id = \"small-plates\";\n\n    const gyoza = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"GYOZA\", \"2 eur\", \"Pan-fried pork and cabbage dumplings\"); \n    const bao = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"BAO\", \"3 eur\", \"Braised pork belly, cucumber, hoisin\");\n    const shishito = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"SHISHITO\", \"2 eur\", \"Seared shishito peppers with salt\");\n    const takoyaki = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"TAKOYAKI\", \"2 eur\", \"Seared shishito peppers with salt\");\n    \n    const ramen = document.createElement(\"h1\");\n    ramen.classList.add(\"menu__title\");\n    ramen.innerHTML = \"RAMEN\";\n\n    const shio = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"SHIO\", \"5 eur\", \"Salt broth, chasu, scaillion, egg, nori, straight noodles\"); \n    const miso = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"MISO\", \"7 eur\", \"Miso broth, chashu, corn, bamboo, egg, scallion, nori, curly noodles\");\n    const shoyu = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"SHOYU\", \"6 eur\", \"Soy broth, chashu, scallion, egg, nori, curly noodles\");\n    const tonkotsu = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"TONKOTSU\", \"8 eur\", \"Pork broth, chashu, bamboo, scallion, egg, nori, sesame oil, straight noodles\");\n    \n    const addOns = document.createElement(\"h1\");\n    addOns.classList.add(\"menu__title\");\n    addOns.innerHTML = \"+ ADD-ONS\"\n    const toppings = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"TOPPINGS\", \"0.3 eur\", \"Scallion, sesame seeds, chili oil, nori, beni shoga, garlic paste\"); \n    const vegetables = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"VEGETABLES\", \"0.5 eur\", \"Bean sprouts, bok choy, spinach, enoki, bamboo, cabbage, corn\");\n    const protein = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"PROTEIN\", \"0.7 eur\", \"Poached egg, soft-boiled egg, chashu, chicken, tofu, naruto\");\n    const starch = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"STARCH\", \"1 eur\", \"Extra noodles\");\n\n    const drinks = document.createElement(\"h1\");\n    drinks.classList.add(\"menu__title\");\n    drinks.innerHTML = \"DRINKS\"\n    const sake = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"SAKE\", \"8 eur\", \"Junmai daiginjo-shu\"); \n    const beer = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"BEER\", \"4 eur\", \"Komugi\");\n    const umeshu = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"UMESHU\", \"8 eur\", \"Plum wine\");\n    const aperol = (0,_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem)(\"APEROL SPRITZ\", \"3 eur\", \"Prosecco, aperol, tonic, yuzu\");\n\n    aperol.style.marginBottom = \"2em\";\n    \n    menuContainer.append(smallPlates, gyoza, bao, shishito, takoyaki);\n    menuContainer.append(ramen, shio, miso, shoyu, tonkotsu);\n    menuContainer.append(addOns, toppings, vegetables, protein, starch);\n    menuContainer.append(drinks, sake, beer, umeshu, aperol);\n\n    return menuContainer;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/reservations.js":
/*!***********************************!*\
  !*** ./src/pages/reservations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Reservations\": () => (/* binding */ Reservations)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\n\nconst Reservations = () => {\n\n    const reservationsContainer = document.createElement(\"div\");\n\n\n    const mobilePhone = document.createElement(\"h1\");\n    mobilePhone.classList.add(\"mobile-phone\");\n    mobilePhone.innerHTML = \"+34 659771594\";\n\n    const reservationText = document.createElement(\"p\");\n    reservationText.innerHTML = \"Please inquire about reservations at least two weeks in advance by using the form below. For reservations within the coming week, or for parties larger than four, please call us at the number listed above. We will call you to confirm your reservation at least 24 hours prior to your reservation.\"\n    reservationText.classList.add(\"reservations-text\");\n\n    reservationsContainer.append(mobilePhone, reservationText);\n\n    return reservationsContainer;\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/reservations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;