function a() {
    let name1 = 'hello';
    function b() {
        let name2 = 'hello2';
        function c() {
            let name3 = 'hello3';
            function d() {
                let name4 = 'hello4';
                console.log(this);
            }
            d();
        }
        c()
    }
    b()
}

//a()

// CURRYING - giving in few parameters to the same function which has several nested returns

function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}


let result = sum3(5)(6)(8);
console.log(result);