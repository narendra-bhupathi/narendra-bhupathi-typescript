class Dog{

    constructor(){

        let dimage=document.createElement('img');
        dimage.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*";
        dimage.height=20;
        dimage.width=20;
        dimage.onclick=this.dogOnClick();


    }

    dogOnClick(){
        return ()=>{
            alert('dog is clicked');
        };
    }

}

class Cat{
    

    constructor(){

        let cimage=document.createElement('img');
        cimage.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*";
        cimage.height=20;
        cimage.width=20;
        cimage.onclick=this.catOnClick();


    }

    catOnClick(){
        return ()=>{
            alert('cat is clicked');
        };
    }



}

let created=()=>{
    console.log('dog')
    new Dog();
}

let createc=()=>{
    console.log('cat')
    new Cat();
}