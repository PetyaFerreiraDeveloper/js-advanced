function solve() {
  const url = "http://localhost:3030/jsonstore/collections/students";
  const table = document.querySelector("#results tbody");
  window.addEventListener("load", loadStudents);

  async function loadStudents() {
    const res = await fetch(url);
    const data = await res.json();

    Object.values(data).forEach((s) => {
      const firstName = s.firstName;
      const lastName = s.lastName;
      const facultyNumber = s.facultyNumber;
      const grade = Number(s.grade);
      const id = s._id;
      const tableRow = document.createElement("tr");

      const firstNameCell = tableRow.insertCell();
      firstNameCell.innerText = firstName;
      const lastNameCell = tableRow.insertCell();
      lastNameCell.innerText = lastName;
      const facCell = tableRow.insertCell();
      facCell.innerText = facultyNumber;
      const gradeCell = tableRow.insertCell();
      gradeCell.innerText = grade;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.width = '100%';
      deleteBtn.setAttribute('id', id);
      deleteBtn.addEventListener('click', onClickDelete);

      const deleteBtnCell = tableRow.insertCell();
      deleteBtnCell.appendChild(deleteBtn);
      table.appendChild(tableRow);
    });
  }

async function onClickDelete(e) {
    let id = e.target.id;
        e.target.parentNode.parentNode.remove();
        const deleteResponse = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    
}


  const formElement = document.getElementById("form");
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let facultyNumber = formData.get("facultyNumber");
    let grade = formData.get("grade");

    let student = {
      firstName,
      lastName,
      facultyNumber,
      grade: Number(grade),
    };

    if (
      firstName == "" ||
      lastName == "" ||
      facultyNumber == "" ||
      grade == ""
    ) {
      alert("all fields must be filled");
    } else {
      fetch(url, {
        method: "POST",
        header: {
          "content-type": "application/json",
        },
        body: JSON.stringify(student),
      })
      .then((res) => res.json())
      
    }

    formElement.reset();
    table.replaceChildren();
    loadStudents();
  });
}

solve();
