function solve(num) {
  if (typeof num === "undefined") {
    let line = "*".repeat(5);
    for (let i = 0; i < 5; i++) {
      console.log(line);
    }
  } else {
    let line = "";
    let count = 0;
    for (let i = 1; i <= num; i++) {
      line += "* ";
      count++;
    }
    for (let i = 0; i < count; i++) {
      console.log(line);
    }
  }
}

solve(10);
