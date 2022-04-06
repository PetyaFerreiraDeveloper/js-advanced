import { render, html } from "../node_modules/lit-html/lit-html.js";

const aboutTemplate = () => html`
    <h1>About</h1>
    <p>This is a paragraph about</p>
`;
const root = document.getElementById('root');

export const aboutView = (ctx) => {
    render(aboutTemplate(), root);
}