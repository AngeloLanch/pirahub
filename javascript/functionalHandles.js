import { 
    filterByAllType,
    filterByUserType, 
    openUserModal, 
    search, 
    sortByFollowers, 
    sortByRegisterDate, 
    sortByRepositories,
    modifySortByButtonBorder, 
    openSortBox,
    infinityScroll,
    closeUserModal } 
    from './functionalities.js';

export function searchHandle() {
    let searchButton = document.querySelector('#searchButton');

    searchButton.addEventListener("click", search);
};

export function filterByUserTypeHandle() {
    let userFilter = document.querySelector('#user');
    userFilter.addEventListener('click', filterByUserType)
};

export function filterByOrganizationTypeHandle() {
    let organizationFilter = document.querySelector('#organization');
    organizationFilter.addEventListener('click', filterByUserType)
};

export function filterByAllTypeHandle() {
    let allFilter = document.querySelector('#all');
    allFilter.addEventListener('click', filterByAllType)
};

export function sortByRegisterDateHandle() {
    let dateOption = document.querySelector('#registerDate');
    dateOption.addEventListener('click', sortByRegisterDate);
};

export function sortByFollowersHandle() {
    let followersOption = document.querySelector('#followersNumber');
    followersOption.addEventListener('click', sortByFollowers);
};

export function sortByRepositoriesHandle() {
    let reposOption = document.querySelector('#repositoriesNumber');
    reposOption.addEventListener('click', sortByRepositories);
};

export function openSortBoxHandle() {
    let clickedOrderBy = document.querySelector('#sortBy');
    clickedOrderBy.addEventListener('click', openSortBox);
};

export function modifySortByButtonBorderHandle() {
    let sortBy = document.querySelector('#sortBy');
    sortBy.addEventListener('click', modifySortByButtonBorder)
};

export function infinityScrollHandle() {
    window.addEventListener('scroll', infinityScroll);
};

export function userModalHandle() {
    let users = document.querySelectorAll('.userCard');
    users.forEach(element => {
        element.addEventListener('click', openUserModal);
    });
};

export function closeModalHandle() {
    let modalBackground = document.querySelector('#userModal');
    console.log('hANDLE');
    modalBackground.addEventListener('click', closeUserModal)
}