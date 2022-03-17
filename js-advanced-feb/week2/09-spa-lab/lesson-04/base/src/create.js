import { getToken } from './auth.js';

const url = 'http://localhost:3030/data/recipes';
const createSection = document.querySelector(".create");
const createForm = createSection.querySelector("form");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(e.currentTarget);
  let name = formData.get('name');
  let img = formData.get('img');
  let ingredients = formData.get('ingredients').split('\n');
  let steps = formData.get('steps').split('\n');

  let data = {
      name,
      img,
      ingredients,
      steps
  };

  fetch(url, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'X-Authorization': getToken()
      },
      body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        alert('successful recipe created')
    })
});

export function renderCreate() {
  createSection.style.display = "block";
}
