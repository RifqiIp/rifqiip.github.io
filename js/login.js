function login() {
	if (form.username.value=="admin" && form.password.value=="1234") {
		window.location="index1.html";

	}else{
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Please check your username or password again!'
		});
	}
}