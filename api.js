async function getUser() {
    const url = 'https://api.github.com/search/users?q=type:User+location:Piracicaba';
    const response = await fetch(url)
    const result =  await response.json()

    console.log(result);
}

function userList() {
    const resultsBox = document.getElementsById('resultsBox');
    
    result.items.forEach(user => {
        <div class="userBox">
            <div class="userInfos">
                <div class="userImage">
                    <img src="./img/perfil.png"/>
                </div>
                <div class="userName">
                    <p>user name</p>
                </div>
            </div>
            <div class="userDescription">
                <p>bla blab lab bla bla bla bl bla bla bla esse usuário é top demais! </p>
            </div>
        </div>
        const div = resultsBox.appendChild(document.createElement('div'));
        div.    
    })
    

}
