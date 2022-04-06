import { createRecipe } from "../api.js";

const createSection = document.querySelector(".create");
const form = createSection.querySelector("form");

form.addEventListener("submit", (e) => {
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

  createRecipe(data)
    .then(data => {
        // console.log(data);
        alert('successful recipe created');
    });

    form.reset();
});

export function renderCreate() {
  createSection.style.display = "block";
}
