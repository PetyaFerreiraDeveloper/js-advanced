function lockedProfile() {
    let btnElements = document.querySelectorAll('.profile button'); //NodeList
    for (let btn of btnElements) {
        btn.addEventListener('click', displayHidden);

        function displayHidden(e) {
            let parentElement = btn.parentElement;
            let divToDisplay = parentElement.querySelector('.profile div');
            let inputElement = parentElement.querySelector('.profile input[value="unlock"]:checked');
            
            if (inputElement && btn.textContent == 'Show more') {
                divToDisplay.style.display = 'block';
                btn.textContent = 'Hide it';
                
            } else if(inputElement && btn.textContent == 'Hide it'){
                divToDisplay.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}