function solve(start, p1, p2, p3, p4, p5) {
    let num = Number(start);
    let commands = [p1, p2, p3, p4, p5];

    for (let command of commands) {
        switch (command) {
            case "chop":
                num = num / 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num++;
                break;
            case "bake":
                num *= 3;
                break;
            case "fillet":
                num = 0.8 * num;
                break;
        }
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
