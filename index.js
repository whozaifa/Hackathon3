document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  
    // Here, you could implement code to handle form submission, e.g., sending data to a server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // For demo purposes, logging the form data to the console
    // Replace the above line with your desired form submission code
  });
  