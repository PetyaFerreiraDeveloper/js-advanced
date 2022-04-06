import { html, render } from '../../../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

const containerElement = document.getElementById('root');
const input = document.getElementById('towns');

const listTemplate = (data) => html `
    <ul>
        
        ${data.map(town => html`
            <li>
                ${town}
            </li>
            `)}
    </ul>
    `
function getTowns(e) {
    e.preventDefault();
    let towns = input.value.split(', ');

    if (input.value !== '') {
        const result = listTemplate(towns);
        render(result, containerElement);
    }

    input.value = '';

}