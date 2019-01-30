var minRange = document.querySelector('#min-range-input');
var maxRange = document.querySelector('#max-range-input');
var updateButton = document.querySelector('.update-button');
var minNumber = document.querySelector('.min-value');
var maxNumber = document.querySelector('.max-value');

updateButton.addEventListener('click', function() {
  minNumber.innerText = minRange.value;
  maxNumber.innerText = maxRange.value;
})