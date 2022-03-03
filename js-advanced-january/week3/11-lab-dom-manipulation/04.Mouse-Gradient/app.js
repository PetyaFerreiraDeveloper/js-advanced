function attachGradientEvents() {
    let boxElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    // boxElement.addEventListener('mouseover', (e) => {
    //     const target = e.target;
    //     const rect = target.getBoundingClientRect();
       
    //     const x = e.clientX - rect.left;
    //     let width = rect.width;
        
    //     let perc = Math.floor(x / width * 100);
        
    //     resultElement.textContent=`${perc}%`
    // }) 

    // boxElement.addEventListener('mouseleave', (e) => {
    //     resultElement.textContent=``;
    // })

    const gradientMouseoverHandler = (e) => {
        
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent=`${percent}%`
    }

    boxElement.addEventListener('mousemove', gradientMouseoverHandler);

    boxElement.addEventListener('mouseleave', () => {
        resultElement.textContent=``;
    })
}