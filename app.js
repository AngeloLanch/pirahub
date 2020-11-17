import { getAllUsers } from './javascript/api.js';
import {filterByAllTypeHandle, 
        filterByOrganizationTypeHandle, 
        filterByUserTypeHandle, 
        userModalHandle, 
        searchHandle, 
        sortByFollowersHandle, 
        sortByRegisterDateHandle, 
        sortByRepositoriesHandle,
        infinityScrollHandle,
        modifySortByButtonBorderHandle, 
        openSortBoxHandle } 
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

modifySortByButtonBorderHandle();
infinityScrollHandle();

setTimeout(() => {
    userModalHandle();
    console.log('foi');
}, 3000)