//scope - scope hai ap apme crated variables 
// and fun kha tk use kar skte ho


//line--- variables



//scope= functional scope,global scope and block scope


//function scope-function ke andr hi use ho sakti h
// function abcd()
// {
//     var a=20;
// }

// abcd(a);
// console.log(a);

//global scope -poore code mai khin bhi use ho sakti h
//var a= 12;
//if your code is out of the curly braces so it is called global scope


//block scope== sirf {} curly braces mai hi use ho sakti h

// {
// var a =12;                                              
// }

//js-lexical scoping/Static scoping 
//--> ki app khn pr physically  available ho ye poori treeke se
//  depend krta hai ki kya access kr paaoge

//javascrpit follow lexical scoping


// x=13;
// function ab() {
//     let a=12; // physically available lexically
//     //console.log(a);
//     let b=34;
//     console.log(x); 
//     function def()
//     {
//         console.log(b);
//     }
//     //def();    
// }

// ab();
 //def()-> we can't access def() outside the scope 
 // beacouse it checks its own scope

//Dynamic scoping--> kahn se call kr re ho uspe
//  depend krega ki value ky milegi

//javascipt does not follow dynamic scoping

//variables khn likhe gye h vhn pr depend krega
let a=15;
function bc()
{
    console.log(a);   
}
function gh()
{
    let a =14;
    bc();
}
gh();















