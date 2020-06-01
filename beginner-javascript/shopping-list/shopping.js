const newItemInput = document.querySelector('#item');
const itemList = document.querySelector('.list');
const submitBtn = document.querySelector('#submit');

function createNewItem() {
  const inputText = newItemInput.value;

  if (inputText.length === 0) {
    return;
  }

  const newItemText = inputText;
  const newItem = `
    <li class="shopping-item">
      <input type="checkbox">
      ${newItemText}
      <button>x</button>
    </li>
  `;

  itemList.insertAdjacentHTML('beforeend', newItem);
  newItemInput.value = '';
}

function deleteItem() {
  const deleteItemBtn = itemList.lastElementChild.lastElementChild;

  deleteItemBtn.addEventListener('click', event => {
    event.target.parentNode.remove();
  });
}

function handleClick(e) {
  e.preventDefault();
  createNewItem();
  deleteItem();
}

submitBtn.addEventListener('click', handleClick);
