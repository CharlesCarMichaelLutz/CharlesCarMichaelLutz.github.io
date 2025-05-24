const publicKey =  "-zrH-ZPDf-_uiSJgX";
const emailService = "default_service";
const templateId = "template_96ls9a7";

emailjs.init(publicKey);

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm(emailService, templateId, this).then(
        () => {
          console.log("Success!")
        },
        (error) => {
          console.error("Failed...", error)
        }
      )
      clearForm();
    })
}

function clearForm() {
  document.getElementById("contact-form").reset();
}
