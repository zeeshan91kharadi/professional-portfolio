
const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail() {
  const bodyMessage = `fullname : ${fullname.value}<br> Email: ${email.value} <br> message: ${message.value} `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jishankharadi42@gmail.com",
    Password: "3CE04171163465816BEB470D0F8C5466C5BD",
    To: "jishankharadi42@gmail.com",
    From: "jishankharadi42@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => alert(message)
);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
})


var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Software Developer", "Web Developer"],
  typeSpeed: 10,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
