import { printValue } from './services.js';

class MainSectionDescription {
  constructor() {
    initializePrice();
  }

  initializePrice() {
    priceSlideMin = document.getElementById('#slide-min');
    priceSlideMax = document.getElementById('#slide-max');
    priceSlideMin.addEventListener('change', () =>
      printValue('#slider-min', '#rangeValueMin')
    );
    priceSlideMax.addEventListener('change', () =>
      printValue('#slider-max', '#rangeValueMax')
    );
  }

  toggleLabel() {}
}
export default MainSectionDescription;
