//toaster 

function createToaster(config)
{
    return function(notification)
    //kuch karega
    {
        //let parent=document.createElement("div");
        let div=document.createElement("div");
        div.className=`fixed ${config.theme==="dark" ? "bg-gray-800 text-white": "bg-gray-100 text-black"}  px-6 py-3 round shadow-lg  pointer-events-none 
        ${config.positionX=== "right"? "right-10": "left-10"}
         ${config.positionY==="top" ? "top-10":"bottom-10"}`;
       
        div.textContent=notification;
       // parent.appendChild(div);
        document.body.appendChild(div);

        setTimeout(()=>{
            document.body.removeChild(div);
        },config.duration=1000);
    };   
}
let toaster=createToaster({
       positionX: "left",
       positionY:"top",
       theme:"dark",
       duration:3,
})

toaster("this is a dummy notification !");
//toaster("hiiii myself priyanka");



