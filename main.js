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


// $("guess1")onclick.(function activateField(val) {
// alert("if this works i take a " + val);

// };
function activateField() {

var guessOne = $('#guess1').val();
var guessTwo = $('#guess2').val();

if (guessOne != '' && guessTwo != '') {
$('#clear-game-button').prop('disabled', false);

}
if (guessOne === '' && guessTwo === '') {
	$('#clear-game-button').prop('disabled', true);
}

if (guessOne != '' && guessTwo != '') {
$('#reset-game-button').prop('disabled', false);

}
if (guessOne === '' && guessTwo === '') {
	$('#reset-game-button').prop('disabled', true);
}

} 