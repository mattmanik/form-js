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
let current = 1;
var names = document.getElementById("names");
var mail = document.getElementById("mail");
var cell = document.getElementById("cell");
var mailText = document.getElementById("mailText");
var containerr = document.getElementById("containerr");
var profession = document.getElementById("profession");
var branch = document.getElementById("branch");
var yearofg = document.getElementById("yearofg");
var textarea = document.getElementById("textarea");
var ifJob = document.getElementById("ifJob");
var ifDig = document.getElementById("ifDig");
var rating = document.getElementById("rating");
var mailer =
  /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
mailText.style.visibility = "hidden";
nameText.style.visibility = "hidden";
cellText.style.visibility = "hidden";
containerr.style.maxHeight = "530px";
const objId = {};

var booleanObj = {};


nextBtnFirst.addEventListener("click", function (event) {
  if (
    names.value.length == 0 &&
    mail.value.length == 0 &&
    cell.value.length == 0
  ) {
    nameText.style.visibility = "visible";
    mailText.style.visibility = "visible";
    cellText.style.visibility = "visible";
  }
  if (names.value.length == 0) {
    nameText.style.visibility = "visible";
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
    mailText.style.visibility = "visible";
    mail.focus();
    return false;
  }
  if (cell.value.length == 0) {
    cellText.style.visibility = "visible";
    event.preventDefault();
    cell.focus();
    return false;
  }
  
  else {
    fetch("https://api.mycaptain.co.in/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation($formType:String,$firstName:String,$email:String,$mobileNumber:String!){
        createLeadFromForms(lead:{
            formType: $formType,
            firstName: $firstName,
            email: $email, 
            mobileNumber: $mobileNumber})
            {id}}`,
        variables: {
          formType: "pm_dm_pro",
          firstName: names.value,
          email: mail.value,
          mobileNumber: cell.value
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
     objId.ids = data.data.createLeadFromForms.id;
        console.log(data,"data here");
      });

    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    headPage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    console.log(objId,'objId');
  }
});


nextBtnSec.addEventListener("click", function (event) {
  
  fetch("https://api.mycaptain.co.in/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation($id:Int!,$currentProfile:String,$department:String,$yearOfStudy:String){
      updateLeadFromForms(id: $id,lead:{
        currentProfile: $ currentProfile, 
        department: $department,
          yearOfStudy:$yearOfStudy
        })
          {id}}`,
      variables: {
        id: parseInt(objId.ids),
        currentProfile: profession.value,
        department:branch.value,
        yearOfStudy: yearofg.value,
      },
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"data from second ");
    })

  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  headPage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  containerr.style.maxHeight = "680px";
});


nextBtnThird.addEventListener("click", function (event) {

  fetch("https://api.mycaptain.co.in/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation($id:Int!,$reason:String,$interestedInJobAssurance:Boolean,$anyOtherCourseCompleted:Boolean,$rating:Int){
      updateLeadFromForms(id: $id,lead:{
         reason: $reason, 
         interestedInJobAssurance: $interestedInJobAssurance,
          anyOtherCourseCompleted:$anyOtherCourseCompleted,
          rating:$rating
        })
          {id}}`,
      variables: {
        id: parseInt(objId.ids),
        reason: textarea.value,
        interestedInJobAssurance: ifJob.value.includes("Job") ? true : false,
        anyOtherCourseCompleted: ifDig.value.includes("Yes") ? true : false,
        rating:parseInt(rating.value)
      },
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"data from third ");
    })

    
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  headPage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  containerr.style.maxHeight = "680px";
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
