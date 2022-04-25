let y = document.getElementsByClassName(`sampleClass`);
y[0].innerHTML = `abc`

let arr = ["nairobi", "kisumu", "mombasa"];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("element" + element)
}

console.log("=========");
arr.forEach(
    element => {
        console.log(`element ${element}`);
    }
)


const cars = ["Saab", "Volvo", "BMW"];
const uiListElement = document.getElementById("car_types");
for (let carItem = 0; carItem < cars.length; carItem++) {
    const element = cars[carItem];
    const node = document.createElement("li");
    const textnode = document.createTextNode(element);
    node.appendChild(textnode);
    uiListElement.appendChild(node);
}

// carsList();