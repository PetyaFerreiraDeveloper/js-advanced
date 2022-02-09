function extractText() {
    let listItems = document.getElementById('items').textContent;
    let textArea = document.getElementById('result');
    textArea.textContent = listItems;
}

extractText()