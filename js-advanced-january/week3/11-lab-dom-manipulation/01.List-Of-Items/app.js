function addItem() {
    let newItemElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = newItemElement.value;
    ulElement.appendChild(liElement);
    newItemElement.value = '';
}