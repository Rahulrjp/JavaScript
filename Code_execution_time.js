// Eg. code starts
function a(a) {
    // if(a == 100) return;
    a += 1;
    console.log("I am in A")
    console.log(a)
    b(a);
}
function b(b) {
    // if(b == 100) return;
    b += 1;
    console.log("I am in B")
    console.log(b)
    a(b);
}
//Eg. code ends

// Method 1

console.time("console.time");
try {
    a(0);
}
catch {
    console.log("Are bhai Call stack bhar gaya h")
}
console.timeEnd("console.time");

//method 2

const startDate = new Date().getTime();
try {
    a(0);
}
catch {
    console.log("Are bhai Call stack bhar gaya h")
}
const endDate = new Date().getTime();

console.log("new Date().getTime() : ", endDate - startDate ,"ms")

// Method 3

const start = performance.now();
try {
    a(0);
}
catch {
    console.log("Are bhai Call stack bhar gaya h")
}
const end = performance.now();
console.log("performance.☺now() : ", end - start ,"ms")
