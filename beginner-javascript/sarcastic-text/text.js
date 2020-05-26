const textArea = document.querySelector('textarea');

const results = document.querySelector('.result');

console.log(textArea);

textArea.addEventListener('keydown', e => {
  const textAreaText = e.currentTarget.value;
  results.textContent = textAreaText;
});
