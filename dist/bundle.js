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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navResponsive = __webpack_require__(1);

var _navResponsive2 = _interopRequireDefault(_navResponsive);

var _slider = __webpack_require__(2);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = __webpack_require__(3);

var slider = new _slider2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function Navigation() {
    _classCallCheck(this, Navigation);

    this.template = "\n    <nav class=\"container-fluid\">\n        <ul class=\"nav__menu\">\n            <li class=\"menu__item\">\n                <a class=\"nostyle\" href=\"#\">Inwestycja</a>\n            </li>\n            <li class=\"menu__item\">\n                <a class=\"nostyle\" href=\"#\">Dost\u0119pno\u015B\u0107</a>\n            </li>\n            <li class=\"menu__item\">\n                <a class=\"nostyle\" href=\"#\">Rzuty mieszka\u0144</a>\n            </li>\n            <li class=\"menu__item\">\n                <a class=\"nostyle\" href=\"#\">Kontakt</a>\n            </li>\n            <a href=\"javascript:void(0);\" class=\"menu__icon\" onclick=\"myFunction()\">\n                <span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"></span>\n            </a>\n        </ul>\n    </nav>\n    ";
};

exports.default = Navigation;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider() {
    var _this = this;

    _classCallCheck(this, Slider);

    window.setInterval(function () {
      return _this.next();
    }, 4000);
    this.activeIndex = 0;
    this.slides = document.querySelectorAll('.slider__item');
    this.maxIndex = this.slides.length - 1;
    this.initializeSlider();

    this.leftArrow = document.querySelector('.button__left');
    this.leftArrow.addEventListener('click', function () {
      return _this.prev();
    });

    this.rightArrow = document.querySelector('.button__right');
    this.rightArrow.addEventListener('click', function () {
      return _this.next();
    });
  }

  _createClass(Slider, [{
    key: 'showSlide',
    value: function showSlide() {
      this.slides[this.activeIndex].style.display = 'block';
    }
  }, {
    key: 'hideSlide',
    value: function hideSlide() {
      this.slides[this.activeIndex].style.display = 'none';
    }
  }, {
    key: 'initializeSlider',
    value: function initializeSlider() {
      this.slides.forEach(function (slide) {
        slide.style.display = 'none';
      });
      this.showSlide();
    }
  }, {
    key: 'next',
    value: function next() {
      this.hideSlide();
      if (this.activeIndex == this.maxIndex) this.activeIndex = 0;else ++this.activeIndex;
      this.showSlide();
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.hideSlide();
      if (this.activeIndex == 0) this.activeIndex = this.maxIndex;else --this.activeIndex;
      this.showSlide();
    }
  }]);

  return Slider;
}();

exports.default = Slider;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);