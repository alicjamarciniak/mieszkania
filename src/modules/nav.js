import { makeToggleable } from './services.js';

class Navigation {
  constructor() {
    this.navigation = document.querySelector('nav');
    this.navigationMenu = this.navigation.querySelector('.nav__menu');
    this.navigationIcon = this.navigation.querySelector('.nav__icon');

    this.makeMenuResponsive();
  }

  makeMenuResponsive() {
    makeToggleable(this.navigationIcon, this.navigationMenu, true);
  }
}

export default Navigation;
