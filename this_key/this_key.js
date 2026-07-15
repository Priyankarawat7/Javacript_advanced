// this keyword is a special keyword ,because like other keywords have value and nature should be same. but this keyword nature should not be remain same that's why we use this keyword

//global- window 
// function-window 
// method with ens5 func- object 
// method with es6 arrow func -window 
// es5 function inside es5 method-window
// arrow function inside es5 method -object

//  event handler-element
//  class-blank object


//this in global scope
//window is supreme thing
//console.log(this); //window 

//In Function
// function  abcd()
// {
//     console.log(this);//window   
// }
// abcd();


//Method
//the function which is inside the object called as method
let obj={
    name:"harsh",
    age:19,
    sayName: function()
    { //if you create arrow function and function ke andr function the value of this will be window except arrow function in inner function
        console.log(this);
        
        console.log(this.name); 
        console.log(this.age);
          
    },
}
obj.sayName();//This value inside the method is object
//obj.sayName();

//Event-handler
// value jis per  event listener lagaya hai
document.querySelector("h1").addEventListener("click",
    function(){
       alert(); 
       console.log(this.style.color="red");
       
    })


//Class
// value Blank Object
class Abcd{
    
    constructor()
    {
        console.log("heyhe");

        this.a=12;
        
    }
}
let val=new Abcd();