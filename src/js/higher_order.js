const add = function (a, b){
    return a + b;
}

function sub(a, b){
    return a-b;
}

function expression(f1,f2, x1, x2){
    return f1(x1, x2) + f2(x1, x2);
}

const res = expression(add, sub, 1, 2);

console.log(res);

[1,2,3,4,5].forEach(function (elem) {
    console.log(elem);
});
