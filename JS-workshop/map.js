const arr = [6,2,3,4,5];
const squared = arr.map((number) => {
    return number * number;
});

squared.forEach((number) => {
    console.log(number);
});