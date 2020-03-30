var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.mod = function () {
        var number = (this.real * this.real) + (this.imaginary * this.imaginary);
        return (Math.sqrt(number));
    };
    Complex.prototype.toString = function () {
        console.log('real: ' + this.real, ' ,img: ' + this.imaginary);
    };
    return Complex;
}());
var a = new Complex(5, 3);
var b = new Complex(6, 2);
var c = new Complex(3, 3);
var d = a.add(b);
d.toString();
var e = d.sub(c);
e.toString();
var f = e.mod();
console.log('module: ' + f);
