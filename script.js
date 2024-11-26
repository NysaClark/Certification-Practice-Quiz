// Get the current URL
let url = window.location.href.split("/")

// Calculate the current question file (ex: Q1.html)
let currQuestion = url[url.length-1]

// Calculate the current question number (ex: 1)
let currQuestionNum = Number(currQuestion.split(".")[0].split("Q")[1]);

// Calculate base URL (current URL path without the Q#.html)

let baseURL = ""
for(el of url){
  if(el != currQuestion){
    baseURL += el + "/"
  }
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", previousQuestion)
nextBtn.addEventListener("click", nextQuestion)

// Disable prev button for first question
if(currQuestionNum == 1){
  prevBtn.setAttribute("disabled", true);
}else // Disable next button for last question
if(currQuestionNum == 22){ 
  nextBtn.setAttribute("disabled", true);
}


function previousQuestion(){
  let prevQuestionNum = currQuestionNum - 1;
  let prevQuestion = "Q" + prevQuestionNum + ".html";
  window.location.href = baseURL + prevQuestion
}

function nextQuestion(){
  let nextQuestionNum = currQuestionNum + 1;
  let nextQuestion = "Q"+ nextQuestionNum + ".html";
  window.location.href = baseURL + nextQuestion
}
