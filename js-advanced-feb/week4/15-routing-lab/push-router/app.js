const homeTemplate = () => `
    <h1>Home</h1>
    <p>This is a paragraph</p>
`;

const articlesTemplate = () => `
    <h1>Articles</h1>
    <p>This is a paragraph about articles</p>
    <p>This is a paragraph about articles</p>
    <p>This is a paragraph about articles</p>
    <p>This is a paragraph about articles</p>
`;

const aboutTemplate = () => `
    <h1>About</h1>
    <p>This is a paragraph about</p>
   
`;

const notFoundTemplate = () => `
    <h1>Page not found</h1>
`;

const routes = {
    '/': homeTemplate,
    '/home': homeTemplate,
    '/articles': articlesTemplate,
    '/about': aboutTemplate,
}

const root = document.getElementById('root');


const navigate = (pathname) => {
    
    let template = routes[pathname];

    if(!template) {
        template = notFoundTemplate;
    }
    
    root.innerHTML = template();
}

document.body.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        
        let url = new URL(e.target.href);
        history.pushState({}, '', url.pathname)

        navigate(url.pathname);   
    }
})

window.addEventListener('popstate', (e) => {
    console.log('popstate');
    console.log(location.pathname);
    navigate(location.pathname);   

})

navigate(location.pathname);   