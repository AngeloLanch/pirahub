import { 
    getUserBySearching,
    getAllUsersSortedByType,
    getAllUsersSortedByDate, 
    getAllUsersSortedByFollowers, 
    getAllUsersSortedByRepositories, 
    getAllUsers } 
    from './api.js';
import { userModalRender } from './renders.js';

let page = 1;

export function search() {
    let filterElement = document.querySelector('#filter');
    let filterValue = filterElement.value;

    cleanCardScreen();
    hiddenLoader();
    getUserBySearching(filterValue)
};

export function filterByUserType() {
    let filterElementType = this;
    let type = filterElementType.getAttribute('value');

    cleanCardScreen();
    hiddenLoader();
    getAllUsersSortedByType(type)
};

export function filterByAllType() {
    cleanCardScreen();
    hiddenLoader();
    getAllUsers();
}

export function sortByRegisterDate() {
    changeFilterText(this);
    cleanCardScreen();
    hiddenLoader();
    getAllUsersSortedByDate()
};

export function sortByFollowers() {
    changeFilterText(this);
    cleanCardScreen();
    hiddenLoader();
    getAllUsersSortedByFollowers()
};

export function sortByRepositories() {
    changeFilterText(this);
    cleanCardScreen();
    hiddenLoader();
    getAllUsersSortedByRepositories()
};

export function openUserDetailsModal() {
    UserDetailsModalRender(this);
}

export function openSortBox() {
    let sortBox = document.querySelector('#sortBox');
    sortBox.classList.toggle('visible');
};

export function modifySortByButtonBorder() {
    let filterButton = document.querySelector('.filterButton');
    filterButton.classList.toggle('sharpBorder');

    let sortFilter = document.querySelector('.sortFilter');
    sortFilter.classList.toggle('sortFilterMarginBottom');
}

export function hiddenLoader() {
    let resultSection = document.querySelector('#resultSection');
    resultSection.classList.toggle('hiddenLoader');       
}

export function infinityScroll() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight-1) {
        page ++;
        disableScroll();
        hiddenLoader();
        getAllUsers(page);
    }
}; 
  
export function enableScroll() { 
    window.onscroll = function() {}; 
};

function disableScroll() { 
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
  
    window.onscroll = () => { 
        window.scrollTo(scrollLeft, scrollTop); 
    }; 
};

function changeFilterText(element) {
    let sortByButton = document.querySelector('#sortBy');
    let sortByButtonText = element.textContent;
    
    sortByButton.innerHTML = sortByButtonText;
    openSortBox();
    modifySortByButtonBorder();
};

function cleanCardScreen() {
    let cardsSection = document.querySelector('#cardsSection');
    cardsSection.innerHTML = '';
};

export function openUserModal() {
    userModalRender(this);
    let modal = document.querySelector('#userModal');
    modal.classList.add('openUserModal');
    
}