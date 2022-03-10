window.addEventListener('load', solve);

function solve() {
    const formElement = document.querySelector('.store form');
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceElement = document.getElementById('price');
    const furnListElement = document.getElementById('furniture-list');
    
    formElement.addEventListener('submit', (e)=>{
        e.preventDefault();
        let model = modelElement.value;
        let year = yearElement.value;
        let description = descriptionElement.value;
        let price = priceElement.value;

        if (model=='' || year=='' || description=='' || price=='') {
            alert('Fill out all fields');
        }

        loadData(model, year, description, price);

        modelElement.value='';
        yearElement.value='';
        descriptionElement.value='';
        priceElement.value='';
        
    })

    function loadData(model, year, description, price) {
        let totalSum = 0;
        let totalPriceElement = document.querySelector('.total-price');

        let furnitureTableRow = document.createElement('tr');
        furnitureTableRow.classList.add('info');
        
        let modelTd = document.createElement('td');
        let priceTd = document.createElement('td');
        let buttonsTd = document.createElement('td');
        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = 'More Info'
        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';

        buttonsTd.appendChild(moreInfoBtn);
        buttonsTd.appendChild(buyBtn);
        modelTd.textContent = model;
        priceTd.textContent = (Number(price)).toFixed(2);
        furnitureTableRow.appendChild(modelTd);
        furnitureTableRow.appendChild(priceTd);
        furnitureTableRow.appendChild(buttonsTd);

        let furnitureMoreInfoRow = document.createElement('tr');
        furnitureMoreInfoRow.classList.add('hide');
        let yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${year}`
        let descriptionTd = document.createElement('td');
        descriptionTd.setAttribute('colspan', 3);
        descriptionTd.textContent = description;

        furnitureMoreInfoRow.appendChild(yearTd);
        furnitureMoreInfoRow.appendChild(descriptionTd);

        furnListElement.appendChild(furnitureTableRow);
        furnListElement.appendChild(furnitureMoreInfoRow);

        moreInfoBtn.addEventListener('click', (e) => {
            
            if (e.target.textContent == 'More Info') {
                e.target.textContent = 'Less Info'
                furnitureMoreInfoRow.style.display = 'contents';

            } else if (e.target.textContent == 'Less Info') {
                e.target.textContent = 'More Info';
                furnitureMoreInfoRow.style.display = 'none';
            }
        });

        buyBtn.addEventListener('click', (e)=> {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            totalPriceElement.textContent = Number(currentTotalPrice + Number(price)).toFixed(2);
            furnitureTableRow.remove();
            furnitureMoreInfoRow.remove();
        });
    }
}



