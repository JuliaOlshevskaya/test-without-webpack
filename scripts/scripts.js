function onPageLoad() {
  console.log("Page has loaded");
}
const lightBulbIsOn = document.getElementById("bulbIsOn");
const lightBulbIsOff = document.getElementById("bulbIsOff");
const backgroundColorOfBody = document.getElementsByTagName("body");
const changeContentOfHeader = document.getElementById("changingOfContent");

function lightIsOn() {
  lightBulbIsOn.style.display = "inherit";
  lightBulbIsOff.style.display = "none";
  backgroundColorOfBody[0].style.backgroundColor = "rgb(250, 250, 11)";
  changeContentOfHeader.innerText = "Bulb is: ON";
  changeContentOfHeader.style.color = "black";
}
function lightIsOff() {
  lightBulbIsOn.style.display = "none";
  lightBulbIsOff.style.display = "inherit";
  backgroundColorOfBody[0].style.backgroundColor = "rgb(56, 56, 56)";
  changeContentOfHeader.innerText = "Bulb is: OFF";
  changeContentOfHeader.style.color = "white";
}
