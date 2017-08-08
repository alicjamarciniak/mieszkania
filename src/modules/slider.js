class Slider {
  constructor() {
    this.interval = window.setInterval(() => this.next(), 4000);
    this.activeIndex = 0;
    this.slides = document.querySelectorAll('.slider__item');
    this.maxIndex = this.slides.length - 1;
    this.initializeSlider();

    this.leftArrow = document.querySelector('.button__left');
    this.leftArrow.addEventListener('click', () => this.prev());

    this.rightArrow = document.querySelector('.button__right');
    this.rightArrow.addEventListener('click', () => this.next());
  }

  showSlide() {
    this.slides[this.activeIndex].style.display = 'block';
  }
  hideSlide() {
    this.slides[this.activeIndex].style.display = 'none';
  }

  initializeSlider() {
    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    this.showSlide();
  }

  resetInterval() {
    window.clearInterval(this.interval);
    this.interval = window.setInterval(() => this.next(), 4000);
  }

  next() {
    this.hideSlide();
    if (this.activeIndex == this.maxIndex) this.activeIndex = 0;
    else ++this.activeIndex;
    this.showSlide();
    this.resetInterval();
  }

  prev() {
    this.hideSlide();
    if (this.activeIndex == 0) this.activeIndex = this.maxIndex;
    else --this.activeIndex;
    this.showSlide();
    this.resetInterval();
  }
}
export default Slider;
