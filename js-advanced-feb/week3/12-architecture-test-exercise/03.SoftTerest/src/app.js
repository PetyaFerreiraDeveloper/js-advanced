// import * as api from './api/users.js';

import { showCreate } from "./pages/create.js";
import { showDetails } from "./pages/details.js";
import { showHome } from "./pages/home.js";
import { showLogin } from "./pages/login.js";
import { showCatalog } from "./pages/catalog.js";
import { showRegister } from "./pages/register.js";
import { initialize } from "./router.js";
import { logout } from "./api/users.js";

document.getElementById('views').remove();

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/create': showCreate,
    '/logout': onLogout,
}

const router = initialize(links);
router.updateNav();

// start app in home view
router.goTo('/');

function onLogout() {
    logout();
    router.updateNav();
    router.goTo('/');
}