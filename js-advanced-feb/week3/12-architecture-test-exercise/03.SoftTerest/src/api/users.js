import { get, post } from './api.js';

const endpoints = {
    'login' : '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
}

export async function login(email, password) {
    const user = await post(endpoints.login, {email, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function register(email, password) {
    const user = await post(endpoints.register, {email, password});

    localStorage.setItem('user', JSON.stringify(user));
}

// i must not put await before the get inside of the logout function, because if i do, and the server returns an error, the user will not be able to enter any more and change his password. If i don't put await and the server returns an error the localStorage.removeItem will work even if an error is thrown so the users data will be deleted and the user can come in register again or try to login again
export async function logout() {
    get(endpoints.logout);
    localStorage.removeItem('user');
}