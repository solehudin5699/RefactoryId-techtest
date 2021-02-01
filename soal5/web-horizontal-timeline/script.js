const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const heartContainer = document.querySelector("#heartContainer");
let step = 0;
function nextStep() {
  if (step < 3) {
    step++;
    btnStatus();
  }
  if (step == 1) {
    document
      .querySelector("#barIndicator1")
      .setAttribute("class", "barIndicator barIndicatorOn");
    setTimeout(() => {
      document.querySelector("#step2").setAttribute("class", "numberOn");
    }, 500);
  } else if (step == 2) {
    document
      .querySelector("#barIndicator2")
      .setAttribute("class", "barIndicator barIndicatorOn");
    setTimeout(() => {
      document.querySelector("#step3").setAttribute("class", "numberOn");
    }, 500);
  } else if (step == 3) {
    document
      .querySelector("#barIndicator3")
      .setAttribute("class", "barIndicator barIndicatorOn");
    setTimeout(() => {
      document.querySelector("#step4").setAttribute("class", "numberOn");
    }, 500);
  }
}
function prevStep() {
  if (step > 0) {
    step--;
    btnStatus();
  }
  if (step == 2) {
    document.querySelector("#step4").setAttribute("class", "numberOff");
    document
      .querySelector("#barIndicator3")
      .setAttribute("class", "barIndicator barIndicatorOff");
  } else if (step == 1) {
    document.querySelector("#step3").setAttribute("class", "numberOff");
    document
      .querySelector("#barIndicator2")
      .setAttribute("class", "barIndicator barIndicatorOff");
  } else if (step == 0) {
    document.querySelector("#step2").setAttribute("class", " numberOff");
    document
      .querySelector("#barIndicator1")
      .setAttribute("class", "barIndicator barIndicatorOff");
  }
}

function btnStatus() {
  if (step == 0) {
    prevButton.setAttribute("class", "btnOff");
  } else {
    prevButton.setAttribute("class", "btn");
  }
  if (step == 3) {
    heartContainer.setAttribute("class", "heart_containerActive");
    nextButton.setAttribute("class", "btnOff");
  } else {
    nextButton.setAttribute("class", "btn");
    heartContainer.setAttribute("class", "heart_container");
  }
}

if (typeof Storage !== "undefined") {
  nextButton.addEventListener("click", nextStep);
  prevButton.addEventListener("click", prevStep);
} else {
  alert("Browser tidak mendukung WebStorage");
}
