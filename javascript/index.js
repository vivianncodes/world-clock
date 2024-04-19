function updateTime() {
  // Chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = chicagoElement.querySelector(".date");
  let chicagoTimeElement = chicagoElement.querySelector(".time");
  let chicagoCurrentTime = moment().tz("America/Chicago");

  chicagoDateElement.innerHTML = chicagoCurrentTime.format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Tampa
  let tampaElement = document.querySelector("#tampa");
  let tampaDateElement = tampaElement.querySelector(".date");
  let tampaTimeElement = tampaElement.querySelector(".time");
  let tampaCurrentTime = moment().tz("America/New_York");

  tampaDateElement.innerHTML = tampaCurrentTime.format("MMMM Do YYYY");
  tampaTimeElement.innerHTML = tampaCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
