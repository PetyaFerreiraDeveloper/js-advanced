function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    const currentUrl = 'http://localhost:3030/jsonstore/forecaster/today';
    const threeDaysForecastUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming';
    const locationElement = document.getElementById('location');
    const submitBtnElement = document.getElementById('submit');
    const contentElement = document.getElementById('content');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    const upcomingElement = document.getElementById('upcoming');
    const errorElement = document.createElement('span');
    const forecastsDiv = document.createElement('div');
    forecastsDiv.classList.add('forecasts');
    const forecastDivElement = document.createElement('div');
    forecastDivElement.classList.add('forecast-info');
    
    submitBtnElement.addEventListener('click', getWeather);
    const weather = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;',
    }

    let locationCode = ''

    async function getWeather() {
        
        locationCode = '';
        errorElement.innerHTML ='';
        forecastsDiv.innerHTML = '';
        forecastDivElement.innerHTML ='';
        
        let res = await fetch(baseUrl);

        let data = await res.json();
        for (let el of data) {
            if (locationElement.value.toLowerCase() === el.name.toLowerCase()) {
                locationCode = el.code;
            }
        }
        
        getCurrentConditions();
        getThreeDays();
        locationElement.value = '';
    }

    async function getCurrentConditions() {
        
        let res = await fetch(`${currentUrl}/${locationCode}`);
        let data = await res.json();
        
        if (data.forecast) {
            let condition = data.forecast.condition;
            const symbolSpan = document.createElement('span');
            symbolSpan.classList.add('condition');
            symbolSpan.classList.add('symbol');
            symbolSpan.innerHTML = weather[condition];
            const conditionSpan = document.createElement('span');
            
            const span1 = document.createElement('span');
            span1.classList.add('forecast-data');
            span1.textContent = data.name;

            const span2 = document.createElement('span');
            span2.classList.add('forecast-data');
            span2.innerHTML = `${data.forecast.low}${weather.Degrees}/${data.forecast.high}${weather.Degrees}`;

            const span3 = document.createElement('span');
            span3.classList.add('forecast-data');
            span3.textContent = condition;

            conditionSpan.appendChild(span1);
            conditionSpan.appendChild(span2);
            conditionSpan.appendChild(span3);

            forecastsDiv.appendChild(symbolSpan);
            forecastsDiv.appendChild(conditionSpan);
            
            currentElement.appendChild(forecastsDiv);

            forecastElement.style.display = 'block';
           
        } else { 
            forecastElement.style.display = 'none';
            errorElement.textContent = 'Error. Invalid city name.';
            contentElement.appendChild(errorElement);
        }
    }

    async function getThreeDays() {
        let res = await fetch(`${threeDaysForecastUrl}/${locationCode}`);
        let data = await res.json();
        
        if (data.forecast) {
            
            for (let el of data.forecast) {
                const spanElement = document.createElement('span');
                spanElement.classList.add('upcoming');
                const spanSymbol = document.createElement('span');
                spanSymbol.innerHTML = weather[el.condition];
                spanSymbol.classList.add('symbol');
                const span2 = document.createElement('span');
                span2.innerHTML = `${el.low}${weather.Degrees}/${el.high}${weather.Degrees}`;
                span2.classList.add('forecast-data');
                const span3 = document.createElement('span');
                span3.innerHTML = el.condition;
                span3.classList.add('forecast-data');

                spanElement.appendChild(spanSymbol);
                spanElement.appendChild(span2);
                spanElement.appendChild(span3);
                forecastDivElement.appendChild(spanElement);
            }
            upcomingElement.appendChild(forecastDivElement);

        }
    }
}

attachEvents();