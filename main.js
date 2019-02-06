var clearButton = document.querySelector('.clear-game-button');
var displayGuess1 = document.querySelector('.guess-val1');
var displayGuess2 = document.querySelector('.guess-val2');
var guess1Input = document.querySelector('#guess1');
var guess2Input = document.querySelector('#guess2');
var maxNumber = document.querySelector('.max-value');
var maxRange = document.querySelector('#max-range-input');
var minNumber = document.querySelector('.min-value');
var minRange = document.querySelector('#min-range-input');
var name1Result = document.querySelector('.name1-result');
var name2Result = document.querySelector('.name2-result');
var player1Input = document.querySelector('#player1');
var player2Input = document.querySelector('#player2');
var randomNumber = null;
var resetButton = document.querySelector('.reset-game-button');
var result1 = document.querySelector('.result1');
var result2 = document.querySelector('.result2');
var submitButton = document.querySelector('.submit-guess-button');
var updateButton = document.querySelector('.update-button');

updateButton.addEventListener('click', function(e) {
  e.preventDefault();
  minNumber.innerText = minRange.value;
  maxNumber.innerText = maxRange.value;
  randomNumber = random();
  console.log(randomNumber);
})

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  p1GuessEval();
  p2GuessEval();
  changeNames();
})

resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  resetFields();
})

clearButton.addEventListener('click', function(e) {
  e.preventDefault();
  guess1Input.value = '';
  guess2Input.value = '';
})

function random() {
  var random = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value) + 1)) + parseInt(minRange.value);
  return random;
};

function resetFields () {
  guess1Input.value = '';
  guess2Input.value = '';
  player1Input.value = '';
  player2Input.value = '';
  minRange.value = '';
  maxRange.value = '';
  randomNumber = null;
  minNumber.innerText = '?';
  maxNumber.innerText = '?';
  displayGuess1.innerText = '?';
  displayGuess2.innerText = '?';
  name1Result.innerText = 'Challenger 1';
  name2Result.innerText = 'Challenger 2';
  result1.innerText = 'Your result';
  result2.innerText = 'Your result';
}

function changeNames() {
  name1Result.innerText = player1Input.value;
  name2Result.innerText = player2Input.value;
}

function p1GuessEval() {
  displayGuess1.innerText = guess1Input.value;
  if (guess1Input.value < randomNumber) {
    result1.innerText = 'That\'s too low';
  } else if (guess1Input.value > randomNumber) {
    result1.innerText = 'That\'s too high';
  } else if (guess1Input.value === '') {
    result1.innerText = 'ERROR';
  } else {
    result1.innerText = 'Boom!';
  }
}

function p2GuessEval() {
  displayGuess2.innerText = guess2Input.value;
  if (guess2Input.value < randomNumber) {
    result2.innerText = 'That\'s too low';
  } else if (guess2Input.value > randomNumber) {
    result2.innerText = 'That\'s too high';
  } else if (guess2Input.value === '') {
    result2.innerText = 'ERROR';
  } else {
    result2.innerText = 'Boom!';
  }
}

