console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

const contactSub = () =>{
	alert('Form Submitted')
}

form.addEventListener('submit', contactSub);

let rubberDuck = document.querySelector('#imgDuck')

const rubberDucky = () =>{
	alert('HEY GORGEOUS!')
}

imgDuck.addEventListener('mouseover', rubberDucky)