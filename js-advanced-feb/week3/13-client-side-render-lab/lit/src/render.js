export default function render(html, parent) {

    // parse html & generate elements
    const template = document.createElement('template');
    template.innerHTML = html;
    parent.replaceChildren(template.content);
}