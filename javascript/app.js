import { getAllUsers } from './api.js';
import { modifySortByButtomHandle, openSortBoxHandle } from './styleFunctionalitiesHandles.js';
import {filterByAllTypeHandle, 
        filterByOrganizationTypeHandle, 
        filterByUserTypeHandle, 
        openUserDetailsModalHandle, 
        searchHandle, 
        sortByFollowersHandle, 
        sortByRegisterDateHandle, 
        sortByRepositoriesHandle } 
        from './functionalHandles.js';

getAllUsers();

searchHandle();
filterByUserTypeHandle();
filterByOrganizationTypeHandle();
filterByAllTypeHandle();
openSortBoxHandle();
sortByRegisterDateHandle();
sortByFollowersHandle();
sortByRepositoriesHandle();

modifySortByButtomHandle();

setTimeout(() => {
    openUserDetailsModalHandle();
}, 3000)