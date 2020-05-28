const radioBtns = document.querySelectorAll('input[type=radio]');
const textArea = document.querySelector('textarea');
const results = document.querySelector('.result');

function updateResults(text) {
  results.textContent = text;
}

function indexIsOdd(index) {
  return index % 2 === 1;
}

function generateSarcasticText(text) {
  const sarcasticString = [...text].map((char, idx) => {
    if (idx === 0) {
      return char.toLowerCase();
    }
    if (indexIsOdd(idx)) {
      return char.toUpperCase();
    }
    return char.toLowerCase();
  });
  return sarcasticString.join('');
}

function isTrue() {
  return Math.round(Math.random());
}

function generateUnableText(text) {
  const unableString = text.split('').map(char => {
    if (char === ' ' && isTrue) {
      return '...';
    }
    return char;
  });
  return unableString.join('');
}

function keyPressHandler(e) {
  const selectedInput = [...radioBtns].filter(radioInput => radioInput.checked);
  const textMode = selectedInput[0].value;
  const textAreaText = e.currentTarget.value;

  if (textMode === 'sarcastic') {
    updateResults(generateSarcasticText(textAreaText));
  } else if (textMode === 'unable') {
    updateResults(generateUnableText(textAreaText));
  }
}

textArea.addEventListener('keydown', keyPressHandler);
