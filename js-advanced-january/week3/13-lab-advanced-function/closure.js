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

a()