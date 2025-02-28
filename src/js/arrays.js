const arr = [1, 2, 3, 4];
const arr5 = [];

console.log(arr);

const arr2 = new Array();
const arr3 = new Array(4);
const arr4 = new Array(1, 2, 3, 4);

const arr6 = ["a", 45, true, 23, false];

for (let elem of arr6){
    console.log(elem);
}

    for (let [index, elem] of arr6.entries()){
        console.log(index, elem);
    }