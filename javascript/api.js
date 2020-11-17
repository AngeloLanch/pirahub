import { userCardRender } from './renders.js';
import {access} from './acess.js';

export async function getAllUsers(pg = 1) {
    let url = `https://api.github.com/search/users?q=location:Piracicaba&per_page=10&page=${pg}`;
    let response = await fetch(url, access);
    let userList =  await response.json();
    
    getUser(userList);
};

export async function getAllUsersSortedByType(type, page = 1) {
    let userType = '+type:' + type;
    let url = `https://api.github.com/search/users?q=location:Piracicaba${userType}&per_page=10&page=${page}`;
    let response = await fetch(url, access)
    let userList =  await response.json()
    
    getUser(userList);
};

export async function getUserBySearching(userName, page = 1) {
    let url = `https://api.github.com/search/users?q=${userName}&location:Piracicaba&per_page=10&page=${page}`;
    let response = await fetch(url, access)
    let userList =  await response.json()
    
    getUser(userList);
};

export async function getAllUsersSortedByDate(page = 1) {
    let orderByDate = '&sort=joined&order=asc';
    let url = `https://api.github.com/search/users?q=location:Piracicaba${orderByDate}&per_page=10&page=${page}`;
    let response = await fetch(url, access)
    let userList =  await response.json()
    
    getUser(userList);
};

export async function getAllUsersSortedByFollowers(page = 1) {
    let sortByFollowers = '&sort=followers&order=desc';
    let url = `https://api.github.com/search/users?q=location:Piracicaba${sortByFollowers}&per_page=10&page=${page}`;
    let response = await fetch(url, access);
    let userList =  await response.json();

    getUser(userList);
};

export async function getAllUsersSortedByRepositories(page = 1) {
    let sortByRepositories = '&sort=repositories&order=desc';
    let url = `https://api.github.com/search/users?q=location:Piracicaba${sortByRepositories}&per_page=10&page=${page}`;
    let response = await fetch(url, access)
    let userList =  await response.json()
    
    getUser(userList);
};

async function getUser(userListResponse) {
    let userList = userListResponse.items;
    let newUserList = await Promise.all(userList.map(async user => {
        let response = await fetch(user.url); 
        return response.json();   
    }));
    
    userCardRender(newUserList);
};
