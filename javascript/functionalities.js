import { compareDateDesc, 
    processDateIntoNumbers, 
    processFollowersNumbers, 
    compareFollowersAsc,
    compareRepositoriesAsc,
    processRepositoriesNumbers } 
from './dataProcessing.js';

import { UserDetailsModalRender, sortFilterRender } from './renders.js';

export function search() {         
    let users = document.querySelectorAll('.userCard');

    if(filter.value) {
        users.forEach(user => {
            let divNameElement= user.querySelector('.userName p');
            let userName = divNameElement.textContent;
            
            let searching = new RegExp(this.value);

            if(!searching.test(userName)) {
                user.classList.add('invisible');
            }

            else {
                user.classList.remove('invisible');
            }
        });
    }

    else {
        users.forEach(user => {
            user.classList.remove('invisivel');
        });
    }
};

export function filterByUserType() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let divTypeElement = user.querySelector('#userType');
        let userType = divTypeElement.getAttribute('value');

        if(userType != 'User') {
            user.classList.add('invisible');
        }
        else {
            user.classList.remove('invisible');
        }
    });
};

export function filterByOrganizationType() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let divTypeElement = user.querySelector('#userType');
        let userType = divTypeElement.getAttribute('value');

        if(userType != 'organization') {
            user.classList.add('invisible');
        }
        else {
            user.classList.remove('invisible');
        }
    });
}

export function filterByAllType() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        user.classList.remove('invisible');
    });
}

export function sortByRegisterDate() {
    let users = processDateIntoNumbers();
    let arrayUsers = Array.from(users);
    let sortedUsers = arrayUsers.sort(compareDateDesc);

    sortFilterRender(sortedUsers);
};

export function sortByFollowers() {
    let users = processFollowersNumbers();
    let arrayUsers = Array.from(users);
    let sortedUsers = arrayUsers.sort(compareFollowersAsc);

    sortFilterRender(sortedUsers);
};

export function sortByRepositories() {
    let users = processRepositoriesNumbers();
    let arrayUsers = Array.from(users);
    let sortedUsers = arrayUsers.sort(compareRepositoriesAsc);

    sortFilterRender(sortedUsers);
};

export function openUserDetailsModal() {
    UserDetailsModalRender(this);
}