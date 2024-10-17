function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  let contact = document.forms["contactForm"]["contact"].value;
  let message = document.forms["contactForm"]["message"].value;
  
  if (name == "" || email == "" || contact == "" || message == "") {
    alert("All fields are required");
    return false;
  }
}