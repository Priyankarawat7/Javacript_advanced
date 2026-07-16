
let form= document.querySelector("form");
let username= document.querySelector("#name");
let role= document.querySelector("#role");
let bio= document.querySelector("#bio");
let photo= document.querySelector("#photo");
const userManager={
    users:[],
    init:function()
    {
       form.addEventListener("submit",this.submitForm.bind(this)); //using this only it will give obj value
        //alert();
    },

    submitForm: function(e)
    {
        e.preventDefault();
        console.log("form submitted");
        console.log(this);

        this.users.push({
            name:username.value,
            role:role.value,
            bio:bio.value,
            photo:photo.value
        })
        
        

    },
    addUser: function()
    {

    },
    removeUser: function()
    {

    }
}

userManager.init();