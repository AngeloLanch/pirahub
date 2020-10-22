fetch('https://api.github.com/users')
.then( response => {
    return response.json()
})
.then( json => {
    console.log(json)
})