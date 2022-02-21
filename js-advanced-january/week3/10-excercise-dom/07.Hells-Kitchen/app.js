function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let textAreaElement = document.querySelector("textarea");
  let bestRestaurantParagraphElement =
    document.querySelector("#bestRestaurant p");
  let workersParagraphElement = document.querySelector("#workers p");

  function onClick() {
    let arrayRestaurants = JSON.parse(textAreaElement.value);
    //       [
    //       "PizzaHut - Peter 500, George 300, Mark 800",
    //       "TheLake - Bob 1300, Joe 780, Jane 660"
    //       ]
    let restaurants = [];
    let workers = [];
    let avgSalary = 0;
    let totalSalary = 0;
    for (let el of arrayRestaurants) {
      let [name, workersNames] = el.split(" - ");
      for (let el of restaurants) {
         if (el.name === name) {
            let i = restaurants.indexOf(el);
            restaurants.splice(i, 1);
         }
      }
      let workersArray = workersNames.split(", ");
      for (let worker of workersArray) {
        let [workerName, workerSalary] = worker.split(" ");
        totalSalary += Number(workerSalary);

        workers.push({
          workerName: workerName,
          workerSalary: workerSalary,
        });
      }
      
      if (workersArray.length !== 0) {
         avgSalary = totalSalary / workersArray.length;
      } else {
         avgSalary = 0;
      }

      let sortedWorkers = workers.sort(
        (a, b) => b.workerSalary - a.workerSalary
      );

      restaurants.push({
        name: name,
        avgSalary: avgSalary,
        workers: sortedWorkers,
      });
      totalSalary = 0;
      avgSalary = 0;
      workers = [];
    }

    let sorted = restaurants.sort((a, b) => b.avgSalary - a.avgSalary);
    let bestRestaurant = sorted[0];
    let printBestRestaurant = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${Number(bestRestaurant.workers[0].workerSalary).toFixed(2)}`;
    
    bestRestaurantParagraphElement.textContent = printBestRestaurant;
    
    let printWorkers = bestRestaurant.workers;
    let final = "";
    printWorkers.forEach(
      (worker) =>
        (final += `Name: ${worker.workerName} With Salary: ${worker.workerSalary} `)
    );
    workersParagraphElement.textContent = final;
  }
}

