import { 
    getUserBySearching,
    getAllUsersSortedByType,
    getAllUsersSortedByDate, 
    getAllUsersSortedByFollowers, 
    getAllUsersSortedByRepositories, 
    getAllUsers} 
    from './api.js';
import { UserDetailsModalRender } from './renders.js';


function cleanCardScreen() {
    let resultSection = document.querySelector('#resultSection');
    resultSection.innerHTML = '';
}

export function search() {
    let filterElement = document.querySelector('#filter');
    let filterValue = filterElement.value;

    cleanCardScreen()
    getUserBySearching(filterValue)
};

export function filterByUserType() {
    let typeElement = document.querySelector('#userType');
    let type = typeElement.textContent;

    cleanCardScreen();
    getAllUsersSortedByType(type)
};

export function filterByAllType() {
    cleanCardScreen();
    getAllUsers();
}

export function sortByRegisterDate() {
    getAllUsersSortedByDate()
};

export function sortByFollowers() {
    getAllUsersSortedByFollowers()
};

export function sortByRepositories() {
    getAllUsersSortedByRepositories()
};

export function openUserDetailsModal() {
    UserDetailsModalRender(this);
}

export function infinityScroll() {
    
}