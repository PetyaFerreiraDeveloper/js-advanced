function solve() {
  let input = document.getElementById('text').value;
  let condition = document.getElementById('naming-convention').value;
  let resultEl = document.getElementById('result');
  let words = input.split(' ').map((word) => word.toLowerCase());
  let result = '';
  if (condition === 'Camel Case') {
    let firstWord = words.shift();
    result += firstWord;
    for (word of words) {
      let capL = word[0].toUpperCase();
      let rest = word.substring(1);
      word = capL + rest;
      result += word;
    }
  } else if (condition === 'Pascal Case') {
    for (word of words) {
      let capL = word[0].toUpperCase();
      let rest = word.substring(1);
      word = capL + rest;
      result += word;
    }
  } else {
    result = 'Error!'
  }
  resultEl.textContent = result;
  
}
