async function lockedProfile() {
  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";
  const url = "http://localhost:3030/jsonstore/advanced/profiles";
  let res = await fetch(url);
  let data = await res.json();
 
  let dataArray = Object.values(data);
  for (let el of dataArray) {
    let index = dataArray.indexOf(el) + 1;
    createProfile(el.username, el.email, el.age, index);
  }

  function createProfile(username, email, age, index) {
    let profileElement = document.createElement("div");
    profileElement.classList.add("profile");
    profileElement.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${index}Locked" value="lock">
				<label>Unlock</label>
				<input type="radio" name="user${index}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${index}Username" value="${username}" disabled readonly />
				
				<div class="hiddenInfo">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${index}Email" value="${email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${index}Age" value="${age}" disabled readonly />
				</div>
				
				<button>Show more</button>
        `;
    mainElement.appendChild(profileElement);
  }

  const profileLockedElements = document.querySelectorAll(
    ".profile input:nth-of-type(1)[type = radio]"
  );

  for (let el of profileLockedElements) {
    el.setAttribute("checked", true);
  }

  mainElement.addEventListener("click", (e) => {
    let unlockElement = e.target.parentNode.querySelector('.profile input[value = unlock');

    if (unlockElement.checked) {
        if (e.target.tagName == "BUTTON") {
            let hiddenElements = e.target.parentNode.querySelector(".hiddenInfo");
            let children = hiddenElements.children;
            if (e.target.textContent === 'Show more') {

                for (let el of children) {
                  el.style.display = "block";
                }
                e.target.textContent = "Hide it";
            } else {
                for (let el of children) {
                    el.style.display = "none";
                  }
                  e.target.textContent = "Show more";
            }
        }
    }
  });
}
