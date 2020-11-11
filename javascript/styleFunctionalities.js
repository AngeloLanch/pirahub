export function openSortBox() {
    let sortBox = document.querySelector('#sortBox');
    sortBox.classList.toggle('visible');
};

export function modifySortByButtom() {
    let filterButton = document.querySelector('.filterButton');
    filterButton.classList.toggle('sharpBorder');

    let sortFilter = document.querySelector('.sortFilter');
    sortFilter.classList.toggle('sortFilterMarginBottom');
}