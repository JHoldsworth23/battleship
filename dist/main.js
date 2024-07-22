/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/AntonSC-Regular.ttf */ "./src/fonts/AntonSC-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/BebasNeue-Regular.ttf */ "./src/fonts/BebasNeue-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/image/explosion.png */ "./src/image/explosion.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'AntonSC';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

@font-face {
    font-family: 'Bebas Neue';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

:root {
    --primary-color: #1434A4;
    --secondary-color: #0F52BA;
    --font-color: #FEFEFE;
    --main-font: 'Bebas Neue';
}

body {
    font-family: var(--main-font);
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--secondary-color);
    color: var(--font-color);
    margin: 5vh auto;
}

.header {
    font-family: 'AntonSC';
    letter-spacing: 2.8px;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: default;
}

.header > img {
    position: relative;
    left: 4px;
    width: 58%;
    filter: invert(1);
}

.header > h1 {
    margin: -20px 0 0;
}

.content {
    background-color: var(--primary-color);
    height: 60vh;
    min-width: 100%;
    padding: 24px 0;
}

.message-box {
    width: 100%;
    margin: 0 auto;
}

.message {
    font-size: 1.8rem;
    letter-spacing: 1.5px;
    margin: 0;
}

.error {
    color: rgb(221, 75, 104);
}

.game-container {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 15px;
}

.instruction {
    position: absolute;
    top: 45%;
    left: 5%;
    font-size: 1.5rem;
    text-align: left;
    letter-spacing: 1.6px;
    line-height: 35px;
}

.underline {
    text-decoration: underline;
}

.grid {
    width: 400px;
    height: 400px;
    display: grid;
    grid-template: repeat(10, 1fr) / repeat(10, 1fr);
    border: 3px solid #000000;
    margin-top: 0;
}

.grid-cell {
    border: 1px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-cell:hover {
    background-color: var(--font-color);
    opacity: 0.6;
}

.hit {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #5c5c5c;
}

.miss::before {
    content: '●';
    font-size: 1.8rem;
    color: var(--font-color);
}

.ship {
    background-color: #696E6A;
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 25px 0 0;
}

#random-btn, #start-btn, #reset-btn {
    font-family: var(--main-font);
    font-size: 1.4rem;
    letter-spacing: 1px;
    color: var(--primary-color);
    background-color: var(--font-color);
    padding: 4px 18px;
    border: 2px solid var(--primary-color);
    border-radius: 16px;
    cursor: pointer;
}

#random-btn:hover, #start-btn:hover, #reset-btn:hover {
    color: var(--font-color);
    background-color: var(--secondary-color);
    border: 2px solid var(--font-color);
}

#random-btn:disabled, #start-btn:disabled {
    background-color: gray;
}

#random-btn:disabled:hover, #start-btn:disabled:hover {
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    cursor: default;
}

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    gap: 16px;
    width: 100%;
    font-size: 1.2rem;
}

.footer > p {
    letter-spacing: 1.2px;
    margin: 12px 0;
}

i[class\$="hub"] {
    color: var(--font-color);
    font-size: 1.5rem;
}

i[class\$="hub"]:hover {
    color: #CECECE;
}

@media screen and (max-width: 1755px) {
    body {
        height: fit-content;
        margin: 16px auto;
    }

    .content {
        height: auto;
    }
    
    .game-container {
        display: grid;
        gap: 16px;
        grid-template: 400px / repeat(2, 1fr);
        grid-auto-rows: 120px;
        margin: 25px 80px;
    }

    .instruction {
        position: relative;
        top: auto;
        left: auto;
        height: 100px;
        justify-self: center;
        grid-column: 1 / 3;
        grid-row: 2;
    }

    #player-grid {
        grid-column: 1 / 2;
    }

    #enemy-grid {
        grid-column: 2 / 3;
    }

    #player-grid, #enemy-grid {
        justify-self: center;
    }
}

@media screen and (max-height: 940px) {
    .footer {
        position: static;
        margin-top: 12px;
    }
}

@media screen and (max-width: 960px) {
    body {
        width: fit-content;
        margin: 20px auto 10px;
    }

    .content {
        width: fit-content;
    }
    
    .message-box {
        margin: 0;
    }

    .message {
        font-size: 1.25rem;
        margin-bottom: 16px;
    }

    .game-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        margin: 0;
    }

    .game-container > p:first-child {
        margin-top: 0;
    }

    .game-container > p {
        font-size: 1.2rem;
        margin-bottom: 4px;
        width: 275px;
        text-align: start;
    }

    #player-grid, #enemy-grid {
        height: 280px;
        width: 280px;
    }

    .instruction {
        font-size: 1.1rem;
        line-height: 24px;
        height: 60px;
    }

    #random-btn, #start-btn, #reset-btn {
        font-size: 1.2rem;
        letter-spacing: 1px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'AntonSC';\r\n    src: url('../src/fonts/AntonSC-Regular.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Bebas Neue';\r\n    src: url('../src/fonts/BebasNeue-Regular.ttf') format('truetype');\r\n}\r\n\r\n:root {\r\n    --primary-color: #1434A4;\r\n    --secondary-color: #0F52BA;\r\n    --font-color: #FEFEFE;\r\n    --main-font: 'Bebas Neue';\r\n}\r\n\r\nbody {\r\n    font-family: var(--main-font);\r\n    min-height: 90vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: var(--secondary-color);\r\n    color: var(--font-color);\r\n    margin: 5vh auto;\r\n}\r\n\r\n.header {\r\n    font-family: 'AntonSC';\r\n    letter-spacing: 2.8px;\r\n    text-transform: uppercase;\r\n    font-size: 1.8rem;\r\n    cursor: default;\r\n}\r\n\r\n.header > img {\r\n    position: relative;\r\n    left: 4px;\r\n    width: 58%;\r\n    filter: invert(1);\r\n}\r\n\r\n.header > h1 {\r\n    margin: -20px 0 0;\r\n}\r\n\r\n.content {\r\n    background-color: var(--primary-color);\r\n    height: 60vh;\r\n    min-width: 100%;\r\n    padding: 24px 0;\r\n}\r\n\r\n.message-box {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.message {\r\n    font-size: 1.8rem;\r\n    letter-spacing: 1.5px;\r\n    margin: 0;\r\n}\r\n\r\n.error {\r\n    color: rgb(221, 75, 104);\r\n}\r\n\r\n.game-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 50px;\r\n    margin: 15px;\r\n}\r\n\r\n.instruction {\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 5%;\r\n    font-size: 1.5rem;\r\n    text-align: left;\r\n    letter-spacing: 1.6px;\r\n    line-height: 35px;\r\n}\r\n\r\n.underline {\r\n    text-decoration: underline;\r\n}\r\n\r\n.grid {\r\n    width: 400px;\r\n    height: 400px;\r\n    display: grid;\r\n    grid-template: repeat(10, 1fr) / repeat(10, 1fr);\r\n    border: 3px solid #000000;\r\n    margin-top: 0;\r\n}\r\n\r\n.grid-cell {\r\n    border: 1px solid #000000;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.grid-cell:hover {\r\n    background-color: var(--font-color);\r\n    opacity: 0.6;\r\n}\r\n\r\n.hit {\r\n    background-image: url('../src/image/explosion.png');\r\n    background-size: 30px 30px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-color: #5c5c5c;\r\n}\r\n\r\n.miss::before {\r\n    content: '●';\r\n    font-size: 1.8rem;\r\n    color: var(--font-color);\r\n}\r\n\r\n.ship {\r\n    background-color: #696E6A;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin: 25px 0 0;\r\n}\r\n\r\n#random-btn, #start-btn, #reset-btn {\r\n    font-family: var(--main-font);\r\n    font-size: 1.4rem;\r\n    letter-spacing: 1px;\r\n    color: var(--primary-color);\r\n    background-color: var(--font-color);\r\n    padding: 4px 18px;\r\n    border: 2px solid var(--primary-color);\r\n    border-radius: 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n#random-btn:hover, #start-btn:hover, #reset-btn:hover {\r\n    color: var(--font-color);\r\n    background-color: var(--secondary-color);\r\n    border: 2px solid var(--font-color);\r\n}\r\n\r\n#random-btn:disabled, #start-btn:disabled {\r\n    background-color: gray;\r\n}\r\n\r\n#random-btn:disabled:hover, #start-btn:disabled:hover {\r\n    color: var(--primary-color);\r\n    border: 2px solid var(--primary-color);\r\n    cursor: default;\r\n}\r\n\r\n.footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    gap: 16px;\r\n    width: 100%;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.footer > p {\r\n    letter-spacing: 1.2px;\r\n    margin: 12px 0;\r\n}\r\n\r\ni[class$=\"hub\"] {\r\n    color: var(--font-color);\r\n    font-size: 1.5rem;\r\n}\r\n\r\ni[class$=\"hub\"]:hover {\r\n    color: #CECECE;\r\n}\r\n\r\n@media screen and (max-width: 1755px) {\r\n    body {\r\n        height: fit-content;\r\n        margin: 16px auto;\r\n    }\r\n\r\n    .content {\r\n        height: auto;\r\n    }\r\n    \r\n    .game-container {\r\n        display: grid;\r\n        gap: 16px;\r\n        grid-template: 400px / repeat(2, 1fr);\r\n        grid-auto-rows: 120px;\r\n        margin: 25px 80px;\r\n    }\r\n\r\n    .instruction {\r\n        position: relative;\r\n        top: auto;\r\n        left: auto;\r\n        height: 100px;\r\n        justify-self: center;\r\n        grid-column: 1 / 3;\r\n        grid-row: 2;\r\n    }\r\n\r\n    #player-grid {\r\n        grid-column: 1 / 2;\r\n    }\r\n\r\n    #enemy-grid {\r\n        grid-column: 2 / 3;\r\n    }\r\n\r\n    #player-grid, #enemy-grid {\r\n        justify-self: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-height: 940px) {\r\n    .footer {\r\n        position: static;\r\n        margin-top: 12px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n    body {\r\n        width: fit-content;\r\n        margin: 20px auto 10px;\r\n    }\r\n\r\n    .content {\r\n        width: fit-content;\r\n    }\r\n    \r\n    .message-box {\r\n        margin: 0;\r\n    }\r\n\r\n    .message {\r\n        font-size: 1.25rem;\r\n        margin-bottom: 16px;\r\n    }\r\n\r\n    .game-container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 0;\r\n        margin: 0;\r\n    }\r\n\r\n    .game-container > p:first-child {\r\n        margin-top: 0;\r\n    }\r\n\r\n    .game-container > p {\r\n        font-size: 1.2rem;\r\n        margin-bottom: 4px;\r\n        width: 275px;\r\n        text-align: start;\r\n    }\r\n\r\n    #player-grid, #enemy-grid {\r\n        height: 280px;\r\n        width: 280px;\r\n    }\r\n\r\n    .instruction {\r\n        font-size: 1.1rem;\r\n        line-height: 24px;\r\n        height: 60px;\r\n    }\r\n\r\n    #random-btn, #start-btn, #reset-btn {\r\n        font-size: 1.2rem;\r\n        letter-spacing: 1px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom/gamemanager.js":
/*!********************************!*\
  !*** ./src/dom/gamemanager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/player */ "./src/modules/player.js");
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userinterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userinterface */ "./src/dom/userinterface.js");
/* harmony import */ var _modules_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/ai */ "./src/modules/ai.js");




class GameManager {
    constructor(userName='Unknown', enemyName='Bot') {
        this.player = new (_modules_player__WEBPACK_IMPORTED_MODULE_0___default())(userName);
        this.enemy = new (_modules_player__WEBPACK_IMPORTED_MODULE_0___default())(enemyName, 'computer');
        this.UI = new _userinterface__WEBPACK_IMPORTED_MODULE_1__["default"](this.player, this.enemy);
        this.AI = new _modules_ai__WEBPACK_IMPORTED_MODULE_2__["default"](this.enemy, this.UI, this.player);
        this.currentPlayer = null;
        this.isGameOn = false;
        this.instruction = document.querySelector('.instruction');
    }
    
    initialiseGame() {
        this.UI.renderGrids();

        if (this.enemy.type === 'computer') {
            this.UI.createPlayerGridEventHandler((e) => e.preventDefault());
        } else {
            this.UI.createPlayerGridEventHandler(this.playerGridEventHandler.bind(this));
        }

        this.UI.createEnemyGridEventHandler(this.enemyGridEventHandler.bind(this));

        this.player.placeRandomShips();
        this.UI.initialiseButtons(this.randomisePlayerShips.bind(this), this.startGame.bind(this), this.resetGame.bind(this));
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.enableMoveShips();
    }

    playerGridEventHandler(e) {
        if (this.isGameOn && this.currentPlayer === this.enemy) {
            const index = this.UI.playerGridCells.indexOf(e.target);
            const x = Math.floor(index / 10);
            const y = index % 10;

            if (this.checkWinner()) return;

            setTimeout(() => {
                this.player.gameboard.attackCoordinate(x, y);
                this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);

                this.currentPlayer = this.player;
            }, 3000);
        }
    }

    enemyGridEventHandler(e) {
        if (this.isGameOn && this.currentPlayer === this.player && !this.AI.duringMove) {
            const index = this.UI.enemyGridCells.indexOf(e.target);
            const x = Math.floor(index / 10);
            const y = index % 10;

            if (this.enemy.gameboard.attackCoordinate(x, y)) {
                this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
                
                if (this.checkWinner()) return;

                this.currentPlayer = this.enemy;
                this.UI.displayMessage("Enemy's turn");

                this.AI.duringMove = true;
                setTimeout(this.AI.makeMove.bind(this.AI), 200 + Math.floor(Math.random() * 600));
                this.currentPlayer = this.player;
                if (this.isGameOn) setTimeout(() => this.UI.displayMessage('Your turn'), 1200);
            } else {
                this.UI.displayMessage('Invalid move... Try again', true);
            }
        }
    }

    checkWinner() {
        if (this.player.gameboard.isAllSunk()) {
            this.isGameOn = false;
            this.UI.displayMessage('Game over<br>You are defeated...');
            return true;
        } else if (this.enemy.gameboard.isAllSunk()) {
            this.isGameOn = false;
            this.UI.displayMessage('Game over<br>You are victorious!');
            return true;
        }

        return false;
    }

    startGame() {
        if (this.isGameOn) {
            this.UI.displayMessage('Game already started', true);
            return;
        } else if (!this.player.isAllShipsPlaced()) {
            this.UI.displayMessage('Not all ships are placed', true);
            return;
        }

        this.isGameOn = true;
        this.currentPlayer = this.player;
        this.enemy.placeRandomShips();
        this.UI.hasStartBtnClicked = true;
        this.UI.disableChangingShipLocation();
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.disableButtons(true);
        this.UI.displayMessage('Game started!<br>Your turn');
        this.instruction.style.display = 'none';
    }

    randomisePlayerShips() {
        this.player.gameboard.resetBoard();
        this.player.resetAllShips();
        this.player.placeRandomShips();
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.enableMoveShips();
    }

    resetGame() {
        this.UI.disableButtons(false);
        this.UI.hasStartBtnClicked = false;
        this.isGameOn = false;
        this.currentPlayer = null;
        this.player.gameboard.resetBoard();
        this.enemy.gameboard.resetBoard();
        this.player.resetAllShips();
        this.enemy.resetAllShips();
        this.UI.resetAreas();
        this.UI.displayMessage('Game was restarted<br>Please arrange your ships position...');
        this.player.placeRandomShips();
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.enableMoveShips();
        this.instruction.style.display = 'block';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameManager);

/***/ }),

/***/ "./src/dom/userinterface.js":
/*!**********************************!*\
  !*** ./src/dom/userinterface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__);


class UserInterface {
    constructor(player, enemy) {
        this.player = player;
        this.playerGrid = document.getElementById('player-grid');
        this.playerGridCells = [];
        this.enemy = enemy;
        this.enemyGrid = document.getElementById('enemy-grid');
        this.enemyGridCells = [];
        this.temporaryBoard = null;
        this.hasStartBtnClicked = false;
        this.screenSize = window.screen.width;
    }

    createGrid(grid, cells) {
        for (let i = 0; i < 100; i++) {
            const area = document.createElement('div');
            area.classList.add('grid-cell');
            area.dataset.index = i;
            area.setAttribute('draggable', false);
            grid.appendChild(area);
            cells.push(area);
        }
    }

    renderGrids() {
        this.createGrid(this.playerGrid, this.playerGridCells);
        this.createGrid(this.enemyGrid, this.enemyGridCells);
    }

    createPlayerGridEventHandler(callbackFn) {
        this.playerGrid.addEventListener('click', callbackFn);
    }

    createEnemyGridEventHandler(callbackFn) {
        this.enemyGrid.addEventListener('click', callbackFn);
    }

    updateGrids(playerGameboard, enemyGameboard=null, hideEnemyShips=true) {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const playerCell = this.playerGridCells[x * 10 + y];
                playerCell.classList.remove('ship', 'hit', 'miss');
    
                if (playerGameboard.board[x][y] === 'hit') {
                    playerCell.classList.add('hit');
                } else if (playerGameboard.board[x][y] === 'miss') {
                    playerCell.classList.add('miss');
                } else if (playerGameboard.board[x][y] !== null) {
                    const playerBattleship = playerGameboard.board[x][y];
                    playerCell.classList.add('ship');
                    playerCell.dataset.length = playerBattleship.length;
                    playerCell.dataset.axis = playerBattleship.axis;
                    playerCell.dataset.name = playerBattleship.name;
                } 
                
                if (!playerCell.classList.contains('ship')) {
                    delete playerCell.dataset.length;
                    delete playerCell.dataset.axis;
                    delete playerCell.dataset.name;
                    playerCell.setAttribute('draggable', false);
                }

                if (enemyGameboard !== null) {
                    const enemyCell = this.enemyGridCells[x * 10 + y];
                    enemyCell.classList.remove('ship', 'hit', 'miss');

                    if (enemyGameboard.board[x][y] === 'hit') {
                        enemyCell.classList.add('hit');
                    } else if (enemyGameboard.board[x][y] === 'miss') {
                        enemyCell.classList.add('miss');
                    } else if (enemyGameboard.board[x][y] !== null) {
                        const enemyBattleship = enemyGameboard.board[x][y];
                        enemyCell.dataset.length = enemyBattleship.length;
                        enemyCell.dataset.axis = enemyBattleship.axis;
                        enemyCell.dataset.name = enemyBattleship.name;

                        if (!hideEnemyShips) enemyCell.classList.add('ship');
                    }
                }
            }
        }

        if (this.screenSize <= 960) {
            const gameContainer = document.querySelector('.game-container');
            
            const playerGrid = document.getElementById('player-grid');
            const playerTitle = document.createElement('p');
            playerTitle.textContent = 'Your Grid:';
            gameContainer.insertBefore(playerTitle, playerGrid);

            const enemyGrid = document.getElementById('enemy-grid');
            const enemyTitle = document.createElement('p');
            enemyTitle.textContent = "Opponent's Grid:";
            gameContainer.insertBefore(enemyTitle, enemyGrid);
        }
    }

    initialiseButtons(...callbackFn) {
        const randomiseBtn = document.getElementById('random-btn');
        randomiseBtn.addEventListener('click', callbackFn[0]);

        const startBtn = document.getElementById('start-btn');
        startBtn.addEventListener('click', callbackFn[1]);

        const resetBtn = document.getElementById('reset-btn');
        resetBtn.addEventListener('click', callbackFn[2]);
    }

    eventDisabler(e) {
        e.preventDefault();
    }

    disableChangingShipLocation() {
        this.playerGridCells.forEach((cell) => {
            cell.setAttribute("draggable", false);
            cell.removeEventListener("dragstart", this.handleDragStart.bind(this));
            cell.removeEventListener("dragend", this.handleDragEnd.bind(this));
            cell.removeEventListener("dragover", this.handleDragOver.bind(this));
            cell.removeEventListener("drop", this.handleDrop.bind(this));

            cell.addEventListener("dragstart", this.eventDisabler);
            cell.addEventListener("dragend", this.eventDisabler);
            cell.addEventListener("dragover", this.eventDisabler);
            cell.addEventListener("drop", this.eventDisabler);
        });

        const ships = this.playerGrid.querySelectorAll('.ship');
        ships.forEach((ship) => {
            ship.removeEventListener('click', this.handleShipAxis.bind(this));
            ship.addEventListener('click', this.eventDisabler);
        });
    }

    enableMoveShips() {
        const ships = this.playerGrid.querySelectorAll('.ship');
        ships.forEach((ship) => this.changeShipLocationEvent(ship));

        this.playerGridCells.forEach((cell) => {
            cell.removeEventListener('dragstart', this.eventDisabler);
            cell.removeEventListener('dragend', this.eventDisabler);
            cell.removeEventListener('dragover', this.eventDisabler);
            cell.removeEventListener('drop', this.eventDisabler);
            cell.removeEventListener('dragover', this.handleDragOver.bind(this));
            cell.removeEventListener('drop', this.handleDrop.bind(this));

            cell.addEventListener('dragover', this.handleDragOver.bind(this));
            cell.addEventListener('drop', this.handleDrop.bind(this));
        });
    }

    changeShipLocationEvent(ship) {
        ship.setAttribute('draggable', true);

        ship.removeEventListener('dragstart', this.eventDisabler);
        ship.removeEventListener('dragend', this.eventDisabler);
        ship.removeEventListener('dragstart', this.handleDragStart.bind(this));
        ship.removeEventListener('dragend', this.handleDragEnd.bind(this));

        ship.addEventListener('dragstart', this.handleDragStart.bind(this));
        ship.addEventListener('dragend', this.handleDragEnd.bind(this));

        ship.removeEventListener('click', this.eventDisabler);
        ship.removeEventListener('click', this.handleShipAxis.bind(this));

        ship.addEventListener('click', this.handleShipAxis.bind(this), {once: true});
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text', e.target.dataset.index);
        this.temporaryBoard = new (_modules_gameboard__WEBPACK_IMPORTED_MODULE_0___default())(this.player.gameboard.deepCopy(this.player.gameboard.board));
        setTimeout(() => {e.target.classList.add('hide')}, 0);
    }

    handleDragEnd(e) {
        e.target.classList.remove('hide');
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    handleDrop(e) {
        e.preventDefault();
        if (!this.hasStartBtnClicked) {
            const shipId = e.dataTransfer.getData('text');
            const ship = this.playerGrid.querySelector(`.ship[data-index="${shipId}"]`);
            
            const index = e.target.dataset.index;
            const x = Math.floor(index / 10);
            const y = index % 10;

            if (!ship || x * 10 + y == shipId) return;

            const shipAxis = ship.dataset.axis;
            const shipToBePlaced = this.temporaryBoard.getLocationByShipName(ship.dataset.name);

            this.temporaryBoard.removeShip(shipToBePlaced);

            if (this.temporaryBoard.canShipBePlaced(shipToBePlaced, x, y, shipAxis)) {
                try {
                    this.player.removeShip(ship.dataset.name);

                    if (this.player.placeShip(ship.dataset.name, x, y, shipAxis)) {
                        this.updateGrids(this.player.gameboard);
                        this.enableMoveShips();
                    }
                } catch (err) {
                    console.log(err.message);
                }
            }
        }
    } 

    handleShipAxis(e) {
        e.preventDefault();
        if (!this.hasStartBtnClicked) {
            this.temporaryBoard = new (_modules_gameboard__WEBPACK_IMPORTED_MODULE_0___default())(this.player.gameboard.deepCopy(this.player.gameboard.board));

            const shipId = e.target.dataset.index;
            const ship = this.playerGrid.querySelector(`.ship[data-index="${shipId}"]`);

            const x = Math.floor(shipId / 10);
            const y = shipId % 10;

            const newAxis = ship.dataset.axis === 'xAxis' ? 'yAxis' : 'xAxis';
            const shipToBePlaced = this.temporaryBoard.getLocationByShipName(ship.dataset.name);

            this.temporaryBoard.removeShip(shipToBePlaced);

            if (this.temporaryBoard.canShipBePlaced(shipToBePlaced, x, y, newAxis)) {
                try {
                    this.player.removeShip(ship.dataset.name);

                    if (this.player.placeShip(ship.dataset.name, x, y, newAxis)) {
                        this.updateGrids(this.player.gameboard);
                        this.enableMoveShips();
                    }
                } catch (err) {
                    console.log(err.message);
                }
            } 
        }
    }

    disableButtons(visible) {
        const randomBtn = document.getElementById('random-btn');
        randomBtn.disabled = visible;
        randomBtn.style.opacity = visible ? 0.75 : 1;

        const startBtn = document.getElementById('start-btn');
        startBtn.disabled = visible;
        startBtn.style.opacity = visible ? 0.75 : 1;
    }

    resetAreas() {
        const playerGrid = document.querySelectorAll('#player-grid > div');
        playerGrid.forEach((area) => area.classList.remove('hit', 'miss', 'ship'));

        const enemyGrid = document.querySelectorAll('#enemy-grid > div');
        enemyGrid.forEach((area) => area.classList.remove('hit', 'miss', 'ship'));
    }

    displayMessage(text, error=false) {
        const message = document.querySelector('.message');
        message.innerHTML = text;

        error ? message.classList.add('error') : message.classList.remove('error');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInterface);

/***/ }),

/***/ "./src/dom/webpage.js":
/*!****************************!*\
  !*** ./src/dom/webpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createFooterSection = () => {
    const footer = document.querySelector('.footer');
    const date = new Date();

    footer.innerHTML = `
        <p>Copyright ©️ ${date.getFullYear()} JHoldsworth23</p>
        <a href="https://github.com/JHoldsworth23" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
        </a>
    `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooterSection);

/***/ }),

/***/ "./src/modules/ai.js":
/*!***************************!*\
  !*** ./src/modules/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class AI {
    constructor(enemy, UI, player) {
        this.enemy = enemy;
        this.UI = UI;
        this.player = player;
        this.nextAttacks = [];
        this.duringMove = false;
    }

    makeMove() {
        let x;
        let y;

        if (this.nextAttacks.length > 0) {
            const [lastHitX, lastHitY] = this.nextAttacks[0];
            const coordinates = [
                [lastHitX - 1, lastHitY], [lastHitX + 1, lastHitY],
                [lastHitX, lastHitY - 1], [lastHitX, lastHitY + 1]
            ];

            for (let [nextX, nextY] of coordinates) {
                if (this.validAttack(nextX, nextY)) {
                    x = nextX;
                    y = nextY;
                    break;
                }
            }

            if (x === undefined || y === undefined) {
                this.nextAttacks.shift();
                this.makeMove();
                return;
            }
        } else {
            do {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
            } while (this.player.gameboard.board[x][y] === 'hit' || this.player.gameboard.board[x][y] === 'miss');
        }

        const hitSuccessful = this.player.gameboard.attackCoordinate(x, y);
        if (hitSuccessful === 'hit') {
            this.nextAttacks.push([x, y]);
        }

        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.duringMove = false;
    }

    validAttack(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10 && this.player.gameboard.board[x][y] !== 'hit' && this.player.gameboard.board[x][y] !== 'miss';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);

/***/ }),

/***/ "./src/modules/battleship.js":
/*!***********************************!*\
  !*** ./src/modules/battleship.js ***!
  \***********************************/
/***/ ((module) => {

class Battleship {
    constructor(length, name='unnamed', hit=0, sunk=false, axis='xAxis') {
        this.length = length;
        this.name = name;
        this.hitCount = hit;
        this.sunk = sunk;
        this.axis = axis;
    }

    hit() {
        this.hitCount++;
        if (this.length === this.hitCount) this.sunk = true;
    }

    isSunk() {
        return this.sunk;
    }

    setAxis(axis) {
        this.axis = axis;
    }
}

module.exports = Battleship;

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Battleship = __webpack_require__(/*! ./battleship */ "./src/modules/battleship.js");

class Gameboard {
    constructor(board=null) {
        this.board = board === null 
            ? Array(10).fill(null).map(() => Array(10).fill(null)) 
            : board;
    }

    placeShip(ship, x, y, axis) {
        if (axis === 'xAxis' && y + ship.length > 10) {
            throw new Error('Ship is out of bounds');
        } else if (axis === 'yAxis' && x + ship.length > 10) {
            throw new Error('Ship is out of bounds');
        }

        if (this.checkAreaOccupation(ship.length, x, y, axis)) {
            throw new Error('Another ship has taken this area');
        }

        if (axis === 'xAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[x][y + i] = ship;
            }
        } else if (axis === 'yAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[x + i][y] = ship;
            }
        }
    }

    checkAreaOccupation(shipLength, x, y, axis) {
        if (axis === 'xAxis') {
            for (let i = 0; i < shipLength; i++) {
                if (this.board[x][y + i] !== null) return true;
            }
        } else if (axis === 'yAxis') {
            for (let i = 0; i < shipLength; i++) {
                if (this.board[x + i][y] !== null) return true;
            }
        }

        return false;
    }

    attackCoordinate(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10 || this.board[x][y] === 'miss') {
            return false;
        }

        if (this.board[x][y] === null) {
            this.board[x][y] = 'miss';
            return this.board[x][y];
        } else if (this.board[x][y] !== 'hit') {
            this.board[x][y].hit();
            this.board[x][y] = 'hit';
            return this.board[x][y];
        } 
        
        return false;
    }

    isAllSunk() {
        return this.board
          .flat()
          .filter((area) => area !== null && area !== 'hit' && area !== 'miss')
          .every((ship) => ship.sunk);
    }

    resetBoard() {
        this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    deepCopy(board) {
        const newBoard = Array(10).fill(null).map(() => Array(10).fill(null));
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = board[i][j];
                if (cell instanceof Battleship) {
                    newBoard[i][j] = new Battleship(cell.length, cell.name, cell.hitCount, cell.sunk, cell.axis);
                } else {
                    newBoard[i][j] = cell;
                }
            }
        }

        return newBoard;
    }

    getLocationByShipName(shipName) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == shipName) {
                    return this.board[i][j];
                }
            }
        }

        return null;
    }

    removeShip(ship) {
        if (ship === null) return;

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == ship.name) {
                    this.board[i][j] = null;
                }
            }
        }
    }

    canShipBePlaced(ship, x, y, axis) {
        if (ship === null) return false;

        if (axis === 'xAxis' && y + ship.length > 10) {
            return false;
        } else if (axis === 'yAxis' && x + ship.length > 10) {
            return false;
        }
        
        if (this.checkAreaOccupation(ship.length, x, y, axis)) return false;

        return true;
    }
}

module.exports = Gameboard;

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
const Battleship = __webpack_require__(/*! ./battleship */ "./src/modules/battleship.js");

class Player {
    constructor(name='Unknown', type='human') {
        this.name = name;
        this.type = type;
        this.gameboard = new Gameboard();
        this.ships = {
            carrier: {
                ship: new Battleship(5, 'carrier'),
                placed: false,
            },
            battleship: {
                ship: new Battleship(4, 'battleship'),
                placed: false,
            },
            cruiser: {
                ship: new Battleship(3, 'cruiser'),
                placed: false,
            },
            submarine: {
                ship: new Battleship(3, 'submarine'),
                placed: false,
            },
            destroyer: {
                ship: new Battleship(2, 'destroyer'),
                placed: false,
            },
        }
    }

    placeShip(shipName, x, y, axis) {
        if (!this.ships[shipName]) throw new Error('Invalid ship name');

        try {
            this.ships[shipName].ship.setAxis(axis);
            this.gameboard.placeShip(this.ships[shipName].ship, x, y, axis);
            this.ships[shipName].placed = true;
            return true;
        } catch {
            return false;
        }
    }

    placeRandomShips() {
        for (let ship in this.ships) {
            let placed = false;
            while (!placed) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let axis = Math.random() < 0.5 ? 'xAxis' : 'yAxis';

                try {
                    placed = this.placeShip(ship, x, y, axis);
                } catch {
                    placed = false;
                }
            }
        } 
    }

    isAllShipsPlaced() {
        for (let ship in this.ships) {
            if (!this.ships[ship].placed) return false;
        }
        return true;
    }

    resetAllShips() {
        for (let ship in this.ships) {
            this.ships[ship].placed = false;
            this.ships[ship].ship = new Battleship(this.ships[ship].ship.length, this.ships[ship].ship.name);
        }
    }

    removeShip(shipName) {
        if (!this.ships[shipName]) {
            throw new Error('Invalid ship name');
        }
        const ship = this.ships[shipName].ship;
        this.gameboard.removeShip(ship);
    }
}

module.exports = Player;

/***/ }),

/***/ "./src/fonts/AntonSC-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/AntonSC-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "04bf5842f1a5f3879b48.ttf";

/***/ }),

/***/ "./src/fonts/BebasNeue-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/BebasNeue-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "12e3683f9192436a7be8.ttf";

/***/ }),

/***/ "./src/image/explosion.png":
/*!*********************************!*\
  !*** ./src/image/explosion.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5731e8d9dc6e42e641e1.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_gamemanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/gamemanager */ "./src/dom/gamemanager.js");
/* harmony import */ var _dom_webpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/webpage */ "./src/dom/webpage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_dom_webpage__WEBPACK_IMPORTED_MODULE_1__["default"])();

const gameManager = new _dom_gamemanager__WEBPACK_IMPORTED_MODULE_0__["default"]();
gameManager.initialiseGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdJQUFtRDtBQUMvRiw0Q0FBNEMsNElBQXFEO0FBQ2pHLDRDQUE0Qyw0SEFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0scUNBQXFDLCtCQUErQix3RUFBd0UsS0FBSyxvQkFBb0Isa0NBQWtDLDBFQUEwRSxLQUFLLGVBQWUsaUNBQWlDLG1DQUFtQyw4QkFBOEIsa0NBQWtDLEtBQUssY0FBYyxzQ0FBc0MseUJBQXlCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QiwyQkFBMkIsaURBQWlELGlDQUFpQyx5QkFBeUIsS0FBSyxpQkFBaUIsK0JBQStCLDhCQUE4QixrQ0FBa0MsMEJBQTBCLHdCQUF3QixLQUFLLHVCQUF1QiwyQkFBMkIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsS0FBSyxzQkFBc0IsMEJBQTBCLEtBQUssa0JBQWtCLCtDQUErQyxxQkFBcUIsd0JBQXdCLHdCQUF3QixLQUFLLHNCQUFzQixvQkFBb0IsdUJBQXVCLEtBQUssa0JBQWtCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLEtBQUssZ0JBQWdCLGlDQUFpQyxLQUFLLHlCQUF5QixzQkFBc0IsZ0NBQWdDLGtCQUFrQixxQkFBcUIsS0FBSyxzQkFBc0IsMkJBQTJCLGlCQUFpQixpQkFBaUIsMEJBQTBCLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLEtBQUssb0JBQW9CLG1DQUFtQyxLQUFLLGVBQWUscUJBQXFCLHNCQUFzQixzQkFBc0IseURBQXlELGtDQUFrQyxzQkFBc0IsS0FBSyxvQkFBb0Isa0NBQWtDLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLEtBQUssMEJBQTBCLDRDQUE0QyxxQkFBcUIsS0FBSyxjQUFjLDREQUE0RCxtQ0FBbUMscUNBQXFDLG9DQUFvQyxrQ0FBa0MsS0FBSyx1QkFBdUIscUJBQXFCLDBCQUEwQixpQ0FBaUMsS0FBSyxlQUFlLGtDQUFrQyxLQUFLLGtCQUFrQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixrQkFBa0IseUJBQXlCLEtBQUssNkNBQTZDLHNDQUFzQywwQkFBMEIsNEJBQTRCLG9DQUFvQyw0Q0FBNEMsMEJBQTBCLCtDQUErQyw0QkFBNEIsd0JBQXdCLEtBQUssK0RBQStELGlDQUFpQyxpREFBaUQsNENBQTRDLEtBQUssbURBQW1ELCtCQUErQixLQUFLLCtEQUErRCxvQ0FBb0MsK0NBQStDLHdCQUF3QixLQUFLLGlCQUFpQix3QkFBd0Isa0JBQWtCLGdCQUFnQiwyQkFBMkIsa0JBQWtCLG9CQUFvQiwwQkFBMEIsS0FBSyxxQkFBcUIsOEJBQThCLHVCQUF1QixLQUFLLDJCQUEyQixpQ0FBaUMsMEJBQTBCLEtBQUssaUNBQWlDLHVCQUF1QixLQUFLLCtDQUErQyxjQUFjLGdDQUFnQyw4QkFBOEIsU0FBUyxzQkFBc0IseUJBQXlCLFNBQVMsaUNBQWlDLDBCQUEwQixzQkFBc0Isa0RBQWtELGtDQUFrQyw4QkFBOEIsU0FBUywwQkFBMEIsK0JBQStCLHNCQUFzQix1QkFBdUIsMEJBQTBCLGlDQUFpQywrQkFBK0Isd0JBQXdCLFNBQVMsMEJBQTBCLCtCQUErQixTQUFTLHlCQUF5QiwrQkFBK0IsU0FBUyx1Q0FBdUMsaUNBQWlDLFNBQVMsS0FBSywrQ0FBK0MsaUJBQWlCLDZCQUE2Qiw2QkFBNkIsU0FBUyxLQUFLLDhDQUE4QyxjQUFjLCtCQUErQixtQ0FBbUMsU0FBUyxzQkFBc0IsK0JBQStCLFNBQVMsOEJBQThCLHNCQUFzQixTQUFTLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLFNBQVMsNkJBQTZCLDBCQUEwQixtQ0FBbUMsb0NBQW9DLGdDQUFnQyxtQkFBbUIsc0JBQXNCLFNBQVMsNkNBQTZDLDBCQUEwQixTQUFTLGlDQUFpQyw4QkFBOEIsK0JBQStCLHlCQUF5Qiw4QkFBOEIsU0FBUyx1Q0FBdUMsMEJBQTBCLHlCQUF5QixTQUFTLDBCQUEwQiw4QkFBOEIsOEJBQThCLHlCQUF5QixTQUFTLGlEQUFpRCw4QkFBOEIsZ0NBQWdDLFNBQVMsS0FBSyxtQkFBbUI7QUFDeDJRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ25UMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QztBQUNLO0FBQ2I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFNO0FBQ2hDLHlCQUF5Qix3REFBTTtBQUMvQixzQkFBc0Isc0RBQWE7QUFDbkMsc0JBQXNCLG1EQUFFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsV0FBVztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyREFBUztBQUMzQywwQkFBMEIsK0JBQStCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsT0FBTztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDSTtBQUMzQjtBQUNyQjtBQUNBLHdEQUFtQjtBQUNuQjtBQUNBLHdCQUF3Qix3REFBVztBQUNuQyw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vdXNlcmludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS93ZWJwYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvQW50b25TQy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9CZWJhc05ldWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2UvZXhwbG9zaW9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW50b25TQyc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTQzNEE0O1xyXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMwRjUyQkE7XHJcbiAgICAtLWZvbnQtY29sb3I6ICNGRUZFRkU7XHJcbiAgICAtLW1haW4tZm9udDogJ0JlYmFzIE5ldWUnO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgbWluLWhlaWdodDogOTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIG1hcmdpbjogNXZoIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvblNDJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmhlYWRlciA+IGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICB3aWR0aDogNTglO1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi5oZWFkZXIgPiBoMSB7XHJcbiAgICBtYXJnaW46IC0yMHB4IDAgMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZ2IoMjIxLCA3NSwgMTA0KTtcclxufVxyXG5cclxuLmdhbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogNTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmluc3RydWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS42cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmdyaWQtY2VsbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQtY2VsbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmhpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xyXG59XHJcblxyXG4ubWlzczo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfil48nO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTZFNkE7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggMCAwO1xyXG59XHJcblxyXG4jcmFuZG9tLWJ0biwgI3N0YXJ0LWJ0biwgI3Jlc2V0LWJ0biB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogNHB4IDE4cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNyYW5kb20tYnRuOmhvdmVyLCAjc3RhcnQtYnRuOmhvdmVyLCAjcmVzZXQtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuI3JhbmRvbS1idG46ZGlzYWJsZWQsICNzdGFydC1idG46ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuI3JhbmRvbS1idG46ZGlzYWJsZWQ6aG92ZXIsICNzdGFydC1idG46ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGdhcDogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5mb290ZXIgPiBwIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG59XHJcblxyXG5pW2NsYXNzXFwkPVwiaHViXCJdIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5pW2NsYXNzXFwkPVwiaHViXCJdOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjQ0VDRUNFO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzU1cHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdhbWUtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdhcDogMTZweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOiA0MDBweCAvIHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxMjBweDtcclxuICAgICAgICBtYXJnaW46IDI1cHggODBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5zdHJ1Y3Rpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICAgICAgICBncmlkLXJvdzogMjtcclxuICAgIH1cclxuXHJcbiAgICAjcGxheWVyLWdyaWQge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAjZW5lbXktZ3JpZCB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgfVxyXG5cclxuICAgICNwbGF5ZXItZ3JpZCwgI2VuZW15LWdyaWQge1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogOTQwcHgpIHtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tZXNzYWdlLWJveCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2FtZS1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmdhbWUtY29udGFpbmVyID4gcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2FtZS1jb250YWluZXIgPiBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgICNwbGF5ZXItZ3JpZCwgI2VuZW15LWdyaWQge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnN0cnVjdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNyYW5kb20tYnRuLCAjc3RhcnQtYnRuLCAjcmVzZXQtYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwrREFBaUU7QUFDckU7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdC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ICAgZm9udC1mYW1pbHk6ICdBbnRvblNDJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL3NyYy9mb250cy9BbnRvblNDLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL3NyYy9mb250cy9CZWJhc05ldWUtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTQzNEE0O1xcclxcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzBGNTJCQTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjRkVGRUZFO1xcclxcbiAgICAtLW1haW4tZm9udDogJ0JlYmFzIE5ldWUnO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luOiA1dmggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQW50b25TQyc7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjhweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA+IGltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICB3aWR0aDogNTglO1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA+IGgxIHtcXHJcXG4gICAgbWFyZ2luOiAtMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLWJveCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjIxLCA3NSwgMTA0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDUlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi51bmRlcmxpbmUge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY2VsbCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jZWxsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2ltYWdlL2V4cGxvc2lvbi5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWM1YztcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3M6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICfil48nO1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTZFNkE7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JhbmRvbS1idG4sICNzdGFydC1idG4sICNyZXNldC1idG4ge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAxOHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcmFuZG9tLWJ0bjpob3ZlciwgI3N0YXJ0LWJ0bjpob3ZlciwgI3Jlc2V0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNyYW5kb20tYnRuOmRpc2FibGVkLCAjc3RhcnQtYnRuOmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuI3JhbmRvbS1idG46ZGlzYWJsZWQ6aG92ZXIsICNzdGFydC1idG46ZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciA+IHAge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pW2NsYXNzJD1cXFwiaHViXFxcIl0ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pW2NsYXNzJD1cXFwiaHViXFxcIl06aG92ZXIge1xcclxcbiAgICBjb2xvcjogI0NFQ0VDRTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc1NXB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmdhbWUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBnYXA6IDE2cHg7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiA0MDBweCAvIHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDEyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAyNXB4IDgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluc3RydWN0aW9uIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogYXV0bztcXHJcXG4gICAgICAgIGxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcGxheWVyLWdyaWQge1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNlbmVteS1ncmlkIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcGxheWVyLWdyaWQsICNlbmVteS1ncmlkIHtcXHJcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA5NDBweCkge1xcclxcbiAgICAuZm9vdGVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5tZXNzYWdlLWJveCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lc3NhZ2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ2FtZS1jb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdhbWUtY29udGFpbmVyID4gcDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nYW1lLWNvbnRhaW5lciA+IHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjc1cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcGxheWVyLWdyaWQsICNlbmVteS1ncmlkIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjgwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluc3RydWN0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3JhbmRvbS1idG4sICNzdGFydC1idG4sICNyZXNldC1idG4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kdWxlcy9wbGF5ZXInO1xyXG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuL3VzZXJpbnRlcmZhY2UnO1xyXG5pbXBvcnQgQUkgZnJvbSAnLi4vbW9kdWxlcy9haSc7XHJcblxyXG5jbGFzcyBHYW1lTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VyTmFtZT0nVW5rbm93bicsIGVuZW15TmFtZT0nQm90Jykge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih1c2VyTmFtZSk7XHJcbiAgICAgICAgdGhpcy5lbmVteSA9IG5ldyBQbGF5ZXIoZW5lbXlOYW1lLCAnY29tcHV0ZXInKTtcclxuICAgICAgICB0aGlzLlVJID0gbmV3IFVzZXJJbnRlcmZhY2UodGhpcy5wbGF5ZXIsIHRoaXMuZW5lbXkpO1xyXG4gICAgICAgIHRoaXMuQUkgPSBuZXcgQUkodGhpcy5lbmVteSwgdGhpcy5VSSwgdGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb24nKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdGlhbGlzZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5VSS5yZW5kZXJHcmlkcygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmVteS50eXBlID09PSAnY29tcHV0ZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVUkuY3JlYXRlUGxheWVyR3JpZEV2ZW50SGFuZGxlcigoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlVJLmNyZWF0ZVBsYXllckdyaWRFdmVudEhhbmRsZXIodGhpcy5wbGF5ZXJHcmlkRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5VSS5jcmVhdGVFbmVteUdyaWRFdmVudEhhbmRsZXIodGhpcy5lbmVteUdyaWRFdmVudEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyLnBsYWNlUmFuZG9tU2hpcHMoKTtcclxuICAgICAgICB0aGlzLlVJLmluaXRpYWxpc2VCdXR0b25zKHRoaXMucmFuZG9taXNlUGxheWVyU2hpcHMuYmluZCh0aGlzKSwgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSwgdGhpcy5yZXNldEdhbWUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5VSS51cGRhdGVHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZW5lbXkuZ2FtZWJvYXJkKTtcclxuICAgICAgICB0aGlzLlVJLmVuYWJsZU1vdmVTaGlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckdyaWRFdmVudEhhbmRsZXIoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU9uICYmIHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5lbmVteSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuVUkucGxheWVyR3JpZENlbGxzLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihpbmRleCAvIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGluZGV4ICUgMTA7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbm5lcigpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdhbWVib2FyZC5hdHRhY2tDb29yZGluYXRlKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VSS51cGRhdGVHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZW5lbXkuZ2FtZWJvYXJkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuZW15R3JpZEV2ZW50SGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT24gJiYgdGhpcy5jdXJyZW50UGxheWVyID09PSB0aGlzLnBsYXllciAmJiAhdGhpcy5BSS5kdXJpbmdNb3ZlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5VSS5lbmVteUdyaWRDZWxscy5pbmRleE9mKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoaW5kZXggLyAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBpbmRleCAlIDEwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXkuZ2FtZWJvYXJkLmF0dGFja0Nvb3JkaW5hdGUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVUkudXBkYXRlR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2lubmVyKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmVuZW15O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VSS5kaXNwbGF5TWVzc2FnZShcIkVuZW15J3MgdHVyblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkFJLmR1cmluZ01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLkFJLm1ha2VNb3ZlLmJpbmQodGhpcy5BSSksIDIwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwMCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dhbWVPbikgc2V0VGltZW91dCgoKSA9PiB0aGlzLlVJLmRpc3BsYXlNZXNzYWdlKCdZb3VyIHR1cm4nKSwgMTIwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLmRpc3BsYXlNZXNzYWdlKCdJbnZhbGlkIG1vdmUuLi4gVHJ5IGFnYWluJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tXaW5uZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmdhbWVib2FyZC5pc0FsbFN1bmsoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuVUkuZGlzcGxheU1lc3NhZ2UoJ0dhbWUgb3Zlcjxicj5Zb3UgYXJlIGRlZmVhdGVkLi4uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbmVteS5nYW1lYm9hcmQuaXNBbGxTdW5rKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLlVJLmRpc3BsYXlNZXNzYWdlKCdHYW1lIG92ZXI8YnI+WW91IGFyZSB2aWN0b3Jpb3VzIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT24pIHtcclxuICAgICAgICAgICAgdGhpcy5VSS5kaXNwbGF5TWVzc2FnZSgnR2FtZSBhbHJlYWR5IHN0YXJ0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGxheWVyLmlzQWxsU2hpcHNQbGFjZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLlVJLmRpc3BsYXlNZXNzYWdlKCdOb3QgYWxsIHNoaXBzIGFyZSBwbGFjZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0dhbWVPbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5lbmVteS5wbGFjZVJhbmRvbVNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5VSS5oYXNTdGFydEJ0bkNsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuVUkuZGlzYWJsZUNoYW5naW5nU2hpcExvY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5VSS51cGRhdGVHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZW5lbXkuZ2FtZWJvYXJkKTtcclxuICAgICAgICB0aGlzLlVJLmRpc2FibGVCdXR0b25zKHRydWUpO1xyXG4gICAgICAgIHRoaXMuVUkuZGlzcGxheU1lc3NhZ2UoJ0dhbWUgc3RhcnRlZCE8YnI+WW91ciB0dXJuJyk7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbWlzZVBsYXllclNoaXBzKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXRBbGxTaGlwcygpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBsYWNlUmFuZG9tU2hpcHMoKTtcclxuICAgICAgICB0aGlzLlVJLnVwZGF0ZUdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCwgdGhpcy5lbmVteS5nYW1lYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuVUkuZW5hYmxlTW92ZVNoaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuVUkuZGlzYWJsZUJ1dHRvbnMoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuVUkuaGFzU3RhcnRCdG5DbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgICAgICB0aGlzLmVuZW15LmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVzZXRBbGxTaGlwcygpO1xyXG4gICAgICAgIHRoaXMuZW5lbXkucmVzZXRBbGxTaGlwcygpO1xyXG4gICAgICAgIHRoaXMuVUkucmVzZXRBcmVhcygpO1xyXG4gICAgICAgIHRoaXMuVUkuZGlzcGxheU1lc3NhZ2UoJ0dhbWUgd2FzIHJlc3RhcnRlZDxicj5QbGVhc2UgYXJyYW5nZSB5b3VyIHNoaXBzIHBvc2l0aW9uLi4uJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxhY2VSYW5kb21TaGlwcygpO1xyXG4gICAgICAgIHRoaXMuVUkudXBkYXRlR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XHJcbiAgICAgICAgdGhpcy5VSS5lbmFibGVNb3ZlU2hpcHMoKTtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lTWFuYWdlcjsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9tb2R1bGVzL2dhbWVib2FyZFwiO1xyXG5cclxuY2xhc3MgVXNlckludGVyZmFjZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGVuZW15KSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ncmlkJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkQ2VsbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVuZW15ID0gZW5lbXk7XHJcbiAgICAgICAgdGhpcy5lbmVteUdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXktZ3JpZCcpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlHcmlkQ2VsbHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRlbXBvcmFyeUJvYXJkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmhhc1N0YXJ0QnRuQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZSA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR3JpZChncmlkLCBjZWxscykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpO1xyXG4gICAgICAgICAgICBhcmVhLmRhdGFzZXQuaW5kZXggPSBpO1xyXG4gICAgICAgICAgICBhcmVhLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGFyZWEpO1xyXG4gICAgICAgICAgICBjZWxscy5wdXNoKGFyZWEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcmlkcygpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyaWQodGhpcy5wbGF5ZXJHcmlkLCB0aGlzLnBsYXllckdyaWRDZWxscyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmlkKHRoaXMuZW5lbXlHcmlkLCB0aGlzLmVuZW15R3JpZENlbGxzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQbGF5ZXJHcmlkRXZlbnRIYW5kbGVyKGNhbGxiYWNrRm4pIHtcclxuICAgICAgICB0aGlzLnBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFja0ZuKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbmVteUdyaWRFdmVudEhhbmRsZXIoY2FsbGJhY2tGbikge1xyXG4gICAgICAgIHRoaXMuZW5lbXlHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2tGbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR3JpZHMocGxheWVyR2FtZWJvYXJkLCBlbmVteUdhbWVib2FyZD1udWxsLCBoaWRlRW5lbXlTaGlwcz10cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQ2VsbCA9IHRoaXMucGxheWVyR3JpZENlbGxzW3ggKiAxMCArIHldO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJywgJ2hpdCcsICdtaXNzJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyR2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSAnbWlzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyR2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQmF0dGxlc2hpcCA9IHBsYXllckdhbWVib2FyZC5ib2FyZFt4XVt5XTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQubGVuZ3RoID0gcGxheWVyQmF0dGxlc2hpcC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0LmF4aXMgPSBwbGF5ZXJCYXR0bGVzaGlwLmF4aXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0Lm5hbWUgPSBwbGF5ZXJCYXR0bGVzaGlwLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBsYXllckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGxheWVyQ2VsbC5kYXRhc2V0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGxheWVyQ2VsbC5kYXRhc2V0LmF4aXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBsYXllckNlbGwuZGF0YXNldC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNlbGwuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15R2FtZWJvYXJkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5lbXlDZWxsID0gdGhpcy5lbmVteUdyaWRDZWxsc1t4ICogMTAgKyB5XTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcsICdoaXQnLCAnbWlzcycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXlHYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15R2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSAnbWlzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15R2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15QmF0dGxlc2hpcCA9IGVuZW15R2FtZWJvYXJkLmJvYXJkW3hdW3ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuZGF0YXNldC5sZW5ndGggPSBlbmVteUJhdHRsZXNoaXAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuZGF0YXNldC5heGlzID0gZW5lbXlCYXR0bGVzaGlwLmF4aXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Q2VsbC5kYXRhc2V0Lm5hbWUgPSBlbmVteUJhdHRsZXNoaXAubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGlkZUVuZW15U2hpcHMpIGVuZW15Q2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY3JlZW5TaXplIDw9IDk2MCkge1xyXG4gICAgICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ncmlkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBwbGF5ZXJUaXRsZS50ZXh0Q29udGVudCA9ICdZb3VyIEdyaWQ6JztcclxuICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5pbnNlcnRCZWZvcmUocGxheWVyVGl0bGUsIHBsYXllckdyaWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZW5lbXlHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15LWdyaWQnKTtcclxuICAgICAgICAgICAgY29uc3QgZW5lbXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZW5lbXlUaXRsZS50ZXh0Q29udGVudCA9IFwiT3Bwb25lbnQncyBHcmlkOlwiO1xyXG4gICAgICAgICAgICBnYW1lQ29udGFpbmVyLmluc2VydEJlZm9yZShlbmVteVRpdGxlLCBlbmVteUdyaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXNlQnV0dG9ucyguLi5jYWxsYmFja0ZuKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9taXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1idG4nKTtcclxuICAgICAgICByYW5kb21pc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFja0ZuWzBdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJyk7XHJcbiAgICAgICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFja0ZuWzFdKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQtYnRuJyk7XHJcbiAgICAgICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFja0ZuWzJdKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudERpc2FibGVyKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUNoYW5naW5nU2hpcExvY2F0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgdGhpcy5oYW5kbGVEcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xyXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcHMgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcclxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNoaXBBeGlzLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVNb3ZlU2hpcHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2hpcHMgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcclxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB0aGlzLmNoYW5nZVNoaXBMb2NhdGlvbkV2ZW50KHNoaXApKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5oYW5kbGVEcmFnT3Zlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuaGFuZGxlRHJhZ092ZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTaGlwTG9jYXRpb25FdmVudChzaGlwKSB7XHJcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xyXG5cclxuICAgICAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xyXG4gICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNoaXBBeGlzLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVTaGlwQXhpcy5iaW5kKHRoaXMpLCB7b25jZTogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdTdGFydChlKSB7XHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsIGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMucGxheWVyLmdhbWVib2FyZC5kZWVwQ29weSh0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmQpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyl9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmFnRW5kKGUpIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ092ZXIoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcm9wKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1N0YXJ0QnRuQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvcihgLnNoaXBbZGF0YS1pbmRleD1cIiR7c2hpcElkfVwiXWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihpbmRleCAvIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGluZGV4ICUgMTA7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNoaXAgfHwgeCAqIDEwICsgeSA9PSBzaGlwSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBBeGlzID0gc2hpcC5kYXRhc2V0LmF4aXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBUb0JlUGxhY2VkID0gdGhpcy50ZW1wb3JhcnlCb2FyZC5nZXRMb2NhdGlvbkJ5U2hpcE5hbWUoc2hpcC5kYXRhc2V0Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlCb2FyZC5yZW1vdmVTaGlwKHNoaXBUb0JlUGxhY2VkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRlbXBvcmFyeUJvYXJkLmNhblNoaXBCZVBsYWNlZChzaGlwVG9CZVBsYWNlZCwgeCwgeSwgc2hpcEF4aXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJlbW92ZVNoaXAoc2hpcC5kYXRhc2V0Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIucGxhY2VTaGlwKHNoaXAuZGF0YXNldC5uYW1lLCB4LCB5LCBzaGlwQXhpcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZU1vdmVTaGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgaGFuZGxlU2hpcEF4aXMoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzU3RhcnRCdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMucGxheWVyLmdhbWVib2FyZC5kZWVwQ29weSh0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmQpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvcihgLnNoaXBbZGF0YS1pbmRleD1cIiR7c2hpcElkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3Ioc2hpcElkIC8gMTApO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gc2hpcElkICUgMTA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdBeGlzID0gc2hpcC5kYXRhc2V0LmF4aXMgPT09ICd4QXhpcycgPyAneUF4aXMnIDogJ3hBeGlzJztcclxuICAgICAgICAgICAgY29uc3Qgc2hpcFRvQmVQbGFjZWQgPSB0aGlzLnRlbXBvcmFyeUJvYXJkLmdldExvY2F0aW9uQnlTaGlwTmFtZShzaGlwLmRhdGFzZXQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUJvYXJkLnJlbW92ZVNoaXAoc2hpcFRvQmVQbGFjZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcG9yYXJ5Qm9hcmQuY2FuU2hpcEJlUGxhY2VkKHNoaXBUb0JlUGxhY2VkLCB4LCB5LCBuZXdBeGlzKSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5yZW1vdmVTaGlwKHNoaXAuZGF0YXNldC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLnBsYWNlU2hpcChzaGlwLmRhdGFzZXQubmFtZSwgeCwgeSwgbmV3QXhpcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZU1vdmVTaGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUJ1dHRvbnModmlzaWJsZSkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20tYnRuJyk7XHJcbiAgICAgICAgcmFuZG9tQnRuLmRpc2FibGVkID0gdmlzaWJsZTtcclxuICAgICAgICByYW5kb21CdG4uc3R5bGUub3BhY2l0eSA9IHZpc2libGUgPyAwLjc1IDogMTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnRuJyk7XHJcbiAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB2aXNpYmxlO1xyXG4gICAgICAgIHN0YXJ0QnRuLnN0eWxlLm9wYWNpdHkgPSB2aXNpYmxlID8gMC43NSA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRBcmVhcygpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1ncmlkID4gZGl2Jyk7XHJcbiAgICAgICAgcGxheWVyR3JpZC5mb3JFYWNoKChhcmVhKSA9PiBhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcsICdtaXNzJywgJ3NoaXAnKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZW15R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlbmVteS1ncmlkID4gZGl2Jyk7XHJcbiAgICAgICAgZW5lbXlHcmlkLmZvckVhY2goKGFyZWEpID0+IGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGl0JywgJ21pc3MnLCAnc2hpcCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5TWVzc2FnZSh0ZXh0LCBlcnJvcj1mYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xyXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAgICAgZXJyb3IgPyBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJykgOiBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnRlcmZhY2U7IiwiY29uc3QgY3JlYXRlRm9vdGVyU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHA+Q29weXJpZ2h0IMKp77iPICR7ZGF0ZS5nZXRGdWxsWWVhcigpfSBKSG9sZHN3b3J0aDIzPC9wPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSkhvbGRzd29ydGgyM1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlclNlY3Rpb247IiwiY2xhc3MgQUkge1xyXG4gICAgY29uc3RydWN0b3IoZW5lbXksIFVJLCBwbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmVuZW15ID0gZW5lbXk7XHJcbiAgICAgICAgdGhpcy5VSSA9IFVJO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMubmV4dEF0dGFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLmR1cmluZ01vdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlTW92ZSgpIHtcclxuICAgICAgICBsZXQgeDtcclxuICAgICAgICBsZXQgeTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dEF0dGFja3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBbbGFzdEhpdFgsIGxhc3RIaXRZXSA9IHRoaXMubmV4dEF0dGFja3NbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW1xyXG4gICAgICAgICAgICAgICAgW2xhc3RIaXRYIC0gMSwgbGFzdEhpdFldLCBbbGFzdEhpdFggKyAxLCBsYXN0SGl0WV0sXHJcbiAgICAgICAgICAgICAgICBbbGFzdEhpdFgsIGxhc3RIaXRZIC0gMV0sIFtsYXN0SGl0WCwgbGFzdEhpdFkgKyAxXVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgW25leHRYLCBuZXh0WV0gb2YgY29vcmRpbmF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkQXR0YWNrKG5leHRYLCBuZXh0WSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB4ID0gbmV4dFg7XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IG5leHRZO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdW5kZWZpbmVkIHx8IHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QXR0YWNrcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlTW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSA9PT0gJ2hpdCcgfHwgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSAnbWlzcycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGl0U3VjY2Vzc2Z1bCA9IHRoaXMucGxheWVyLmdhbWVib2FyZC5hdHRhY2tDb29yZGluYXRlKHgsIHkpO1xyXG4gICAgICAgIGlmIChoaXRTdWNjZXNzZnVsID09PSAnaGl0Jykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRBdHRhY2tzLnB1c2goW3gsIHldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuVUkudXBkYXRlR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XHJcbiAgICAgICAgdGhpcy5kdXJpbmdNb3ZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRBdHRhY2soeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB4ID49IDAgJiYgeCA8IDEwICYmIHkgPj0gMCAmJiB5IDwgMTAgJiYgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSAnaGl0JyAmJiB0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gIT09ICdtaXNzJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQUk7IiwiY2xhc3MgQmF0dGxlc2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWU9J3VubmFtZWQnLCBoaXQ9MCwgc3Vuaz1mYWxzZSwgYXhpcz0neEF4aXMnKSB7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmhpdENvdW50ID0gaGl0O1xyXG4gICAgICAgIHRoaXMuc3VuayA9IHN1bms7XHJcbiAgICAgICAgdGhpcy5heGlzID0gYXhpcztcclxuICAgIH1cclxuXHJcbiAgICBoaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oaXRDb3VudCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRDb3VudCkgdGhpcy5zdW5rID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VuaztcclxuICAgIH1cclxuXHJcbiAgICBzZXRBeGlzKGF4aXMpIHtcclxuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhdHRsZXNoaXA7IiwiY29uc3QgQmF0dGxlc2hpcCA9IHJlcXVpcmUoXCIuL2JhdHRsZXNoaXBcIik7XHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoYm9hcmQ9bnVsbCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZCA9PT0gbnVsbCBcclxuICAgICAgICAgICAgPyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpIFxyXG4gICAgICAgICAgICA6IGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBheGlzKSB7XHJcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4QXhpcycgJiYgeSArIHNoaXAubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGlzIG91dCBvZiBib3VuZHMnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09ICd5QXhpcycgJiYgeCArIHNoaXAubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGlzIG91dCBvZiBib3VuZHMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQXJlYU9jY3VwYXRpb24oc2hpcC5sZW5ndGgsIHgsIHksIGF4aXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQW5vdGhlciBzaGlwIGhhcyB0YWtlbiB0aGlzIGFyZWEnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChheGlzID09PSAneEF4aXMnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0gPSBzaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneUF4aXMnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0gPSBzaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQXJlYU9jY3VwYXRpb24oc2hpcExlbmd0aCwgeCwgeSwgYXhpcykge1xyXG4gICAgICAgIGlmIChheGlzID09PSAneEF4aXMnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0gIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneUF4aXMnKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0gIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNrQ29vcmRpbmF0ZSh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggPCAwIHx8IHggPiAxMCB8fCB5IDwgMCB8fCB5ID4gMTAgfHwgdGhpcy5ib2FyZFt4XVt5XSA9PT0gJ21pc3MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnbWlzcyc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3hdW3ldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5XSAhPT0gJ2hpdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9ICdoaXQnO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFt4XVt5XTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FsbFN1bmsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRcclxuICAgICAgICAgIC5mbGF0KClcclxuICAgICAgICAgIC5maWx0ZXIoKGFyZWEpID0+IGFyZWEgIT09IG51bGwgJiYgYXJlYSAhPT0gJ2hpdCcgJiYgYXJlYSAhPT0gJ21pc3MnKVxyXG4gICAgICAgICAgLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmspO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0Qm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVlcENvcHkoYm9hcmQpIHtcclxuICAgICAgICBjb25zdCBuZXdCb2FyZCA9IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwgaW5zdGFuY2VvZiBCYXR0bGVzaGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Qm9hcmRbaV1bal0gPSBuZXcgQmF0dGxlc2hpcChjZWxsLmxlbmd0aCwgY2VsbC5uYW1lLCBjZWxsLmhpdENvdW50LCBjZWxsLnN1bmssIGNlbGwuYXhpcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW2ldW2pdID0gY2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2F0aW9uQnlTaGlwTmFtZShzaGlwTmFtZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9PSBudWxsICYmIHRoaXMuYm9hcmRbaV1bal0ubmFtZSA9PSBzaGlwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTaGlwKHNoaXApIHtcclxuICAgICAgICBpZiAoc2hpcCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSAhPT0gbnVsbCAmJiB0aGlzLmJvYXJkW2ldW2pdLm5hbWUgPT0gc2hpcC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FuU2hpcEJlUGxhY2VkKHNoaXAsIHgsIHksIGF4aXMpIHtcclxuICAgICAgICBpZiAoc2hpcCA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3hBeGlzJyAmJiB5ICsgc2hpcC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneUF4aXMnICYmIHggKyBzaGlwLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tBcmVhT2NjdXBhdGlvbihzaGlwLmxlbmd0aCwgeCwgeSwgYXhpcykpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkOyIsImNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XHJcbmNvbnN0IEJhdHRsZXNoaXAgPSByZXF1aXJlKCcuL2JhdHRsZXNoaXAnKTtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lPSdVbmtub3duJywgdHlwZT0naHVtYW4nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgICAgIHRoaXMuc2hpcHMgPSB7XHJcbiAgICAgICAgICAgIGNhcnJpZXI6IHtcclxuICAgICAgICAgICAgICAgIHNoaXA6IG5ldyBCYXR0bGVzaGlwKDUsICdjYXJyaWVyJyksXHJcbiAgICAgICAgICAgICAgICBwbGFjZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXR0bGVzaGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzaGlwOiBuZXcgQmF0dGxlc2hpcCg0LCAnYmF0dGxlc2hpcCcpLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3J1aXNlcjoge1xyXG4gICAgICAgICAgICAgICAgc2hpcDogbmV3IEJhdHRsZXNoaXAoMywgJ2NydWlzZXInKSxcclxuICAgICAgICAgICAgICAgIHBsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Ym1hcmluZToge1xyXG4gICAgICAgICAgICAgICAgc2hpcDogbmV3IEJhdHRsZXNoaXAoMywgJ3N1Ym1hcmluZScpLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVzdHJveWVyOiB7XHJcbiAgICAgICAgICAgICAgICBzaGlwOiBuZXcgQmF0dGxlc2hpcCgyLCAnZGVzdHJveWVyJyksXHJcbiAgICAgICAgICAgICAgICBwbGFjZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAoc2hpcE5hbWUsIHgsIHksIGF4aXMpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcE5hbWVdKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBuYW1lJyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc2hpcE5hbWVdLnNoaXAuc2V0QXhpcyhheGlzKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHRoaXMuc2hpcHNbc2hpcE5hbWVdLnNoaXAsIHgsIHksIGF4aXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBzW3NoaXBOYW1lXS5wbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVJhbmRvbVNoaXBzKCkge1xyXG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF4aXMgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ3hBeGlzJyA6ICd5QXhpcyc7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0aGlzLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBheGlzKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBpc0FsbFNoaXBzUGxhY2VkKCkge1xyXG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QWxsU2hpcHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc2hpcF0ucGxhY2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHNbc2hpcF0uc2hpcCA9IG5ldyBCYXR0bGVzaGlwKHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5sZW5ndGgsIHRoaXMuc2hpcHNbc2hpcF0uc2hpcC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2hpcChzaGlwTmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5zaGlwc1tzaGlwTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwc1tzaGlwTmFtZV0uc2hpcDtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZC5yZW1vdmVTaGlwKHNoaXApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuL2RvbS9nYW1lbWFuYWdlclwiO1xyXG5pbXBvcnQgY3JlYXRlRm9vdGVyU2VjdGlvbiBmcm9tIFwiLi9kb20vd2VicGFnZVwiO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNyZWF0ZUZvb3RlclNlY3Rpb24oKTtcclxuXHJcbmNvbnN0IGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKCk7XHJcbmdhbWVNYW5hZ2VyLmluaXRpYWxpc2VHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9