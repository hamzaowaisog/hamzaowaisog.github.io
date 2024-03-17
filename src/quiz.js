let question_index = 0;
let score = 0;
document.addEventListener("DOMContentLoaded", function () {
  const authenticationModal = document.getElementById("authentication-modal");

  document.body.style.overflow = "hidden";
  const modalBackground = document.createElement("div");
  modalBackground.classList.add(
    "fixed",
    "w-full",
    "h-screen",
    "top-0",
    "left-0",
    "z-10",
    "bg-black",
    "bg-opacity-80"
  );
  document.body.appendChild(modalBackground);

  authenticationModal.classList.remove("hidden");
  authenticationModal.classList.add("flex");
  authenticationModal.classList.add("justify-center");
  authenticationModal.classList.add("items-center");
  authenticationModal.classList.add("bg-gray-900");
  authenticationModal.classList.add("bg-opacity-75");
});

function openscroll() {
  document.body.style.overflow = "auto";
  const authenticationModal = document.getElementById("authentication-modal");
  authenticationModal.classList.add("hidden");
  const modalBackground = document.querySelector(".bg-opacity-80");
  modalBackground.remove();
}

function submitform() {
  document.body.style.overflow = "auto";
  const authenticationModal = document.getElementById("authentication-modal");
  authenticationModal.classList.add("hidden");
  const modalBackground = document.querySelector(".bg-opacity-80");
  quiz = document.getElementById("start_quiz");
  quiz.classList.remove("hidden");
  modalBackground.remove();
  return false;
}
let option;
function getdata() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  option = document.getElementById("topic").value;

  console.log(email);
  console.log(name);
  console.log(option);
}
function start_quiz() {
  const authenticationModal = document.getElementById("quiz-modal");
  document.body.style.overflow = "hidden";
  const modalBackground = document.createElement("div");
  modalBackground.classList.add(
    "fixed",
    "w-full",
    "h-screen",
    "top-0",
    "left-0",
    "z-10",
    "bg-black",
    "bg-opacity-80"
  );
  document.body.appendChild(modalBackground);

  authenticationModal.classList.remove("hidden");
  authenticationModal.classList.add("flex");
  authenticationModal.classList.add("justify-center");
  authenticationModal.classList.add("items-center");
  authenticationModal.classList.add("bg-gray-900");
  authenticationModal.classList.add("bg-opacity-75");
}
function openquiz() {
  document.body.style.overflow = "auto";
  const authenticationModal = document.getElementById("quiz-modal");
  authenticationModal.classList.add("hidden");
  quiz = document.getElementById("quizz");
  quiz.classList.add("hidden");
  const modalBackground = document.querySelector(".bg-opacity-80");
  modalBackground.remove();
  document
    .getElementById("navbar-default")
    .classList.add("pointer-events-none");

  document
    .getElementById("default-sidebar")
    .classList.add("pointer-events-none");
  document.getElementById("quiz_box").classList.remove("hidden");
  interval = setInterval(updatetime, 1000);
  console.log(option);
  question_index = 0;
  score = 0;
  timervalue = 10;
  get_quiz(option, question_index);
}
let timervalue = 10;
function updatetime() {
  timervalue = timervalue - 1;
  document.getElementById("timer").innerHTML = timervalue;

  if (timervalue === 0) {
    timervalue = 10;
    next_question();
  }
}
async function fetch_quiz(ccategory, index) {
  try {
    const response = await fetch("quiz.json");
    const data = await response.json();

    console.log("Fetched data:", data);

    if (data[ccategory] && data[ccategory][index]) {
      console.log("Returning quiz:", data[ccategory][index]);
      return data[ccategory][index];
    } else {
      console.error("Category or index not found in data.");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
let answer;
let correct_answer;
async function get_quiz(category, index) {
    const quiz = await fetch_quiz(category, index);
    document.getElementById("headingg").textContent = `${category} Quiz`;
    document.getElementById("question_heading").textContent = quiz.question;
    document.getElementById("option1").textContent = quiz.options[0];
    document.getElementById("option2").textContent = quiz.options[1];
    document.getElementById("option3").textContent = quiz.options[2];
    document.getElementById("option4").textContent = quiz.options[3];
    correct_answer = quiz.correctAnswer;
  
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");
  
  
    for (let i = 1; i <= 4; i++) {
      const optionElement = document.getElementById(`option${i}`);
      optionElement.disabled = false;
      optionElement.classList.remove("dark:bg-red-500");
      optionElement.classList.remove("light:bg-red-500");
      optionElement.classList.remove("dark:bg-green-500");
      optionElement.classList.remove("light:bg-green-500");
      optionElement.classList.remove("text-white");
      optionElement.classList.remove("dark:text-white");
    }
  }
  

function next_question() {
  question_index = question_index + 1;
  if (question_index === 5) {
    clearInterval(interval);
    document.getElementById("quiz_box").classList.add("hidden");

    const authenticationModal = document.getElementById("scorecard");
    document.body.style.overflow = "hidden";
    const modalBackground = document.createElement("div");
    modalBackground.classList.add(
      "fixed",
      "w-full",
      "h-screen",
      "top-0",
      "left-0",
      "z-10",
      "bg-black",
      "bg-opacity-80"
    );
    document.body.appendChild(modalBackground);

    authenticationModal.classList.remove("hidden");
    authenticationModal.classList.add("flex");
    authenticationModal.classList.add("justify-center");
    authenticationModal.classList.add("items-center");
    authenticationModal.classList.add("bg-gray-900");
    authenticationModal.classList.add("bg-opacity-75");
    document.getElementById("scoreeee").textContent = `Your score is ${score}`;
  } else {
    timervalue = 10;
    get_quiz(option, question_index);
  }
}
function exit() {
  score = 0;
  clearInterval(interval); // Clear the existing interval
  quiz_button = document.getElementById("quizz");
  quiz_button.classList.remove("hidden");
  quiz_button.textContent = "Take Another Quiz";
  document.body.style.overflow = "auto";
  const authenticationModal = document.getElementById("scorecard");
  authenticationModal.classList.add("hidden");
  const modalBackground = document.querySelector(".bg-opacity-80");
  quiz = document.getElementById("start_quiz");
  quiz.classList.remove("hidden");
  modalBackground.remove();
  timervalue = 10;
  question_index = 0;
  document
    .getElementById("navbar-default")
    .classList.remove("pointer-events-none");

  document
    .getElementById("default-sidebar")
    .classList.remove("pointer-events-none");
}

function checkAnswer(optionId) {

  const selectedOption = document.getElementById(optionId);
  const selectedOptionText = selectedOption.textContent;

  if (selectedOptionText.match(correct_answer)) {
    console.log(score);
    score+=1;
    console.log(score);
    selectedOption.classList.add("dark:bg-green-500");
    selectedOption.classList.add("light:bg-green-500");
    selectedOption.classList.add("text-white");
    selectedOption.classList.add("dark:text-white");
    
    for (let i = 1; i <= 4; i++) {
      const optionElement = document.getElementById(`option${i}`);
      optionElement.disabled = true;
      optionElement.removeEventListener("click", function () {
        checkAnswer(`option${i}`);
      });

    }
  } else {
    selectedOption.classList.add("dark:bg-red-500");
    selectedOption.classList.add("light:bg-green-500");
    selectedOption.classList.add("text-white");
    selectedOption.classList.add("dark:text-white");
    for (let i = 1; i <= 4; i++) {
      const optionElement = document.getElementById(`option${i}`);
      optionElement.disabled = true;
      if (optionElement.textContent === correct_answer) {
        optionElement.classList.add("light:bg-green-500");
        optionElement.classList.add("dark:bg-green-500");
        optionElement.classList.add("text-white");
        optionElement.classList.add("dark:text-white");
      }
    }
  }
}
document.getElementById("options").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const clickedButton = event.target;
      const optionId = clickedButton.id;
      checkAnswer(optionId);
    }
  });