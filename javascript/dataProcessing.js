export function processDateIntoNumbers() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let createdAtElement = user.querySelector('#userCreatedAt');
        let createdAt = createdAtElement.textContent;
        let createdAtNumbers = parseInt(createdAt.replace(/[T+Z+\:+\-*$]/mig, ""));

        createdAtElement.setAttribute("registerdate", createdAtNumbers);
    });
    
    return users;
}

export function processFollowersNumbers() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let followersElement = user.querySelector('#followers');
        let followers = followersElement.getAttribute('followers');
        
        let followersProcessed = ('00000' + followers).substr(-5);
        followersElement.setAttribute("followers", followersProcessed)
    });
    
    return(users)
};

export function processRepositoriesNumbers() {
    let users = document.querySelectorAll('.userCard');

    users.forEach(user => {
        let repositoriesElement = user.querySelector('#repositories');
        let repositories = repositoriesElement.getAttribute('repositories');
        
        let repositoriesProcessed = ('00000' + repositories).substr(-5);
        repositoriesElement.setAttribute("repositories", repositoriesProcessed)  
    });
    
    return(users)
};

export function compareDateDesc(currentUser, nextUser) {
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

export function compareFollowersAsc(currentUser, nextUser) {
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

export function compareRepositoriesAsc(currentUser, nextUser) {
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