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
    max-height: 90vh;
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
    width: 100%;
    padding: 24px 0;
}

.message-box {
    width: 500px;
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
    top: 45vh;
    left: 5vw;
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
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
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

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100vw;
    font-size: 1.2rem;
}

footer > p {
    letter-spacing: 1.2px;
    margin: 12px 0;
}

i[class\$="hub"] {
    color: var(--font-color);
    font-size: 1.5rem;
}

i[class\$="hub"]:hover {
    color: #CECECE;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,+DAA+D;AACnE;;AAEA;IACI,yBAAyB;IACzB,+DAAiE;AACrE;;AAEA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,wCAAwC;IACxC,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,yDAAmD;IACnD,0BAA0B;IAC1B,4BAA4B;IAC5B,2BAA2B;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,mBAAmB;IACnB,2BAA2B;IAC3B,mCAAmC;IACnC,iBAAiB;IACjB,sCAAsC;IACtC,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,wCAAwC;IACxC,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,sCAAsC;IACtC,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["@font-face {\r\n    font-family: 'AntonSC';\r\n    src: url('../src/fonts/AntonSC-Regular.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Bebas Neue';\r\n    src: url('../src/fonts/BebasNeue-Regular.ttf') format('truetype');\r\n}\r\n\r\n:root {\r\n    --primary-color: #1434A4;\r\n    --secondary-color: #0F52BA;\r\n    --font-color: #FEFEFE;\r\n    --main-font: 'Bebas Neue';\r\n}\r\n\r\nbody {\r\n    font-family: var(--main-font);\r\n    max-height: 90vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    background-color: var(--secondary-color);\r\n    color: var(--font-color);\r\n    margin: 5vh auto;\r\n}\r\n\r\n.header {\r\n    font-family: 'AntonSC';\r\n    letter-spacing: 2.8px;\r\n    text-transform: uppercase;\r\n    font-size: 1.8rem;\r\n    cursor: default;\r\n}\r\n\r\n.header > img {\r\n    position: relative;\r\n    left: 4px;\r\n    width: 58%;\r\n    filter: invert(1);\r\n}\r\n\r\n.header > h1 {\r\n    margin: -20px 0 0;\r\n}\r\n\r\n.content {\r\n    background-color: var(--primary-color);\r\n    height: 60vh;\r\n    width: 100%;\r\n    padding: 24px 0;\r\n}\r\n\r\n.message-box {\r\n    width: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.message {\r\n    font-size: 1.8rem;\r\n    letter-spacing: 1.5px;\r\n    margin: 0;\r\n}\r\n\r\n.error {\r\n    color: rgb(221, 75, 104);\r\n}\r\n\r\n.game-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 50px;\r\n    margin: 15px;\r\n}\r\n\r\n.instruction {\r\n    position: absolute;\r\n    top: 45vh;\r\n    left: 5vw;\r\n    font-size: 1.5rem;\r\n    text-align: left;\r\n    letter-spacing: 1.6px;\r\n    line-height: 35px;\r\n}\r\n\r\n.underline {\r\n    text-decoration: underline;\r\n}\r\n\r\n.grid {\r\n    width: 400px;\r\n    height: 400px;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    border: 3px solid #000000;\r\n    margin-top: 0;\r\n}\r\n\r\n.grid-cell {\r\n    border: 1px solid #000000;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.grid-cell:hover {\r\n    background-color: var(--font-color);\r\n    opacity: 0.6;\r\n}\r\n\r\n.hit {\r\n    background-image: url('../src/image/explosion.png');\r\n    background-size: 30px 30px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-color: #5c5c5c;\r\n}\r\n\r\n.miss::before {\r\n    content: '●';\r\n    font-size: 1.8rem;\r\n    color: var(--font-color);\r\n}\r\n\r\n.ship {\r\n    background-color: #696E6A;\r\n}\r\n\r\n.buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin: 25px 0 0;\r\n}\r\n\r\n#random-btn, #start-btn, #reset-btn {\r\n    font-family: var(--main-font);\r\n    font-size: 1.4rem;\r\n    letter-spacing: 1px;\r\n    color: var(--primary-color);\r\n    background-color: var(--font-color);\r\n    padding: 4px 18px;\r\n    border: 2px solid var(--primary-color);\r\n    border-radius: 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n#random-btn:hover, #start-btn:hover, #reset-btn:hover {\r\n    color: var(--font-color);\r\n    background-color: var(--secondary-color);\r\n    border: 2px solid var(--font-color);\r\n}\r\n\r\n#random-btn:disabled, #start-btn:disabled {\r\n    background-color: gray;\r\n}\r\n\r\n#random-btn:disabled:hover, #start-btn:disabled:hover {\r\n    color: var(--primary-color);\r\n    border: 2px solid var(--primary-color);\r\n    cursor: default;\r\n}\r\n\r\nfooter {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 16px;\r\n    width: 100vw;\r\n    font-size: 1.2rem;\r\n}\r\n\r\nfooter > p {\r\n    letter-spacing: 1.2px;\r\n    margin: 12px 0;\r\n}\r\n\r\ni[class$=\"hub\"] {\r\n    color: var(--font-color);\r\n    font-size: 1.5rem;\r\n}\r\n\r\ni[class$=\"hub\"]:hover {\r\n    color: #CECECE;\r\n}"],"sourceRoot":""}]);
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
    const footer = document.querySelector('footer');
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
        } catch (err) {
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
                } catch (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHdJQUFtRDtBQUMvRiw0Q0FBNEMsNElBQXFEO0FBQ2pHLDRDQUE0Qyw0SEFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLHNDQUFzQywrQkFBK0Isd0VBQXdFLEtBQUssb0JBQW9CLGtDQUFrQywwRUFBMEUsS0FBSyxlQUFlLGlDQUFpQyxtQ0FBbUMsOEJBQThCLGtDQUFrQyxLQUFLLGNBQWMsc0NBQXNDLHlCQUF5QixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsMkJBQTJCLGlEQUFpRCxpQ0FBaUMseUJBQXlCLEtBQUssaUJBQWlCLCtCQUErQiw4QkFBOEIsa0NBQWtDLDBCQUEwQix3QkFBd0IsS0FBSyx1QkFBdUIsMkJBQTJCLGtCQUFrQixtQkFBbUIsMEJBQTBCLEtBQUssc0JBQXNCLDBCQUEwQixLQUFLLGtCQUFrQiwrQ0FBK0MscUJBQXFCLG9CQUFvQix3QkFBd0IsS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixLQUFLLGtCQUFrQiwwQkFBMEIsOEJBQThCLGtCQUFrQixLQUFLLGdCQUFnQixpQ0FBaUMsS0FBSyx5QkFBeUIsc0JBQXNCLGdDQUFnQyxrQkFBa0IscUJBQXFCLEtBQUssc0JBQXNCLDJCQUEyQixrQkFBa0Isa0JBQWtCLDBCQUEwQix5QkFBeUIsOEJBQThCLDBCQUEwQixLQUFLLG9CQUFvQixtQ0FBbUMsS0FBSyxlQUFlLHFCQUFxQixzQkFBc0Isc0JBQXNCLCtDQUErQyw0Q0FBNEMsa0NBQWtDLHNCQUFzQixLQUFLLG9CQUFvQixrQ0FBa0Msc0JBQXNCLGdDQUFnQyw0QkFBNEIsS0FBSywwQkFBMEIsNENBQTRDLHFCQUFxQixLQUFLLGNBQWMsNERBQTRELG1DQUFtQyxxQ0FBcUMsb0NBQW9DLGtDQUFrQyxLQUFLLHVCQUF1QixxQkFBcUIsMEJBQTBCLGlDQUFpQyxLQUFLLGVBQWUsa0NBQWtDLEtBQUssa0JBQWtCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQix5QkFBeUIsS0FBSyw2Q0FBNkMsc0NBQXNDLDBCQUEwQiw0QkFBNEIsb0NBQW9DLDRDQUE0QywwQkFBMEIsK0NBQStDLDRCQUE0Qix3QkFBd0IsS0FBSywrREFBK0QsaUNBQWlDLGlEQUFpRCw0Q0FBNEMsS0FBSyxtREFBbUQsK0JBQStCLEtBQUssK0RBQStELG9DQUFvQywrQ0FBK0Msd0JBQXdCLEtBQUssZ0JBQWdCLHdCQUF3QixrQkFBa0IsZ0JBQWdCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLGtCQUFrQixxQkFBcUIsMEJBQTBCLEtBQUssb0JBQW9CLDhCQUE4Qix1QkFBdUIsS0FBSywyQkFBMkIsaUNBQWlDLDBCQUEwQixLQUFLLGlDQUFpQyx1QkFBdUIsS0FBSyxtQkFBbUI7QUFDL3FMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQzlNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QztBQUNLO0FBQ2I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFNO0FBQ2hDLHlCQUF5Qix3REFBTTtBQUMvQixzQkFBc0Isc0RBQWE7QUFDbkMsc0JBQXNCLG1EQUFFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEM7QUFDSTtBQUMzQjtBQUNyQjtBQUNBLHdEQUFtQjtBQUNuQjtBQUNBLHdCQUF3Qix3REFBVztBQUNuQyw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20vdXNlcmludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS93ZWJwYWdlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvQW50b25TQy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9mb250cy9CZWJhc05ldWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2UvZXhwbG9zaW9uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW50b25TQyc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTQzNEE0O1xyXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMwRjUyQkE7XHJcbiAgICAtLWZvbnQtY29sb3I6ICNGRUZFRkU7XHJcbiAgICAtLW1haW4tZm9udDogJ0JlYmFzIE5ldWUnO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIG1hcmdpbjogNXZoIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvblNDJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAyLjhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmhlYWRlciA+IGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICB3aWR0aDogNTglO1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi5oZWFkZXIgPiBoMSB7XHJcbiAgICBtYXJnaW46IC0yMHB4IDAgMDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI0cHggMDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYm94IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZ2IoMjIxLCA3NSwgMTA0KTtcclxufVxyXG5cclxuLmdhbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogNTBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLmluc3RydWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDV2aDtcclxuICAgIGxlZnQ6IDV2dztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmdyaWQtY2VsbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQtY2VsbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmhpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xyXG59XHJcblxyXG4ubWlzczo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfil48nO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTZFNkE7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggMCAwO1xyXG59XHJcblxyXG4jcmFuZG9tLWJ0biwgI3N0YXJ0LWJ0biwgI3Jlc2V0LWJ0biB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogNHB4IDE4cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNyYW5kb20tYnRuOmhvdmVyLCAjc3RhcnQtYnRuOmhvdmVyLCAjcmVzZXQtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuI3JhbmRvbS1idG46ZGlzYWJsZWQsICNzdGFydC1idG46ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuI3JhbmRvbS1idG46ZGlzYWJsZWQ6aG92ZXIsICNzdGFydC1idG46ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTZweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5mb290ZXIgPiBwIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG59XHJcblxyXG5pW2NsYXNzXFwkPVwiaHViXCJdIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5pW2NsYXNzXFwkPVwiaHViXCJdOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjQ0VDRUNFO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtEQUErRDtBQUNuRTs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwrREFBaUU7QUFDckU7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlEQUFtRDtJQUNuRCwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsd0NBQXdDO0lBQ3hDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFDdEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvblNDJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL3NyYy9mb250cy9BbnRvblNDLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL3NyYy9mb250cy9CZWJhc05ldWUtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMTQzNEE0O1xcclxcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzBGNTJCQTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjRkVGRUZFO1xcclxcbiAgICAtLW1haW4tZm9udDogJ0JlYmFzIE5ldWUnO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luOiA1dmggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQW50b25TQyc7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjhweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA+IGltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICB3aWR0aDogNTglO1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA+IGgxIHtcXHJcXG4gICAgbWFyZ2luOiAtMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGhlaWdodDogNjB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UtYm94IHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjIxLCA3NSwgMTA0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5zdHJ1Y3Rpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDV2aDtcXHJcXG4gICAgbGVmdDogNXZ3O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZGVybGluZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jZWxsIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNlbGw6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvaW1hZ2UvZXhwbG9zaW9uLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzczo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ+KXjyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5NkU2QTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDI1cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcmFuZG9tLWJ0biwgI3N0YXJ0LWJ0biwgI3Jlc2V0LWJ0biB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDE4cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNyYW5kb20tYnRuOmhvdmVyLCAjc3RhcnQtYnRuOmhvdmVyLCAjcmVzZXQtYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3JhbmRvbS1idG46ZGlzYWJsZWQsICNzdGFydC1idG46ZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jcmFuZG9tLWJ0bjpkaXNhYmxlZDpob3ZlciwgI3N0YXJ0LWJ0bjpkaXNhYmxlZDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IHAge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pW2NsYXNzJD1cXFwiaHViXFxcIl0ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pW2NsYXNzJD1cXFwiaHViXFxcIl06aG92ZXIge1xcclxcbiAgICBjb2xvcjogI0NFQ0VDRTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9tb2R1bGVzL3BsYXllcic7XHJcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4vdXNlcmludGVyZmFjZSc7XHJcbmltcG9ydCBBSSBmcm9tICcuLi9tb2R1bGVzL2FpJztcclxuXHJcbmNsYXNzIEdhbWVNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHVzZXJOYW1lPSdVbmtub3duJywgZW5lbXlOYW1lPSdCb3QnKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHVzZXJOYW1lKTtcclxuICAgICAgICB0aGlzLmVuZW15ID0gbmV3IFBsYXllcihlbmVteU5hbWUsICdjb21wdXRlcicpO1xyXG4gICAgICAgIHRoaXMuVUkgPSBuZXcgVXNlckludGVyZmFjZSh0aGlzLnBsYXllciwgdGhpcy5lbmVteSk7XHJcbiAgICAgICAgdGhpcy5BSSA9IG5ldyBBSSh0aGlzLmVuZW15LCB0aGlzLlVJLCB0aGlzLnBsYXllcik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzR2FtZU9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0cnVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbml0aWFsaXNlR2FtZSgpIHtcclxuICAgICAgICB0aGlzLlVJLnJlbmRlckdyaWRzKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuZW15LnR5cGUgPT09ICdjb21wdXRlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5VSS5jcmVhdGVQbGF5ZXJHcmlkRXZlbnRIYW5kbGVyKChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuVUkuY3JlYXRlUGxheWVyR3JpZEV2ZW50SGFuZGxlcih0aGlzLnBsYXllckdyaWRFdmVudEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlVJLmNyZWF0ZUVuZW15R3JpZEV2ZW50SGFuZGxlcih0aGlzLmVuZW15R3JpZEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxhY2VSYW5kb21TaGlwcygpO1xyXG4gICAgICAgIHRoaXMuVUkuaW5pdGlhbGlzZUJ1dHRvbnModGhpcy5yYW5kb21pc2VQbGF5ZXJTaGlwcy5iaW5kKHRoaXMpLCB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpLCB0aGlzLnJlc2V0R2FtZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLlVJLnVwZGF0ZUdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCwgdGhpcy5lbmVteS5nYW1lYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuVUkuZW5hYmxlTW92ZVNoaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyR3JpZEV2ZW50SGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT24gJiYgdGhpcy5jdXJyZW50UGxheWVyID09PSB0aGlzLmVuZW15KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5VSS5wbGF5ZXJHcmlkQ2VsbHMuaW5kZXhPZihlLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGluZGV4IC8gMTApO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gaW5kZXggJSAxMDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2lubmVyKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmF0dGFja0Nvb3JkaW5hdGUoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnVwZGF0ZUdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCwgdGhpcy5lbmVteS5nYW1lYm9hcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5lbXlHcmlkRXZlbnRIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPbiAmJiB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucGxheWVyICYmICF0aGlzLkFJLmR1cmluZ01vdmUpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLlVJLmVuZW15R3JpZENlbGxzLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihpbmRleCAvIDEwKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGluZGV4ICUgMTA7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmVteS5nYW1lYm9hcmQuYXR0YWNrQ29vcmRpbmF0ZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VSS51cGRhdGVHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZW5lbXkuZ2FtZWJvYXJkKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5uZXIoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMuZW5lbXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLmRpc3BsYXlNZXNzYWdlKFwiRW5lbXkncyB0dXJuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuQUkuZHVyaW5nTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuQUkubWFrZU1vdmUuYmluZCh0aGlzLkFJKSwgMjAwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjAwKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzR2FtZU9uKSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuVUkuZGlzcGxheU1lc3NhZ2UoJ1lvdXIgdHVybicpLCAxMjAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVUkuZGlzcGxheU1lc3NhZ2UoJ0ludmFsaWQgbW92ZS4uLiBUcnkgYWdhaW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1dpbm5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmlzQWxsU3VuaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5VSS5kaXNwbGF5TWVzc2FnZSgnR2FtZSBvdmVyPGJyPllvdSBhcmUgZGVmZWF0ZWQuLi4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVuZW15LmdhbWVib2FyZC5pc0FsbFN1bmsoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuVUkuZGlzcGxheU1lc3NhZ2UoJ0dhbWUgb3Zlcjxicj5Zb3UgYXJlIHZpY3RvcmlvdXMhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPbikge1xyXG4gICAgICAgICAgICB0aGlzLlVJLmRpc3BsYXlNZXNzYWdlKCdHYW1lIGFscmVhZHkgc3RhcnRlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wbGF5ZXIuaXNBbGxTaGlwc1BsYWNlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVUkuZGlzcGxheU1lc3NhZ2UoJ05vdCBhbGwgc2hpcHMgYXJlIHBsYWNlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzR2FtZU9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICAgICAgICB0aGlzLmVuZW15LnBsYWNlUmFuZG9tU2hpcHMoKTtcclxuICAgICAgICB0aGlzLlVJLmhhc1N0YXJ0QnRuQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5VSS5kaXNhYmxlQ2hhbmdpbmdTaGlwTG9jYXRpb24oKTtcclxuICAgICAgICB0aGlzLlVJLnVwZGF0ZUdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCwgdGhpcy5lbmVteS5nYW1lYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuVUkuZGlzYWJsZUJ1dHRvbnModHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5VSS5kaXNwbGF5TWVzc2FnZSgnR2FtZSBzdGFydGVkITxicj5Zb3VyIHR1cm4nKTtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9taXNlUGxheWVyU2hpcHMoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5yZXNldEFsbFNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxhY2VSYW5kb21TaGlwcygpO1xyXG4gICAgICAgIHRoaXMuVUkudXBkYXRlR3JpZHModGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLCB0aGlzLmVuZW15LmdhbWVib2FyZCk7XHJcbiAgICAgICAgdGhpcy5VSS5lbmFibGVNb3ZlU2hpcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5VSS5kaXNhYmxlQnV0dG9ucyhmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5VSS5oYXNTdGFydEJ0bkNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzR2FtZU9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYXllci5nYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xyXG4gICAgICAgIHRoaXMuZW5lbXkuZ2FtZWJvYXJkLnJlc2V0Qm9hcmQoKTtcclxuICAgICAgICB0aGlzLnBsYXllci5yZXNldEFsbFNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5lbmVteS5yZXNldEFsbFNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5VSS5yZXNldEFyZWFzKCk7XHJcbiAgICAgICAgdGhpcy5VSS5kaXNwbGF5TWVzc2FnZSgnR2FtZSB3YXMgcmVzdGFydGVkPGJyPlBsZWFzZSBhcnJhbmdlIHlvdXIgc2hpcHMgcG9zaXRpb24uLi4nKTtcclxuICAgICAgICB0aGlzLnBsYXllci5wbGFjZVJhbmRvbVNoaXBzKCk7XHJcbiAgICAgICAgdGhpcy5VSS51cGRhdGVHcmlkcyh0aGlzLnBsYXllci5nYW1lYm9hcmQsIHRoaXMuZW5lbXkuZ2FtZWJvYXJkKTtcclxuICAgICAgICB0aGlzLlVJLmVuYWJsZU1vdmVTaGlwcygpO1xyXG4gICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVNYW5hZ2VyOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL21vZHVsZXMvZ2FtZWJvYXJkXCI7XHJcblxyXG5jbGFzcyBVc2VySW50ZXJmYWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgZW5lbXkpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnBsYXllckdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWdyaWQnKTtcclxuICAgICAgICB0aGlzLnBsYXllckdyaWRDZWxscyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5lbXkgPSBlbmVteTtcclxuICAgICAgICB0aGlzLmVuZW15R3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmVteS1ncmlkJyk7XHJcbiAgICAgICAgdGhpcy5lbmVteUdyaWRDZWxscyA9IFtdO1xyXG4gICAgICAgIHRoaXMudGVtcG9yYXJ5Qm9hcmQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaGFzU3RhcnRCdG5DbGlja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR3JpZChncmlkLCBjZWxscykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcmVhLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpO1xyXG4gICAgICAgICAgICBhcmVhLmRhdGFzZXQuaW5kZXggPSBpO1xyXG4gICAgICAgICAgICBhcmVhLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGFyZWEpO1xyXG4gICAgICAgICAgICBjZWxscy5wdXNoKGFyZWEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcmlkcygpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyaWQodGhpcy5wbGF5ZXJHcmlkLCB0aGlzLnBsYXllckdyaWRDZWxscyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmlkKHRoaXMuZW5lbXlHcmlkLCB0aGlzLmVuZW15R3JpZENlbGxzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQbGF5ZXJHcmlkRXZlbnRIYW5kbGVyKGNhbGxiYWNrRm4pIHtcclxuICAgICAgICB0aGlzLnBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFja0ZuKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbmVteUdyaWRFdmVudEhhbmRsZXIoY2FsbGJhY2tGbikge1xyXG4gICAgICAgIHRoaXMuZW5lbXlHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2tGbik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlR3JpZHMocGxheWVyR2FtZWJvYXJkLCBlbmVteUdhbWVib2FyZD1udWxsLCBoaWRlRW5lbXlTaGlwcz10cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQ2VsbCA9IHRoaXMucGxheWVyR3JpZENlbGxzW3ggKiAxMCArIHldO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJywgJ2hpdCcsICdtaXNzJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyR2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSAnbWlzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyR2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQmF0dGxlc2hpcCA9IHBsYXllckdhbWVib2FyZC5ib2FyZFt4XVt5XTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxsLmRhdGFzZXQubGVuZ3RoID0gcGxheWVyQmF0dGxlc2hpcC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0LmF4aXMgPSBwbGF5ZXJCYXR0bGVzaGlwLmF4aXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0Lm5hbWUgPSBwbGF5ZXJCYXR0bGVzaGlwLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBsYXllckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGxheWVyQ2VsbC5kYXRhc2V0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGxheWVyQ2VsbC5kYXRhc2V0LmF4aXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBsYXllckNlbGwuZGF0YXNldC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckNlbGwuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVuZW15R2FtZWJvYXJkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5lbXlDZWxsID0gdGhpcy5lbmVteUdyaWRDZWxsc1t4ICogMTAgKyB5XTtcclxuICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcsICdoaXQnLCAnbWlzcycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXlHYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Q2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15R2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSAnbWlzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVuZW15R2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15QmF0dGxlc2hpcCA9IGVuZW15R2FtZWJvYXJkLmJvYXJkW3hdW3ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuZGF0YXNldC5sZW5ndGggPSBlbmVteUJhdHRsZXNoaXAubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmVteUNlbGwuZGF0YXNldC5heGlzID0gZW5lbXlCYXR0bGVzaGlwLmF4aXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Q2VsbC5kYXRhc2V0Lm5hbWUgPSBlbmVteUJhdHRsZXNoaXAubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGlkZUVuZW15U2hpcHMpIGVuZW15Q2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpc2VCdXR0b25zKC4uLmNhbGxiYWNrRm4pIHtcclxuICAgICAgICBjb25zdCByYW5kb21pc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWJ0bicpO1xyXG4gICAgICAgIHJhbmRvbWlzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrRm5bMF0pO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcclxuICAgICAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrRm5bMV0pO1xyXG5cclxuICAgICAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKTtcclxuICAgICAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrRm5bMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50RGlzYWJsZXIoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlQ2hhbmdpbmdTaGlwTG9jYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmhhbmRsZURyYWdTdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCB0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuaGFuZGxlRHJhZ092ZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzaGlwcyA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xyXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU2hpcEF4aXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZU1vdmVTaGlwcygpIHtcclxuICAgICAgICBjb25zdCBzaGlwcyA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xyXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHRoaXMuY2hhbmdlU2hpcExvY2F0aW9uRXZlbnQoc2hpcCkpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZURyb3AuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5oYW5kbGVEcmFnT3Zlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNoaXBMb2NhdGlvbkV2ZW50KHNoaXApIHtcclxuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5ldmVudERpc2FibGVyKTtcclxuICAgICAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLmV2ZW50RGlzYWJsZXIpO1xyXG4gICAgICAgIHNoaXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5oYW5kbGVEcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuaGFuZGxlRHJhZ0VuZC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnREaXNhYmxlcik7XHJcbiAgICAgICAgc2hpcC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlU2hpcEF4aXMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVNoaXBBeGlzLmJpbmQodGhpcyksIHtvbmNlOiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcclxuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZS50YXJnZXQuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgICAgdGhpcy50ZW1wb3JhcnlCb2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmRlZXBDb3B5KHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZCkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKX0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyYWdFbmQoZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEcmFnT3ZlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZURyb3AoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzU3RhcnRCdG5DbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yKGAuc2hpcFtkYXRhLWluZGV4PVwiJHtzaGlwSWR9XCJdYCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGluZGV4IC8gMTApO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gaW5kZXggJSAxMDtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2hpcCB8fCB4ICogMTAgKyB5ID09IHNoaXBJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hpcEF4aXMgPSBzaGlwLmRhdGFzZXQuYXhpcztcclxuICAgICAgICAgICAgY29uc3Qgc2hpcFRvQmVQbGFjZWQgPSB0aGlzLnRlbXBvcmFyeUJvYXJkLmdldExvY2F0aW9uQnlTaGlwTmFtZShzaGlwLmRhdGFzZXQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRlbXBvcmFyeUJvYXJkLnJlbW92ZVNoaXAoc2hpcFRvQmVQbGFjZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGVtcG9yYXJ5Qm9hcmQuY2FuU2hpcEJlUGxhY2VkKHNoaXBUb0JlUGxhY2VkLCB4LCB5LCBzaGlwQXhpcykpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmVtb3ZlU2hpcChzaGlwLmRhdGFzZXQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5wbGFjZVNoaXAoc2hpcC5kYXRhc2V0Lm5hbWUsIHgsIHksIHNoaXBBeGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlTW92ZVNoaXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBoYW5kbGVTaGlwQXhpcyhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNTdGFydEJ0bkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wb3JhcnlCb2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmRlZXBDb3B5KHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hpcElkID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yKGAuc2hpcFtkYXRhLWluZGV4PVwiJHtzaGlwSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihzaGlwSWQgLyAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBzaGlwSWQgJSAxMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0F4aXMgPSBzaGlwLmRhdGFzZXQuYXhpcyA9PT0gJ3hBeGlzJyA/ICd5QXhpcycgOiAneEF4aXMnO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwVG9CZVBsYWNlZCA9IHRoaXMudGVtcG9yYXJ5Qm9hcmQuZ2V0TG9jYXRpb25CeVNoaXBOYW1lKHNoaXAuZGF0YXNldC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGVtcG9yYXJ5Qm9hcmQucmVtb3ZlU2hpcChzaGlwVG9CZVBsYWNlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZW1wb3JhcnlCb2FyZC5jYW5TaGlwQmVQbGFjZWQoc2hpcFRvQmVQbGFjZWQsIHgsIHksIG5ld0F4aXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJlbW92ZVNoaXAoc2hpcC5kYXRhc2V0Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIucGxhY2VTaGlwKHNoaXAuZGF0YXNldC5uYW1lLCB4LCB5LCBuZXdBeGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlTW92ZVNoaXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlQnV0dG9ucyh2aXNpYmxlKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1idG4nKTtcclxuICAgICAgICByYW5kb21CdG4uZGlzYWJsZWQgPSB2aXNpYmxlO1xyXG4gICAgICAgIHJhbmRvbUJ0bi5zdHlsZS5vcGFjaXR5ID0gdmlzaWJsZSA/IDAuNzUgOiAxO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcclxuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHZpc2libGU7XHJcbiAgICAgICAgc3RhcnRCdG4uc3R5bGUub3BhY2l0eSA9IHZpc2libGUgPyAwLjc1IDogMTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEFyZWFzKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyLWdyaWQgPiBkaXYnKTtcclxuICAgICAgICBwbGF5ZXJHcmlkLmZvckVhY2goKGFyZWEpID0+IGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGl0JywgJ21pc3MnLCAnc2hpcCcpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZW5lbXlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2VuZW15LWdyaWQgPiBkaXYnKTtcclxuICAgICAgICBlbmVteUdyaWQuZm9yRWFjaCgoYXJlYSkgPT4gYXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnLCAnbWlzcycsICdzaGlwJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlNZXNzYWdlKHRleHQsIGVycm9yPWZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XHJcbiAgICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cclxuICAgICAgICBlcnJvciA/IG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3InKSA6IG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckludGVyZmFjZTsiLCJjb25zdCBjcmVhdGVGb290ZXJTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxwPkNvcHlyaWdodCDCqe+4jyAke2RhdGUuZ2V0RnVsbFllYXIoKX0gSkhvbGRzd29ydGgyMzwvcD5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pIb2xkc3dvcnRoMjNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWdpdGh1YlwiPjwvaT5cclxuICAgICAgICA8L2E+XHJcbiAgICBgO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXJTZWN0aW9uOyIsImNsYXNzIEFJIHtcclxuICAgIGNvbnN0cnVjdG9yKGVuZW15LCBVSSwgcGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteSA9IGVuZW15O1xyXG4gICAgICAgIHRoaXMuVUkgPSBVSTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLm5leHRBdHRhY2tzID0gW107XHJcbiAgICAgICAgdGhpcy5kdXJpbmdNb3ZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZU1vdmUoKSB7XHJcbiAgICAgICAgbGV0IHg7XHJcbiAgICAgICAgbGV0IHk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5leHRBdHRhY2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgW2xhc3RIaXRYLCBsYXN0SGl0WV0gPSB0aGlzLm5leHRBdHRhY2tzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtcclxuICAgICAgICAgICAgICAgIFtsYXN0SGl0WCAtIDEsIGxhc3RIaXRZXSwgW2xhc3RIaXRYICsgMSwgbGFzdEhpdFldLFxyXG4gICAgICAgICAgICAgICAgW2xhc3RIaXRYLCBsYXN0SGl0WSAtIDFdLCBbbGFzdEhpdFgsIGxhc3RIaXRZICsgMV1cclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IFtuZXh0WCwgbmV4dFldIG9mIGNvb3JkaW5hdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZEF0dGFjayhuZXh0WCwgbmV4dFkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IG5leHRYO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBuZXh0WTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEF0dGFja3Muc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFrZU1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLnBsYXllci5nYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09ICdoaXQnIHx8IHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSA9PT0gJ21pc3MnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhpdFN1Y2Nlc3NmdWwgPSB0aGlzLnBsYXllci5nYW1lYm9hcmQuYXR0YWNrQ29vcmRpbmF0ZSh4LCB5KTtcclxuICAgICAgICBpZiAoaGl0U3VjY2Vzc2Z1bCA9PT0gJ2hpdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0QXR0YWNrcy5wdXNoKFt4LCB5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlVJLnVwZGF0ZUdyaWRzKHRoaXMucGxheWVyLmdhbWVib2FyZCwgdGhpcy5lbmVteS5nYW1lYm9hcmQpO1xyXG4gICAgICAgIHRoaXMuZHVyaW5nTW92ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkQXR0YWNrKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4geCA+PSAwICYmIHggPCAxMCAmJiB5ID49IDAgJiYgeSA8IDEwICYmIHRoaXMucGxheWVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XSAhPT0gJ2hpdCcgJiYgdGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSAnbWlzcyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFJOyIsImNsYXNzIEJhdHRsZXNoaXAge1xyXG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lPSd1bm5hbWVkJywgaGl0PTAsIHN1bms9ZmFsc2UsIGF4aXM9J3hBeGlzJykge1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5oaXRDb3VudCA9IGhpdDtcclxuICAgICAgICB0aGlzLnN1bmsgPSBzdW5rO1xyXG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0Q291bnQrKztcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0Q291bnQpIHRoaXMuc3VuayA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1bms7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXhpcyhheGlzKSB7XHJcbiAgICAgICAgdGhpcy5heGlzID0gYXhpcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXR0bGVzaGlwOyIsImNvbnN0IEJhdHRsZXNoaXAgPSByZXF1aXJlKFwiLi9iYXR0bGVzaGlwXCIpO1xyXG5cclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvYXJkPW51bGwpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQgPT09IG51bGwgXHJcbiAgICAgICAgICAgID8gQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKSBcclxuICAgICAgICAgICAgOiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgYXhpcykge1xyXG4gICAgICAgIGlmIChheGlzID09PSAneEF4aXMnICYmIHkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBpcyBvdXQgb2YgYm91bmRzJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneUF4aXMnICYmIHggKyBzaGlwLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBpcyBvdXQgb2YgYm91bmRzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGVja0FyZWFPY2N1cGF0aW9uKHNoaXAubGVuZ3RoLCB4LCB5LCBheGlzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fub3RoZXIgc2hpcCBoYXMgdGFrZW4gdGhpcyBhcmVhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3hBeGlzJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldID0gc2hpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3lBeGlzJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gc2hpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FyZWFPY2N1cGF0aW9uKHNoaXBMZW5ndGgsIHgsIHksIGF4aXMpIHtcclxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3hBeGlzJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSArIGldICE9PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3lBeGlzJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeCArIGldW3ldICE9PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFja0Nvb3JkaW5hdGUoeCwgeSkge1xyXG4gICAgICAgIGlmICh4IDwgMCB8fCB4ID4gMTAgfHwgeSA8IDAgfHwgeSA+IDEwIHx8IHRoaXMuYm9hcmRbeF1beV0gPT09ICdtaXNzJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ21pc3MnO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFt4XVt5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeF1beV0gIT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnaGl0JztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV07XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBbGxTdW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkXHJcbiAgICAgICAgICAuZmxhdCgpXHJcbiAgICAgICAgICAuZmlsdGVyKChhcmVhKSA9PiBhcmVhICE9PSBudWxsICYmIGFyZWEgIT09ICdoaXQnICYmIGFyZWEgIT09ICdtaXNzJylcclxuICAgICAgICAgIC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEJvYXJkKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZXBDb3B5KGJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Qm9hcmQgPSBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgQmF0dGxlc2hpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0JvYXJkW2ldW2pdID0gbmV3IEJhdHRsZXNoaXAoY2VsbC5sZW5ndGgsIGNlbGwubmFtZSwgY2VsbC5oaXRDb3VudCwgY2VsbC5zdW5rLCBjZWxsLmF4aXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdCb2FyZFtpXVtqXSA9IGNlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdCb2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhdGlvbkJ5U2hpcE5hbWUoc2hpcE5hbWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtqXSAhPT0gbnVsbCAmJiB0aGlzLmJvYXJkW2ldW2pdLm5hbWUgPT0gc2hpcE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2hpcChzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNoaXAgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bal0gIT09IG51bGwgJiYgdGhpcy5ib2FyZFtpXVtqXS5uYW1lID09IHNoaXAubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhblNoaXBCZVBsYWNlZChzaGlwLCB4LCB5LCBheGlzKSB7XHJcbiAgICAgICAgaWYgKHNoaXAgPT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGF4aXMgPT09ICd4QXhpcycgJiYgeSArIHNoaXAubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3lBeGlzJyAmJiB4ICsgc2hpcC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQXJlYU9jY3VwYXRpb24oc2hpcC5sZW5ndGgsIHgsIHksIGF4aXMpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDsiLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xyXG5jb25zdCBCYXR0bGVzaGlwID0gcmVxdWlyZSgnLi9iYXR0bGVzaGlwJyk7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZT0nVW5rbm93bicsIHR5cGU9J2h1bWFuJykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuICAgICAgICB0aGlzLnNoaXBzID0ge1xyXG4gICAgICAgICAgICBjYXJyaWVyOiB7XHJcbiAgICAgICAgICAgICAgICBzaGlwOiBuZXcgQmF0dGxlc2hpcCg1LCAnY2FycmllcicpLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmF0dGxlc2hpcDoge1xyXG4gICAgICAgICAgICAgICAgc2hpcDogbmV3IEJhdHRsZXNoaXAoNCwgJ2JhdHRsZXNoaXAnKSxcclxuICAgICAgICAgICAgICAgIHBsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNydWlzZXI6IHtcclxuICAgICAgICAgICAgICAgIHNoaXA6IG5ldyBCYXR0bGVzaGlwKDMsICdjcnVpc2VyJyksXHJcbiAgICAgICAgICAgICAgICBwbGFjZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtYXJpbmU6IHtcclxuICAgICAgICAgICAgICAgIHNoaXA6IG5ldyBCYXR0bGVzaGlwKDMsICdzdWJtYXJpbmUnKSxcclxuICAgICAgICAgICAgICAgIHBsYWNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlc3Ryb3llcjoge1xyXG4gICAgICAgICAgICAgICAgc2hpcDogbmV3IEJhdHRsZXNoaXAoMiwgJ2Rlc3Ryb3llcicpLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwKHNoaXBOYW1lLCB4LCB5LCBheGlzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBOYW1lXSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgbmFtZScpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBzW3NoaXBOYW1lXS5zaGlwLnNldEF4aXMoYXhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcCh0aGlzLnNoaXBzW3NoaXBOYW1lXS5zaGlwLCB4LCB5LCBheGlzKTtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc1tzaGlwTmFtZV0ucGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VSYW5kb21TaGlwcygpIHtcclxuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcclxuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBheGlzID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd4QXhpcycgOiAneUF4aXMnO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdGhpcy5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgYXhpcyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGlzQWxsU2hpcHNQbGFjZWQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zaGlwc1tzaGlwXS5wbGFjZWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRBbGxTaGlwcygpIHtcclxuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5wbGFjZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc1tzaGlwXS5zaGlwID0gbmV3IEJhdHRsZXNoaXAodGhpcy5zaGlwc1tzaGlwXS5zaGlwLmxlbmd0aCwgdGhpcy5zaGlwc1tzaGlwXS5zaGlwLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTaGlwKHNoaXBOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNoaXBzW3NoaXBOYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW3NoaXBOYW1lXS5zaGlwO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkLnJlbW92ZVNoaXAoc2hpcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vZG9tL2dhbWVtYW5hZ2VyXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXJTZWN0aW9uIGZyb20gXCIuL2RvbS93ZWJwYWdlXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY3JlYXRlRm9vdGVyU2VjdGlvbigpO1xyXG5cclxuY29uc3QgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKTtcclxuZ2FtZU1hbmFnZXIuaW5pdGlhbGlzZUdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=