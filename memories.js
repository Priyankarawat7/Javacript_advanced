// stack (primitve), heap (Non-primitve)

//STACK 
//it provides copy
let youtubename="priyankarawat";
let anothername=youtubename;

 anothername="rawatonly"
console.log(anothername); //rawatonly
console.log(youtubename); //priyankarawat




// HEAP
//it provide reference
//it changes the value to the new value

let userOne={
    name:"priyanka",
    email:"rawat34@gmail.com",
    age:20
}
let userTwo=userOne

userTwo.email="priyanka23@gmail.com";


console.log(userOne.email);//priyanka23@gmail.com
console.log(userTwo.email);//priyanka23@gmail.com




