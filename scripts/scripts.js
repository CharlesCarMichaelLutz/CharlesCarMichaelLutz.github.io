//Weather API integration
document.addEventListener("DOMContentLoaded", () => {
  const appid = "202004bd880ab14d9af079a3e938f40f"
  const city = "Laguna Beach"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("response:", data)
      if (data.cod === 200) {
        const weatherContainer = document.getElementById("weather")
        weatherContainer.innerHTML = `
                  <p>${data.name}: ${data.main.temp}°C, ${data.weather[0].description}</p>
              `
        console.log(
          "weather data:",
          data.name,
          data.main.temp,
          data.weather[0].description
        )
      } else {
        console.error("Error getting the weather data:", data.message)
      }
    })
    .catch((error) => {
      console.error("Error getting the weather data:", error)
    })
})

//EmailJS API integration
const publicKey = "-zrH-ZPDf-_uiSJgX"
const emailService = "default_service"
const templateId = "template_96ls9a7"

emailjs.init(publicKey)

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault()
      emailjs.sendForm(emailService, templateId, this).then(
        () => {
          console.log("Success!")
        },
        (error) => {
          console.error("Failed...", error)
        }
      )
      clearForm()
    })
}

function clearForm() {
  document.getElementById("contact-form").reset()
}
