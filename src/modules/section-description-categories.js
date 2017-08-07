class DescriptionCategories {
  constructor() {
    this.categories = [
      'nr budynku, mieszkania',
      'kondygnacja',
      'powierzchnia użytkowa',
      'powierzchnia ogródka/strychu',
      'cena brutto',
      'plan',
      'status'
    ];
    this.descriptionCategories = document.querySelector(
      '.description__categories'
    );

    this.loadCategories();
  }

  addCategoryItem(title) {
    let categoryItemInner = `
    <div class="category__item">
      <div class="item__label">
        <div class="label__title">${title}</div>
         <div class="label__arrows">

         </div>
        </div>
      <div class="item__records"></div>
    </div>`;
    let categoryItem = document.createElement('div');

    categoryItem.innerHTML = categoryItemInner;
    this.descriptionCategories.appendChild(categoryItem);
  }

  loadCategories() {
    this.categories.forEach(category => {
      this.addCategoryItem(category);
    });
  }
}
export default DescriptionCategories;
