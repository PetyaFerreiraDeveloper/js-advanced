function extract() {
    let pattern = /(?<=\().*?(?=\))/g;
    let text = document.getElementById('content').textContent;

    let extracted = [];
    let validWord = '';
    while ((validWord = pattern.exec(text)) !== null) {
        extracted.push(validWord[0])
    };
    return extracted.join('; ');
    
}