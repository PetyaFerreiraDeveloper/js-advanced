function solve() {
  let hireBtnElement = document.getElementById("add-worker");
  let tBodyElement = document.getElementById('tbody');

  let inputElements = Array.from(document.querySelectorAll("#signup input"));
  
  let spanElement = document.getElementById('sum');

  hireBtnElement.addEventListener("click", (e) => {
    e.preventDefault();
    let tableRowElement = document.createElement("tr");

    if (
      inputElements[0].value &&
      inputElements[1].value &&
      inputElements[2].value &&
      inputElements[3].value &&
      inputElements[4].value &&
      inputElements[5].value !== ""
    ) {
      for (let el of inputElements) {
        let tableDataElement = document.createElement("td");
        tableDataElement.textContent = el.value;
        
        tableRowElement.appendChild(tableDataElement);
        tBodyElement.appendChild(tableRowElement);
        el.value = '';
      }

      let lastRowElement = document.createElement('td');
      let firedBtnElement = document.createElement('button');
      firedBtnElement.textContent = 'fired';
      firedBtnElement.classList.add('fired');
      let editBtnElement = document.createElement('button');
      editBtnElement.textContent = 'edit';
      editBtnElement.classList.add('edit');
      lastRowElement.appendChild(firedBtnElement);
      lastRowElement.appendChild(editBtnElement);
      tableRowElement.appendChild(lastRowElement);
      tBodyElement.appendChild(tableRowElement);

    
    let salaryElements = Array.from(document.querySelectorAll('#tbody :nth-child(6)'));
   
    let sum = 0;
    for (let salary of salaryElements) {
        sum += Number(salary.textContent);
    }
    spanElement.textContent = sum.toFixed(2);
    }
  });

  // edit functionality
  tBodyElement.addEventListener('click',(e) => {
      if (e.target.className === 'edit') {
        let rowToEdit = e.target.parentElement.parentElement;
        rowToEdit.classList.add('edit');
        let salaryElement = document.querySelector('.edit :nth-child(6)');
        let salary = Number(salaryElement.textContent);
        let sum = Number(spanElement.textContent);
        sum -= salary;
        spanElement.textContent = sum.toFixed(2);
        
        let info = Array.from(document.querySelectorAll('.edit td'));
        info.pop();
        for (let i = 0; i < info.length; i++) {
            inputElements[i].value = info[i].textContent;
        }
        tBodyElement.removeChild(rowToEdit);

      }
  })

  // fired functionality

  tBodyElement.addEventListener('click',(e) => {
    if (e.target.className === 'fired') {
        let rowToDelete = e.target.parentElement.parentElement;
        rowToDelete.classList.add('del');
        let salaryElement = document.querySelector('.del :nth-child(6)');
        let salary = Number(salaryElement.textContent);
        
        let sum = Number(spanElement.textContent);
        sum -= salary;
        spanElement.textContent = sum.toFixed(2);
        // console.log(sum);
        tBodyElement.removeChild(rowToDelete);

    }

})

}
solve();
