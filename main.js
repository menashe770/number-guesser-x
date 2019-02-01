var minRange = document.querySelector('#min-range-input');
var maxRange = document.querySelector('#max-range-input');
var updateButton = document.querySelector('.update-button');
var minNumber = document.querySelector('.min-value');
var maxNumber = document.querySelector('.max-value');

updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  minNumber.innerText = minRange.value;
  maxNumber.innerText = maxRange.value;
  randomNumber = random();
  console.log(randomNumber);
})

function random() {
  var random = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value) + 1)) + parseInt(minRange.value);
  return random;
};