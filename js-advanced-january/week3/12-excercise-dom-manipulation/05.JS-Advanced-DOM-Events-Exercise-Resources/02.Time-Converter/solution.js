function attachEventsListeners() {
    let convertBtnElements = document.querySelectorAll('input[type="button"]'); //NodeList
    let daysInputElement = document.getElementById("days");
    let hoursInputElement = document.getElementById("hours");
    let minutesInputElement = document.getElementById("minutes");
    let secondsInputElement = document.getElementById("seconds");
    
    for (let btn of convertBtnElements) {
        btn.addEventListener("click", display);
        function display() {
            let btnId = btn.id;
            switch (btnId) {
                case "daysBtn":
                    hoursInputElement.value = 24 * Number(daysInputElement.value);
                    minutesInputElement.value = Number(hoursInputElement.value) * 60;
                    secondsInputElement.value = Number(minutesInputElement.value) * 60;
                    break;
                case "hoursBtn":
                    daysInputElement.value = Number(hoursInputElement.value) / 24;
                    minutesInputElement.value = Number(hoursInputElement.value) * 60;
                    secondsInputElement.value = Number(minutesInputElement.value) * 60;
                    break;
                case "minutesBtn":
                    hoursInputElement.value = Number(minutesInputElement.value) / 60;
                    daysInputElement.value = Number(hoursInputElement.value) / 24;
                    secondsInputElement.value = Number(minutesInputElement.value) * 60;
                    break;
                case "secondsBtn":
                    minutesInputElement.value = Number(secondsInputElement.value) / 60;
                    hoursInputElement.value = Number(minutesInputElement.value) / 60;
                    daysInputElement.value = Number(hoursInputElement.value) / 24;
                    break;
            }
        }
    }
}
