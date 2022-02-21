function solve() {
  let areaElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let input = areaElement.value.split('.');
  let text = [];
  for (let sentence of input) {
    if (sentence.length > 1) {
      text.push(sentence);
    }
  }
  while (text.length > 0) {
    let paragraph = text.splice(0, 3);
    let paraElement = document.createElement('p');
    let outputParagraph = '';
    for (let sentence of paragraph) {
      outputParagraph = outputParagraph + sentence + '.'
    }
    // paraElement.textContent = paragraph.join('.');
    paraElement.textContent = outputParagraph;
    outputElement.appendChild(paraElement);
  }  
}