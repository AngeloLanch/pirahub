import { getAllUsers } from './javascript/api.js';
import {filterByAllTypeHandle, 
        filterByOrganizationTypeHandle, 
        filterByUserTypeHandle, 
        closeModalHandle, 
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
closeModalHandle()

infinityScrollHandle();