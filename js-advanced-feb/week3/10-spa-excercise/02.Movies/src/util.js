const views = [...document.querySelectorAll('.view-section')];
const userVisibleElements = document.querySelectorAll('.user');
const guestVisibleElements = document.querySelectorAll('.guest');

function hideAll() {
    views.forEach(v => v.style.display = 'none')
}

export function showView(section) {
    hideAll()
    section.style.display = 'block';
}

export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';
    return element;
}

export function updateNav() {
    const user = JSON.parse(localStorage.getItem('user'));
    const msgContainer = document.getElementById('welcome')
    if (user) {
        userVisibleElements.forEach(e => e.style.display = 'inline-block');
        guestVisibleElements.forEach(e => e.style.display = 'none');
        msgContainer.textContent = `Welcome ${user.email}`
    } else {
        userVisibleElements.forEach(e => e.style.display = 'none');
        guestVisibleElements.forEach(e => e.style.display = 'inline-block');
        msgContainer.textContent = ``

    }
}