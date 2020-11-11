import { modifySortByButtom, openSortBox } from './styleFunctionalities.js';

export function openSortBoxHandle() {
    let clickedOrderBy = document.querySelector('#sortBy');
    clickedOrderBy.addEventListener('click', openSortBox);
};

export function modifySortByButtomHandle() {
    let sortBy = document.querySelector('#sortBy');
    sortBy.addEventListener('click', modifySortByButtom)
}