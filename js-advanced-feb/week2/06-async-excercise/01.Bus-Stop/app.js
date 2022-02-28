async function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore';
    let inputElement = document.getElementById('stopId').value;  

    let res = await fetch(`${baseUrl}/bus`);
    console.log(res);
}