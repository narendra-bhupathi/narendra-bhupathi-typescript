class Car{
    constructor(){

        let dname;
        let d=()=>{
            dname= prompt("enter name")
        }
        d();
        let c=document.createElement('img');
        c.src="dog.jpg";
        c.height=50;
        c.width=50;
        c.onclick=this.carOnClick(dname);

        document.body.appendChild(c);
        

    }
    carOnClick(name){
     
        return ()=>{
            alert(''+name+' is clicked');
        };

    }
}


class Van{
    constructor(){

        let cname;
        let cn=()=>{
            cname=prompt("enter name")
        }
        cn();
        let v=document.createElement('img');
        v.src="cat.jpg";
        v.height=50;
        v.width=50;
        v.onclick=this.vanOnClick(cname);

        document.body.appendChild(v);
        

    }
    vanOnClick(name){
     
        return ()=>{
            alert(''+name+' is clicked');
        };

    }
}



let createCar=()=>{

    new Car();

}


let createVan=()=>{

    new Van();
}