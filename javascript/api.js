// const userCard = require('./renders.js')
import {userCardRender} from './renders.js';

export async function getAllUsers() {
    const url = `https://api.github.com/search/users?q=location:Piracicaba`;
    const response = await fetch(url)
    const result =  await response.json()

    result.items.forEach(user => {
        getUser(user);
    });
};

async function getUser(user) {    
    const userUrl = user.url;
    const userResponse = await fetch(userUrl);
    const userResult =  await userResponse.json();

    if (userResult) {
        userCardRender(userResult);
    }
};

 