function createSortedList() {
    let arr = [];
    let add = function (num) {
        arr.push(num);
        arr = arr.sort((a, b) => a - b);
        return arr;
    };
    
    let remove = (i) => {
            if (i >= 0 && i < arr.length && arr.length != 0) {
                arr.splice(i, 1);
                return arr;
            } else {
                return "Element does not exist";
            }
        };
    let get = (i) => {
            if (i >= 0 && i < arr.length && arr.length != 0) {
                let el = arr[i];
                return el;
            } else {
                return "Element does not exist";
            }
        };
    let size = () => {
        return arr.length;
    }
    
    return {add:add, get:get, remove:remove};
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
