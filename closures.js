//closures is function which is under  the parent func
//and inner func has being returned, and returing func use ,
// any variable of parent func


// function parent()
// {
//      let a =45;
//     return function child(){
//         console.log(a);
//     };
   

// } //closures

// parent()();
// const result=parent();
// result();

//it's true func ke khtm hone pr apka func
//  and uske variables khtm ho jaate hai
//but when a closure has been create to apka func uske 
// variable ka ek bcklink bnaya jaata hai. [[environment]]

//pros->
//we can make a variable private using closures
// we can prevent code from global pollution




// private counters
function countforme()

{
     let c=0;
    return function()
    {
        c++;
        console.log(c);
        
    }
}

//countforme();

//yeh apne khud ke c ko incr krta hai
let func=countforme();
func();
func();
func();


let func2=countforme();

func2();
func2();
func2();
func2();
func2();

