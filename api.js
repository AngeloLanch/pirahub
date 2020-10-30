async function getAllUsers() {
    const url = 'https://api.github.com/search/users?q=type:User+location:Piracicaba';
    const response = await fetch(url)
    const result =  await response.json()

    result.items.forEach(user => {
        getUser(user)
    });
};

async function getUser(user) {    
    const userUrl = user.url;
    const userResponse = await fetch(userUrl)
    const userResult =  await userResponse.json()

    if(user == undefined) {
        console.log(user);
    }

    addUserCard(userResult);
    // console.log(userResult.avatar_url);
    // console.log(userResult.type);
    // console.log(userResult.followers);
    // console.log(userResult.public_repos);
};

function addUserCard(user) {
    // var userBoxElement = document.createElement('div');
    // userBoxElement.setAttribute('class', 'userBox');


    // var userInfosElement = document.createElement('div');
    // userInfosElement.setAttribute('class', 'userInfos');
    
    // var userImageElement = document.createElement('div');
    // userImageElement.setAttribute('class', 'userImage');
    
    // var imgElement = document.createElement('img');
    // imgElement.setAttribute('src', `${user.avatar_url}`) 
    // userImageElement.appendChild(imgElement);

    // userInfosElement.appendChild(userImageElement);


    // var userNameElement = document.createElement('div');
    // userNameElement.setAttribute('class', 'userName');

    // var pElement = document.createElement('p');
    // userNameElement.appendChild(pElement);
    
    // userInfosElement.appendChild(userNameElement);

    // userBoxElement.appendChild(userInfosElement);

    // var userDescriptionElement = document.createElement('div');
    // userDescriptionElement.setAttribute('class', 'userDescription');
    
    // var pElement = document.createElement('p');
    // userDescriptionElement.appendChild(pElement);
    
    // userBoxElement.appendChild(userDescriptionElement);


    // const resultsBox = document.querySelector('#resultsBox');
    // resultsBox.appendChild(userBoxElement);

    const resultsBox = document.querySelector('#resultsBox');
    var resultsBoxHTML = resultsBox.innerHTML;
    resultsBox.innerHTML=
    `
        <div class="userBox">
            <div class="userInfos">
                <div class="userImage">
                    <img src="${user.avatar_url}"/>
                </div>
                <div class="userName">
                    <p>${user.name}</p>
                </div>
            </div>
            <div class="userDescription">
                <p>${user.name}</p>
                <p>${user.name}</p>
                <p>${user.name}</p>
            </div>
        </div>
    ` + resultsBoxHTML;
};
