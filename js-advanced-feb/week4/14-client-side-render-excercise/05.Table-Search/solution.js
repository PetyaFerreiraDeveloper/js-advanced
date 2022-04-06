import { render, html } from "../../../node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/table";
const searchField = document.getElementById("searchField");
const container = document.querySelector("tbody");

async function getStudents() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const rowTemplate = (data) => html`
  ${data.map(
    (st) => html`
      <tr class=${findMatch(st) ? 'select' : ''}>
        <td>${st.firstName} ${st.lastName}</td>
        <td>${st.email}</td>
        <td>${st.course}</td>
      </tr>
    `
  )}
`;

const students = Object.values(await getStudents());

update();
function update() {
  const results = rowTemplate(students);
  render(results, container);
}

document.querySelector("#searchBtn").addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  update();
  searchField.value = '';
}

function findMatch(st) {
  const match = searchField.value;
  const studentData = st.firstName + st.lastName + st.email + st.course;
  if(match && studentData.toLowerCase().includes(match.toLowerCase())) {
     return true;
  } else {
     return false;
  }

}
