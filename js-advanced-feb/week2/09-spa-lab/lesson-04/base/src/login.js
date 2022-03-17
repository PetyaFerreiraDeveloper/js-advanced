import { updateAuth } from "./auth.js";

const url = 'http://localhost:3030/users/login';
const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({email, password})
    })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            updateAuth()
            alert('Successfuly logged in')
        })
})

export function renderLogin() {
    loginSection.style.display = 'block'
}