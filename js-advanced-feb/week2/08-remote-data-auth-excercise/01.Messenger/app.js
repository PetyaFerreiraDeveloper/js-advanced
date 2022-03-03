const url = 'http://localhost:3030/jsonstore/messenger';
const messages = document.getElementById('messages');


function attachEvents() {
    
    document.getElementById('submit').addEventListener('click', postMessage);
    document.getElementById('refresh').addEventListener('click', loadAllMessages);
    
}

function postMessage() {

};

async function loadAllMessages() {
    const res = await fetch(url);
    const data = await res.json();
    messages.value = Object.values(data).map(({author, content})=> `${author}: ${content}`).join('\n')
}

async function request(url, option) {
    if(option) {
        option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(option)
        };
    }
    const response = await fetch(url, option);
    return response.json();
}

attachEvents();