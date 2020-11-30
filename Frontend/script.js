

class User{
    constructor(fName,lName,phone,email,password,repeatPassword,age){
        this.fName=fName;
        this.lName=lName;
        this.email=email;
        this.phone=phone;
        this.password=password;
        this.repeatPassword=repeatPassword;
        this.age=age;
    }

}

var firstNameInput=document.getElementById("name");
var lastNameInput=document.getElementById("lname");
var phoneInput=document.getElementById("phone");
var emailInput=document.getElementById("email");
var passwordInput=document.getElementById("password");
var repeatpasswordInput=document.getElementById("password_repeat");
var ageInput=document.getElementById("age");

firstNameInput.addEventListener("keyup",(e)=>{
    firstNameInput=e.target.value
});
lastNameInput.addEventListener("keyup",(e)=>{
    lastNameInput=e.target.value
});
phoneInput.addEventListener("keyup",(e)=>{
    phoneInput=e.target.value
});
emailInput.addEventListener("keyup",(e)=>{
    emailInput=e.target.value
});
passwordInput.addEventListener("keyup",(e)=>{
    passwordInput=e.target.value
});
repeatpasswordInput.addEventListener("keyup",(e)=>{
    repeatpasswordInput=e.target.value
});
ageInput.addEventListener("keyup",(e)=>{
    ageInput=e.target.value
});

function saveToLocalStorage(){
    var storedUsers=localStorage.getItem("LocalStorageUsers");
    var valid_form=true;
    var Usersinfo=[];

    if(storedUsers == null){
        storedUsers= Usersinfo;
    }
    else{
        storedUsers=JSON.parse(localStorage.getItem("LocalStorageUsers"));
    }

    if(emailInput.includes("@")&& passwordInput==repeatpasswordInput){
        alert("Your email is: " + emailInput + "<br> Your password is " + passwordInput  );
        storedUsers.push(new User(firstNameInput,lastNameInput,phoneInput,emailInput,passwordInput,ageInput))
        localStorage.setItem("LocalStorageUsers", JSON.stringify(storedUsers));
        window.location.href="account.html";
    }
    else{
        alert("Please try again");
    }
  
      
    
}

const saveUser= function (){
    
}

   
    

