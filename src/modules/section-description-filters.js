import { printValue, makeToggleable } from './services.js';
import filtersArray from './filters-array.js';

class DescriptionFilters {
  constructor() {
    this.filtersArray = filtersArray;
    this.filter = {
      class: 'filters__box filters__item',
      wrapperClass: 'col-md-2 col-xs-6'
    };
    this.filtersDiv = document.querySelector('.description__filters');

    this.loadFiletrs();
    this.initializePriceEventListeners();
  }

  addOptionCheckbox(checkbox) {
    let optionsItem = document.createElement('label');
    let inputCheckbox = document.createElement('input');

    optionsItem.className = 'options__item';
    inputCheckbox.name = checkbox;
    inputCheckbox.type = 'checkbox';
    inputCheckbox.value = checkbox;
    optionsItem.appendChild(inputCheckbox);
    inputCheckbox.insertAdjacentHTML('afterEnd', checkbox);

    return optionsItem;
  }

  addOptionRange(range) {
    let optionsItem = document.createElement('label');
    let inputText = document.createElement('input');
    let inputRange = document.createElement('input');

    inputText.id = `range-value-${range}`;
    inputText.type = 'text';
    inputText.size = 6;

    inputRange.id = `range-${range}`;
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

  loadOptions(filter) {
    let options;
    let form = document.createElement('form');

    if (filter.checkboxes)
      filter.checkboxes.forEach(checkbox => {
        form.appendChild(this.addOptionCheckbox(checkbox));
      });
    if (filter.ranges)
      filter.ranges.forEach(range => {
        form.appendChild(this.addOptionRange(range));
      });

    return form;
  }

  createBoxOptions(filter) {
    let boxOptions = document.createElement('div');

    boxOptions.className = 'box__options';
    boxOptions.appendChild(this.loadOptions(filter));

    return boxOptions;
  }

  addFilterItem(filter) {
    let wrappedItem = document.createElement('div');
    let filterItem = document.createElement('div');
    let boxLabel = document.createElement('div');
    let boxLabelInner = `
      <div class="label__text">
        ${filter.name}
      </div>
      <div class="label__arrow">
        <span class='glyphicon glyphicon-menu-down' aria-hidden='true'></span>
        <span class='glyphicon glyphicon-menu-up' aria-hidden='true'></span>
      </div>
    `;
    let boxOptions = this.createBoxOptions(filter);

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

  loadButton() {
    let button = document.createElement('div');
    let buttonInner = `
       <div class="filters__button filters__item">
        <div class="button__label">filtrowanie</div>
      </div>
    `;
    button.className = 'col-md-4 col-xs-12';
    button.innerHTML = buttonInner;
    this.filtersDiv.appendChild(button);
  }

  loadFiletrs() {
    this.filtersArray.forEach(filter => {
      this.addFilterItem(filter);
    });
    this.loadButton();
  }

  initializePriceEventListeners() {
    let priceRangeMin = document.getElementById('range-min');
    let priceRangeMax = document.getElementById('range-max');
    let priceValueMin = document.getElementById('range-value-min');
    let priceValueMax = document.getElementById('range-value-max');

    priceRangeMin.addEventListener('change', () =>
      printValue('#range-min', '#range-value-min')
    );
    priceRangeMax.addEventListener('change', () =>
      printValue('#range-max', '#range-value-max')
    );
    priceValueMin.addEventListener('change', () =>
      printValue('#range-value-min', '#range-min')
    );
    priceValueMax.addEventListener('change', () =>
      printValue('#range-value-max', '#range-max')
    );
  }

  makeToggleableOptionsBox(filterItem) {
    let boxOptions = filterItem.getElementsByClassName('box__options')[0];
    let labelArrow = filterItem.getElementsByClassName('label__arrow')[0];

    makeToggleable(labelArrow, boxOptions, true);
  }
}
export default DescriptionFilters;
