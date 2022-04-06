function attachEvents() {
    const baseUrl = `http://localhost:3030/jsonstore/phonebook`;

    const loadBtn = document.getElementById('btnLoad');
    const ul = document.getElementById('phonebook');
    const createBtn = document.getElementById('btnCreate');
    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');

    loadBtn.addEventListener('click', onClickLoad);
    createBtn.addEventListener('click', onClickCreate);

    async function onClickLoad() {
        // ul.replaceChildren();
        ul.innerHTML = '';
        const res = await fetch(baseUrl);
        const data = await res.json();
        Object.values(data).forEach( x => {
            const { person, phone, _id } = x;
            const li = createElement('li', `${person}: ${phone}`, ul);
            li.setAttribute('id', _id);
            const deleteBtn = createElement('button', 'Delete', li);
            deleteBtn.addEventListener('click', onClickDelete);
        });
    }

    function createElement(type, text, appender) {
        const result = document.createElement(type);
        result.textContent = text;
        appender.appendChild(result);
        return result;
    }

    async function onClickCreate() {
        if (person.value === '' || phone.value === '') {
            alert('fill both required fields')
        } else {
            const res = await fetch(baseUrl, {
                method: 'POST',
                headers: {'Content-type': 'application/jsno'},
                body: JSON.stringify({person: person.value, phone: phone.value})
            })
            loadBtn.click();
            person.value = '';
            phone.value = '';
        }

    }

    async function onClickDelete(e) {
        const id = e.target.parentNode.id;
        e.target.parentNode.remove();
        const deleteResponse = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        });
    }
    
}

attachEvents();