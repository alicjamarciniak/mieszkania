export let printValue = (inputSelector, outputSelector) => {
  let input = document.querySelector(inputSelector);
  let output = document.querySelector(outputSelector);

  output.value = input.value;
};

function toggle(objectElement) {
  let status = objectElement.dataset.toggleStatus;

  status == 1
    ? (objectElement.style.display = 'none')
    : (objectElement.style.display = 'block');
  objectElement.dataset.toggleStatus = -status;
}

function changeArrow(invokerElement) {
  let arrowDown = invokerElement.getElementsByClassName(
    'glyphicon-menu-down'
  )[0];
  let arrowUp = invokerElement.getElementsByClassName('glyphicon-menu-up')[0];

  if (arrowDown.style.display == 'inline-block') {
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'inline-block';
  } else {
    arrowDown.style.display = 'inline-block';
    arrowUp.style.display = 'none';
  }
}

export let makeToggleable = (invokerElement, objectElement, arrows) => {
  objectElement.style.display = 'none';
  objectElement.dataset.toggleStatus = -1;
  if (arrows)
    invokerElement.getElementsByClassName(
      'glyphicon-menu-down'
    )[0].style.display =
      'inline-block';
  invokerElement.addEventListener('click', () => {
    toggle(objectElement);
    if (arrows) {
      changeArrow(invokerElement);
    }
  });
};
