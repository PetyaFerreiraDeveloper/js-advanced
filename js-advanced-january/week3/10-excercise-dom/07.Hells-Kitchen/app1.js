function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);

    function onClick() {
        let input = JSON.parse(document.querySelector('#inputs textarea').value);
        // console.log(input);

        let avgSalary = 0;
        let totalSalary = 0;
        let currAvgSalary = 0;
        let bestRestName = '';
        let output = {};

        for (let line of input) {
            let restaurantInfo = line.split(' - ');
            let restaurantName = restaurantInfo[0];
            let workersData = restaurantInfo[1].split(', ');

            for(let worker of workersData) {
                let [name, salary] = worker.split(' ');
                if (!output.hasOwnProperty(restaurantName)){
                    output[restaurantName] = {};
                }
                if(output.hasOwnProperty(restaurantName)) {
                    output[restaurantName][name] = Number(salary);
                }
            }
        }
        let entries = Object.entries(output);
        for(let entry of entries){
            
            let key = entry[0];
            let values = Object.values(entry[1])
            for(let salary of values){
                totalSalary += salary;
            }
            // console.log(totalSalary);
            avgSalary = totalSalary / values.length;
            if(avgSalary > currAvgSalary){
                currAvgSalary = avgSalary;
                bestRestName = key;
                totalSalary = 0;
            }
        }
        let result = Object.entries(output[bestRestName]).sort((a, b)=> b[1] - a[1]);
        let print = '';
        result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
        document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestName} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
        document.querySelector('#workers p').textContent = print;
    }
}