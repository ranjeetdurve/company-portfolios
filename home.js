const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

function previewImage(input, previewId) {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById(previewId).src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email.includes("@") || !message) {
      alert("Please fill all fields correctly.");
      return false;
    }
  
    alert("Message sent successfully!");
    return true;
  }

let roles = ["Frontend Developer", "UI/UX Designer", "Web Consultant"];
let index = 0, charIndex = 0;
function type() {
  let text = roles[index];
  document.getElementById("role").innerText = text.substring(0, charIndex) + "|";
  charIndex++;
  if (charIndex > text.length) {
    charIndex = 0;
    index = (index + 1) % roles.length;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}
type();
