const cardButtons = document.querySelectorAll('.card button');
const outerModal = document.querySelector('.modal-outer');
const innerModal = document.querySelector('.modal-inner');

function handleCardButtonClick(e) {
  const card = e.currentTarget.closest('.card');
  const imgSrc = card.querySelector('img').src.replace('200', '500');
  const { description } = card.dataset;
  const name = card.querySelector('h2').textContent;

  innerModal.innerHTML = `
    <img src="${imgSrc}" alt="${name}" width="500px" height="500px">
    <p>${description}</p>
  `;
  outerModal.classList.add('open');
}

function closeModal() {
  outerModal.classList.remove('open');
}

cardButtons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});

outerModal.addEventListener('click', e => {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
