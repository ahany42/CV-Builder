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
var EducationButton=document.getElementById('EducationButton');
EducationButton.addEventListener('click',AddEducation);
var ExperienceButton=document.getElementById('ExperienceButton');
ExperienceButton.addEventListener('click',AddExperience);
var SkillsButton=document.getElementById('SkillButton');
SkillsButton.addEventListener('click',AddSkill);
var LanguagesButton=document.getElementById('LanguageButton');
LanguagesButton.addEventListener('click',AddLanguage);
function Section2(event){
    event.preventDefault();
    var section1=document.getElementById("section1");
    section1.style.display="none";
    var step2=document.getElementById("step2");
    step2.classList.add("active");
    var section2=document.getElementById("section2");
    section2.style.display="block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
function Section3(event){
    event.preventDefault();
    var section2=document.getElementById("section2");
    section2.style.display="none";
    var step3=document.getElementById("step3");
    step3.classList.add("active");
    var section3=document.getElementById("section3");
    section3.style.display="block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 

}
    function Section4(event){
        event.preventDefault();
        var section3=document.getElementById("section3");
        section3.style.display="none";
        var step4=document.getElementById("step4");
        step4.classList.add("active");
        var section4=document.getElementById("section4");
        section4.style.display="block";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
    function Section5(event){
        event.preventDefault();
        var section4=document.getElementById("section4");
        section4.style.display="none";
        var step5=document.getElementById("step5");
        step5.classList.add("active");
        var section5=document.getElementById("section5");
        section5.style.display="block";
        section5.classList.add("CenterSection");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
    function CreateCV(){
        document.getElementById("CV").style.display="Block";
        document.getElementById("ApplicantName").innerHTML=Name.value;
        document.getElementById("ApplicantEmail").innerHTML=Email.value;
        document.getElementById("ApplicantMobile").innerHTML=Mobile.value;
        document.getElementById("ApplicantLocation").innerHTML=Location.value;
        document.getElementById("ApplicantGithub").innerHTML=Github.value;
        document.getElementById("ApplicantLinkedn").innerHTML=Linkedn.value;
        const skillsContainer = document.getElementById('SkillsEntry');
        const skillInputs = skillsContainer.querySelectorAll('input');
      
        skillInputs.forEach(input => {
          const element = document.createElement('li');
          element.innerHTML=`<h4><strong>-</strong> ${input.value}</h4>`;
          document.getElementById('SkillsList').appendChild(element);
        });
        const LanguagesContainer = document.getElementById('LanguagesEntry');
        const LanguagesInputs = LanguagesContainer.querySelectorAll('input');
      
        LanguagesInputs.forEach(input => {
          const element = document.createElement('li');
          element.innerHTML=`<h4><strong>-</strong> ${input.value}</h4>`;
          document.getElementById('LanguagesList').appendChild(element);
        });
        const entries = document.querySelectorAll('.EduEntry');
        entries.forEach((entry) => {
          const Edu = {
            title: entry.querySelector(`input[name="EducationTitle"]`).value,
            provider: entry.querySelector(`input[name="EducationProvider"]`).value,
            description: entry.querySelector(`input[name="EducationDescription"]`).value,
            startMonth: entry.querySelector(`input[name="StartMonthEdu"]`).value,
            startYear: entry.querySelector(`input[name="StartYearEdu"]`).value,
           endMonth: "",
           endYear:""
          };
          const endMonthInput = entry.querySelector(`input[name="EndMonthJob"]`);
         const endYearInput = entry.querySelector(`input[id="EndYearJob"]`);
            if (endMonthInput ===" " || endYearInput===" ") {
                Job.endMonth = " ";
                Job.endYear = "Present";
            } else {
                try{

                    Job.endMonth = endMonthInput.value;
                    Job.endYear = endYearInput.value;
                }
                catch(error){
                    
                }
            }
          const EduContainer = document.createElement('div');
          EduContainer.classList.add("Education");
          
          EduContainer.innerHTML=`
          <div class="Date">
           <h4 class="DateText">${Edu.startMonth}  ${Edu.startYear}</h4>
           <h4>-</h4>
           <h4 class="DateText">${Edu.endMonth} ${Edu.endYear}</h4>
          </div>
          <div class="Details">
          <h4>${Edu.title}</h4>
          <h4>,</h4>
          <h4>${Edu.provider}</h4>
          </div>
          <div>
          <h6>${Edu.description}</h6>
          </div>
          `;
          document.getElementById('Education').appendChild(EduContainer);
        });
        const Jobentries = document.querySelectorAll('.ExpEntry');
        Jobentries.forEach((entry) => {
        const JobContainer = document.createElement('div');
        JobContainer.classList.add("Job");
        const Job = {
            title: entry.querySelector(`input[name="JobTitle"]`).value,
            company:entry.querySelector(`input[name="Company"]`).value,
            jobDescription:entry.querySelector(`input[name="JobDescription"]`).value,
            startMonth: entry.querySelector(`input[name="StartMonthJob"]`).value,
            startYear: entry.querySelector(`input[name="StartYearJob"]`).value,
            endMonth: "",
            endYear: ""
};


const endMonthInput = entry.querySelector(`input[name="EndMonthJob"]`);
const endYearInput = entry.querySelector(`input[id="EndYearJob"]`);

if (endMonthInput===" " || endYearInput===" ") {
    Job.endMonth = " ";
    Job.endYear = "Present";
} else {
    try{

        Job.endMonth = endMonthInput.value;
        Job.endYear = endYearInput.value;
    }
    catch(error){

    }
}
        JobContainer.innerHTML=`
           <div class="Date">
           <h4 class="DateText">${Job.startMonth}  ${Job.startYear}</h4>
           <h4>-</h4>
           <h4 class="DateText">${Job.endMonth} ${Job.endYear}</h4>
          </div>
          <div class="Details">
          <h4>${Job.title}</h4>
          <h4>,</h4>
          <h4>${Job.company}</h4>
          </div>
          <div>
          <h6>${Job.jobDescription}</h6>
          </div>
        `;
        document.getElementById('Job').appendChild(JobContainer);
    });
    }
    function SavePDF(){
        CreateCV();
    var element = document.getElementById('CV'); 
    var opt = {
        margin:       0,
        filename:     Name.value+"'s"+"CV.pdf",
        image:        { type: 'png', quality: 0.9 },
        html2canvas:  { scale: 2},
        jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
      };
      element.classList.add('pdf-render');
      html2pdf().set(opt).from(element).save();
      element.classList.remove('pdf-render');
      
    }
    function AddEducation(){
        const educationContainer = document.getElementById('EduEntry');
        const newEntry = document.createElement('div');
        newEntry.classList.add('EduEntry');
        newEntry.innerHTML = `
            <div class="ButtonContainer">
            <button class="AddNewButton RemoveEducationButton" type="button">Remove</button>
            </div>
            <label for="EducationTitle">Education Title *</label>
            <input name="EducationTitle" type="text" placeholder="Your Education Title here" required>
            <label for="EducationProvider">Education Provider *</label>
            <input name="EducationProvider" type="text" placeholder="Your Education Provider here" required>
            <label for="EducationDescription">Education Description *</label>
            <input name="EducationDescription" type="text" placeholder="Your Education Description here" required>
            <label for="StartMonthEdu">Start Month *</label>
            <input name="StartMonthEdu" type="text" placeholder="Your Start Month here" required>
            <label for="StartYearEdu">Start Year *</label>
            <input name="StartYearEdu" type="number" placeholder="Your Start Year here" required>
            <label for="EndMonthEdu">End Month</label>
            <input name="EndMonthEdu" type="text" placeholder="Your End Month here">
            <label for="EndYearEdu">End Year</label>
            <input name="EndYearEdu" type="number" placeholder="Your End Year here">
        `;
        educationContainer.appendChild(newEntry);
    }
    document.getElementById('form3').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('RemoveEducationButton')) {
            event.target.closest('.EduEntry').remove();
        }
    });
    function AddExperience(){
        const experienceContainer = document.getElementById('ExpEntry');
        const newEntry = document.createElement('div');
        newEntry.classList.add('ExpEntry');
        newEntry.innerHTML = `
        <div class="ButtonContainer">
        <button class="AddNewButton RemoveExperienceButton" type="button">Remove</button>
        </div>
        <label for="JobTitle" >Job Title *</label>
        <input name="JobTitle" type="text" id="JobTitle" placeholder="Your Job Title here" required>
        <label for="Company" >Company *</label>
        <input name="Company" type="text" id="Company" placeholder="Your Company here" required>
        <label for="JobDescription">Job Description *</label>
        <input name="JobDescription" id="JobDescription" placeholder="Your Job description here" required>
        <label for="StartMonthJob" >Start Month *</label>
        <input name="StartMonthJob" type="text" id="StartMonthJob" placeholder="Your Start Month here" required >
        <label for="StartYearJob" >Start Year *</label>
        <input name="StartYearJob" type="number" id="StartYearJob" placeholder="Your Start Year here" required>
        <label for="EndMonthJob" >End Month</label>
        <input name="EndMonthJob" type="text" id="EndMonthJob" placeholder="Your End Month here"  >
        <label for="EndYearJob" >End Year</label>
        <input name="EndYearJob" type="number" id="EndYearJob" placeholder="Your End Year here">
        `;
        experienceContainer.appendChild(newEntry); 
    }
    document.getElementById('form2').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('RemoveExperienceButton')) {
            event.target.closest('.ExpEntry').remove();
        }
    });
    function AddSkill(){
        const SkillContainer = document.getElementById('SkillsEntry');
        const newEntry = document.createElement('div');
        newEntry.classList.add('SkillsEntry');
        newEntry.innerHTML=`
         <div class="ButtonContainer">
        <button class="AddNewButton RemoveSkillButton" type="button">Remove</button>
        </div>
         <input name="skills" id="skills"placeholder="Your Skills here" required>
        `;
        SkillContainer.appendChild(newEntry);
    }
    document.getElementById('SkillsEntry').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('RemoveSkillButton')) {
            event.target.closest('.SkillsEntry').remove();
        }
    });
    function AddLanguage(){
        const LanguagesContainer=document.getElementById('LanguagesEntry');
        const newEntry=document.createElement('div');
        newEntry.classList.add('LanguagesEntry');
        newEntry.innerHTML=`
         <div class="ButtonContainer">
        <button class="AddNewButton RemoveLanguageButton" type="button">Remove</button>
        </div>
        <input name="Languages" id="Languages"placeholder="Your Languages here" required>
        `;
        LanguagesContainer.appendChild(newEntry);
    }
    document.getElementById('LanguagesEntry').addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('RemoveLanguageButton')) {
            event.target.closest('.LanguagesEntry').remove();
        }
    });