function solve(arr) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ];

    let player = "";

    let counter = -1;
    while (arr.length > 0) {
        counter++;
        let currentMoveArr = arr.shift().split(" ");
        let x = Number(currentMoveArr[0]);
        let y = Number(currentMoveArr[1]);

        if (board[x][y] !== false) {
            console.log("This place is already taken. Please choose another!");
            counter--;
            continue;
        }

        if (counter % 2 === 0) {
            player = "X";
        } else if (counter % 2 !== 0) {
            player = "O";
        }
        board[x][y] = player;

        // this function returns true if all squares in a line are filled by the same player
        function checkWinner(line) {
            return line.every((square) => square === player);
        }

        function announceWinner() {
            console.log(`Player ${player} wins!`);
            for (let row of board) {
                console.log(row.join("\t"));
            }
        }

        // check rows for winner
        for (let row of board) {
            let win = checkWinner(row);
            if (win) {
                announceWinner();
                return;
            }
        }

        // check columns for winner
        for (let i = 0; i < 3; i++) {
            let col = [board[0][i], board[1][i], board[2][i]];
            let win = checkWinner(col);
            if (win) {
                announceWinner();
                return;
            }
        }

        // check diagonals
        let d1 = [board[0][0], board[1][1], board[2][2]];
        let d2 = [board[0][2], board[1][1], board[2][0]];

        let win = checkWinner(d1) || checkWinner(d2);
        if (win) {
            announceWinner();
            return;
        }

        // check draw
        let draw = board.every((row) => !row.includes(false));
        if (draw) {
            console.log("The game ended! Nobody wins :(");
            for (let row of board) {
                console.log(row.join("\t"));
            }
            return;
        }
    }
}

solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
