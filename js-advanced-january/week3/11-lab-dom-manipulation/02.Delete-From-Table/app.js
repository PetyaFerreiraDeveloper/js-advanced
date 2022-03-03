function deleteByEmail() {

    let emailInputElement = document.querySelector('input[name="email"]');
    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailCellElements);
   
    let targetElement = emailElements.find(x => x.textContent == emailInputElement.value);
    //targetElement.remove(); // it only removes the element from the dom tree, but it is not deleted from the memory
    if (targetElement) {
        targetElement.parentNode.remove(); 
        emailInputElement.value = '';
        resultElement.textContent = 'Deleted.'
    } else {
        resultElement.textContent = 'Not found.';
    }
}