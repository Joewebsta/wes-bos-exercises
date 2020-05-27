const radioBtns = document.querySelectorAll('input[type=radio]');
const textArea = document.querySelector('textarea');
const results = document.querySelector('.result');

function updateResults(text) {
  results.textContent = text;
}

function generateSarcasticText(text) {
  const upperCaseString = [...text].map(char => char.toUpperCase());

  return upperCaseString.join('');
}

function keyPressHandler(e) {
  const selectedInput = [...radioBtns].filter(radioInput => radioInput.checked);
  const textMode = selectedInput[0].value;
  const textAreaText = e.currentTarget.value;

  if (textMode === 'sarcastic') {
    const modifiedText = generateSarcasticText(textAreaText);
    updateResults(modifiedText);
  }
}

textArea.addEventListener('keydown', keyPressHandler);
