function solve() {
    let url = 'http://localhost:3030/jsonstore/bus/schedule';
    const infoElement = document.querySelector('.info');

    stopId = "depot";
    async function depart() {
        let res = await fetch(`${url}/${stopId}`);
        
        if (res.status != '200') {
            infoElement.textContent = 'Error';
            document.getElementById('depart').setAttribute('disabled', true)
            document.getElementById('arrive').setAttribute('disabled', true)
        }

        let data = await res.json();
        console.log(data);
        infoElement.textContent = `Next stop ${data.name}`;
        
        document.getElementById('depart').setAttribute('disabled', true);
        document.getElementById('arrive').removeAttribute('disabled');
    }

    async function arrive() {
        let res = await fetch(`${url}/${stopId}`);
        let data = await res.json();
        infoElement.textContent = `Arriving at ${data.name}`;
        document.getElementById('depart').removeAttribute('disabled');
        document.getElementById('arrive').setAttribute('disabled', true);
        stopId = data.next;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
