import { makeToggleable } from './services.js';

class Navigation {
  constructor() {
    this.navigation = document.querySelector('nav');
    this.navigationMenu = this.navigation.querySelector('.nav__menu');
    this.navigationIcon = this.navigation.querySelector('.nav__icon');
    this.mediaQuery = window.matchMedia('screen and (max-width: 321px)');
    console.log(this.mediaQuery);

    if (this.mediaQuery.matches) this.makeMenuResponsive();
  }

  makeMenuResponsive() {
    makeToggleable(this.navigationIcon, this.navigationMenu, true);
  }
}

export default Navigation;
