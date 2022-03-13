function solve() {
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    let recipElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let textAreaElement = document.getElementById('message');
    const ulListMailsElement = document.getElementById('list');
    const listMailsParent = document.querySelector('.list-mails')
    const sentMailsParent = document.querySelector('.sent-list')
    const deleteListParent = document.querySelector('.delete-list')

    addBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        
        if(titleElement.value === '' || recipElement.value === '' || textAreaElement.value === '' ) {
            return;
        }
        const liElement = document.createElement('li');
        const h4TitleElement  = document.createElement('h4'); 
        h4TitleElement.id = 'h4-title'
        h4TitleElement.textContent = `Title: ${titleElement.value}`;
        const h4RecipElement  = document.createElement('h4'); 
        h4RecipElement.id = 'h4-recip'
        h4RecipElement.textContent = `Recipient: ${recipElement.value}`;
        const spanElement  = document.createElement('span'); 
        spanElement.textContent = textAreaElement.value;

        const divActionElement  = document.createElement('div'); 
        divActionElement.setAttribute('id', 'list-action');
        const sendBtnElement  = document.createElement('button'); 
        sendBtnElement.setAttribute('type', 'submit');
        sendBtnElement.setAttribute('id', 'send');
        sendBtnElement.textContent = 'Send'
        const deleteBtnElement  = document.createElement('button'); 
        deleteBtnElement.setAttribute('type', 'submit');
        deleteBtnElement.setAttribute('id', 'delete');
        deleteBtnElement.textContent = 'Delete'

        divActionElement.appendChild(sendBtnElement);
        divActionElement.appendChild(deleteBtnElement);

        liElement.appendChild(h4TitleElement);
        liElement.appendChild(h4RecipElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(divActionElement);

        ulListMailsElement.appendChild(liElement);

        titleElement.value = '';
        recipElement.value = '';
        textAreaElement.value = '';
    });

    resetBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        recipElement.value = '';
        titleElement.value = '';
        textAreaElement.value = '';
    });

    listMailsParent.addEventListener('click',(e)=>{
        e.preventDefault();
        const parent = e.target.parentNode.parentNode;
        const h4Title = parent.firstChild.textContent;
        const title = h4Title.split(' ')[1];
        const h4Recip = parent.getElementsByTagName('h4')[1].textContent;
        const recip = h4Recip.split(' ')[1];
        const toSpan = document.createElement('span');
        toSpan.textContent = `To: ${recip}`;
        const titleSpan = document.createElement('span');
        titleSpan.textContent = `Title: ${title}`;
        const delBtn = document.createElement('button');
        delBtn.setAttribute('type', 'submit');
        delBtn.setAttribute('class', 'delete');
        delBtn.textContent = 'Delete';
        if (e.target.tagName === 'BUTTON') {
            if(e.target.id === 'send') {
                const liItem = document.createElement('li');
                
                liItem.appendChild(toSpan);
                liItem.appendChild(titleSpan);
                const divBtn = document.createElement('div');
                divBtn.appendChild(delBtn)
                divBtn.setAttribute('class', 'btn');
                liItem.appendChild(divBtn);
                sentMailsParent.appendChild(liItem);
                parent.remove();

            } else if (e.target.id === 'delete') {
                const liItem = document.createElement('li');
                liItem.appendChild(toSpan);
                liItem.appendChild(titleSpan);
                deleteListParent.appendChild(liItem);
                parent.remove();
                
            }
        }
    });

    sentMailsParent.addEventListener('click', (e)=>{
        e.preventDefault();

        if (e.target.tagName === 'BUTTON') {
            const liItem = document.createElement('li');
            const parent = e.target.parentNode.parentNode;
            const spanElement1 = parent.getElementsByTagName('span')[0];
            const spanElement2 = parent.getElementsByTagName('span')[1];
            liItem.appendChild(spanElement1);
            liItem.appendChild(spanElement2);
            deleteListParent.appendChild(liItem);
            parent.remove()


        }
    })

}
solve()