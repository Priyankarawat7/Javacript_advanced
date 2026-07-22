const inputbox =document.getElementById('text')
const listcontainer=document.getElementById('list-container')


function Addtask()
{

    if(inputbox.value==='')
    {
        alert('You must enter something');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

        let span= document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span)
        
    }
    inputbox.value='';
}

function ResetTask()
{

    if(confirm("are you sure you want to delete all habits?"))
    {
          listcontainer.innerHTML="";
    localStorage.removeItem("data");
        
    }
  
}


listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();


    }
    else if(e.target.tagName==="SPAN"){

        e.target.parentElement.remove();

    }
},false)

function saveData()
{
    localStorage.setItem('data',listcontainer.innerHTML);

}
function showTask()
{
 listcontainer.innerHTML=localStorage.getItem('data')
}
showTask();
