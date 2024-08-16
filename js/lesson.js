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







//converter

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElements) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            const usdRate = data.usd;
            const eurRate = data.eur;

            if (element.id === 'som') {
                targetElements.usd.value = (element.value / usdRate).toFixed(2);
                targetElements.eur.value = (element.value / eurRate).toFixed(2);
            }
            if (element.id === 'usd') {
                targetElements.som.value = (element.value * usdRate).toFixed(2);
                targetElements.eur.value = ((element.value * usdRate) / eurRate).toFixed(2);
            }
            if (element.id === 'eur') {
                targetElements.som.value = (element.value * eurRate).toFixed(2);
                targetElements.usd.value = ((element.value * eurRate) / usdRate).toFixed(2);
            }

            element.value === '' && (targetElements.som.value = '', targetElements.usd.value = '', targetElements.eur.value = '');
        }
    }
}

converter(somInput, { usd: usdInput, eur: eurInput });
converter(usdInput, { som: somInput, eur: eurInput });
converter(eurInput, { som: somInput, usd: usdInput });

