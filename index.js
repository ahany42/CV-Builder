var form1 = document.getElementById("form1");
form1.addEventListener('submit',Section2);
var Name=document.getElementById("Name");
var Email=document.getElementById("Email");
var Mobile=document.getElementById("Mobile");
var Location=document.getElementById("Location");
var Github=document.getElementById("Github");
var Linkedn=document.getElementById("Linkedn");
function Section2(event){
    event.preventDefault();
    var section1=document.getElementById("section1");
    section1.style.display="none";
    var step2=document.getElementById("step2");
    step2.classList.add("active");
   
}