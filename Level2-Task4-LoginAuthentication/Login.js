//get the varibles by id
const form=document.querySelector('form')
const input=document.getElementsByTagName('input')
const login=document.getElementById('login')
const username=document.getElementById('uname')
const password=document.getElementById('pass')
const para=document.getElementsByTagName('p')
//when click to submit then return true or false depends on the condition
form.onsubmit=()=>{return false}
//The onload is loading the page
window.onload = () =>
{
    this.sessionStorage.setItem(username,"Solid")
    this.sessionStorage.setItem(password,"Def123")
    
}
//when the login button is click then it will worked on condition 
login.onclick=()=>
{
    if((username.value!="") &&(password.value!=""))
    {
         if(( username.value==this.sessionStorage.getItem(username)) && (password.value==this.sessionStorage.getItem(password)))
            {
                    form.onsubmit=()=>{return 1}
             }
         else{
            
            
            if(username.value!=this.sessionStorage.getItem(username))
            {
               username.nextElementSibling.innerHTML="The Username does not match"
              
                setTimeout(()=>
              {
                  username.nextElementSibling.innerHTML=""
                 
               },5000)
              }   
                
        
                 if(password.value!=this.sessionStorage.getItem(password))
                  {
                     password.nextElementSibling.innerHTML="The Password does not match"
                    
                      setTimeout(()=>
                    {
                        password.nextElementSibling.innerHTML=""
                       
                     },5000)
                    }
                

             }
    }        
     else
    {
        if(username.value=="")
        {
            username.nextElementSibling.innerHTML="The Username is empty"
            setTimeout(()=>
            {
            username.nextElementSibling.innerHTML=""
             },5000)

        }
        if(password.value=="")
        {
            password.nextElementSibling.innerHTML="The Password is empty"
            setTimeout(()=>
            {
            password.nextElementSibling.innerHTML=""
             },5000)
        }
    }
}
