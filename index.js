var val1 = document.getElementById('val1');
var val2 = document.getElementById('val2');
var button = document.querySelector('button');
function add(a, b) {
    return a + b;
}
button.addEventListener('click', function () {
    var s = add(+val1.value, +val2.value);
    var p = document.getElementById('show');
    p.innerHTML = s;
});
