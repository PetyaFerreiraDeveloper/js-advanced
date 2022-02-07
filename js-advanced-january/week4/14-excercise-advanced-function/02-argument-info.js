function solve() {
    let data = {};
   // console.log(arguments); // returns arguments when we dont know how many we have
   Array.from(arguments).forEach(el => {
       let type = typeof el;
       console.log(`${type}: ${el}`);
       if (!data[type]) {
           data[type] = 0;
       }
       data[type]++;
   });
   Object.keys(data)
   .sort((a, b) => data[b] - data[a])
   .forEach(el => console.log(`${el} = ${data[el]}`))
}

solve('cat', 42, function () { console.log('Hello world!'); })