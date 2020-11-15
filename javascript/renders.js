import { hiddenLoader, enableScroll } from './functionalities.js';

export function userCardRender(userList) {
    let followersIcon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="32" 
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
    let reposIcon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="32" 
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
    let typeIcon = `<svg id="Capa_1" enable-background="new 0 0 512 512" height="32" 
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

    setTimeout(() => {
        hiddenLoader();
        enableScroll();

        userList.forEach(user => {
            let modelUserCard = ` 
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
                            <p id="userType" type="${user.type}"><span>${typeIcon}</span>${user.type}</p>
                            <p id="userCreatedAt" registerdate="">${user.created_at}</p>
                        </div>
                    </div>
                </div>
                <div class="userBio">
                    <p>Bio<br>${user.bio}</p>
                </div>
            </div>`;
            let cardsSection = document.querySelector('#cardsSection');
            let cardsSectionHTML = cardsSection.innerHTML;
    
            cardsSection.innerHTML = cardsSectionHTML + modelUserCard;        
        });
    }, 1500);
};

export function UserDetailsModalRender(userElement) {

    let avatar_url = userElement.querySelector('.userImage img');
    let name = userElement.querySelector('.userName p');
    let followers = userElement.querySelector('#followers');
    let public_repos = userElement.querySelector('#repositories');
    let type = userElement.querySelector('#userType');
    let created_at = userElement.querySelector('#createdAt');
    let bio = userElement.querySelector('#modalUserBio');

    let mainBox = document.querySelector('.mainBox');

    let userModalModel = `
    <div class="modalBg">
        <div class="modalUserCard">
            <div class="userInfos">
                <div class="userImage">
                    ${avatar_url}
                </div>
                <div class="userBasicInfos">
                    <div class="userName">
                        ${name}
                    </div>
                    <div class="userDetails">
                        ${followers}
                        ${public_repos}
                        ${type}
                        ${created_at}
                    </div>
                </div>
            </div>
            <div class="modalUserBio">
                <p>Bio<br>${bio}</p>
            </div>
        </div>
    </div>`
    
    // mainBox.insertAdjacentHTML("afterend", userModalModel);
}

 