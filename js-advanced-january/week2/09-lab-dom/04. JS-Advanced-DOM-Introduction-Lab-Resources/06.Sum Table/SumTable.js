function sumTable() {
    // Solution one:

    let data = document.querySelectorAll('td');
    let sum = 0;
    for (let i = 1; i < data.length - 1; i += 2) {
        sum += Number(data[i].textContent);
    }

    document.getElementById('sum').textContent = sum;

    // SOLUTION TWO:

    // let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

    // let sum = Array.from(costElements).reduce((a, x) => {
    //     let currentValue = Number(x.textContent) || 0;
    //     return a + currentValue
    // }, 0)

    // document.getElementById('sum').textContent = sum;

}