async function getInfo() {
  const url = "http://localhost:3030/jsonstore/bus/businfo";
  const stopIdElement = document.getElementById("stopId");
  const stopNameElement = document.getElementById("stopName");
  const busesListElement = document.getElementById("buses");
  let stopId = stopIdElement.value;
  // const busesIds = ["1287", "1308", "1327", "2334"];

  const res = await fetch(`${url}/${stopId}`);

  if (res.status !== 200) {
    stopNameElement.textContent = "Error";
    busesListElement.innerHTML = "";
    stopIdElement.value = '';
  }
  
  const data = await res.json();

  stopNameElement.textContent = "";
  busesListElement.innerHTML = "";

  stopNameElement.textContent = data.name;

  let busesArray = Object.entries(data.buses);
  for (let bus of busesArray) {
    let busElement = document.createElement("li");
    busElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
    busesListElement.appendChild(busElement);
  }

  stopIdElement.value = "";
}
