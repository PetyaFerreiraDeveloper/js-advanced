let promise = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        if (Math.random > 0.5) {
            resolve('Just married!...')
        } else {
            reject('Sorry it\'s me')
        }
    }, 2000);
});

promise
    .then((result)=>{
        console.log(result);
    })
    .catch((reason)=>{
        console.log(reason);
    });

// console.log(typeof promise);
console.log(promise);