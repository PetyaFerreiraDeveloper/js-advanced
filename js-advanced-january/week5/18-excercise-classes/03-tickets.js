function ticketSorter(arr, str) {
    let tickets = [];
    for (let line of arr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = price;
                this.status = status;
            }
        }
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    return tickets.sort((a, b) => {
        if (typeof a[str] === 'string') {
            return a[str].localeCompare(b[str])
        } else {
            return a[str] - b[str]
        }
    })
    // tickets.forEach(el => console.log(el));
}

ticketSorter(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
)