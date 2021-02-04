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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/edit_map.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/edit_map.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/edit_map.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");

var loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__["Loader"]({
  apiKey: "AIzaSyAZoCXf8qQakMaUk3JLDRu0QRwGBhbd540",
  version: "weekly"
});
var new_map;
loader.load().then(function () {
  new_map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 35.6803997,
      lng: 139.7690174
    },
    zoom: 15
  });
});
var latlngDis = document.getElementById('latlngDisplay');
var addressDis = document.getElementById('addressDisplay');
var display = document.getElementById('display');

function codeAddress() {
  var inputAddress = document.getElementById('address').value;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
    'address': inputAddress
  }, function (results, status) {
    if (status == 'OK') {
      new_map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: new_map,
        position: results[0].geometry.location
      });
      latlngDis.innerHTML = results[0].geometry.location;
      geocoder.geocode({
        'location': marker.getPosition()
      }, function (results, status) {
        if (status == "OK") {
          addressDis.innerHTML = results[0].formatted_address;
        } else {
          alert("Geocode 取得に失敗しました：" + status);
        }
      });
    } else {
      alert('該当する結果がありませんでした：' + status);
    }
  });
}

document.getElementById("search").addEventListener("click", function () {
  codeAddress();
});

/***/ }),

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: DEFAULT_ID, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ID", function() { return DEFAULT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// do not edit .js files directly - edit src/index.jst
var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DEFAULT_ID = "__googleMapsScriptId";
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then(() => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */

var Loader = /*#__PURE__*/function () {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  function Loader(_ref) {
    var apiKey = _ref.apiKey,
        channel = _ref.channel,
        client = _ref.client,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? DEFAULT_ID : _ref$id,
        _ref$libraries = _ref.libraries,
        libraries = _ref$libraries === void 0 ? [] : _ref$libraries,
        language = _ref.language,
        region = _ref.region,
        version = _ref.version,
        mapIds = _ref.mapIds,
        nonce = _ref.nonce,
        _ref$retries = _ref.retries,
        retries = _ref$retries === void 0 ? 3 : _ref$retries,
        _ref$url = _ref.url,
        url = _ref$url === void 0 ? "https://maps.googleapis.com/maps/api/js" : _ref$url;

    _classCallCheck(this, Loader);

    this.CALLBACK = "__googleMapsCallback";
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.version = version;
    this.apiKey = apiKey;
    this.channel = channel;
    this.client = client;
    this.id = id || DEFAULT_ID; // Do not allow empty string

    this.libraries = libraries;
    this.language = language;
    this.region = region;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.retries = retries;
    this.url = url;

    if (Loader.instance) {
      if (!fastDeepEqual(this.options, Loader.instance.options)) {
        throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options), " !== ").concat(JSON.stringify(Loader.instance.options)));
      }

      return Loader.instance;
    }

    Loader.instance = this;
  }

  _createClass(Loader, [{
    key: "createUrl",

    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    value: function createUrl() {
      var url = this.url;
      url += "?callback=".concat(this.CALLBACK);

      if (this.apiKey) {
        url += "&key=".concat(this.apiKey);
      }

      if (this.channel) {
        url += "&channel=".concat(this.channel);
      }

      if (this.client) {
        url += "&client=".concat(this.client);
      }

      if (this.libraries.length > 0) {
        url += "&libraries=".concat(this.libraries.join(","));
      }

      if (this.language) {
        url += "&language=".concat(this.language);
      }

      if (this.region) {
        url += "&region=".concat(this.region);
      }

      if (this.version) {
        url += "&v=".concat(this.version);
      }

      if (this.mapIds) {
        url += "&map_ids=".concat(this.mapIds.join(","));
      }

      return url;
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */

  }, {
    key: "load",
    value: function load() {
      return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */

  }, {
    key: "loadPromise",
    value: function loadPromise() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.loadCallback(function (err) {
          if (!err) {
            resolve();
          } else {
            reject(err);
          }
        });
      });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */

  }, {
    key: "loadCallback",
    value: function loadCallback(fn) {
      this.callbacks.push(fn);
      this.execute();
    }
    /**
     * Set the script on document.
     */

  }, {
    key: "setScript",
    value: function setScript() {
      if (document.getElementById(this.id)) {
        // TODO wrap onerror callback for cases where the script was loaded elsewhere
        this.callback();
        return;
      }

      var url = this.createUrl();
      var script = document.createElement("script");
      script.id = this.id;
      script.type = "text/javascript";
      script.src = url;
      script.onerror = this.loadErrorCallback.bind(this);
      script.defer = true;
      script.async = true;

      if (this.nonce) {
        script.nonce = this.nonce;
      }

      document.head.appendChild(script);
    }
  }, {
    key: "deleteScript",
    value: function deleteScript() {
      var script = document.getElementById(this.id);

      if (script) {
        script.remove();
      }
    }
  }, {
    key: "resetIfRetryingFailed",
    value: function resetIfRetryingFailed() {
      var possibleAttempts = this.retries + 1;

      if (this.done && !this.loading && this.errors.length >= possibleAttempts) {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
      }
    }
  }, {
    key: "loadErrorCallback",
    value: function loadErrorCallback(e) {
      var _this2 = this;

      this.errors.push(e);

      if (this.errors.length <= this.retries) {
        var delay = this.errors.length * Math.pow(2, this.errors.length);
        console.log("Failed to load Google Maps script, retrying in ".concat(delay, " ms."));
        setTimeout(function () {
          _this2.deleteScript();

          _this2.setScript();
        }, delay);
      } else {
        this.onerrorEvent = e;
        this.callback();
      }
    }
  }, {
    key: "setCallback",
    value: function setCallback() {
      window.__googleMapsCallback = this.callback.bind(this);
    }
  }, {
    key: "callback",
    value: function callback() {
      var _this3 = this;

      this.done = true;
      this.loading = false;
      this.callbacks.forEach(function (cb) {
        cb(_this3.onerrorEvent);
      });
      this.callbacks = [];
    }
  }, {
    key: "execute",
    value: function execute() {
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader." + "This may result in undesirable behavior as script parameters may not match.");
        this.callback();
      }

      this.resetIfRetryingFailed();

      if (this.done) {
        this.callback();
      } else {
        if (this.loading) ;else {
          this.loading = true;
          this.setCallback();
          this.setScript();
        }
      }
    }
  }, {
    key: "options",
    get: function get() {
      return {
        version: this.version,
        apiKey: this.apiKey,
        channel: this.channel,
        client: this.client,
        id: this.id,
        libraries: this.libraries,
        language: this.language,
        region: this.region,
        mapIds: this.mapIds,
        nonce: this.nonce,
        url: this.url
      };
    }
  }]);

  return Loader;
}();



/***/ })

/******/ });
//# sourceMappingURL=edit_map-74dda6e029053f5a3504.js.map