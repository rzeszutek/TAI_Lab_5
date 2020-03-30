"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    sub(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    mod() {
        let number = (this.real * this.real) + (this.imaginary * this.imaginary);
        return (Math.sqrt(number));
    }
    toString() {
        console.log('real: ' + this.real, ' ,img: ' + this.imaginary);
    }
}
let a = new Complex(5, 3);
let b = new Complex(6, 2);
let c = new Complex(3, 3);
let d = a.add(b);
d.toString();
let e = d.sub(c);
e.toString();
let f = e.mod();
console.log('module: ' + f);
