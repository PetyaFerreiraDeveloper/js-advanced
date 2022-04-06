import { render, html } from "../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
    <h1>Home</h1>
    <p>This is a paragraph</p>
`;

const root = document.getElementById('root');
export const homeView = (ctx) => {
    render(homeTemplate(), root);
};

