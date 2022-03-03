function validate() {
    let inputElement = document.getElementById('email');
    const regex = /[a-z]+\@[a-z]+\.[a-z]+/gm;

    inputElement.addEventListener('blur', () => {
        let emailText = inputElement.value;
        let m;
        if (!(m = regex.exec(emailText)) !== null) {
            inputElement.classList.add('error');
        } 

    })
}

// function validate() {
//     let inputElement = document.getElementById('email');
//     const regex = /[a-z]+\@[a-z]+\.[a-z]+/gm;

//     inputElement.addEventListener('change', (e) => {
//         if (regex.test(e.target.value)) {
//             e.target.classList.remove('error')
//         } else {
//             e.target.classList.add('error')
//         }

//     })
// }