const obj = {
    a: 1,
    b: 2,
    add: function() {
        return this.a + this.b;
    },
    sub: function () {
        return this.a - this.b;
    }

}

console.log(obj.add());
console.log(obj.sub());
