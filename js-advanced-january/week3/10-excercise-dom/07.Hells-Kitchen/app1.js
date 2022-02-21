function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);

    function onClick() {
        let input = JSON.parse(document.querySelector('#inputs textarea').value);
        console.log(input);
    }
}