const tabs = document.querySelectorAll('button[role="tab"]');

function changeTabColor(clickedTab) {
  const isSelected = clickedTab.attributes['aria-selected'].nodeValue;

  if (isSelected === 'false') {
    tabs.forEach(tab => {
      tab.attributes['aria-selected'].nodeValue = false;
    });

    clickedTab.attributes['aria-selected'].nodeValue = true;
  }
}

function changeTabPanel(clickedTab) {
  const tabId = clickedTab.id;
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  tabPanels.forEach(tabPanel => {
    const panelLabel = tabPanel.attributes['aria-labelledby'].nodeValue;
    tabPanel.hidden = true;

    if (tabId === panelLabel) {
      tabPanel.hidden = false;
    }
  });
}

function handleTabClick(e) {
  const clickedTab = e.currentTarget;

  changeTabColor(clickedTab);
  changeTabPanel(clickedTab);
}

tabs.forEach(tab => {
  tab.addEventListener('click', handleTabClick);
});
