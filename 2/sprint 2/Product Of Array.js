//Enter code here
function runProgram(input) {
    input = input.split("\n");
  
    let tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
      let n = +input[line++];
      let arr = input[line++].split(" ").map(Number);
      productOfArr(n, arr);
    }
  }
  function productOfArr(n, arr) {
    let prod = arr.reduce((pv, cv) => pv * cv, 1);
    let ans = [];
    for (let j = 0; j < n; j++) {
      ans.push(prod / arr[j]);
    }
    console.log(ans.join(" "));
  }
  if (process.env.USERNAME === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }