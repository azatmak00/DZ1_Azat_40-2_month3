const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentTab = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
}

const showTabContent = (index) => {
    tabContentBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
}

const autoSwitchTabs = () => {
    currentTab++;
    if (currentTab >= tabs.length) {
        currentTab = 0;
    }
    hideTabContent();
    showTabContent(currentTab);
}


hideTabContent();
showTabContent(currentTab);


const tabInterval = setInterval(autoSwitchTabs, 3000);


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(index);
                currentTab = index;
            }
        });
    }
}
