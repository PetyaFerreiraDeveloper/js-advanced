const url = 'http://localhost:3030/jsonstore/messenger';
const textArea = document.getElementById('messages');

function attachEvents() {

    document.getElementById('submit').addEventListener('click', postMessage);
    document.getElementById('refresh').addEventListener('click', loadAllMessages);

}

async function loadAllMessages() {
    const res = await fetch(url);
    const data = await res.json();
    dataArray = Object.values(data);
    textArea.value = dataArray.map(({author, content})=> `${author}: ${content}`).join('\n')
}

async function postMessage() {

    const [author, content] = [document.getElementById('author'), document.getElementById('content')];
    
    if(author.value === '' || content.value === '') {
        alert('Both fields are required')
    } else {
        await request(url, {author: author.value, content: content.value})
    }
    author.value = '';
    content.value = '';
}

async function request(url, option) {
    if (option) {
        option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(option)
        }
    }
    const response = await fetch(url, option);

    return response.json();
}

attachEvents()