import { filterByAllType, 
        filterByOrganizationType, 
        filterByUserType, 
        openUserDetailsModal, 
        search,
        sortByFollowers,
        sortByRegisterDate,
        sortByRepositories,
    } 
    from './functionalities.js';

export function searchHandle() {
    let filter = document.querySelector('#filter');
    filter.addEventListener("input", search);
};

export function filterByUserTypeHandle() {
    let userFilter = document.querySelector('#user');
    userFilter.addEventListener('click', filterByUserType)
};

export function filterByOrganizationTypeHandle() {
    let organizationFilter = document.querySelector('#organization');
    organizationFilter.addEventListener('click', filterByOrganizationType)
};

export function filterByAllTypeHandle() {
    let allFilter = document.querySelector('#all');
    allFilter.addEventListener('click', filterByAllType)
};

export function sortByRegisterDateHandle() {
    let dateOption = document.querySelector('#registerDate');
    dateOption.addEventListener('click', sortByRegisterDate);
}

export function sortByFollowersHandle() {
    let followersOption = document.querySelector('#followersNumber');
    followersOption.addEventListener('click', sortByFollowers);
}

export function sortByRepositoriesHandle() {
    let reposOption = document.querySelector('#repositoriesNumber');
    reposOption.addEventListener('click', sortByRepositories);
}

export function openUserDetailsModalHandle() {
    let userDetails = document.querySelectorAll('.userCard');

    userDetails.forEach(user => {
        user.addEventListener('click', openUserDetailsModal); 
    });
}