let url = 'dfjlsjfalsjfasfdj'

// Get request

const res = await fetch(url);
const data = await res.json();

// POST Request
const loginUrl = 'http://localhost:3030/users/login';
fetch(loginUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({email, password})
})
    .then(res => res.json())
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        console.log('test');
        alert('successfuly logged in')
    })


    // Post with authorization

function getToken() {
    let serializedUser = localStorage.getItem('user');
    if(serializedUser) {
        let user = JSON.parse(serializedUser);
        return user.accessToken
    } 
}
let createUrl = 'http://localhost:3030/data/recipes';
fetch(createUrl, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-Authorization': getToken()
    },
    body: JSON.stringify(data)
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })