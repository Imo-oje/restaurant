/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,200;0,400;1,100&family=Qwitcher+Grypen:wght@400;700&family=Romanesco&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #3D3A40;
  font-family: "Poppins", sans-serif;
  color: #fff;
}

.active {
  color: #DB071A !important;
}

.off-screen {
  display: none;
}

.on-screen {
  border: 1px solid green;
  display: flex;
}

#content {
  position: relative;
}

.page-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 3rem;
  box-shadow: 0 4px 12px rgba(23, 23, 23, 0.9);
  margin: 1rem 3rem 0;
}
.page-nav .logo {
  font-family: "Bebas Neue", sans-serif;
  white-space: nowrap;
  font-size: 1.5rem;
}
.page-nav a {
  text-decoration: none;
  color: #fff;
}
.page-nav ul {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  list-style: none;
  flex: 1;
  width: auto;
  max-width: 400px;
  font-size: 1rem;
  font-weight: 400;
}
.page-nav ul a {
  display: flex;
  align-items: center;
}
.page-nav ul a span, .page-nav ul a i {
  margin-right: 5px;
  font-size: 16px;
  color: #DB071A;
}
.page-nav ul a i {
  width: 16px;
  height: 16px;
}

.container {
  margin: 1rem 5rem 0;
  box-shadow: 0 4px 12px rgba(23, 23, 23, 0.9);
  padding: 0 3rem;
  height: 85vh;
}

/* HOME PAGE SECTION */
div.home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  height: 100%;
}
div.home .left {
  margin-top: 12rem;
}
div.home .left h2 {
  font-size: 90px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 200;
  font-family: "Romanesco", cursive;
}
div.home .left h2 span {
  font-family: "Qwitcher Grypen", cursive;
  font-size: 100px;
  font-weight: 800;
}
div.home .left p {
  margin-top: 10px;
}
div.home .left .input {
  width: 300px;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 10px 3px 3px 10px;
  background: #DB071A;
  position: relative;
  margin-top: 15px;
}
div.home .left .input input {
  flex: 1;
  height: 100%;
  border-radius: inherit;
  border: none;
  outline: none;
  padding: 10px;
}
div.home .left .input span {
  padding: 10px;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
}
div.home .left .input button {
  padding: 10px 28px;
  border-radius: 10px;
  margin-left: 40px;
  position: absolute;
  top: 0;
  left: 300px;
  border: none;
}
div.home .left .input button:hover {
  background: transparent;
  border: 0.3px solid #fff;
  color: #fff;
  transition: all 300ms ease;
  cursor: pointer;
}
div.home .right {
  /* background:url('../src/img/hamburger.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; */
}
div.home .right img {
  display: block;
  width: 100%;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 3rem;
}
.footer address {
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer span {
  color: #DB071A;
}
.footer span button {
  margin-left: 15px;
  border: none;
  outline: none;
  padding: 5px 14px;
  border-radius: 5px;
}
.footer span button:hover {
  background: transparent;
  border: 0.3px solid #fff;
  color: #fff;
  transition: all 300ms ease;
  cursor: pointer;
}

.menu {
  color: green;
}

.contact {
  color: yellow;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA;EACE,UAAA;EACA,SAAA;EACA,sBAAA;AACF;;AAOA;EACE,mBANW;EAOX,kCAAA;EACA,WAAA;AAJF;;AAOA;EACE,yBAAA;AAJF;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,uBAAA;EACA,aAAA;AAJF;;AAOA;EACE,kBAAA;AAJF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,oBAAA;EACA,4CAAA;EACA,mBAAA;AALF;AAOE;EACE,qCArCQ;EAsCR,mBAAA;EACA,iBAAA;AALJ;AAQE;EACE,qBAAA;EACA,WAAA;AANJ;AASE;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,gBAAA;EACA,OAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AAPJ;AASI;EACE,aAAA;EACA,mBAAA;AAPN;AASM;EACE,iBAAA;EACA,eAAA;EACA,cA/DO;AAwDf;AAUM;EACE,WAAA;EACA,YAAA;AARR;;AAeA;EACE,mBAAA;EACA,4CAAA;EACA,eAAA;EACA,YAAA;AAZF;;AAeA,sBAAA;AAEA;EACE,aAAA;EACA,2DAAA;EACA,YAAA;AAbF;AAgBE;EACE,iBAAA;AAdJ;AAgBI;EACE,eAAA;EACA,cAAA;EACA,yBAAA;EACA,gBAAA;EACA,iCAAA;AAdN;AAgBM;EACE,uCAAA;EACA,gBAAA;EACA,gBAAA;AAdR;AAmBI;EACE,gBAAA;AAjBN;AAoBI;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAtHS;EAuHT,kBAAA;EACA,gBAAA;AAlBN;AAoBM;EACE,OAAA;EACA,YAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;AAlBR;AAqBM;EACE,aAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;AAnBR;AAsBM;EACE,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;AApBR;AAsBQ;EACE,uBAAA;EACA,wBAAA;EACA,WAAA;EACA,0BAAA;EACA,eAAA;AApBV;AA0BE;EACE;;;6BAAA;AArBJ;AA0BI;EACE,cAAA;EACA,WAAA;AAxBN;;AA6BA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;AA1BF;AA4BE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AA1BJ;AA6BE;EACE,cA5LW;AAiKf;AA8BE;EACE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AA5BJ;AA8BI;EACE,uBAAA;EACA,wBAAA;EACA,WAAA;EACA,0BAAA;EACA,eAAA;AA5BN;;AAiCA;EACE,YAAA;AA9BF;;AAiCA;EACE,aAAA;AA9BF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,200;0,400;1,100&family=Qwitcher+Grypen:wght@400;700&family=Romanesco&display=swap');\r\n*{\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n$body-color: #3D3A40;\r\n$logo-font: 'Bebas Neue', sans-serif;\r\n$page-padding: 3rem;\r\n$color-accent: #DB071A;\r\n\r\nbody{\r\n  background: $body-color;\r\n  font-family: 'Poppins', sans-serif;\r\n  color :#fff;\r\n}\r\n\r\n.active{\r\n  color: $color-accent !important;\r\n}\r\n\r\n.off-screen{\r\n  display: none;\r\n}\r\n\r\n.on-screen{\r\n  border: 1px solid green;\r\n  display: flex;\r\n}\r\n\r\n#content {\r\n  position: relative;\r\n}\r\n\r\n\r\n.page-nav{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: .5rem $page-padding;\r\n  box-shadow: 0 4px 12px rgba(23,23,23,0.9);\r\n  margin: 1rem $page-padding 0;\r\n\r\n  .logo {\r\n    font-family: $logo-font;\r\n    white-space: nowrap;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  a{\r\n    text-decoration: none;\r\n    color :#fff;\r\n  }\r\n\r\n  ul{\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: space-between;\r\n    list-style: none;\r\n    flex: 1;\r\n    width: auto;\r\n    max-width: 400px;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n\r\n    a{\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      span, i {\r\n        margin-right: 5px;\r\n        font-size: 16px;\r\n        color: $color-accent;\r\n      }\r\n\r\n      i{\r\n        width: 16px;\r\n        height: 16px;\r\n      }\r\n    }\r\n\r\n  }\r\n}\r\n\r\n.container{\r\n  margin: 1rem 5rem 0;\r\n  box-shadow: 0 4px 12px rgba(23,23,23,0.9);\r\n  padding: 0 $page-padding;\r\n  height: 85vh;\r\n}\r\n\r\n/* HOME PAGE SECTION */\r\n\r\ndiv.home {\r\n  display: grid;\r\n  grid-template-columns:  repeat(auto-fit, minmax(400px, 1fr));\r\n  height: 100%;\r\n\r\n\r\n  .left{\r\n    margin-top: 12rem;\r\n\r\n    h2{\r\n      font-size: 90px;\r\n      line-height: 1;\r\n      text-transform: uppercase;\r\n      font-weight: 200;\r\n      font-family: 'Romanesco', cursive;\r\n\r\n      span{\r\n        font-family: 'Qwitcher Grypen', cursive;\r\n        font-size: 100px;\r\n        font-weight: 800;\r\n      }\r\n\r\n    }\r\n\r\n    p{\r\n      margin-top: 10px;\r\n    }\r\n\r\n    .input{\r\n      width: 300px;\r\n      display: flex;\r\n      align-items: center;\r\n      height: 40px;\r\n      border-radius: 10px 3px 3px 10px;\r\n      background: $color-accent;\r\n      position: relative;\r\n      margin-top: 15px;\r\n\r\n      input{\r\n        flex: 1;\r\n        height: 100%;\r\n        border-radius: inherit;\r\n        border: none;\r\n        outline: none;\r\n        padding:10px;\r\n      }\r\n\r\n      span{\r\n        padding: 10px;\r\n        font-weight: 400;\r\n        font-size: 24px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      button{\r\n        padding: 10px 28px;\r\n        border-radius: 10px;\r\n        margin-left: 40px;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 300px;\r\n        border: none;\r\n\r\n        &:hover{\r\n          background: transparent;\r\n          border: .3px solid #fff;\r\n          color: #fff;\r\n          transition: all 300ms ease;\r\n          cursor: pointer \r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .right{\r\n    /* background:url('../src/img/hamburger.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: contain; */\r\n\r\n    img{\r\n      display: block;\r\n      width: 100%;\r\n    }\r\n  }\r\n}\r\n\r\n.footer{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 0 $page-padding;\r\n\r\n  address{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n\r\n  span{\r\n    color: $color-accent;\r\n  }\r\n\r\n  span button{\r\n    margin-left: 15px;\r\n    border: none;\r\n    outline: none;\r\n    padding: 5px 14px;\r\n    border-radius: 5px;\r\n\r\n    &:hover{\r\n      background: transparent;\r\n      border: .3px solid #fff;\r\n      color: #fff;\r\n      transition: all 300ms ease;\r\n      cursor: pointer\r\n    }\r\n  }\r\n}\r\n\r\n.menu {\r\n  color: green;\r\n}\r\n\r\n.contact{\r\n  color: yellow;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/components/container.js":
/*!*************************************!*\
  !*** ./src/components/container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container)
/* harmony export */ });
function container() {
  const div = document.createElement("div");
  div.classList.add("container");
  return div;
}




/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navBar: () => (/* binding */ navBar)
/* harmony export */ });
function navBar() {
  const nav = document.createElement("nav");
  nav.classList.add("page-nav");
  nav.innerHTML = `
    <a href="#">
        <div class="logo">Food for thought</div>
    </a>
    <ul>
        <a id="homeId" class="active" href="#"><li>Home</li></a>
        <!-- <a href="#">
        <span class="material-symbols-sharp"> shopping_cart </span>
        <li>Deliveries</li></a
        > -->
        <a id="menuId" href="#menu"><li>Menu</li></a>
        <a id="contactId" href="#">
        <i class="fa-solid fa-phone"></i>
        <li>contact</li></a
        >
    </ul>
  <i class="fa-solid fa-utensils"></i>
    `;

  return nav;
}




/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = "this is the contact page";
  return contact;
}




/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
const home = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  //home.id = "home";

  home.innerHTML = `
  <div class="left">
    <h2><span>Burger</span><br />for everyone</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur<br />elit. Ipsum doloribus,
      voluptatibus inventore culpa distinctio.<br />Sapiente
      tenetur,ratione voluptates. Ea quae rem inventore delectus minus.
    </p>
    <div class="input">
      <input type="search" name="search" placeholder="find foods..." />
      <span class="material-symbols-sharp"> search </span>
      <button type="button">Order</button>
    </div>
  </div>
  <div class="right">
    <img src="../src/img/hamburger.png" alt="special burger" />
  </div>
  `;

  /* container.appendChild(home); */

  return home;
};




/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.textContent = "hi this is the menu page";
  return menu;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/container */ "./src/components/container.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav */ "./src/components/nav.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");







(() => {
  document.body.appendChild((0,_components_nav__WEBPACK_IMPORTED_MODULE_3__.navBar)());
  document.body.appendChild((0,_components_container__WEBPACK_IMPORTED_MODULE_2__.container)());

  const navEl = Array.from(document.querySelectorAll(".page-nav ul a"));
  const pages = [
    {
      id: "homeId",
      content: _pages_home__WEBPACK_IMPORTED_MODULE_1__.home,
    },
    {
      id: "contactId",
      content: _pages_contact__WEBPACK_IMPORTED_MODULE_5__.contact,
    },
    {
      id: "menuId",
      content: _pages_menu__WEBPACK_IMPORTED_MODULE_4__.menu,
    },
  ];
  const containa = document.querySelector(".container");

  containa.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__.home)());

  navEl.forEach((nav) => {
    nav.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      nav.classList.add("active");

      for (let i = 0; i <= pages.length; i++) {
        if (nav.id == pages[i].id && nav.classList.contains("active")) {
          containa.replaceChild(pages[i].content(), containa.childNodes[0]);
          //innerHTML = pages[i].content().innerHTML;
          return;
        }
      }
    });
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5SSxNQUFNLHNDQUFzQyxtQ0FBbUM7QUFDeE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1B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Ozs7Ozs7OztBQ0FzQjtBQUNjO0FBQ2U7QUFDVDtBQUNOO0FBQ007QUFDMUM7QUFDQTtBQUNBLDRCQUE0Qix1REFBTTtBQUNsQyw0QkFBNEIsZ0VBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkNBQUk7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlLG1EQUFPO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwyMDA7MCw0MDA7MSwxMDAmZmFtaWx5PVF3aXRjaGVyK0dyeXBlbjp3Z2h0QDQwMDs3MDAmZmFtaWx5PVJvbWFuZXNjbyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjM0QzQTQwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNEQjA3MUEgIWltcG9ydGFudDtcbn1cblxuLm9mZi1zY3JlZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub24tc2NyZWVuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFnZS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjMsIDIzLCAyMywgMC45KTtcbiAgbWFyZ2luOiAxcmVtIDNyZW0gMDtcbn1cbi5wYWdlLW5hdiAubG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ucGFnZS1uYXYgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4ucGFnZS1uYXYgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxleDogMTtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wYWdlLW5hdiB1bCBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLW5hdiB1bCBhIHNwYW4sIC5wYWdlLW5hdiB1bCBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0RCMDcxQTtcbn1cbi5wYWdlLW5hdiB1bCBhIGkge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxcmVtIDVyZW0gMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIzLCAyMywgMjMsIDAuOSk7XG4gIHBhZGRpbmc6IDAgM3JlbTtcbiAgaGVpZ2h0OiA4NXZoO1xufVxuXG4vKiBIT01FIFBBR0UgU0VDVElPTiAqL1xuZGl2LmhvbWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuZGl2LmhvbWUgLmxlZnQge1xuICBtYXJnaW4tdG9wOiAxMnJlbTtcbn1cbmRpdi5ob21lIC5sZWZ0IGgyIHtcbiAgZm9udC1zaXplOiA5MHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9tYW5lc2NvXCIsIGN1cnNpdmU7XG59XG5kaXYuaG9tZSAubGVmdCBoMiBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiUXdpdGNoZXIgR3J5cGVuXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5kaXYuaG9tZSAubGVmdCBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmRpdi5ob21lIC5sZWZ0IC5pbnB1dCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDNweCAzcHggMTBweDtcbiAgYmFja2dyb3VuZDogI0RCMDcxQTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuZGl2LmhvbWUgLmxlZnQgLmlucHV0IGlucHV0IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5kaXYuaG9tZSAubGVmdCAuaW5wdXQgc3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmhvbWUgLmxlZnQgLmlucHV0IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAzMDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuZGl2LmhvbWUgLmxlZnQgLmlucHV0IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDAuM3B4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuZGl2LmhvbWUgLnJpZ2h0IHtcbiAgLyogYmFja2dyb3VuZDp1cmwoJy4uL3NyYy9pbWcvaGFtYnVyZ2VyLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgKi9cbn1cbmRpdi5ob21lIC5yaWdodCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAzcmVtO1xufVxuLmZvb3RlciBhZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLmZvb3RlciBzcGFuIHtcbiAgY29sb3I6ICNEQjA3MUE7XG59XG4uZm9vdGVyIHNwYW4gYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5mb290ZXIgc3BhbiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5jb250YWN0IHtcbiAgY29sb3I6IHllbGxvdztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQU9BO0VBQ0UsbUJBTlc7RUFPWCxrQ0FBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQUxGO0FBT0U7RUFDRSxxQ0FyQ1E7RUFzQ1IsbUJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUE47QUFTTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBL0RPO0FBd0RmO0FBVU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVJSOztBQWVBO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBWkY7O0FBZUEsc0JBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFlBQUE7QUFiRjtBQWdCRTtFQUNFLGlCQUFBO0FBZEo7QUFnQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQWROO0FBZ0JNO0VBQ0UsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZFI7QUFtQkk7RUFDRSxnQkFBQTtBQWpCTjtBQW9CSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkF0SFM7RUF1SFQsa0JBQUE7RUFDQSxnQkFBQTtBQWxCTjtBQW9CTTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFsQlI7QUFxQk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQW5CUjtBQXNCTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBcEJSO0FBc0JRO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFwQlY7QUEwQkU7RUFDRTs7OzZCQUFBO0FBckJKO0FBMEJJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUF4Qk47O0FBNkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUExQkY7QUE0QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBMUJKO0FBNkJFO0VBQ0UsY0E1TFc7QUFpS2Y7QUE4QkU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTVCSjtBQThCSTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FBNUJOOztBQWlDQTtFQUNFLFlBQUE7QUE5QkY7O0FBaUNBO0VBQ0UsYUFBQTtBQTlCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDIwMDswLDQwMDsxLDEwMCZmYW1pbHk9UXdpdGNoZXIrR3J5cGVuOndnaHRANDAwOzcwMCZmYW1pbHk9Um9tYW5lc2NvJmRpc3BsYXk9c3dhcCcpO1xcclxcbip7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuJGJvZHktY29sb3I6ICMzRDNBNDA7XFxyXFxuJGxvZ28tZm9udDogJ0JlYmFzIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiRwYWdlLXBhZGRpbmc6IDNyZW07XFxyXFxuJGNvbG9yLWFjY2VudDogI0RCMDcxQTtcXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgYmFja2dyb3VuZDogJGJvZHktY29sb3I7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3IgOiNmZmY7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmV7XFxyXFxuICBjb2xvcjogJGNvbG9yLWFjY2VudCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ub2ZmLXNjcmVlbntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5vbi1zY3JlZW57XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2UtbmF2e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAuNXJlbSAkcGFnZS1wYWRkaW5nO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIzLDIzLDIzLDAuOSk7XFxyXFxuICBtYXJnaW46IDFyZW0gJHBhZ2UtcGFkZGluZyAwO1xcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICBmb250LWZhbWlseTogJGxvZ28tZm9udDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3IgOiNmZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB1bHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFxyXFxuICAgIGF7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgIHNwYW4sIGkge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yLWFjY2VudDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaXtcXHJcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVye1xcclxcbiAgbWFyZ2luOiAxcmVtIDVyZW0gMDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyMywyMywyMywwLjkpO1xcclxcbiAgcGFkZGluZzogMCAkcGFnZS1wYWRkaW5nO1xcclxcbiAgaGVpZ2h0OiA4NXZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIT01FIFBBR0UgU0VDVElPTiAqL1xcclxcblxcclxcbmRpdi5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuXFxyXFxuICAubGVmdHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJyZW07XFxyXFxuXFxyXFxuICAgIGgye1xcclxcbiAgICAgIGZvbnQtc2l6ZTogOTBweDtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdSb21hbmVzY28nLCBjdXJzaXZlO1xcclxcblxcclxcbiAgICAgIHNwYW57XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1F3aXRjaGVyIEdyeXBlbicsIGN1cnNpdmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbnB1dHtcXHJcXG4gICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDNweCAzcHggMTBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYWNjZW50O1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcblxcclxcbiAgICAgIGlucHV0e1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzoxMHB4O1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBzcGFue1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGJ1dHRvbntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjhweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDMwMHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgIGJvcmRlcjogLjNweCBzb2xpZCAjZmZmO1xcclxcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yaWdodHtcXHJcXG4gICAgLyogYmFja2dyb3VuZDp1cmwoJy4uL3NyYy9pbWcvaGFtYnVyZ2VyLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgKi9cXHJcXG5cXHJcXG4gICAgaW1ne1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgJHBhZ2UtcGFkZGluZztcXHJcXG5cXHJcXG4gIGFkZHJlc3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW57XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItYWNjZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgc3BhbiBidXR0b257XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm9yZGVyOiAuM3B4IHNvbGlkICNmZmY7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY29udGFpbmVyKCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZXhwb3J0IHsgY29udGFpbmVyIH07XHJcbiIsImZ1bmN0aW9uIG5hdkJhcigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwicGFnZS1uYXZcIik7XHJcbiAgbmF2LmlubmVySFRNTCA9IGBcclxuICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5Gb29kIGZvciB0aG91Z2h0PC9kaXY+XHJcbiAgICA8L2E+XHJcbiAgICA8dWw+XHJcbiAgICAgICAgPGEgaWQ9XCJob21lSWRcIiBjbGFzcz1cImFjdGl2ZVwiIGhyZWY9XCIjXCI+PGxpPkhvbWU8L2xpPjwvYT5cclxuICAgICAgICA8IS0tIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLXNoYXJwXCI+IHNob3BwaW5nX2NhcnQgPC9zcGFuPlxyXG4gICAgICAgIDxsaT5EZWxpdmVyaWVzPC9saT48L2FcclxuICAgICAgICA+IC0tPlxyXG4gICAgICAgIDxhIGlkPVwibWVudUlkXCIgaHJlZj1cIiNtZW51XCI+PGxpPk1lbnU8L2xpPjwvYT5cclxuICAgICAgICA8YSBpZD1cImNvbnRhY3RJZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1waG9uZVwiPjwvaT5cclxuICAgICAgICA8bGk+Y29udGFjdDwvbGk+PC9hXHJcbiAgICAgICAgPlxyXG4gICAgPC91bD5cclxuICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXV0ZW5zaWxzXCI+PC9pPlxyXG4gICAgYDtcclxuXHJcbiAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZXhwb3J0IHsgbmF2QmFyIH07XHJcbiIsImZ1bmN0aW9uIGNvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJ0aGlzIGlzIHRoZSBjb250YWN0IHBhZ2VcIjtcclxuICByZXR1cm4gY29udGFjdDtcclxufVxyXG5cclxuZXhwb3J0IHsgY29udGFjdCB9O1xyXG4iLCJjb25zdCBob21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgLy9ob21lLmlkID0gXCJob21lXCI7XHJcblxyXG4gIGhvbWUuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICA8aDI+PHNwYW4+QnVyZ2VyPC9zcGFuPjxiciAvPmZvciBldmVyeW9uZTwvaDI+XHJcbiAgICA8cD5cclxuICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXI8YnIgLz5lbGl0LiBJcHN1bSBkb2xvcmlidXMsXHJcbiAgICAgIHZvbHVwdGF0aWJ1cyBpbnZlbnRvcmUgY3VscGEgZGlzdGluY3Rpby48YnIgLz5TYXBpZW50ZVxyXG4gICAgICB0ZW5ldHVyLHJhdGlvbmUgdm9sdXB0YXRlcy4gRWEgcXVhZSByZW0gaW52ZW50b3JlIGRlbGVjdHVzIG1pbnVzLlxyXG4gICAgPC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiZmluZCBmb29kcy4uLlwiIC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1zaGFycFwiPiBzZWFyY2ggPC9zcGFuPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5PcmRlcjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWcvaGFtYnVyZ2VyLnBuZ1wiIGFsdD1cInNwZWNpYWwgYnVyZ2VyXCIgLz5cclxuICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICAvKiBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7ICovXHJcblxyXG4gIHJldHVybiBob21lO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgaG9tZSB9O1xyXG4iLCJmdW5jdGlvbiBtZW51KCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiaGkgdGhpcyBpcyB0aGUgbWVudSBwYWdlXCI7XHJcbiAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1lbnUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XHJcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IG5hdkJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2XCI7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9wYWdlcy9tZW51XCI7XHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9wYWdlcy9jb250YWN0XCI7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKCkpO1xyXG5cclxuICBjb25zdCBuYXZFbCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlLW5hdiB1bCBhXCIpKTtcclxuICBjb25zdCBwYWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IFwiaG9tZUlkXCIsXHJcbiAgICAgIGNvbnRlbnQ6IGhvbWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJjb250YWN0SWRcIixcclxuICAgICAgY29udGVudDogY29udGFjdCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcIm1lbnVJZFwiLFxyXG4gICAgICBjb250ZW50OiBtZW51LFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IGNvbnRhaW5hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnRhaW5hLmFwcGVuZENoaWxkKGhvbWUoKSk7XHJcblxyXG4gIG5hdkVsLmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobmF2LmlkID09IHBhZ2VzW2ldLmlkICYmIG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgIGNvbnRhaW5hLnJlcGxhY2VDaGlsZChwYWdlc1tpXS5jb250ZW50KCksIGNvbnRhaW5hLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgICAgLy9pbm5lckhUTUwgPSBwYWdlc1tpXS5jb250ZW50KCkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==