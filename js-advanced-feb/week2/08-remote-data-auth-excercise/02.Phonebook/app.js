function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const ulElement = document.getElementById('phonebook');
    const loadBtnElement = document.getElementById('btnLoad');
    const createBtnElement = document.getElementById('btnCreate');

    const personElement = document.getElementById('person');
    const phoneElement = document.getElementById('phone');
    
    loadBtnElement.addEventListener('click', onClickLoad);
    createBtnElement.addEventListener('click', onClickCreate);

    async function onClickLoad() {
        ulElement.innerHTML = '';
        const res = await fetch(url);
        const data = await res.json();
        Object.values(data).forEach(x => {
            const { person, phone, _id} = x;
            const li = createElement('li', `${person}: ${phone}`, ulElement);
            li.setAttribute('id', _id);
            const deleteBtn = createElement('button', 'Delete', li);
            deleteBtn.addEventListener('click', onClickDelete);
        });
    }

    async function onClickCreate() {
        if(personElement.value !== '' && phone.value !== '') {
            const res = await fetch(url, {
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({person:personElement.value, phone:phoneElement.value})
            });

            personElement.value = '';
            phoneElement.value = '';
            
            loadBtnElement.click()
        }
    }

    async function onClickDelete(e) {
        const id = e.target.parentNode.id;
        e.target.parentNode.remove();
        const deleteResponse = await fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
        // console.log(id);
    }

    function createElement(type, text, appender) {
        const result = document.createElement(type);
        result.textContent = text;
        appender.appendChild(result);
        return result;
    }
}

attachEvents();