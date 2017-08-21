// function to validate form 
function validate() {
	// create variables 
	// value property sets or returns the value of the option
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	var emailCorrect = document.getElementById("email").value;

	//check to see if required fields are filled in
	if (firstName === "") {
		alert("Please fill in first name");
	}
	
	if (lastName === "") {
		alert("Please fill in last name");
	}
	
	if (emailCorrect === "") {
		alert("Please fill in email");
	}
	// return to get out of the function
	return false;
}