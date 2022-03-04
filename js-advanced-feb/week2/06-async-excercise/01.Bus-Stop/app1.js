async function getInfo() {
  const url = "http://localhost:3030/jsonstore/bus/businfo";
  const stopIdElement = document.getElementById("stopId");
  const stopNameElement = document.getElementById("stopName");
  const busesListElement = document.getElementById("buses");
  let stopId = stopIdElement.value;
  const busesIds = ["1287", "1308", "1327", "2334"];

  const res = await fetch(`${url}/${stopId}`);

  if (res.status !== 200) {
    stopNameElement.textContent = "Error";
    
  }
  const data = await res.json();
  //   console.log(data.buses);

  stopNameElement.textContent = "";
  busesListElement.innerHTML = "";
  if (busesIds.indexOf(stopId) != -1) {
    stopNameElement.textContent = data.name;

    let busesArray = Object.entries(data.buses);
    for (let bus of busesArray) {
      console.log(`Bus ${bus[0]} arrives in ${bus[1]} minutes`);
      let busElement = document.createElement("li");
      busElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
      busesListElement.appendChild(busElement);
    }
  } else {
    busesListElement.innerHTML = "";
    stopNameElement.textContent = "Error";
  }

  stopIdElement.value = "";
}
