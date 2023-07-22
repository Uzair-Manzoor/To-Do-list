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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --primary: #d8e5f7;\r\n  --secondary: #d5dae4;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: var(--primary);\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  background-color: var(--secondary);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  padding-top: 12px;\r\n}\r\n\r\n.container > * {\r\n  border-bottom: 1px solid #8a8a8a40;\r\n  padding: 0 0.7em;\r\n}\r\n\r\n.title-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\ninput {\r\n  border-color: transparent;\r\n  padding: 0.7em;\r\n  outline: none;\r\n}\r\n\r\n.input-task {\r\n  width: 90%;\r\n  position: relative;\r\n}\r\n\r\n.input-field {\r\n  position: relative;\r\n  margin: 1em 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.input-field label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 1rem;\r\n  font-size: 16px;\r\n  color: #555;\r\n  pointer-events: none;\r\n  transition: 0.2s ease-out;\r\n}\r\n\r\n.input-field input:focus ~ label {\r\n  top: -20px;\r\n  left: 2px;\r\n  color: #777;\r\n  font-size: 14px;\r\n}\r\n\r\n#addBtn {\r\n  width: 11%;\r\n  font-size: 2rem;\r\n  position: absolute;\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n}\r\n\r\n.list-container-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n}\r\n\r\n.list-container-section li {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.7em;\r\n  padding: 0.5em;\r\n  border-bottom: 1px solid #c1c1c2;\r\n}\r\n\r\n.todo-list {\r\n  padding-left: 0;\r\n}\r\n\r\n.clear-completed {\r\n  width: 100%;\r\n  padding: 0.5em;\r\n}\r\n\r\n.clear-completed:hover {\r\n  background: rgb(104, 104, 106);\r\n  color: #f6f6f6;\r\n}\r\n\r\n.task i {\r\n  margin-left: auto;\r\n}\r\n\r\n.fa-ellipsis-vertical:hover {\r\n  cursor: move;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/taskFunctions.js */ \"./src/module/taskFunctions.js\");\n/* harmony import */ var _module_statusFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/statusFunctions.js */ \"./src/module/statusFunctions.js\");\n/* harmony import */ var _module_clearTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/clearTask.js */ \"./src/module/clearTask.js\");\n/* harmony import */ var _module_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/dragAndDrop.js */ \"./src/module/dragAndDrop.js\");\n\n\n\n\n\n\n\nconst todoListContainer = document.getElementById('todoList');\nconst addBtn = document.getElementById('addBtn');\nconst clearBtn = document.querySelector('.clear-completed');\n\nconst displayTasks = () => {\n  todoListContainer.textContent = '';\n  _module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.tasks.forEach((task, index) => {\n    todoListContainer.innerHTML += `\n      <li class=\"task\" draggable=\"true\" data-index=\"${index}\">\n        <div class=\"checkbox-container\">\n          <input type=\"checkbox\" name=\"${task.description}\" ${task.completed ? 'checked' : ''}>\n          <input type=\"text\" value=\"${task.description}\" readonly>\n        </div>\n        <i class=\"fas fa-ellipsis-vertical\" data-index=\"${index}\"></i>\n      </li>\n    `;\n  });\n\n  const addedTasks = document.querySelectorAll('.task');\n\n  const checkboxContainers = document.querySelectorAll('.task > .checkbox-container > input[type=\"checkbox\"]');\n\n  checkboxContainers.forEach((checkbox) => {\n    const inputText = checkbox.nextElementSibling;\n    let previousState = checkbox.checked;\n\n    inputText.readOnly = true;\n\n    checkbox.addEventListener('change', (event) => {\n      const currentState = event.target.checked;\n\n      if (currentState !== previousState) {\n        const foundTask = _module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.tasks.find((task) => task.description === inputText.value);\n        if (foundTask) {\n          foundTask.completed = currentState;\n          (0,_module_statusFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.tasks.indexOf(foundTask), currentState);\n        }\n      }\n\n      previousState = currentState;\n    });\n  });\n\n  addedTasks.forEach((task, index) => {\n    const textInput = task.querySelector('input[type=\"text\"]');\n    task.addEventListener('dblclick', () => {\n      textInput.readOnly = false;\n      if (task.querySelector('.fa-ellipsis-vertical')) {\n        const ellipsisIcon = task.querySelector('.fa-ellipsis-vertical');\n        ellipsisIcon.classList.remove('fa-ellipsis-vertical');\n        ellipsisIcon.classList.add('fa-trash');\n        ellipsisIcon.addEventListener('click', () => {\n          (0,_module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(index);\n          displayTasks();\n        });\n      } else {\n        const trashIcon = task.querySelector('.fa-trash');\n        trashIcon.classList.remove('fa-trash');\n        trashIcon.classList.add('fa-ellipsis-vertical');\n        textInput.readOnly = true;\n      }\n    });\n\n    // Edit\n    textInput.addEventListener('input', () => {\n      const data = textInput.value.trim();\n      (0,_module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(data, index);\n    });\n\n    // Drag and drop\n    task.addEventListener('dragstart', _module_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__.dragStart);\n    task.addEventListener('dragover', _module_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__.dragOver);\n    task.addEventListener('drop', _module_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__.drop);\n  });\n};\n\nconst initializeTasks = () => {\n  document.addEventListener('DOMContentLoaded', displayTasks);\n};\n\nconst refreshPage = () => {\n  localStorage.removeItem('Tasks');\n  window.location.reload();\n};\n\nclearBtn.addEventListener('click', () => {\n  (0,_module_clearTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  displayTasks();\n});\n\ninitializeTasks();\naddBtn.addEventListener('click', () => {\n  const inputField = document.getElementById('input-task');\n  const taskDescription = inputField.value.trim();\n\n  // Check if the task description is not empty\n  if (taskDescription !== '') {\n    (0,_module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskDescription);\n    inputField.value = '';\n    displayTasks();\n  }\n});\ndocument.addEventListener('keypress', (e) => {\n  if (e.key === 'Enter') {\n    const inputField = document.getElementById('input-task');\n    const taskDescription = inputField.value.trim();\n\n    // Check if the task description is not empty\n    if (taskDescription !== '') {\n      (0,_module_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskDescription);\n      inputField.value = '';\n      displayTasks();\n    }\n  }\n});\ndocument.querySelector('.fa-arrows-rotate').addEventListener('click', refreshPage);\n// Add event listener to update the display\ndocument.addEventListener('updateDisplay', displayTasks);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/module/clearTask.js":
/*!*********************************!*\
  !*** ./src/module/clearTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/module/taskFunctions.js\");\n\n\nconst clearAllCompletedTasks = () => {\n  const filteredTasks = _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter((task) => !task.completed);\n  _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length = 0;\n  _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push(...filteredTasks);\n  (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.storeTasksToLocalStorage)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllCompletedTasks);\n\n//# sourceURL=webpack:///./src/module/clearTask.js?");

/***/ }),

/***/ "./src/module/dragAndDrop.js":
/*!***********************************!*\
  !*** ./src/module/dragAndDrop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dragOver: () => (/* binding */ dragOver),\n/* harmony export */   dragStart: () => (/* binding */ dragStart),\n/* harmony export */   drop: () => (/* binding */ drop)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/module/taskFunctions.js\");\n\n\nconst dragStart = (event) => {\n  event.dataTransfer.setData('text/plain', event.target.dataset.index);\n};\n\nconst dragOver = (event) => {\n  event.preventDefault();\n};\n\nconst drop = (event) => {\n  event.preventDefault();\n  const sourceIndex = parseInt(event.dataTransfer.getData('text/plain'), 10);\n  const targetIndex = parseInt(event.target.dataset.index, 10);\n\n  if (sourceIndex !== targetIndex) {\n    const [task] = _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(sourceIndex, 1);\n    _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(targetIndex, 0, task);\n    (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n    (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.storeTasksToLocalStorage)();\n\n    // Dispatch custom event to notify index.js to update the display\n    const updateDisplayEvent = new CustomEvent('updateDisplay');\n    document.dispatchEvent(updateDisplayEvent);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/module/dragAndDrop.js?");

/***/ }),

/***/ "./src/module/statusFunctions.js":
/*!***************************************!*\
  !*** ./src/module/statusFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/module/taskFunctions.js\");\n// statusUpdates.js\n\n\nconst updateStatus = (index, completed) => {\n  _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = completed;\n  (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.storeTasksToLocalStorage)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);\n\n//# sourceURL=webpack:///./src/module/statusFunctions.js?");

/***/ }),

/***/ "./src/module/taskFunctions.js":
/*!*************************************!*\
  !*** ./src/module/taskFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   sortTasks: () => (/* binding */ sortTasks),\n/* harmony export */   storeTasksToLocalStorage: () => (/* binding */ storeTasksToLocalStorage),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\nconst tasks = JSON.parse(localStorage.getItem('Tasks')) || [];\n\nconst storeTasksToLocalStorage = () => {\n  localStorage.setItem('Tasks', JSON.stringify(tasks));\n};\n\nconst sortTasks = () => {\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n};\n\nconst deleteTask = (index) => {\n  tasks.splice(index, 1);\n  tasks.forEach((task, newIndex) => {\n    task.index = newIndex + 1;\n  });\n  sortTasks();\n  storeTasksToLocalStorage();\n};\n\nconst editTask = (description, index) => {\n  tasks[index].description = description;\n  storeTasksToLocalStorage();\n};\n\nconst addTask = (taskDescription) => {\n  if (taskDescription.trim() !== '') {\n    const newTask = {\n      description: taskDescription,\n      completed: false,\n      index: tasks.length + 1,\n    };\n    tasks.push(newTask);\n    storeTasksToLocalStorage();\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/module/taskFunctions.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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