// const userCard = require('./renders.js')
import { userCardRender } from './renders.js';

export async function getAllUsers(page = 1,) {
    let url = `https://api.github.com/search/users?q=location:Piracicaba&per_page=10&page=${page}`;
    let response = await fetch(url)
    let result =  await response.json()

    result.items.forEach(user => {
        getUser(user);
    });
};

export async function getAllUsersSortedByType(type, page = 1) {
    let userType = '&Type=' + type;
    let url = `https://api.github.com/search/users?q=location:Piracicaba&${userType}per_page=10&page=${page}`;
    let response = await fetch(url)
    let result =  await response.json()

    result.items.forEach(user => {
        getUser(user);
    });
};

export async function getUserBySearching(userName, page = 1) {
    let url = `https://api.github.com/search/users?q=${userName}&location:Piracicaba&per_page=10&page=${page}`;
    let response = await fetch(url)
    let result =  await response.json()

    result.items.forEach(user => {
        getUser(user);
    });
};

export async function getAllUsersSortedByDate(page = 1) {
    let orderByDate = '&sort=joined&order=asc';
    let url = `https://api.github.com/search/users?q=location:Piracicaba${orderByDate}&per_page=10&page=${page}`;
    let response = await fetch(url)
    let result =  await response.json()

    result.items.forEach(user => {
        getUser(user);
    });
};

export async function getAllUsersSortedByFollowers(page = 1) {
    let sortByFollowers = '&sort=followers&order=desc';
    let url = `https://api.github.com/search/users?q=location:Piracicaba${sortByFollowers}&per_page=10&page=${page}`;
    let response = await fetch(url)
    let result =  await response.json()

    result.items.forEach(user => {
        getUser(user);
    });
};

export async function getAllUsersSortedByRepositories(page = 1) {
    let sortByRepositories = '&sort=repositories&order=desc';
    let url = `https://api.github.com/search/users?q=location:Piracicaba${sortByRepositories}&per_page=10&page=${page}`;
    let response = await fetch(url)
    let result =  await response.json()

    result.items.forEach(user => {
        getUser(user);
    });
};

async function getUser(user) {
    let userUrl = user.url;
    let userResponse = await fetch(userUrl);
    let userResult =  await userResponse.json();

    if (userResult) {
        userCardRender(userResult);
    }
};
