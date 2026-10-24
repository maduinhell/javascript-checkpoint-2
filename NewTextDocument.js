
//first project for the checkpoint
let n1 = 12;
let n2 = 17;


n1 = n1.toString(2);
n2 = n2.toString(2);


if (n1.length > n2.length) {
    n2 = n2.padStart(n1.length, "0");
} else {
    n1 = n1.padStart(n2.length, "0");
}


let sumAND = "";

for (let i = 0; i < n1.length; i++) {
    let x = Number(n1[i]);
    let y = Number(n2[i]);

    if (x === 1 && y === 1) {
        sumAND += "1";
    } else {
        sumAND += "0";
    }
}

sumAND = parseInt(sumAND, 2);
console.log("AND:", sumAND);



let n3 = 12;
let n4 = 17;


n3 = n3.toString(2);
n4 = n4.toString(2);


if (n3.length > n4.length) {
    n4 = n4.padStart(n3.length, "0");
} else {
    n3 = n3.padStart(n4.length, "0");
}

// ti7seb or
let sumOR = "";

for (let i = 0; i < n3.length; i++) {
    let x = Number(n3[i]);
    let y = Number(n4[i]);

    if (x === 1 || y === 1) {
        sumOR += "1";
    } else {
        sumOR += "0";
    }
}

sumOR = parseInt(sumOR, 2);
console.log("OR:", sumOR);

let n5 = 12;
let n6 = 17;
 n5 = n5.toString(2);
n6 = n6.toString(2);

if (n5.length > n6.length) {
    n6 = n6.padStart(n5.length, "0");
} else {
    n5 = n5.padStart(n6.length, "0");
}

let sumXOR = "";

for (let i = 0; i < n5.length; i++) {
    let x = Number(n5[i]);
    let y = Number(n6[i]);

    if (x !== y) {
        sumXOR += "1";
    } else {
        sumXOR += "0";
    }
}

sumXOR = parseInt(sumXOR, 2);
console.log("XOR:", sumXOR);
//second project
const redundant = (str) => () => str;
//third project

let students = [
    { name: "Alice", grade: 20 },
    { name: "Bob", grade: 22 },
    { name: "Charlie", grade: 19 }
];

function getStudentGrade(students) {
    let studentName = prompt("Enter the name of the student:");
    if (studentName === students.name) {
        console.log(`student: ${studentName} grade: ${students.grade}.`);
    }
}
