//Encapsulation
function Clicklimiter()
{
    let click=0;
   
    return function clickme()
    {
         if(click<5)
         {
             click++;  
             console.log(`clicked no. ${click} times`);
              
         }
       else{
        console.error('limit excced');
        
       }
       // console.log(click);
        
    }

}

let clickk= Clicklimiter();

clickk();
clickk();
clickk();
clickk();
clickk();
clickk();
clickk();