export let printValue = function printValue(inputSelector, outputSelector) {
  let input = document.querySelector(inputSelector);
  let output = document.querySelector(outputSelector);

  output.value = input.value;
};
