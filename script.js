var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('subject-error');
var submitError=document.getElementById('submit-error');


function validateName(){
    var contactname = document.getElementById('name').value;

    if(contactname.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!contactname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write fullname';
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-circle"></i>';
    return true;
}
function validateemail(){
    var contactmail = document.getElementById('email').value;

    if(contactmail.length == 0){
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!contactmail.match(/^[A-za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-check-circle"></i>';
    return true;
}
function validatesubject(){
    var subjectinput = document.getElementById('subject').value;
    var required = 15;
   let left = required - subjectinput.length;

    if(left > 0){
        subjectError.innerHTML = left + 'more character required';
        return false;
    }
    
    subjectError.innerHTML = '<i class="bi bi-check-circle"></i>';
    return true;
}
function validateform(){
    if (!validateName() || !validateemail() || !validatesubject()) {
        submitError.innerHTML='Please fix your error to submit';
        return false;
    }
}