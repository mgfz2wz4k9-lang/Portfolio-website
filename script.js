document.getElementById("contactform").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("formMessage").textContent = "Please fill in all fields.";
    document.getElementById("formMessage").style.color = "red";
  } else {
    document.getElementById("formMessage").textContent = "Thank you for your message!";
    document.getElementById("formMessage").style.color = "green";
  }
});