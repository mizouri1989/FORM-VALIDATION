function validform()

{    var name=document.getElementById("Name").value;
    var email=document.getElementById("EMail").value;
    var password=document.getElementById("Password").value;
    var commentaire=document.getElementById("Comen").value;
    if (name == ""||email== ""|| password == ""|| commentaire== "")
     {
        alert("One of the inputs is empty! Please Fill All Required Field");
        return false;
    }  
}

function validemail() 
{   let em = document.getElementById("Email").value;
    let f=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (f.test(em)==false) {
        alert("Please enter a valide e-mail address");
        return false;

}}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {
  
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

 
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}    

    document.getElementById("reset").onclick = function resetcontent() {
        var name=document.getElementById("Name").value='';
        var email=document.getElementById("EMail").value='';
        var password=document.getElementById("Password").value='';
        var commentaire=document.getElementById("Coment").value='';
    }
    function myFunction() {
        var x = document.getElementById("psw");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    function myFunction1() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }