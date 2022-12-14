function swap(arr1, arr2, j) { 
    var temp = arr1[j];
    arr1[j] = arr1[j + 1];
    arr1[j + 1] = temp;

    var temp = arr2[j];
    arr2[j] = arr2[j + 1];
    arr2[j + 1] = temp;
}
function bubbleSortNames(arr, arr2) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, arr2, j);
            }
        }
    }
    return arr;
}
function bubbleSortMarks(arr, arr2) {
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                swap(arr, arr2, j);
            }
        }
}
function print(names, marks) {
    var rank = 1;
    var prev = marks[0];
    for (var i = 0; i < marks.length; i++) {
        if (prev != marks[i]) 
            rank = i + 1;

        console.log(rank + " " + names[i]);
        prev = marks[i];
    }
}
function runProgram(input) {
    var newInput = input.trim().split("\n");
    var names = [];
    var marks = [];
    for (var i = 1; i < newInput.length; i++) {
        var nc = newInput[i].split(" ");
        names.push(nc[0]);
        marks.push(Number(nc[1]));
    }
    bubbleSortNames(names, marks);
    bubbleSortMarks(marks, names);
    print(names, marks);
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
