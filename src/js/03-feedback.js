import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
const input = document.querySelector("input");
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};
populateMessageOutput();


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input' , throttle(onItputForm, 500));





function onItputForm(e){

 formData[e.target.name] = e.target.value;
localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(formData));
}







function populateMessageOutput() {

const saveMassege = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

 if (saveMassege) {

console.log(saveMassege);
textarea.value = saveMassege.message;
input.value = saveMassege.email;
  }
   

}



function onFormSubmit(event) {
    event.preventDefault();

event.currentTarget.reset();
localStorage.removeItem(LOCALSTORAGE_KEY);
console.log(formData);
}








