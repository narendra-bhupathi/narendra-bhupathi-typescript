var Dog = /** @class */ (function () {
    function Dog() {
        var dimage = document.createElement('img');
        dimage.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*";
        dimage.height = 20;
        dimage.width = 20;
        dimage.onclick = this.dogOnClick();
    }
    Dog.prototype.dogOnClick = function () {
        return function () {
            alert('dog is clicked');
        };
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
        var cimage = document.createElement('img');
        cimage.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*";
        cimage.height = 20;
        cimage.width = 20;
        cimage.onclick = this.catOnClick();
    }
    Cat.prototype.catOnClick = function () {
        return function () {
            alert('cat is clicked');
        };
    };
    return Cat;
}());
var created = function () {
    console.log('dog');
    new Dog();
};
var createc = function () {
    console.log('cat');
    new Cat();
};
