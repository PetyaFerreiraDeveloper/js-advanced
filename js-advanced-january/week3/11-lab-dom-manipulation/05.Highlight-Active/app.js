function focused() {
    let inputElements = document.querySelectorAll('input');
   
    let body = document.getElementsByTagName('body')[0];
   
    body.addEventListener('focusin', (e) => {
       e.target.parentNode.classList.add('focused');
    })
    body.addEventListener('focusout', (e) => {
        e.target.parentNode.classList.remove('focused');
     })
}