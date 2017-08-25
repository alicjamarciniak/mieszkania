import allRecordsArray from './all-records-array.js';
import headingsArray from './headings-array.js';

class DescriptionRecords {
  constructor() {
    this.allRecordsArray = allRecordsArray;
    this.transformedRecordsArray = this.allRecordsArray.slice();
    this.headingsArray = headingsArray;
    this.currentFirstColumn = 1;
    this.columnsAmount = this.headingsArray.length;
    this.nextColumnButton;
    this.prevColumnButton;

    this.recordsTable = this.createTable();
    this.loadRecords(1);
    this.loadButtons();
    this.nextColumnButton;
    this.prevColumnButton;
  }

  createTable() {
    let recordsTable = document.createElement('table');
    let tableHeadings = document.createElement('thead');
    let tableBody = document.createElement('tbody');

    this.headingsArray.forEach(heading => {
      let headingElement = document.createElement('th');
      let headingInner = `
        <div class='heading__item'>
          <div class="item__title">${heading.inner}</div>
          <div class="item__arrows">
            <span class='glyphicon glyphicon-menu-up' aria-hidden='true'></span>
            <span class='glyphicon glyphicon-menu-down' aria-hidden='true'></span>
          </div>
         </div>
      `;
      headingElement.innerHTML = headingInner;
      tableHeadings.appendChild(headingElement);
    });

    recordsTable.appendChild(tableHeadings);
    recordsTable.appendChild(tableBody);

    return recordsTable;
  }

  loadRecord(recordIndex) {
    let record = document.createElement('tr');
    let tableBody = this.recordsTable.getElementsByTagName('tbody')[0];
    let recordData = this.transformedRecordsArray[recordIndex];

    this.headingsArray.forEach(heading => {
      let recordCell = document.createElement('td');
      recordCell.className = heading.name;
      switch (heading.name) {
        case 'no':
          recordCell.innerHTML = recordData.no;
          break;
        case 'condignation':
          recordCell.innerHTML = recordData.condignation;
          break;
        case 'usableArea':
          recordCell.innerHTML = `${recordData.usableArea} m&#178;`;
          break;
        case 'extraArea':
          recordCell.innerHTML = `${recordData.extraAreaType} ${recordData.extraAreaSize} m&#178;`;
          break;
        case 'brutto':
          recordCell.innerHTML = `${recordData.brutto} zł`;
          break;
        case 'planUrl':
          let anchor = document.createElement('a');
          anchor.className = 'nostyle';
          anchor.innerHTML = 'pobierz';
          if (recordData.planUrl) {
            anchor.href = recordData.planUrl;
          } else {
            anchor.href = '#';
            anchor.className += ' disabled';
          }
          recordCell.appendChild(anchor);
          break;
        case 'status':
          recordCell.innerHTML = recordData.status;
          switch (recordData.status) {
            case 'wolny':
              recordCell.className += ' forsale';
              break;
            case 'sprzedany':
              recordCell.className += ' soldout';
              break;
            default:
              recordCell.className += ' reserved';
          }
          break;
      }
      record.appendChild(recordCell);
    });
    tableBody.appendChild(record);
  }

  loadRecords(pageNumber) {
    let startIndex = (pageNumber - 1) * 10;
    let recordsFrame = document.querySelector('.records__frame');

    for (let i = 0; i < 10; ++i) {
      this.loadRecord(startIndex + i);
    }
    recordsFrame.appendChild(this.recordsTable);
  }

  changeColumn() {
    let temp = (this.recordsTable.style.right = `${(this.currentFirstColumn -
      1) *
      50}%`);
  }

  changeArrowAvailability(maxFirstColumn) {
    switch (this.currentFirstColumn) {
      case 1:
        this.prevColumnButton.classList.add('disabled');
        break;
      case 2:
        this.prevColumnButton.classList.remove('disabled');
        break;
      case this.columnsAmount - 2:
        console.log('max - 2');
        this.nextColumnButton.classList.remove('disabled');
        break;
      case this.columnsAmount - 1:
        this.nextColumnButton.classList.add('disabled');
        break;
    }
  }

  nextColumn(event) {
    const maxFirstColumn = this.columnsAmount - 1;
    if (this.currentFirstColumn < maxFirstColumn) {
      ++this.currentFirstColumn;
      this.changeColumn();
      this.changeArrowAvailability();
    }
  }

  prevColumn(event) {
    const maxFirstColumn = this.columnAmount - 1;
    if (this.currentFirstColumn > 1) {
      --this.currentFirstColumn;
      this.changeColumn();
      this.changeArrowAvailability();
    }
  }

  addButtonsListeners() {
    this.prevColumnButton.classList.add('disabled');

    this.nextColumnButton.addEventListener('click', () => this.nextColumn());
    this.prevColumnButton.addEventListener('click', () => this.prevColumn());
  }

  createColumnButton(arrowDirection) {
    let button = document.createElement('span');
    button.className = `glyphicon glyphicon-menu-${arrowDirection}`;
    button.ariaHidden = 'true';

    return button;
  }

  loadButtons() {
    let descriptionRecords = document.querySelector('.description__records');
    let buttons = document.createElement('div');
    buttons.className = 'records__buttons';
    this.nextColumnButton = this.createColumnButton('right');
    this.prevColumnButton = this.createColumnButton('left');

    this.addButtonsListeners();
    buttons.appendChild(this.nextColumnButton);
    buttons.appendChild(this.prevColumnButton);
    descriptionRecords.appendChild(buttons);
  }
}
export default DescriptionRecords;
