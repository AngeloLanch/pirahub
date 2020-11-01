async function getAllUsers() {
    const url = 'https://api.github.com/search/users?q=type:User+location:Piracicaba';
    const response = await fetch(url)
    const result =  await response.json()

    result.items.forEach(user => {
        addUserCard(user);
    });
};
// getUser(user);

async function getUser(user) {    
    const userUrl = user.url;
    const userResponse = await fetch(userUrl)
    const userResult =  await userResponse.json()

    addUserCard(userResult);
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


    // const resultSection = document.querySelector('#resultSection');
    // resultSection.appendChild(userBoxElement);

    const resultSection = document.querySelector('#resultSection');
    var resultSectionHTML = resultSection.innerHTML;
    resultSection.innerHTML=
    `
    <div class="userBox">
        <div class="userProfile">
            <div class="userImage">
                <img src="${user.avatar_url}"/>
            </div>
            <div class="userBasicInfos">
                <div class="userLogin">
                    <p>${user.login}</p>
                </div>
                <div class="userDetails">
                    <div class="">
                        <p><span></span>1234 followers</p>
                        <p><span></span>1234 followers</p>
                        <p><span></span>1234 followers</p>
                    </div>
                    <div class="description">
                        <p>bla bla bla bla esse é um super usuário legal</p>
                    </div>
                </div>
            </div>
        </div>
    <div>
        <span class="arrow">&#748</span>
    </div>
</div>
    ` + resultSectionHTML;
};
