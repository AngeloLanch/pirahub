import { 
    getUserBySearching,
    getAllUsersSortedByType,
    getAllUsersSortedByDate, 
    getAllUsersSortedByFollowers, 
    getAllUsersSortedByRepositories, 
    getAllUsers } 
    from './api.js';
import { UserDetailsModalRender } from './renders.js';

let page = 1;

function cleanCardScreen() {
    let cardsSection = document.querySelector('#cardsSection');
    cardsSection.innerHTML = '';
}

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
    cleanCardScreen();
    hiddenLoader();
    getAllUsersSortedByDate()
};

export function sortByFollowers() {
    cleanCardScreen();
    hiddenLoader();
    getAllUsersSortedByFollowers()
};

export function sortByRepositories() {
    cleanCardScreen();
    hiddenLoader();
    getAllUsersSortedByRepositories()
};

export function openUserDetailsModal() {
    UserDetailsModalRender(this);
}

export function hiddenLoader() {
    let resultSection = document.querySelector('#resultSection');
    resultSection.classList.toggle('hiddenLoader');       
}

export function infinityScroll() {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight-1) {
        page ++
        disableScroll()
        getAllUsers(page)
    }
};

function disableScroll() { 
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
  
    window.onscroll = () => { 
        window.scrollTo(scrollLeft, scrollTop); 
    }; 
}; 
  
export function enableScroll() { 
    window.onscroll = function() {}; 
} 