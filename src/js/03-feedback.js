import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
const input = document.querySelector("input");
const LOCALSTORAGE_KEY = "feedback-form-state";



form.addEventListener('submit', onFormSubmit);
form.addEventListener('input' , throttle(onItputForm, 500));


let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
populateMessageOutput();


function onItputForm(e){

	formData[e.target.name] = e.target.value;
	console.log(localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(formData)));
}


function populateMessageOutput() {

if (formData) {
	textarea.value = formData.message || '';
		input.value = formData.email ||'';
	return;
}

}



function onFormSubmit(event) {
	event.preventDefault();

console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

	if (input.value === '' || textarea.value === '') {
		return alert('Please fill in all the fields!');
	  }
	 
	localStorage.removeItem(LOCALSTORAGE_KEY);
	form.reset();
	formData ={};
	
}
	
