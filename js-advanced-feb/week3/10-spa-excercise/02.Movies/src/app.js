// [x] improve html structure
// [x] create app.js module
// [x] create util.js containing hide and display of view
// [x] placeholders for all views

// implement views
// - create request logic
// -ODM manipulatiion logic

// [x] catalog
// [x] login
// [ ] register
// [ ] create
// [ ] details
// [ ] like
// [ ] edit: 4 Steps: load record, populate form, validate input, send request with new input
// [ ] delete

import { showHomePage } from './home.js';
import { showLoginPage } from './login.js';
import { showRegisterPage } from './register.js';
import { showCreatePage } from './create.js';
import { updateNav } from './util.js';

const routes = {
    '/': showHomePage,
    '/login': showLoginPage,
    '/register': showRegisterPage,
    '/create': showCreatePage,
    '/logout': logout,
}

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e) {
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);
        const view = routes[url.pathname];
        if (typeof view == 'function') {
            view();
        }
    }
}

function logout() {
    localStorage.removeItem('user');
    updateNav();
}

// Start application in catalog view
updateNav();
showHomePage();