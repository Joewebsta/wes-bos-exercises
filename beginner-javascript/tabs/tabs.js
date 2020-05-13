console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelectorAll('button[role="tab"]');

function handleTabClick(e) {
  const clickedTab = e.currentTarget;
  const isSelected = clickedTab.attributes['aria-selected'].nodeValue;

  if (isSelected === 'false') {
    tabs.forEach(tab => {
      tab.attributes['aria-selected'].nodeValue = false;
    });

    clickedTab.attributes['aria-selected'].nodeValue = true;
  }
}

tabs.forEach(tab => {
  tab.addEventListener('click', handleTabClick);
});
