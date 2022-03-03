async function solve() {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    const table = document.querySelector('#results tbody');

    const res = await fetch(url);
    const data = await res.json();
    
    Object.values(data).forEach(student => {
        const firstName = student.firstName;
        const lastName = student.lastName;
        const facultyNumber = student.facultyNumber;
        const grade = Number(student.grade);
        let id = student._id;

        const tableRow = document.createElement('tr');
        tableRow.setAttribute('id', id);
        
        const firstNameCell = tableRow.insertCell(0);
        firstNameCell.innerText = firstName;

        const lastNameCell = tableRow.insertCell(1);
        lastNameCell.innerText = lastName;

        const facultyNumberCell = tableRow.insertCell(2);
        facultyNumberCell.innerText = facultyNumber;

        const gradeCell = tableRow.insertCell(3);
        gradeCell.innerText = grade;

        const delBtn = document.createElement('button');
        delBtn.innerText = 'delete';
        const delBtnCell = tableRow.insertCell(4);
        delBtnCell.appendChild(delBtn);
        delBtn.style.width = '100%';
        delBtn.style.color = 'red';

        delBtn.addEventListener('click', deleteStudent);

        table.appendChild(tableRow);
    });

    async function deleteStudent(e) {
        const id = e.target.parentNode.parentNode.id;
        e.target.parentNode.parentNode.remove();

        const deleteResponse = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
    }

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onClickSubmit);

    async function onClickSubmit(e) {
        e.preventDefault();

        const firstNameInput = document.getElementsByName('firstName')[0];
        const lastNameInput = document.getElementsByName('lastName')[0];
        const facultyNumberInput = document.getElementsByName('facultyNumber')[0];
        const gradeInput = document.getElementsByName('grade')[0];

        // const inputsArray = Array.from(document.querySelectorAll('.inputs input'));
        // inputsArray.map(input => input.setAttribute('required', true))

        if (isNaN(facultyNumberInput.value) || isNaN(gradeInput.value) ) {
            return alert('Wrong input data')
        }

        if (firstNameInput.value !== '' &&  lastNameInput.value !== '' && facultyNumberInput.value !== '' && gradeInput.value !== '') {
            const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    firstName:firstNameInput.value,
                    lastName: lastNameInput.value,
                    facultyNumber: Number(facultyNumberInput.value),
                    grade: Number(gradeInput.value),
                })
            });
    
            const tableRow = document.createElement('tr');
    
            const firstNameCell = tableRow.insertCell(0);
            firstNameCell.innerText = firstNameInput.value;
    
            const lastNameCell = tableRow.insertCell(1);
            lastNameCell.innerText = lastNameInput.value;
    
            const facultyNumberCell = tableRow.insertCell(2);
            facultyNumberCell.innerText = facultyNumberInput.value;
    
            const gradeCell = tableRow.insertCell(3);
            gradeCell.innerText = gradeInput.value;
    
            table.appendChild(tableRow);
        }

        
        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
    }
}

solve()