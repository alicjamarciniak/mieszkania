import descriptionsArray from './descriptions-array.js';

class DescriptionRecords {
  constructor() {
    this.recordsArray = descriptionsArray;
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

  addRecord(record) {
    for (let column in this.columns) {
      let cell = document.createElement('div');
      cell.dataset.recordId = record.id;
      cell.className = 'record__cell';
      switch (column) {
        case 'no':
          cell.innerHTML = record.no;
          break;
        case 'usableArea':
          cell.innerHTML = `${record.usableArea} m&#178;`;
          break;
        case 'extraArea':
          cell.innerHTML = `${record.extraAreaType} ${record.extraAreaSize} m&#178;`;
          break;
        case 'brutto':
          cell.innerHTML = `${record.brutto} zł`;
          break;
        case 'condignation':
          cell.innerHTML = record.condignation;
          break;
        case 'planUrl':
          let anchor = document.createElement('a');
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

  loadRecords() {
    this.recordsArray.forEach(record => {
      this.addRecord(record);
    });
  }
}
export default DescriptionRecords;
