import { html, render } from '../node_modules/lit-html/lit-html.js';

const template = (items, styleClass) => html`
    <h1>Hello from LIT HTML</h1>

    ${items.length == 0
        ? html `<p>No users</p>`
        : ''
    }
    <ul class=${styleClass}>
        ${items.map(x => html `<li>${x}</li>`)}
    </ul>
    <!-- <input type="text" value=${items[0]}>  -->
    <button ?disabled=${items.length > 6} @click=${() => onClick()}>Add</button>
`;

const names = ['Pesho', 'Gosho', 'Mary', 'Lily']
const root = document.getElementById('root');
const templateResult = template(names, 'vertical');
render(templateResult, root);

function onClick() {
    names.push('Pesho' + Math.floor(Math.random() * 100));
    render(template(names, 'vertical'), root);
}


