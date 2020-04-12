/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/tableData.json":
/*!*****************************!*\
  !*** ./data/tableData.json ***!
  \*****************************/
/*! exports provided: columns, rows, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"columns\\\":[\\\"name\\\",\\\"surname\\\",\\\"age\\\"],\\\"rows\\\":[[\\\"Katya\\\",\\\"Petrova\\\",\\\"21\\\"],[\\\"Masha\\\",\\\"Ivanova\\\",\\\"25\\\"],[\\\"Pavel\\\",\\\"Ostapov\\\",\\\"20\\\"],[\\\"Petr\\\",\\\"Rozhkov\\\",\\\"77\\\"],[\\\"Anton\\\",\\\"Scherbakov\\\",\\\"22\\\"]]}\");\n\n//# sourceURL=webpack:///./data/tableData.json?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_tableData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/tableData.json */ \"./data/tableData.json\");\nvar _data_tableData_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/tableData.json */ \"./data/tableData.json\", 1);\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const dynamicTable = document.getElementById(\"dynamic-table\");\n  const columns = _data_tableData_json__WEBPACK_IMPORTED_MODULE_0__.columns;\n  const rows = _data_tableData_json__WEBPACK_IMPORTED_MODULE_0__.rows;\n  const columnsHead = document.createElement(\"tr\");\n  columns.forEach(column => {\n    const columnHead = document.createElement(\"th\");\n    columnsHead.append(column);\n    columnsHead.append(columnHead);\n  });\n  dynamicTable.append(columnsHead);\n  rows.forEach(row => {\n    const rowEl = document.createElement(\"tr\");\n    row.forEach(cell => {\n      const cellEl = document.createElement(\"td\");\n      cellEl.append(cell);\n      rowEl.append(cellEl);\n    });\n    dynamicTable.append(rowEl);\n  });\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });