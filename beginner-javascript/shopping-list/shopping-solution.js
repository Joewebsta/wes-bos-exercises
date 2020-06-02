const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function displayItems() {
  const html = items.map(
    item => `<li class="shopping-item">
    <input type="checkbox" value='${item.id}' ${item.complete ? 'checked' : ''}>
    <span class="itemName">${item.name}</span>
    <button value='${item.id}'>&times;</button>
  </li>`
  );
  list.innerHTML = html.join('');
}

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  items.push(item);
  e.target.reset();

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function restoreFromLocalStorage() {
  console.info('Restoring from local storage');
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function mirrorToLocalStorage() {
  console.info('Saving items to local storage');
  localStorage.setItem('items', JSON.stringify(items));
}

function deleteItem(id) {
  console.log('deleting item', id);
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete.');
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', e => {
  const id = parseInt(e.target.value);

  if (e.target.matches('button')) {
    deleteItem(id);
  }

  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
