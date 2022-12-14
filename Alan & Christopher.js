function alan(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '#')
      stack.pop();
    else
      stack.push(s[i]);
  }
  return stack.join("");
}
function runProgram(input) {
  let newInput = input.trim().split("\n");
  let t = Number(newInput[0]);
  for (let i = 1; i <= t; i++) {
    let s = newInput[i];
    console.log(alan(s));
  }
}
if (process.env.USER === "") {
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
