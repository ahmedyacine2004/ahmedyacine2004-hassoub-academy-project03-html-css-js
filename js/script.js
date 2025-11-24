let countDownDate = new Date();
countDownDate = new Date(
  countDownDate.getFullYear() + 1,
  countDownDate.getMonth() - 6,
  1
);

var x = setInterval(() => {
  var now = new Date();
  var distance = countDownDate - now;

  // Months

  let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  document.getElementById("months").innerHTML =
    months < 10 ? "0" + months : months;

  // Days
  let days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;

  // Hours
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;

  // Minutes
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;

  // Seconds
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? "0" + seconds : seconds;
}, 1000);

// form validation form bootstrap 5
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
