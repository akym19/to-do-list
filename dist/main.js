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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n\t--dark-font: #0c0c0f;\r\n\t--white-font: #f5f5fa;\r\n\t--main: #ff8080;\r\n\t--second: #ffcf96;\r\n\t--third: #f6fdc3;\r\n\t--fourth: #cdfad5;\r\n\t--prio-low: green;\r\n\t--prio-med: orange;\r\n\t--prio-high: red;\r\n}\r\n\r\n* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n\t/* background-color: #ffdee9;\r\n\tbackground-image: linear-gradient(180deg, #ffdee9 0%, #b5fffc 100%); */\r\n\theight: 100vh;\r\n\twidth: auto;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 0.9fr 3fr;\r\n\tgrid-template-rows: max-content auto 30px;\r\n\tgrid-template-areas:\r\n\t\t\"header header\"\r\n\t\t\"side-nav main\"\r\n\t\t\"footer footer\";\r\n}\r\n\r\nheader {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 10px;\r\n\tpadding-left: 3vw;\r\n\tpadding-right: 2vw;\r\n\theight: max-content;\r\n\tbackground-color: var(--second);\r\n\tgrid-area: header;\r\n}\r\n\r\nheader #logo {\r\n\theight: 50px;\r\n}\r\n\r\nheader #title {\r\n\tfont-size: clamp(20px, 3vw, 50px);\r\n\tfont-weight: 700;\r\n\tcolor: var(--dark-font);\r\n}\r\n\r\nheader #user-greet {\r\n\tfont-size: clamp(15px, 1.5vw, 40px);\r\n\tcolor: var(--dark-font);\r\n\tfont-weight: 500;\r\n}\r\n\r\nnav {\r\n\tgrid-area: side-nav;\r\n\tbackground-color: var(--third);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\nnav li {\r\n\tbackground-color: var(--fourth);\r\n\tlist-style-type: none;\r\n}\r\n\r\nnav #main-projects {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n\tmargin-top: 10%;\r\n}\r\n\r\nnav #main-projects h1 {\r\n\tfont-size: clamp(12px, 2vw, 50px);\r\n\tfont-weight: 700;\r\n}\r\n\r\n#main-projects li {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 8.5px;\r\n\tpadding-left: 2vw;\r\n\tgap: 1vw;\r\n\twidth: 20vw;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#main-projects #nav-projects {\r\n\tcursor: default;\r\n}\r\n\r\n#main-projects li:hover:not(:last-child),\r\nnav #projects li:hover {\r\n\tbackground-color: var(--second);\r\n\tcursor: pointer;\r\n\tscale: 1.05;\r\n\ttransition: all 0.5s;\r\n}\r\n\r\nnav #projects {\r\n\talign-self: flex-start;\r\n\tpadding-left: 5vw;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n\tmargin-top: 5%;\r\n}\r\n\r\nnav #projects li {\r\n\tpadding: 8.5px;\r\n\tborder-radius: 5px;\r\n\twidth: 15vw;\r\n}\r\n\r\nnav #projects h2 {\r\n\tfont-size: clamp(10px, 1.5vw, 40px);\r\n\tfont-weight: 600;\r\n}\r\n\r\nnav li img {\r\n\tmax-width: 15%;\r\n}\r\n\r\n#add-project-btn {\r\n\tfont-size: 2vw;\r\n}\r\n\r\n#add-project {\r\n\talign-self: flex-start;\r\n\tmargin-top: 15%;\r\n\tmargin-left: 2vw;\r\n\tbox-shadow: 17px 17px 34px #bebebe;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n#add-project button {\r\n\tfont-size: 4vw;\r\n\tfont-weight: 600;\r\n\theight: 4vw;\r\n\twidth: 4vw;\r\n\tborder-radius: 50%;\r\n\tborder: none;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: var(--dark-font);\r\n\tbackground-color: var(--main);\r\n}\r\n\r\n#add-project button:hover {\r\n\tscale: 1.1;\r\n\ttransform: rotate(90deg);\r\n\ttransition: all 0.5s;\r\n}\r\n\r\nmain {\r\n\tgrid-area: main;\r\n\tbackground-color: var(--main);\r\n\tpadding: 50px;\r\n}\r\n\r\nfooter {\r\n\tbackground-color: var(--fourth);\r\n\tgrid-area: footer;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tfont-size: clamp(10px, 2vw, 1em);\r\n}\r\n\r\n#todo-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 10px;\r\n}\r\n\r\n.todo {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tbackground-color: var(--second);\r\n\theight: 3em;\r\n\tpadding-left: 10px;\r\n\tpadding-right: 10px;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.todo-title {\r\n\tfont-size: clamp(12px, 1.2vw, 40px);\r\n\tflex: 0.8;\r\n}\r\n\r\n/* checkbox from uiverse.io */\r\n\r\ninput[type=\"checkbox\"] {\r\n\tappearance: none;\r\n\twidth: 30px;\r\n\taspect-ratio: 1;\r\n\tborder-radius: 8px;\r\n\tborder: 2px solid black;\r\n\tposition: relative;\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\ninput[type=\"checkbox\"]:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"]::before {\r\n\tfont-family: \"Quicksand\", sans-serif;\r\n\tposition: absolute;\r\n\tbottom: -6px;\r\n\tleft: 1px;\r\n\tcontent: \"✔\";\r\n\tfont-size: 30px;\r\n\tcolor: var(--dark-font);\r\n\ttransform: scale(0);\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::before {\r\n\tanimation: zoom 0.5s ease-in-out;\r\n\ttransform: scale(1);\r\n}\r\n\r\n@keyframes zoom {\r\n\t0% {\r\n\t\ttransform: scale(0);\r\n\t}\r\n\r\n\t20% {\r\n\t\ttransform: scale(1.5);\r\n\t}\r\n\r\n\t40% {\r\n\t\ttransform: scale(0.5);\r\n\t}\r\n\r\n\t50% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\r\n\t70% {\r\n\t\ttransform: scale(1.2);\r\n\t}\r\n\r\n\t90% {\r\n\t\ttransform: scale(0.8);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n\r\n/* -------------------------------- */\r\n\r\n.todo:hover {\r\n\tbox-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);\r\n\ttransition: all 0.3s;\r\n\tcursor: default;\r\n}\r\n\r\n.todo.prio-low {\r\n\tborder-left: solid 5px var(--prio-low);\r\n}\r\n\r\n.todo.prio-med {\r\n\tborder-left: solid 5px var(--prio-med);\r\n}\r\n\r\n.todo.prio-high {\r\n\tborder-left: solid 5px var(--prio-high);\r\n}\r\n\r\n.todo-duedate {\r\n\tfont-size: clamp(12px, 0.8vw, 40px);\r\n}\r\n\r\n.todo-details {\r\n\tborder: solid 1px black;\r\n\twidth: clamp(80px, 2vw, 2vw);\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n\tpadding-left: 10px;\r\n\tpadding-right: 10px;\r\n\tborder-radius: 5px;\r\n\ttext-transform: uppercase;\r\n\tbackground-color: transparent;\r\n\t/* margin-left: 40%; */\r\n\tfont-size: clamp(12px, 0.8vw, 40px);\r\n}\r\n\r\n.todo-details:hover {\r\n\tbackground-color: var(--main);\r\n\ttransition: all 0.2s;\r\n\tcursor: pointer;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.todo-edit img,\r\n.todo-delete img {\r\n\tmax-width: 25px;\r\n}\r\n\r\n.todo-edit img:hover,\r\n.todo-delete img:hover {\r\n\tscale: 1.1;\r\n\tcursor: pointer;\r\n\ttransition: all 0.2s;\r\n}\r\n\r\n.todo-edit img:hover {\r\n\tfilter: invert(66%) sepia(54%) saturate(4108%) hue-rotate(78deg)\r\n\t\tbrightness(112%) contrast(140%);\r\n}\r\n\r\n.todo-delete img:hover {\r\n\tfilter: invert(41%) sepia(92%) saturate(7396%) hue-rotate(353deg)\r\n\t\tbrightness(97%) contrast(129%);\r\n}\r\n\r\n/* ---------------------CREATE NEW PROJECT OR TODO MODAL--------------------- */\r\n\r\n#addTaskModal {\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tpadding: 8px;\r\n\tbackground-color: white;\r\n\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 4fr;\r\n\tgrid-template-rows: 1fr 7fr;\r\n\tgrid-template-areas:\r\n\t\t\"modalHeader modalHeader\"\r\n\t\t\"modalSideNav modalForm\";\r\n\theight: 50vh;\r\n\twidth: 50vw;\r\n\r\n\tborder: solid 1px black;\r\n}\r\n\r\n#modalHeader {\r\n\tgrid-area: modalHeader;\r\n\tbackground-color: var(--second);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: flex-end;\r\n\tposition: relative;\r\n}\r\n\r\n#modalHeader h1 {\r\n\tmargin-right: 40%;\r\n}\r\n\r\n#modalHeader img {\r\n\tposition: absolute;\r\n\theight: 25px;\r\n\tright: 1%;\r\n}\r\n\r\n#modalHeader img:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n#modalSideNav {\r\n\tgrid-area: modalSideNav;\r\n\tbackground-color: var(--third);\r\n}\r\n\r\n#modalSideNav ul {\r\n\tmargin-top: 10px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 10px;\r\n}\r\n\r\n#modalSideNav li {\r\n\tlist-style-type: none;\r\n}\r\n\r\n#modalSideNav button {\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n}\r\n\r\n#modalSideNav button:hover {\r\n\tscale: 1.1;\r\n\tcursor: pointer;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n#modalForm {\r\n\tgrid-area: modalForm;\r\n\tbackground-color: var(--main);\r\n\theight: 100%;\r\n}\r\n\r\n#modalForm #formContainer {\r\n\tmargin-top: 10px;\r\n\tmargin-left: 10px;\r\n\theight: 100%;\r\n}\r\n\r\n#formContainer #newProject {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\theight: 100%;\r\n}\r\n\r\n#formContainer #newTask {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\theight: 100%;\r\n}\r\n\r\n#formContainer #newTodoText {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\nform #projectTitle,\r\nform #taskTitle {\r\n\tfont-size: 1.6rem;\r\n}\r\n\r\nform #taskDetails {\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\nform input[type=\"text\"] {\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tresize: none;\r\n}\r\n\r\nform input[type=\"text\"]:focus {\r\n\toutline: none;\r\n}\r\n\r\n#formContainer button {\r\n\tmargin-bottom: 3%;\r\n\tfont-size: 1.1rem;\r\n\twidth: max-content;\r\n\tpadding: 0.1rem 0.3rem;\r\n\tbackground-color: var(--third);\r\n\tborder: none;\r\n\tborder-radius: 0.3rem;\r\n}\r\n\r\n#formContainer button:hover {\r\n\tbackground-color: var(--fourth);\r\n\tcursor: pointer;\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n#newTodoBtns {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n#newTodoBtns #newToDoDate {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n#newToDoDate input[type=\"date\"] {\r\n\tbackground-color: transparent;\r\n\tborder-radius: 0.3rem;\r\n\tbox-shadow: none;\r\n\tborder: 1px solid var(--dark-font);\r\n\tpadding: 0.2rem 0.5rem;\r\n}\r\n\r\n#prioritySelect {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n}\r\n\r\n#prioritySelect h2 {\r\n\tmargin-right: 1.3rem;\r\n}\r\n\r\n/* ----------RADIO BUTTONS START---------- */\r\n\r\ninput[type=\"radio\"] {\r\n\tdisplay: none;\r\n}\r\n\r\n#prioritySelect label {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n\tpadding: 0.1rem 0.5rem;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label[for=\"low\"],\r\ninput[type=\"radio\"] + label[for=\"low\"]:hover {\r\n\tbackground-color: var(--prio-low);\r\n\tcolor: var(--white-font);\r\n\tfont-weight: 500;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label[for=\"medium\"],\r\ninput[type=\"radio\"] + label[for=\"medium\"]:hover {\r\n\tbackground-color: var(--prio-med);\r\n\tcolor: var(--white-font);\r\n\tfont-weight: 500;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label[for=\"high\"],\r\ninput[type=\"radio\"] + label[for=\"high\"]:hover {\r\n\tbackground-color: var(--prio-high);\r\n\tcolor: var(--white-font);\r\n\tfont-weight: 500;\r\n}\r\n\r\ninput[type=\"radio\"]:checked + label,\r\ninput[type=\"radio\"] + label {\r\n\ttransition: all 0.3s;\r\n\tcursor: pointer;\r\n}\r\n\r\n/* ----------RADIO BUTTONS END---------- */\r\n\r\n/* ----------HIDDEN NEW TASK FORM---------- */\r\n#modalForm #newProject {\r\n\tdisplay: none;\r\n}\r\n/* ----------HIDDEN NEW TASK FORM---------- */\r\n\r\n/* * {\r\n\toutline: solid 1px black;\r\n} */\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-top/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-top/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/homepage */ \"./src/js/homepage.js\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _js_sampleDB_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/sampleDB.json */ \"./src/js/sampleDB.json\");\n\r\n\r\n\r\n\r\n(0,_js_homepage__WEBPACK_IMPORTED_MODULE_0__.generateHomepage)();\r\n\r\nconsole.log(_js_sampleDB_json__WEBPACK_IMPORTED_MODULE_2__);\r\n\n\n//# sourceURL=webpack://to-do-list-top/./src/index.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElem: () => (/* binding */ createElem),\n/* harmony export */   generateFooter: () => (/* binding */ generateFooter)\n/* harmony export */ });\nconst createElem = (type, attributes = {}) => {\r\n\tconst elem = document.createElement(type);\r\n\r\n\tfor (const attr in attributes) {\r\n\t\tif (attributes.hasOwnProperty(attr)) {\r\n\t\t\telem.setAttribute(attr, attributes[attr]);\r\n\t\t}\r\n\t}\r\n\treturn elem;\r\n};\r\n\r\nconst generateFooter = () => {\r\n\tconst pageFooter = createElem(\"footer\", {});\r\n\tpageFooter.textContent = \"A To-Do List App Project for The Odin Project\";\r\n\treturn pageFooter;\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list-top/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/homepage.js":
/*!****************************!*\
  !*** ./src/js/homepage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHomepage: () => (/* binding */ generateHomepage)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n\r\n\r\n\r\nconst sideNavContents = [\r\n\t{\r\n\t\titem: \"Home\",\r\n\t\tid: \"nav-home\",\r\n\t\timg: \"./images/home.png\",\r\n\t},\r\n\t{\r\n\t\titem: \"Today\",\r\n\t\tid: \"nav-today\",\r\n\t\timg: \"./images/today.png\",\r\n\t},\r\n\t{\r\n\t\titem: \"Week\",\r\n\t\tid: \"nav-week\",\r\n\t\timg: \"./images/week.png\",\r\n\t},\r\n\t{\r\n\t\titem: \"Projects\",\r\n\t\tid: \"nav-projects\",\r\n\t\timg: \"./images/projects.png\",\r\n\t},\r\n];\r\n\r\nconst generateNav = (navItem) => {\r\n\tconst nav = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"li\", {\r\n\t\tid: navItem.id,\r\n\t});\r\n\r\n\tconst navIcon = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"img\", {\r\n\t\tsrc: navItem.img,\r\n\t\talt: navItem.item,\r\n\t});\r\n\r\n\tconst navH1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"h1\", {});\r\n\tnavH1.textContent = navItem.item;\r\n\r\n\tnav.appendChild(navIcon);\r\n\tnav.appendChild(navH1);\r\n\r\n\treturn nav;\r\n};\r\n\r\nconst homepage = () => {\r\n\tconst body = document.body;\r\n\r\n\tconst header = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"header\", {});\r\n\r\n\tconst logo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"img\", {\r\n\t\tid: \"logo\",\r\n\t\tsrc: \"./images/to-do-logo-black.png\",\r\n\t\talt: \"Logo\",\r\n\t});\r\n\r\n\tconst doBetter = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"h1\", {\r\n\t\tid: \"title\",\r\n\t});\r\n\tdoBetter.textContent = \"Do Better\";\r\n\r\n\tconst greetUser = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"p\", {\r\n\t\tid: \"user-greet\",\r\n\t});\r\n\tgreetUser.textContent = \"Hello, user\";\r\n\r\n\theader.appendChild(logo);\r\n\theader.appendChild(doBetter);\r\n\theader.appendChild(greetUser);\r\n\r\n\tbody.appendChild(header);\r\n\r\n\tconst sideNav = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"nav\", {\r\n\t\tid: \"side-nav\",\r\n\t});\r\n\r\n\tconst mainProj = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createElem)(\"ul\", {\r\n\t\tid: \"main-projects\",\r\n\t});\r\n\r\n\tsideNavContents.forEach((navItem) => {\r\n\t\tconst li = generateNav(navItem);\r\n\t\tmainProj.appendChild(li);\r\n\t});\r\n\r\n\tsideNav.appendChild(mainProj);\r\n\tbody.appendChild(sideNav);\r\n\r\n\tconst pageFooter = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.generateFooter)();\r\n\tbody.appendChild(pageFooter);\r\n};\r\n\r\nconst generateHomepage = () => {\r\n\tdocument.title = \"Do Better\";\r\n\thomepage();\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list-top/./src/js/homepage.js?");

/***/ }),

/***/ "./src/js/sampleDB.json":
/*!******************************!*\
  !*** ./src/js/sampleDB.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"projects\":[{\"title\":\"Work\",\"tasks\":[{\"taskTitle\":\"Work Task Title 1\",\"taskDetail\":\"Work Task Detail 1\",\"taskPriority\":\"low\",\"taskDueDate\":\"01/01/01\"},{\"taskTitle\":\"Work Task Title 2\",\"taskDetail\":\"Work Task Detail 2\",\"taskPriority\":\"medium\",\"taskDueDate\":\"01/01/01\"},{\"taskTitle\":\"Work Task Title 2\",\"taskDetail\":\"Work Task Detail 2\",\"taskPriority\":\"high\",\"taskDueDate\":\"01/01/01\"}]},{\"title\":\"School\",\"tasks\":[{\"taskTitle\":\"School Task Title 1\",\"taskDetail\":\"School Task Detail 1\",\"taskPriority\":\"low\",\"taskDueDate\":\"01/01/01\"},{\"taskTitle\":\"School Task Title 2\",\"taskDetail\":\"School Task Detail 2\",\"taskPriority\":\"medium\",\"taskDueDate\":\"01/01/01\"},{\"taskTitle\":\"School Task Title 2\",\"taskDetail\":\"School Task Detail 2\",\"taskPriority\":\"high\",\"taskDueDate\":\"01/01/01\"}]},{\"title\":\"Personal\",\"tasks\":[{\"taskTitle\":\"Personal Task Title 1\",\"taskDetail\":\"Personal Task Detail 1\",\"taskPriority\":\"low\",\"taskDueDate\":\"01/01/01\"},{\"taskTitle\":\"Personal Task Title 2\",\"taskDetail\":\"Personal Task Detail 2\",\"taskPriority\":\"medium\",\"taskDueDate\":\"01/01/01\"},{\"taskTitle\":\"Personal Task Title 2\",\"taskDetail\":\"Personal Task Detail 2\",\"taskPriority\":\"high\",\"taskDueDate\":\"01/01/01\"}]}]}');\n\n//# sourceURL=webpack://to-do-list-top/./src/js/sampleDB.json?");

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