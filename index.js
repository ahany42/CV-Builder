var form1 = document.getElementById("form1");
form1.addEventListener('submit',Section2);
var form2 = document.getElementById("form2");
form2.addEventListener('submit',Section3);
var form3 = document.getElementById("form3");
form3.addEventListener('submit',Section4);
var form4 = document.getElementById("form4");
form4.addEventListener('submit',Section5);
var Name=document.getElementById("Name");
var Email=document.getElementById("Email");
var Mobile=document.getElementById("Mobile");
var Location=document.getElementById("Location");
var Github=document.getElementById("Github");
var Linkedn=document.getElementById("Linkedn");
var PrintButton=document.getElementById("PrintButton");
PrintButton.addEventListener('click',SavePDF);
function Section2(event){
    event.preventDefault();
    var section1=document.getElementById("section1");
    section1.style.display="none";
    var step2=document.getElementById("step2");
    step2.classList.add("active");
    var section2=document.getElementById("section2");
    section2.style.display="block";
}
function Section3(event){
    event.preventDefault();
    var section2=document.getElementById("section2");
    section2.style.display="none";
    var step3=document.getElementById("step3");
    step3.classList.add("active");
    var section3=document.getElementById("section3");
    section3.style.display="block";
}
    function Section4(event){
        event.preventDefault();
        var section3=document.getElementById("section3");
        section3.style.display="none";
        var step4=document.getElementById("step4");
        step4.classList.add("active");
        var section4=document.getElementById("section4");
        section4.style.display="block";
    
    }
    function Section5(event){
        event.preventDefault();
        var section4=document.getElementById("section4");
        section4.style.display="none";
        var step5=document.getElementById("step5");
        step5.classList.add("active");
        var section5=document.getElementById("section5");
        section5.style.display="block";
    
    }

    function SavePDF(){
        var { jsPDF } = window.jspdf;
        var doc = new jsPDF();
        var CV = 
          Name.value
        ;
        doc.setFontSize(16);
        var pdfWidth = doc.internal.pageSize.getWidth();
        var pdfHeight = doc.internal.pageSize.getHeight();
        doc.text(CV, pdfWidth/2, 10);
        doc.save('CV.pdf');
    }