var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var highscore = document.querySelector(".highscore")
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var cw = document.querySelector(".cw"); //correct - wrong 
var cwtime = 2; //Correct - Wrong message time
var seconds = 180; //180 seconds
var a1; //answer 1 for every question
var a2; //answer 2 for every question
var a3; //answer 3 for every question
var a4; //answer 4 for every question

//First page

// Quiz Start function
function startingquiz() {
    //.highbutton will show when the quiz is over
    highscore.style.visibility = "hidden";

    //Start quiz button
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Start Quiz";
    // Appending child -new item appended to "BUTTON"
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        question1();
    });

    //View score button
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "View Scores";
     // Appending child -new item appended to "BUTTON"
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        scorepage();
    });
}
startingquiz();

//Timer
function countdown() {
    timerInterval = setInterval(function() {
    //Prefix Decrement
    seconds --;
    timer.textContent = "Time left: " + seconds;
    //if time runs out
        if (seconds <= 0) {
            clearInterval (timerInterval);
            seconds = 0;
            timer.textContent = "Time left: 0"
            // if time runs out 
            postquiz();
        }
    //miliseconds(1 second) - Luisito
    }, 1000);
}

//Adds remaining time to the score (remaining time + score)
function timepoints() {
    score += seconds;
}

//Correct or Wrong answer display
function correctcw() {
    var yesInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color: rgb(112, 177, 112)")
    //Display
    cw.textContent = "Correct!";
        if (cwtime <= 0) {
            //parameter
            clearInterval (yesInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 250);
}

//Wrong text display.
function wrongcw() {
    var noInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color:rgb(185, 80, 80)");
    //Display
    cw.textContent = "Wrong!";
        if (cwtime <= 0) {
            //parameter
            clearInterval (noInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 250);
}

//Question 1 layout.
function question1() {
    a1.remove();
    a2.remove();
    countdown();
    question.textContent = "What tag defines a division or the beginning/end of an individual section in an HTML document?";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "meta";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question2();
       // wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "table";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question2();
        
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "div";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question2();
        
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "img";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question2();
        

    });
}

//Question 2 layout.
function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What tag is used to render or transform text into an emphasized (italics) version?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "blockquote";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question3();
        
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "strong";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question3();
        
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "a";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question3();
        
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "em";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question3();
        
    });
}

//Question 3 layout.
function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What tag is used to define an interactive field where users can enter data?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "enterpoint";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question4();
        
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "input";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question4();
        
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "dialog";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question4();
        
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "datalist";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question4();
        
    });
}

//Question 4 layout.
function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What tag is used to define a table or image notation (caption)?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "embed";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        correctcw();
        question5();
        
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "caption";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question5();
        
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "code";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question5();
        
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "!DOCTYPE";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question5();
        
    });
}

//Question 5 layout.
function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What tag is used to define an unordered list that is bulleted?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "u";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question6();
        
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "li";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question6();
        
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "s";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question6();
        
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "ul";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question6();
        
    });
}

//Question 6. Last question before we call postquiz()
function question6() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What tag can be used to insert a line break or blank line in an HTML document?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "title";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw()
        postquiz()
        
        
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "head";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        postquiz()
        
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "br";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        correctcw();
        postquiz();
        
        
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "body";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        postquiz()
        
    });
}



//Post-quiz layout. page
function postquiz() {
    timepoints();
    seconds = 0; 
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    highscore.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " + score + ". Please enter your initials below."
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Submit";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}

//High score page layout.
function scorepage() {
    clearInterval (timerInterval);
    a1.remove();
    a2.remove();
    highscore.style.visibility = "hidden";
    banner.textContent = "High Scores"
    
    question.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
    //user can restart quiz
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Restart Quiz";
    // append restart 
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        location.reload();
    });

    //user can clear scores
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Clear Scores";
    //append clear scores
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        localStorage.clear();
        question.textContent = "";
    });
}












