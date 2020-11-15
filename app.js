import { getAllUsers } from './javascript/api.js';
import { modifySortByButtomHandle, openSortBoxHandle } from './javascript/styleFunctionalitiesHandles.js';
import {filterByAllTypeHandle, 
        filterByOrganizationTypeHandle, 
        filterByUserTypeHandle, 
        openUserDetailsModalHandle, 
        searchHandle, 
        sortByFollowersHandle, 
        sortByRegisterDateHandle, 
        sortByRepositoriesHandle,
        infinityScrollHandle } 
        from './javascript/functionalHandles.js';

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
infinityScrollHandle();

setTimeout(() => {
    openUserDetailsModalHandle();
}, 3000)