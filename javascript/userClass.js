export class User {
    image;
    nome;
    city;
    followers;
    repos;
    type;
    bio;
    email;
    created_at;

    constructor(userData) {
        this.bio = userData.bio;
        this.image  = userData.avatar_url;
        this.name = userData.name;
        this.followers = userData.followers;
        this.repos = userData.public_repos;
        this.type = userData.type;
        this.email = userData.email;
        this.created_at = userData.created_at;
    }
}