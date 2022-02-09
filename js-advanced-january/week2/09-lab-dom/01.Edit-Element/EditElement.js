// function editElement(ref, match, replacer) {
//     let pattern = new RegExp(match, 'g');
//     ref.textContent = ref.textContent.replace(pattern, replacer);
// }

function editElement(ref, match, replacer) {
    while(ref.textContent.includes(match)) {
        ref.textContent = ref.textContent.replace(match, replacer);
    }
}

