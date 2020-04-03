var Car = /** @class */ (function () {
    function Car() {
        var dname;
        var d = function () {
            dname = prompt("enter name");
        };
        d();
        var c = document.createElement('img');
        c.src = "dog.jpg";
        c.height = 50;
        c.width = 50;
        c.onclick = this.carOnClick(dname);
        document.body.appendChild(c);
    }
    Car.prototype.carOnClick = function (name) {
        return function () {
            alert('' + name + ' is clicked');
        };
    };
    return Car;
}());
var Van = /** @class */ (function () {
    function Van() {
        var cname;
        var cn = function () {
            cname = prompt("enter name");
        };
        cn();
        var v = document.createElement('img');
        v.src = "cat.jpg";
        v.height = 50;
        v.width = 50;
        v.onclick = this.vanOnClick(cname);
        document.body.appendChild(v);
    }
    Van.prototype.vanOnClick = function (name) {
        return function () {
            alert('' + name + ' is clicked');
        };
    };
    return Van;
}());
var createCar = function () {
    new Car();
};
var createVan = function () {
    new Van();
};
