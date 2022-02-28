let alwaysResolvingPromise = Promise.resolve('Yes');
let alwaysRejectiongPromise = Promise.reject('No');

alwaysResolvingPromise
    .then((res)=> console.log(res))
    .catch((err)=>console.log('Never will be used!'))
    .finally((final)=> console.log('Finally'));

alwaysRejectiongPromise
    .catch((reason)=> console.log(reason));

    // with Promise.all - if one promise fails, all will fail
let multiplePromises = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('Yes2')
]);

multiplePromises.then((res)=> console.log(res));