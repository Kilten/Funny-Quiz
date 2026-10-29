let question = document.getElementById('question');
let options = document.querySelectorAll('.option-button');
let next = document.getElementById('next');
let scoreText = document.getElementById('score');

let score = 0;
let currentQuestion = 0;
let answered = false;

let startBtn = document.getElementById("start-btn");
let startScreen = document.getElementById("start-screen");
let quiz = document.getElementById("quiz");

let restart = document.getElementById('restart');

startBtn.onclick = () => {
    startScreen.style.display = "none";
    quiz.style.display = "block";
    loadQuestions();   // start quiz
};


const questions = [
  {
    question: "Which animal is known as the King of the Jungle?",
    options: [
      "Elephant 🐘",
      "Tiger 🐅",
      "Lion 🦁",
      "Monkey 🐒"
    ],
    answer: "Lion 🦁"
  },

  {
    question: "What color is the sun usually shown as in drawings?",
    options: [
      "Blue 🔵",
      "Green 🟢",
      "Yellow 🟡",
      "Purple 🟣"
    ],
    answer: "Yellow 🟡"
  },

  {
    question: "Which fruit keeps the doctor away if eaten daily?",
    options: [
      "Banana 🍌",
      "Apple 🍎",
      "Orange 🍊",
      "Grapes 🍇"
    ],
    answer: "Apple 🍎"
  },

  {
    question: "How many days are there in a week?",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    answer: "7"
  },

 {
    question: "🌱 What color is grass?",
    options: [
        "🔴 Red", 
        "🔵 Blue", 
        "🟢 Green", 
        "🟡 Yellow"
    ],
    answer: "🟢 Green"
  },

  {
    question: "🪐 Which is the largest planet?",
    options: [
        "🌍 Earth", 
        "🔴 Mars", 
        "🟠 Jupiter", 
        "🟡 Venus"
    ],
    answer: "🟠 Jupiter"
  },

  {
    question: "⏰ How many hours are there in a day?",
    options: [
        "12",
        "18",
        "24",
        "30"
    ],
    answer: "24"
  },

  {
    question: "🐾 Which animal says 'Meow'?",
    options: [
        "🐕 Dog",
        "🐄 Cow",
        "🐱 Cat",
        "🐎 Horse"
    ],
    answer: "🐱 Cat"
  },

  {
    question: "📅 What comes after Friday?",
    options: [
        "Monday",
        "Saturday",
        "Thursday",
        "Sunday"
    ],
    answer: "Saturday"
  },

  {
    question: "📐 Which shape has 3 sides?",
    options: [
        "Square",
        "Circle",
        "Triangle",
        "Rectangle"
    ],
    answer: "Triangle"
  },

  {
    question: "🌞 Which is the hottest season?",
    options: [
        "❄ Winter",
        "🌧 Rainy",
        "☀ Summer",
        "🌸 Spring"
    ],
    answer: "☀ Summer"
  },
  
  {
  question: "🍎 Which fruit is red?",
  options: [
    "🍌 Banana",
    "🍎 Apple",
    "🍊 Orange",
    "🍇 Grapes"
  ],
  answer: "🍎 Apple"
},

{
  question: "🚦 What color means STOP?",
  options: [
    "🟢 Green",
    "🟡 Yellow",
    "🔴 Red",
    "🔵 Blue"
  ],
  answer: "🔴 Red"
},

{
  question: "🌙 Which one appears at night?",
  options: [
    "☀ Sun",
    "🌙 Moon",
    "🌈 Rainbow",
    "☁ Cloud"
  ],
  answer: "🌙 Moon"
},

{
  question: "👟 What do you wear on your feet?",
  options: [
    "🧢 Cap",
    "👕 Shirt",
    "👟 Shoes",
    "🧤 Gloves"
  ],
  answer: "👟 Shoes"
}

];

function loadQuestions(){
    let q = questions[currentQuestion];
    question.innerText = q.question;

    answered = false;

    options.forEach((option, index) => {
        option.innerText = q.options[index];
        option.style.background = "";

        option.onclick = () => {

            if(answered) return;
            answered = true;

            if(option.innerText === q.answer){
                score++;
                option.style.background = "green";
            }else{
                option.style.background = "red";
            }
        };
    });
}

next.onclick = () => {
    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestions();
    }else{
        question.innerText = "🎉 Quiz Finished!";
        options.forEach(btn => btn.style.display = "none");
        next.style.display = "none";
        scoreText.innerText = `Your Score: ${score} / ${questions.length}`;
        restart.style.display = "block";
    } 
};

restart.onclick = () => {
    score = 0;
    currentQuestion = 0;

    loadQuestions();
    options.forEach(btn => btn.style.display = "block");
    next.style.display = "block";
    restart.style.display = "none";
    score = 0;
    currentQuestion = 0;
    scoreText.innerText = "";
    next.style.marginLeft = "100px";

}


