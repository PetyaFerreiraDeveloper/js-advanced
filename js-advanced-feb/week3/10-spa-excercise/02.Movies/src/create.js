import { showHomePage } from "./home.js";
import { showView } from "./util.js";


const section = document.querySelector('#add-movie');
const form = section.querySelector('form');
// form.addEventListener('sumbit', onSubmit);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageUrl');
    createMovie(title, description, img);
    form.reset();
    showHomePage();
}

export function showCreatePage() {
    showView(section);
}

const url = 'http://localhost:3030/data/movies';

async function createMovie(title, description, img) {
    const user = JSON.parse(localStorage.getItem('user'));
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken,
        },
        body: JSON.stringify( {title, description, img} )
    })
}
