function editNew(ref, match, replacer) {
    let pattern = new RegExp(match, 'g');
    
    ref.textContent = ref.textContent.replace(pattern, replacer);

}
