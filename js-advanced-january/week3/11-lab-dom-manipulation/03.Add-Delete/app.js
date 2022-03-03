function addItem() {
    let newItemElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    let spanNameElement = document.createElement('span');
    let deleteElement = document.createElement('a');
    
    spanNameElement.textContent = newItemElement.value;
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#'

    liElement.appendChild(spanNameElement);
    liElement.appendChild(deleteElement);

    ulElement.appendChild(liElement);
    
    newItemElement.value = '';

    deleteElement.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    })
}
