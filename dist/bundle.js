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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var printValue = exports.printValue = function printValue(inputSelector, outputSelector) {
  var input = document.querySelector(inputSelector);
  var output = document.querySelector(outputSelector);

  output.value = input.value;
};

function toggle(objectElement) {
  var status = objectElement.dataset.toggleStatus;

  status == 1 ? objectElement.style.display = 'none' : objectElement.style.display = 'block';
  objectElement.dataset.toggleStatus = -status;
}

function changeArrow(invokerElement) {
  var arrowDown = invokerElement.getElementsByClassName('glyphicon-menu-down')[0];
  var arrowUp = invokerElement.getElementsByClassName('glyphicon-menu-up')[0];

  if (arrowDown.style.display == 'inline-block') {
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'inline-block';
  } else {
    arrowDown.style.display = 'inline-block';
    arrowUp.style.display = 'none';
  }
}

var makeToggleable = exports.makeToggleable = function makeToggleable(invokerElement, objectElement, arrows) {
  objectElement.style.display = 'none';
  objectElement.dataset.toggleStatus = -1;
  if (arrows) invokerElement.getElementsByClassName('glyphicon-menu-down')[0].style.display = 'inline-block';
  invokerElement.getElementsByClassName('glyphicon-menu-up')[0].style.display = 'none';
  invokerElement.addEventListener('click', function () {
    toggle(objectElement);
    if (arrows) {
      changeArrow(invokerElement);
    }
  });
};

var show = exports.show = function show(object) {
  object.style.dysplay = 'show';
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nav = __webpack_require__(2);

var _nav2 = _interopRequireDefault(_nav);

var _slider = __webpack_require__(3);

var _slider2 = _interopRequireDefault(_slider);

var _sectionDescriptionFilters = __webpack_require__(4);

var _sectionDescriptionFilters2 = _interopRequireDefault(_sectionDescriptionFilters);

var _sectionDescriptionCategories = __webpack_require__(6);

var _sectionDescriptionCategories2 = _interopRequireDefault(_sectionDescriptionCategories);

var _sectionDescriptionRecords = __webpack_require__(7);

var _sectionDescriptionRecords2 = _interopRequireDefault(_sectionDescriptionRecords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = __webpack_require__(9);

var navigation = new _nav2.default();
var slider = new _slider2.default();
var descriptionFilters = new _sectionDescriptionFilters2.default();
var descriptionCategories = new _sectionDescriptionCategories2.default();
var descriptionRecords = new _sectionDescriptionRecords2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _services = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigation = function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    this.navigation = document.querySelector('nav');
    this.navigationMenu = this.navigation.querySelector('.nav__menu');
    this.navigationIcon = this.navigation.querySelector('.nav__icon');
    this.mediaQuery = window.matchMedia('screen and (max-width: 321px)');
    console.log(this.mediaQuery);

    if (this.mediaQuery.matches) this.makeMenuResponsive();
  }

  _createClass(Navigation, [{
    key: 'makeMenuResponsive',
    value: function makeMenuResponsive() {
      (0, _services.makeToggleable)(this.navigationIcon, this.navigationMenu, true);
    }
  }]);

  return Navigation;
}();

exports.default = Navigation;

/***/ }),
/* 3 */
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

    this.interval = window.setInterval(function () {
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
    key: 'resetInterval',
    value: function resetInterval() {
      var _this2 = this;

      window.clearInterval(this.interval);
      this.interval = window.setInterval(function () {
        return _this2.next();
      }, 4000);
    }
  }, {
    key: 'next',
    value: function next() {
      this.hideSlide();
      if (this.activeIndex == this.maxIndex) this.activeIndex = 0;else ++this.activeIndex;
      this.showSlide();
      this.resetInterval();
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.hideSlide();
      if (this.activeIndex == 0) this.activeIndex = this.maxIndex;else --this.activeIndex;
      this.showSlide();
      this.resetInterval();
    }
  }]);

  return Slider;
}();

exports.default = Slider;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _services = __webpack_require__(0);

var _filtersArray = __webpack_require__(5);

var _filtersArray2 = _interopRequireDefault(_filtersArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DescriptionFilters = function () {
  function DescriptionFilters() {
    _classCallCheck(this, DescriptionFilters);

    this.filtersArray = _filtersArray2.default;
    this.filter = {
      class: 'filters__box filters__item',
      wrapperClass: 'col-md-2 col-xs-6'
    };
    this.filtersDiv = document.querySelector('.description__filters');

    this.loadFiletrs();
    this.initializePriceEventListeners();
  }

  _createClass(DescriptionFilters, [{
    key: 'addOptionCheckbox',
    value: function addOptionCheckbox(checkbox) {
      var optionsItem = document.createElement('label');
      var inputCheckbox = document.createElement('input');

      optionsItem.className = 'options__item';
      inputCheckbox.name = checkbox;
      inputCheckbox.type = 'checkbox';
      inputCheckbox.value = checkbox;
      optionsItem.appendChild(inputCheckbox);
      inputCheckbox.insertAdjacentHTML('afterEnd', checkbox);

      return optionsItem;
    }
  }, {
    key: 'addOptionRange',
    value: function addOptionRange(range) {
      var optionsItem = document.createElement('label');
      var inputText = document.createElement('input');
      var inputRange = document.createElement('input');

      inputText.id = 'range-value-' + range;
      inputText.type = 'text';
      inputText.size = 6;

      inputRange.id = 'range-' + range;
      inputRange.type = 'range';
      inputRange.min = '0';
      inputRange.max = '500000';
      inputRange.step = '10000';

      optionsItem.className = 'options__item';
      optionsItem.appendChild(inputText);
      optionsItem.appendChild(inputRange);
      inputText.insertAdjacentHTML('beforeBegin', range);
      inputText.insertAdjacentHTML('afterEnd', 'PLN');

      return optionsItem;
    }
  }, {
    key: 'loadOptions',
    value: function loadOptions(filter) {
      var _this = this;

      var options = void 0;
      var form = document.createElement('form');

      if (filter.checkboxes) filter.checkboxes.forEach(function (checkbox) {
        form.appendChild(_this.addOptionCheckbox(checkbox));
      });
      if (filter.ranges) filter.ranges.forEach(function (range) {
        form.appendChild(_this.addOptionRange(range));
      });

      return form;
    }
  }, {
    key: 'createBoxOptions',
    value: function createBoxOptions(filter) {
      var boxOptions = document.createElement('div');

      boxOptions.className = 'box__options';
      boxOptions.appendChild(this.loadOptions(filter));

      return boxOptions;
    }
  }, {
    key: 'addFilterItem',
    value: function addFilterItem(filter) {
      var wrappedItem = document.createElement('div');
      var filterItem = document.createElement('div');
      var boxLabel = document.createElement('div');
      var boxLabelInner = '\n      <div class="label__text">\n        ' + filter.name + '\n      </div>\n      <div class="label__arrow">\n        <span class=\'glyphicon glyphicon-menu-down\' aria-hidden=\'true\'></span>\n        <span class=\'glyphicon glyphicon-menu-up\' aria-hidden=\'true\'></span>\n      </div>\n    ';
      var boxOptions = this.createBoxOptions(filter);

      boxLabel.className = 'box__label';
      boxLabel.innerHTML = boxLabelInner;

      filterItem.className = this.filter.class;
      filterItem.appendChild(boxLabel);
      filterItem.appendChild(boxOptions);

      wrappedItem.className = this.filter.wrapperClass;
      wrappedItem.appendChild(filterItem);
      this.makeToggleableOptionsBox(wrappedItem);
      this.filtersDiv.appendChild(wrappedItem);
    }
  }, {
    key: 'loadButton',
    value: function loadButton() {
      var button = document.createElement('div');
      var buttonInner = '\n       <div class="filters__button filters__item">\n        <div class="button__label">filtrowanie</div>\n      </div>\n    ';
      button.className = 'col-md-4 col-xs-12';
      button.innerHTML = buttonInner;
      this.filtersDiv.appendChild(button);
    }
  }, {
    key: 'loadFiletrs',
    value: function loadFiletrs() {
      var _this2 = this;

      this.filtersArray.forEach(function (filter) {
        _this2.addFilterItem(filter);
      });
      this.loadButton();
    }
  }, {
    key: 'initializePriceEventListeners',
    value: function initializePriceEventListeners() {
      var priceRangeMin = document.getElementById('range-min');
      var priceRangeMax = document.getElementById('range-max');
      var priceValueMin = document.getElementById('range-value-min');
      var priceValueMax = document.getElementById('range-value-max');

      priceRangeMin.addEventListener('change', function () {
        return (0, _services.printValue)('#range-min', '#range-value-min');
      });
      priceRangeMax.addEventListener('change', function () {
        return (0, _services.printValue)('#range-max', '#range-value-max');
      });
      priceValueMin.addEventListener('change', function () {
        return (0, _services.printValue)('#range-value-min', '#range-min');
      });
      priceValueMax.addEventListener('change', function () {
        return (0, _services.printValue)('#range-value-max', '#range-max');
      });
    }
  }, {
    key: 'makeToggleableOptionsBox',
    value: function makeToggleableOptionsBox(filterItem) {
      var boxOptions = filterItem.getElementsByClassName('box__options')[0];
      var labelArrow = filterItem.getElementsByClassName('label__arrow')[0];

      (0, _services.makeToggleable)(labelArrow, boxOptions, true);
    }
  }]);

  return DescriptionFilters;
}();

exports.default = DescriptionFilters;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var filtersArray = [{
  name: 'kondygnacja',
  checkboxes: ['p11', 'p12', 'p13'],
  ranges: null
}, {
  name: 'ogródek/strych',
  checkboxes: ['ogródek', 'strych'],
  ranges: null
}, {
  name: 'status',
  checkboxes: ['wolny', 'rezerwacja', 'sprzedany'],
  ranges: null
}, {
  name: 'cena',
  checkboxes: null,
  ranges: ['min', 'max']
}];

exports.default = filtersArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DescriptionCategories = function () {
  function DescriptionCategories() {
    _classCallCheck(this, DescriptionCategories);

    this.categories = ['nr budynku, mieszkania', 'kondygnacja', 'powierzchnia użytkowa', 'powierzchnia ogródka/strychu', 'cena brutto', 'plan', 'status'];
    this.descriptionCategories = document.querySelector('.description__categories');

    this.loadCategories();
  }

  _createClass(DescriptionCategories, [{
    key: 'addCategoryItem',
    value: function addCategoryItem(title) {
      var categoryItemInner = '\n      <div class="item__label">\n        <div class="label__title">' + title + '</div>\n         <div class="label__arrows">\n          <span class=\'glyphicon glyphicon-menu-up\' aria-hidden=\'true\'></span>\n          <span class=\'glyphicon glyphicon-menu-down\' aria-hidden=\'true\'></span>\n         </div>\n        </div>\n      <div class="item__records"></div>';
      var categoryItem = document.createElement('div');

      categoryItem.className = 'category__item';
      categoryItem.innerHTML = categoryItemInner;
      this.descriptionCategories.appendChild(categoryItem);
    }
  }, {
    key: 'loadCategories',
    value: function loadCategories() {
      var _this = this;

      this.categories.forEach(function (category) {
        _this.addCategoryItem(category);
      });
    }
  }]);

  return DescriptionCategories;
}();

exports.default = DescriptionCategories;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _descriptionsArray = __webpack_require__(8);

var _descriptionsArray2 = _interopRequireDefault(_descriptionsArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DescriptionRecords = function () {
  function DescriptionRecords() {
    _classCallCheck(this, DescriptionRecords);

    this.recordsArray = _descriptionsArray2.default;
    this.categories = document.querySelectorAll('.category__item');
    this.columns = {
      no: this.categories[0].querySelector('.item__records'),
      condignation: this.categories[1].querySelector('.item__records'),
      usableArea: this.categories[2].querySelector('.item__records'),
      extraArea: this.categories[3].querySelector('.item__records'),
      brutto: this.categories[4].querySelector('.item__records'),
      planUrl: this.categories[5].querySelector('.item__records'),
      status: this.categories[6].querySelector('.item__records')
    };

    this.loadRecords();
  }

  _createClass(DescriptionRecords, [{
    key: 'addRecord',
    value: function addRecord(record) {
      for (var column in this.columns) {
        var cell = document.createElement('div');
        cell.dataset.recordId = record.id;
        cell.className = 'record__cell';
        switch (column) {
          case 'no':
            cell.innerHTML = record.no;
            break;
          case 'usableArea':
            cell.innerHTML = record.usableArea + ' m&#178;';
            break;
          case 'extraArea':
            cell.innerHTML = record.extraAreaType + ' ' + record.extraAreaSize + ' m&#178;';
            break;
          case 'brutto':
            cell.innerHTML = record.brutto + ' z\u0142';
            break;
          case 'condignation':
            cell.innerHTML = record.condignation;
            break;
          case 'planUrl':
            var anchor = document.createElement('a');
            anchor.className = 'nostyle';
            anchor.innerHTML = 'pobierz';
            if (record.planUrl) {
              anchor.href = record.planUrl;
            } else {
              anchor.href = '#';
              anchor.className += ' disabled';
            }
            cell.appendChild(anchor);
            break;
          case 'status':
            cell.innerHTML = record.status;
            switch (record.status) {
              case 'wolny':
                cell.className += ' forsale';
                break;
              case 'sprzedany':
                cell.className += ' soldout';
                break;
              default:
                cell.className += ' reserved';
            }
            break;
        }
        this.columns[column].appendChild(cell);
      }
    }
  }, {
    key: 'loadRecords',
    value: function loadRecords() {
      var _this = this;

      this.recordsArray.forEach(function (record) {
        _this.addRecord(record);
      });
    }
  }]);

  return DescriptionRecords;
}();

exports.default = DescriptionRecords;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var descriptionsArray = [{
  id: 1,
  no: 'P11A',
  condignation: 'parter',
  usableArea: 64.32,
  extraAreaType: 'ogródek',
  extraAreaSize: 81,
  brutto: 289500,
  planUrl: null,
  status: 'wolny'
}, {
  id: 2,
  no: 'P11B',
  condignation: 'piętro',
  usableArea: 66.57,
  extraAreaType: 'strych',
  extraAreaSize: 15,
  brutto: 259500,
  planUrl: '#',
  status: 'rezerwacja'
}, {
  id: 3,
  no: 'P12A',
  condignation: 'parter',
  usableArea: 64.32,
  extraAreaType: 'ogródek',
  extraAreaSize: 84,
  brutto: 289500,
  planUrl: '#',
  status: 'wolny'
}, {
  id: 4,
  no: 'P12B',
  condignation: 'piętro',
  usableArea: 66.57,
  extraAreaType: 'strych',
  extraAreaSize: 15,
  brutto: 259500,
  planUrl: null,
  status: 'wolny'
}, {
  id: 5,
  no: 'P13A',
  condignation: 'parter',
  usableArea: 64.32,
  extraAreaType: 'ogródek',
  extraAreaSize: 82,
  brutto: 289500,
  planUrl: null,
  status: 'wolny'
}, {
  id: 6,
  no: 'P13B',
  condignation: 'piętro',
  usableArea: 66.57,
  extraAreaType: 'strych',
  extraAreaSize: 15,
  brutto: 259500,
  planUrl: null,
  status: 'wolny'
}, {
  id: 7,
  no: 'P14A',
  condignation: 'parter',
  usableArea: 64.32,
  extraAreaType: 'ogródek',
  extraAreaSize: 89,
  brutto: 289500,
  planUrl: null,
  status: 'wolny'
}, {
  id: 8,
  no: 'P14B',
  condignation: 'piętro',
  usableArea: 66.57,
  extraAreaType: 'strych',
  extraAreaSize: 15,
  brutto: 259500,
  planUrl: '#',
  status: 'wolny'
}, {
  id: 9,
  no: 'P15A',
  condignation: 'parter',
  usableArea: 64.32,
  extraAreaType: 'ogródek',
  extraAreaSize: 87,
  brutto: 289500,
  planUrl: null,
  status: 'wolny'
}, {
  id: 10,
  no: 'P15B',
  condignation: 'piętro',
  usableArea: 66.57,
  extraAreaType: 'strych',
  extraAreaSize: 15,
  brutto: 259500,
  planUrl: null,
  status: 'sprzedany'
}, {
  id: 11,
  no: 'P16B',
  condignation: 'parter',
  usableArea: 64.32,
  extraAreaType: 'ogródek',
  extraAreaSize: 83,
  brutto: 289500,
  planUrl: null,
  status: 'wolny'
}, {
  id: 12,
  no: 'P16B',
  condignation: 'piętro',
  usableArea: 66.57,
  extraAreaType: 'strych',
  extraAreaSize: 15,
  brutto: 259500,
  planUrl: null,
  status: 'sprzedany'
}];
exports.default = descriptionsArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);