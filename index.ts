var val1=document.getElementById('val1')! as HTMLInputElement; 
var val2=document.getElementById('val2')! as HTMLInputElement;
var button=document.querySelector('button');

function add(a : number,b : number){

    return a+b;
}

button.addEventListener('click',function(){

    var s=add(+val1.value,+val2.value);

    var p=document.getElementById('show');
    p.innerHTML = s;

})


