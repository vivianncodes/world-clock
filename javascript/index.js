function updateTime() {
  // Chicago
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(".date");
    let chicagoTimeElement = chicagoElement.querySelector(".time");
    let chicagoCurrentTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoCurrentTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tampa
  let tampaElement = document.querySelector("#tampa");
  if (tampaElement) {
    let tampaDateElement = tampaElement.querySelector(".date");
    let tampaTimeElement = tampaElement.querySelector(".time");
    let tampaCurrentTime = moment().tz("America/New_York");

    tampaDateElement.innerHTML = tampaCurrentTime.format("MMMM Do YYYY");
    tampaTimeElement.innerHTML = tampaCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// City Select
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone
    .replace("_", " ")
    .split("/")[1]
    .replace(/_/g, " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
