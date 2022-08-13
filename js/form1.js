const inputs = document.querySelectorAll(".input");

function focusFunc(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
});

function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value; 
	var phone = document.getElementById("phone").value; 
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding ="10px";
	if (name.length < 5) {
		text = "Please Enter Valid Name";
		error_message.innerHTML = text;
		return false;
	}
	if (email.indexOf("@") == -1 || email.length < 6) {
		text = "Please Enter Valid Email";
		error_message.innerHTML = text;
		return false;
	}
	if (isNaN(phone) || phone.length != 11) {
		text = "Please Enter Valid Phone Number";
		error_message.innerHTML = text;
		return false;
	}
	if (message.length <= 5) {
		text = "Please Enter More Than 140 Charachters";
		error_message.innerHTML = text;
		return false;
	}
	
	Swal.fire({
	  title: 'Are you sure?',
	  text: "The message you send will enter our data!",
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, send it!'
	}).then((result) => {
	  if (result.isConfirmed) {
	    Swal.fire(
	      'success!',
	      'Your message has been sent.',
	      'success'
	    )
	    window.location="../index.html#contact";
	  }
	});
	return true;
}
function course(){
	Swal.fire({
	  title: 'do you want to learn it?',
	  text: "you have to connect with us first",
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Login Now!'
	}).then((result) => {
	  if (result.isConfirmed) {
	    Swal.fire(
	      'success!',
	      'Your message has been sent.',
	      'success'
	    )
	    window.location="login.html";
	  }
	});
	return true;
}