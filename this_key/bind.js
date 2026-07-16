//call, apply, bind
//function call krte tym you can set the value of this should be

//call
let obj={
    name:"priyanka",
    age:19
}

function abcd(a,b,c)
{
    console.log(this ,a,b,c);   
}

abcd()//window 
abcd.call(obj,1,2,3);//alaways func call //obj


//apply

abcd.apply(obj,[1,2,3,5]);//apply  can 2 parameter //obj

//bind

let fun=abcd.bind(obj,1,2,3);//func ki new copy create krta hai //obj


