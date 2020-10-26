async function getUser() {
    const url = 'https://api.github.com/search/users?q=type:User+location:Piracicaba';
    const response = await fetch(url)
    const result =  await response.json()

    console.log(result);
}
