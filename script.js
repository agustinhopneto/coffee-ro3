const valuesList = {
  filtered: {
    waterAmount: 420,
    coffeeAmount: 32,
  },
  frenchPress: {
    waterAmount: 480,
    coffeeAmount: 32,
  },
  moka: {
    waterAmount: 350,
    coffeeAmount: 25,
  },
};

const typeInput = document.querySelector('#type');
const aInput = document.querySelector('#a-input');
const bInput = document.querySelector('#b-input');
const cInput = document.querySelector('#c-input');
const resultInput = document.querySelector('#d-input');

const params = new URLSearchParams(window.location.search);
const typeParam = params.get('type');
typeInput.value = typeParam;

setValues();

function setValues() {
  const typeValue = typeInput.value;

  aInput.value = valuesList[typeValue].waterAmount;
  bInput.value = valuesList[typeValue].coffeeAmount;
}

function calculate() {
  const result = Math.round((bInput.value * cInput.value) / aInput.value);

  resultInput.value = result;
}
