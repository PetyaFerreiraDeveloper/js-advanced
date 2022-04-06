import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/dropdown";
const menuElement = document.querySelector("div");
const formElement = document.querySelector("form");

async function getOptions() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const selectTemplate = (data) => html`
  <select id="menu">
    ${data.map((el) => html` <option value=${el._id}>${el.text}</option> `)}
  </select>
`;

const options = Object.values(await getOptions());

update(options);

function update(options) {
  const result = selectTemplate(options);
  render(result, menuElement);
}

// add new element

formElement.addEventListener("submit", addItem);

async function addItem(e) {
  e.preventDefault();

  if (document.getElementById("itemText").value != "") {
    const text = document.getElementById("itemText").value;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    options.push(await res.json());
    update(options);
  }

  document.getElementById("itemText").value = "";
}
