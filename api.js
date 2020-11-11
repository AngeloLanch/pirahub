// API CALL -----------------------------------
// --------------------------------------------
async function getAllUsers() {
    const url = 'https://api.github.com/search/users?q=location:Piracicaba';
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


// DATA PROCESSING ----------------------------
// --------------------------------------------
function processDateIntoNumbers() {
    let users = document.querySelectorAll('.userCard');
    users.forEach(user => {
        let createdAtElement = user.querySelector('#userCreatedAt');
        let createdAt = createdAtElement.textContent;
        let createdAtNumbers = parseInt(createdAt.replace(/[T+Z+\:+\-*$]/mig, ""));
        createdAtElement.setAttribute("registerdate", createdAtNumbers);
    });
    return users;
}

function processFollowersNumbers() {
    let users = document.querySelectorAll('.userCard');
    users.forEach(user => {
        let followersElement = user.querySelector('#followers');
        let followers = followersElement.getAttribute('followers');
        followersProcessed = ('00000' + followers).substr(-5);

        followersElement.setAttribute("followers", followersProcessed)
         
    });
    
    return(users)
};

function processRepositoriesNumbers() {
    let users = document.querySelectorAll('.userCard');
    users.forEach(user => {
        let repositoriesElement = user.querySelector('#repositories');
        let repositories = repositoriesElement.getAttribute('repositories');
        repositoriesProcessed = ('00000' + repositories).substr(-5);

        repositoriesElement.setAttribute("repositories", repositoriesProcessed)  
    });
    
    return(users)
};

function compareDateDesc(currentUser, nextUser) {
    let currentNumberElement = currentUser.querySelector('#userCreatedAt');
    let currentNumber = currentNumberElement.getAttribute('registerdate');

    let nextNumberElement = nextUser.querySelector('#userCreatedAt');
    let nextNumber = nextNumberElement.getAttribute('registerdate')

    let comparison = 0;
    if (currentNumber > nextNumber) {
        comparison = -1;
    } else if (currentNumber < nextNumber) {
        comparison = 1;
    }

    return comparison;
}

function compareFollowersAsc(currentUser, nextUser) {
    let currentNumberElement = currentUser.querySelector('#followers');
    let currentNumber = currentNumberElement.getAttribute('followers');

    let nextNumberElement = nextUser.querySelector('#followers');
    let nextNumber = nextNumberElement.getAttribute('followers');


    let comparison = 0;
    if (currentNumber > nextNumber) {
        comparison = 1;
    } else if (currentNumber < nextNumber) {
        comparison = -1;
    }

    return comparison;
}

function compareRepositoriesAsc(currentUser, nextUser) {
    let currentNumberElement = currentUser.querySelector('#repositories');
    let currentNumber = currentNumberElement.getAttribute('repositories');

    let nextNumberElement = nextUser.querySelector('#repositories');
    let nextNumber = nextNumberElement.getAttribute('repositories');

    let comparison = 0;
    if (currentNumber > nextNumber) {
        comparison = 1;
    } else if (currentNumber < nextNumber) {
        comparison = -1;
    }
    return comparison;
}


// FUNCIONALITIES -----------------------------
// --------------------------------------------
function search() {         
    let users = document.querySelectorAll('.userCard');

    if(filter.value) {
        users.forEach(user => {
            let divNameElement= user.querySelector('.userName p');
            let userName = divNameElement.textContent;
            
            let searching = new RegExp(this.value);

            if(!searching.test(userName)) {
                user.classList.add('invisivel');
            }

            else {
                user.classList.remove('invisivel');
            }
        });
    }

    else {
        users.forEach(user => {
            user.classList.remove('invisivel');
        });
    }
};

function filterByUserType() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let divTypeElement = user.querySelector('#userType');
        let userType = divTypeElement.getAttribute('value');

        if(userType != 'User') {
            user.classList.add('invisible');
        }

        else {
            user.classList.remove('invisible');
        }
    });
};

function filterByOrganizationType() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let divTypeElement = user.querySelector('#userType');
        let userType = divTypeElement.getAttribute('value');

        if(userType != 'organization') {
            user.classList.add('invisible');
        }

        else {
            user.classList.remove('invisible');
        }
    });
}

function filterByAllType() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        user.classList.remove('invisible');
    });
}

function showSortBox() {
    let orderBox = document.querySelector('#orderBox');
    orderBox.classList.toggle('visible');
};

function sortByRegisterDate() {
    let users = processDateIntoNumbers();
    let arrayUsers = Array.from(users);

    let sortedUsers = arrayUsers.sort(compareDateDesc);
    sortFilterRender(sortedUsers);
};

async function sortByFollowers() {
    let users = processFollowersNumbers();
    let arrayUsers = Array.from(users);

    let sortedUsers = arrayUsers.sort(compareFollowersAsc);
    sortFilterRender(sortedUsers);
    // sortedUsers2.forEach(user => {
    //     let teste = user.querySelector('#repositories')
    //     console.log(teste);
    // })
};

async function sortByRepositories() {
    let users = processRepositoriesNumbers();

    let arrayUsers = Array.from(users);
    let sortedUsers = arrayUsers.sort(compareRepositoriesAsc);

    sortFilterRender(sortedUsers);
};


// HANDLES -----------------------------------
// --------------------------------------------
function searchHandle() {
    let filter = document.querySelector('#filter');
    filter.addEventListener("input", search);
};

function filterByUserTypeHandle() {
    let userFilter = document.querySelector('#user');
    userFilter.addEventListener('click', filterByUserType)
};

function filterByOrganizationTypeHandle() {
    let organizationFilter = document.querySelector('#organization');
    organizationFilter.addEventListener('click', filterByOrganizationType)
};

function filterByAllTypeHandle() {
    let allFilter = document.querySelector('#all');
    allFilter.addEventListener('click', filterByAllType)
};

function showSortBoxHandle() {
    let clickedOrderBy = document.querySelector('#orderBy');
    clickedOrderBy.addEventListener('click', showSortBox);
};

function sortByRegisterDateHandle() {
    let dateOption = document.querySelector('#registerDate');
    dateOption.addEventListener('click', sortByRegisterDate);
}

function sortByFollowersHandle() {
    let followersOption = document.querySelector('#followersNumber');
    followersOption.addEventListener('click', sortByFollowers);
}

function sortByRepositoriesHandle() {
    let reposOption = document.querySelector('#repositoriesNumber');
    reposOption.addEventListener('click', sortByRepositories);
}


// RENDERS ------------------------------------
// --------------------------------------------
function userCardRender(user) {
    const followersIcon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="32" 
    viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" 
    gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0"><stop offset="0" 
    stop-color="#ffe59a"/><stop offset="1" stop-color="#ffffd5"/>
    </linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" 
    x1="256" x2="256" y1="407" y2="105"><stop offset="0" stop-color="#ffde00"/>
    <stop offset="1" stop-color="#fd5900"/></linearGradient><g><g><circle cx="256" 
    cy="256" fill="url(#SVGID_1_)" r="256"/></g><g><g><path 
    d="m291.529 140.529c0-19.595-15.934-35.529-35.529-35.529s-35.529 15.934-35.529 
    35.529 15.934 35.529 35.529 35.529 35.529-15.934 35.529-35.529zm-88.823 
    106.589h106.588c4.909 0 
    8.882-3.973 8.882-8.882v-25.233c0-27.272-33.491-36.943-62.177-36.943s-62.177 
    9.672-62.177 36.943v25.233c.001 4.909 3.974 8.882 8.884 8.882zm0 
    53.294c0-19.595-15.934-35.529-35.529-35.529s-35.53 15.934-35.53 35.529 
    15.935 35.529 35.53 35.529 35.529-15.934 35.529-35.529zm-35.529 35.529c-28.686 
    0-62.177 9.672-62.177 36.943v25.233c0 4.91 3.973 8.882 8.882 8.882h106.588c4.91 
    0 8.882-3.973 
    8.882-8.882v-25.233c.001-27.271-33.49-36.943-62.175-36.943zm213.176-35.529c0-19.595-15.935-35.529-35.53-35.529s-35.529 
    15.934-35.529 35.529 15.934 35.529 35.529 35.529 35.53-15.934 
    35.53-35.529zm-35.53 35.529c-28.685 0-62.177 9.672-62.177 
    36.943v25.233c0 4.91 3.973 8.882 8.882 8.882h106.588c4.91 0 8.882-3.973 
    8.882-8.882v-25.233c.002-27.271-33.489-36.943-62.175-36.943zm-54.786-12.838c2.724-4.086 
    1.622-9.594-2.464-12.317l-22.692-15.128v-21.894c0-4.91-3.973-8.882-8.882-8.882s-8.882 
    3.973-8.882 8.882v21.894l-22.692 15.128c-4.086 2.724-5.187 8.232-2.464 12.317 
    2.678 4.023 8.163 5.217 12.317 2.463l21.72-14.48 21.72 14.48c4.158 2.756 9.643 
    1.559 12.319-2.463z" fill="url(#SVGID_2_)"/></g></g></g></svg>`;
    const reposIcon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="32" 
    viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" 
    gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0"><stop offset="0" 
    stop-color="#ffe59a"/><stop offset="1" stop-color="#ffffd5"/></linearGradient>
    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="256" x2="256" 
    y1="407" y2="105"><stop offset="0" stop-color="#ffde00"/><stop offset="1" 
    stop-color="#fd5900"/></linearGradient><g><g><circle cx="256" cy="256" 
    fill="url(#SVGID_1_)" r="256"/></g><g><g><path d="m158.294 
    401.795v-48.09h-48.09zm97.706-190.207h-142.118c-4.91 0-8.882 
    3.973-8.882 8.882v115.471h62.177c4.909 0 8.882 3.973 8.882 
    8.882v62.177h79.941c4.91 0 8.882-3.973 
    8.882-8.882v-177.647c0-4.91-3.972-8.883-8.882-8.883zm71.059-53.294h-142.118c-4.909 
    0-8.882 3.973-8.882 8.882v26.647h79.941c14.694 0 26.647 11.953 26.647 
    26.647v133.235h44.412c4.909 0 8.882-3.973 
    8.882-8.882v-177.647c0-4.909-3.973-8.882-8.882-8.882zm71.059-53.294h-142.118c-4.91 
    0-8.882 3.973-8.882 8.882v26.647h79.941c14.694 0 26.647 11.953 
    26.647 26.647v133.235h44.412c4.91 0 
    8.882-3.973 8.882-8.882v-177.647c0-4.909-3.973-8.882-8.882-8.882z" 
    fill="url(#SVGID_2_)"/></g></g></g></svg>`;
    const typeIcon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="32" 
    viewBox="0 0 552 552" width="32" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" 
    gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0"><stop offset="0" 
    stop-color="#ffedad"/><stop offset="1" stop-color="#ffffe5"/></linearGradient>
    <linearGradient id="lg1"><stop offset="0" stop-color="#feba00"/>
    <stop offset="1" stop-color="#fd5900"/>
    </linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" 
    x1="256" x2="256" xlink:href="#lg1" y1="409.441" y2="98.227"/>
    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="256" x2="256" 
    xlink:href="#lg1" y1="409.5" y2="98.286"/><g><circle cx="256" cy="256" 
    fill="url(#SVGID_1_)" r="256"/><g>
    <path d="m327.953 175.053c0-39.674-32.279-72.553-71.953-72.553s-71.953 
    32.878-71.953 72.553 32.279 71.953 71.953 71.953 71.953-32.279 71.953-71.953z" 
    fill="url(#SVGID_2_)"/><path d="m121.088 400.506c0 4.971 4.023 8.994 8.994 
    8.994h251.836c4.971 0 8.994-4.023 8.994-8.994 
    0-74.395-60.517-135.512-134.912-135.512s-134.912 61.117-134.912 135.512z" 
    fill="url(#SVGID_3_)"/></g></g></svg>`;
    const modelUserCard = ` 
    <div class="userCard">
        <div class="userInfos">
            <div class="userImage">
                <img src="${user.avatar_url}"/>
            </div>
            <div class="userBasicInfos">
                <div class="userName">
                    <p>${user.name}</p>
                </div>
                <div class="userDetails">
                    <p id="followers" followers="${user.followers}"><span>${followersIcon}</span>${user.followers} followers</p>
                    <p id="repositories" repositories="${user.public_repos}"><span>${reposIcon}</span>${user.public_repos} repos</p>
                    <p id="userType" value="${user.type}"><span>${typeIcon}</span>${user.type}</p>
                    <p id="userCreatedAt" registerdate="">${user.created_at}</p>
                </div>
            </div>
        </div>
        <div class="userBio">
            <p>Bio<br>${user.bio}</p>
        </div>
    </div>`;

    let resultSection = document.querySelector('#resultSection');
    let resultSectionHTML = resultSection.innerHTML;
    resultSection.innerHTML = modelUserCard + resultSectionHTML;
};

function sortFilterRender(sortedUsers) {
    let resultSection = document.querySelector('#resultSection');
    resultSection.innerHTML = '';

    sortedUsers.forEach(user => {
        let resultSectionHTML = resultSection.innerHTML;
        resultSection.innerHTML = user.outerHTML + resultSectionHTML
    });
};


// EXECUTION ----------------------------------
// --------------------------------------------
getAllUsers();

searchHandle();
filterByUserTypeHandle();
filterByOrganizationTypeHandle();
filterByAllTypeHandle();
showSortBoxHandle();
sortByRegisterDateHandle();
sortByFollowersHandle();
sortByRepositoriesHandle();
