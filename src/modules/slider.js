class Slider {
  constructor() {
    window.setInterval(() => (this.next()), 4000)
    this.activeIndex = 0;
    this.slides = document.querySelectorAll('.slider__item');
    this.maxIndex = this.slides.length - 1;
    this.initializeSlider();

    this.leftArrow = document.querySelector('.button__left');
    this.leftArrow.addEventListener('click', () => (this.prev()));

    this.rightArrow = document.querySelector('.button__right');
    this.rightArrow.addEventListener('click', () => (this.next()));

  }

  showSlide() {
    this.slides[this.activeIndex].style.display = 'block';
  }
  hideSlide() {
    this.slides[this.activeIndex].style.display = 'none';
  }

  initializeSlider() {
    this.slides.forEach((slide) => { slide.style.display = 'none'; });
    this.showSlide();
  }

  next() {
    this.hideSlide();
    if (this.activeIndex == this.maxIndex) this.activeIndex = 0;
    else ++(this.activeIndex);
    this.showSlide();
  }

  prev() {
    this.hideSlide();
    if (this.activeIndex == 0) this.activeIndex = this.maxIndex;
    else --(this.activeIndex);
    this.showSlide();
  }
}
export default Slider;
