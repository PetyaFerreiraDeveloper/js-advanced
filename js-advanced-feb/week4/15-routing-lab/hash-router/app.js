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


const routes = {
    '#home': homeTemplate,
    '#articles': articlesTemplate,
    '#about': aboutTemplate,
}

const root = document.getElementById('root');

window.addEventListener('hashchange', (e) => {
    let template = routes[location.hash];
    root.innerHTML = template();
})