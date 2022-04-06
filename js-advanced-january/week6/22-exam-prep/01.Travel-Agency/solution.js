window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const block = document.getElementById('block');
  const previewElement = document.getElementById('infoPreview');

  submitBtn.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  const inputValues = Array.from(document.querySelectorAll('#form input'));
  inputValues.pop();
  const labelValues = Array.from(document.querySelectorAll('#form label'));
  
  submitBtn.addEventListener('click', (e)=>{
    const fullName = inputValues[0];
    const email = inputValues[1];
    if(fullName.value && email.value !== '') {
      for(let i = 0; i < inputValues.length; i++) {
        // if(inputValues[i].value === '') {
        //   continue;
        // }
        let listElement = document.createElement('li');
        listElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
        previewElement.appendChild(listElement);
      }
    }
    for(let input of inputValues) {
      input.value = '';
    }
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

  })

  editBtn.addEventListener('click', (e)=>{
    
    const listItems = Array.from(previewElement.childNodes);
    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
    
  })

  continueBtn.addEventListener('click', ()=>{
    block.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation';
    block.appendChild(h3);
  })
}
