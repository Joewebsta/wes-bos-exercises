const tabsWrapper = document.querySelector('.tabs');
const tabs = document.querySelectorAll('button[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function changeTabColor(clickedTab) {
  tabs.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });

  clickedTab.setAttribute('aria-selected', true);
}

function changeTabPanel(clickedTab) {
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  const tabId = clickedTab.id;
  const tabPanel = tabsWrapper.querySelector(`[aria-labelledby = ${tabId}`);
  tabPanel.hidden = false;
}

function handleTabClick(e) {
  const clickedTab = e.currentTarget;

  changeTabColor(clickedTab);
  changeTabPanel(clickedTab);
}

tabs.forEach(tab => {
  tab.addEventListener('click', handleTabClick);
});
