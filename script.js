const slidePage = document.querySelector(".slide-page");
const headPage = document.querySelector(".head");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const progresser = document.querySelectorAll(".container .progress-bar");
const inputName = document.querySelectorAll(".nameF");
/* const nameF = document.querySelectorAll(".nameF");
let x = document.forms["formss"]["fname"].value; */
let current = 1;
var names = document.getElementById("names");
var mail = document.getElementById("mail");
var cell = document.getElementById("cell");
var mailText = document.getElementById("mailText");
var containerr = document.getElementById("containerr");
var mailer = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
mailText.style.visibility ="hidden";
nameText.style.visibility ="hidden";
cellText.style.visibility ="hidden";
containerr.style.maxHeight ="530px";

/* function validateForm() {
var a = document.forms["formss"]["fname"].value;
if (a == "") {
alert("Please Fill All Required Field");
return false;
}
} */

nextBtnFirst.addEventListener("click", function (event) {
  if(names.value.length == 0 && mail.value.length == 0 && cell.value.length == 0){
    nameText.style.visibility ="visible";
    mailText.style.visibility ="visible";
    cellText.style.visibility ="visible";
  }
  if (names.value.length == 0) {
    nameText.style.visibility ="visible";
    event.preventDefault();
    names.focus();
    return false;
  }
  if (mail.value.length == 0) {
    event.preventDefault();
    mail.focus();
    return false;
  }
  if (mailer.test(mail.value) != true) {
    event.preventDefault();
    mailText.style.visibility ="visible";
    mail.focus();
    return false;
  }
  if (cell.value.length == 0) {
    cellText.style.visibility ="visible";
    event.preventDefault();
    cell.focus();
    return false;
  }
  
  else {
    
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    headPage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});
nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  headPage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  containerr.style.maxHeight ="680px";

});
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  headPage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  containerr.style.maxHeight ="680px";

});
submitBtn.addEventListener("click", function () {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function () {
    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";

  progresser.style.position = "relative";
  progresser.style.top = "-72px";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  progresser.style.position = "relative";
  progresser.style.top = "-72px";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
