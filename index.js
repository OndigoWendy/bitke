// var person = 'wendy';
// var array = [one, two];

// function print() {
//     console.log(myArray);
// }
// print();
let y = document.getElementsByClassName('sampleClass');
y[0].innerHTML = 'abc'

let arr = ["nairobi", "kisumu", "mombasa"];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("element" + element)
}

console.log("=========");
arr.forEach(
    element => {
        console.log('element ${element}');
    }
)