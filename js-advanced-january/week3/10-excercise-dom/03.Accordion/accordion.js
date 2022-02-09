function toggle() {
    let btnEl = document.getElementsByClassName('button')[0];
    let textEl = document.querySelector('#extra');
    if (btnEl.textContent === 'More') {
        textEl.style.display = 'block';
        btnEl.textContent = 'Less'
    } else if (btnEl.textContent === 'Less') {
        textEl.style.display = 'none';
        btnEl.textContent = 'More'
    } 
}