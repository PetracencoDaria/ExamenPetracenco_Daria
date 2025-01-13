document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Vă rugăm să completați toate câmpurile.");
      event.preventDefault();
    }
  });
