import { printValue } from './services.js';

class DescriptionFilters {
  constructor() {
    this.filters = [];

    this.initializePrice();
  }

  addFilterItem() {}

  loadFiletrs() {}

  initializePrice() {
    let priceSlideMin = document.getElementById('slider-min');
    let priceSlideMax = document.getElementById('slider-max');

    priceSlideMin.addEventListener('change', () =>
      printValue('#slider-min', '#rangeValueMin')
    );
    priceSlideMax.addEventListener('change', () =>
      printValue('#slider-max', '#rangeValueMax')
    );
  }
}
export default DescriptionFilters;
