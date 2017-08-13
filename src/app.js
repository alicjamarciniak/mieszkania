const css = require('./app.scss');

import Navigation from './modules/nav.js';
import Slider from './modules/slider.js';
import DescriptionFilters from './modules/section-description-filters.js';
// import DescriptionCategories from './modules/section-description-categories.js';
import DescriptionRecords from './modules/section-description-records.js';

let navigation = new Navigation();
let slider = new Slider();
let descriptionFilters = new DescriptionFilters();
// let descriptionCategories = new DescriptionCategories();
let descriptionRecords = new DescriptionRecords();
