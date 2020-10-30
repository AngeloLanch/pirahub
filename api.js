async function getUser() {
    const url = 'https://api.github.com/search/users?q=type:User+location:Piracicaba';
    const response = await fetch(url)
    const result =  await response.json()

    result.items.forEach(user => {
        addUser(user);
        // console.log(user);
    });
}

function addUser(user) {
    const resultsBox = document.querySelector('#resultsBox');
    var userBoxElement = document.createElement('div');
    userBoxElement.setAttribute('class', 'userBox');

    // ******
    var userInfosElement = document.createElement('div');
    userInfosElement.setAttribute('class', 'userInfos');
    
    var userImageElement = document.createElement('div');
    userImageElement.setAttribute('class', 'userImage');
    

    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', `${user.avatar_url}`) 
    userImageElement.appendChild(imgElement);


    
    var divElement = document.createElement('div');
    userInfos.appendChild(divElement);
    divElement.setAttribute('class', 'userName');

    const userImage = document.querySelector('.userImage');
    var imgElement = document.createElement('img');
    

    userInfosElement.appendChild(userImageElement);
    userBoxElement.appendChild(userInfosElement);
    


    const userName = document.querySelector('.userName');
    var pElement = document.createElement('p');
    userName.appendChild(pElement);
    // *******

    var divElement = document.createElement('div');
    resultsBox.appendChild(divElement);
    divElement.setAttribute('class', 'userDescription');
    
    const userDescription = document.querySelector('.userDescription');
    var pElement = document.createElement('p');
    userDescription.appendChild(pElement);
    
    resultsBox.appendChild();

    // const userBox = 
    // `
    // <div class="userBox">
    //     <div class="userInfos">
    //         <div class="userImage">
    //             <img src="./img/perfil.png"/>
    //         </div>
    //         <div class="userName">
    //             <p>user name</p>
    //         </div>
    //     </div>
    //     <div class="userDescription">
    //         <p>bla blab lab bla bla bla bl bla bla bla esse usuário é top demais! </p>
    //     </div>
    // </div>
    // `

    return;
}
