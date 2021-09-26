
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion, currectQuestionIndex;
let quizScore = 0;


startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currectQuestionIndex++
    setNextQuestion()
})


function startGame(){
    startButton.classList.add('hide')
    shuffledQuestion = question.sort(() => Math.random() -0.5)
    currectQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    quizScore = 0
}



function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestion[currectQuestionIndex])
}

function showQuestion(){
    questionElement.innerText = question.question;
    question.answer.forEach((answer) => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children.array.forEach((button) => {
       setStatusClass(button, button.dataset.correct) 
    }))
    if(shuffledQuestion.length > currectQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }
    document.getElementById('right-answer').innerText = quizScore
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}




function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const question=[
    {
        question : 'Which one of this is javascript framework',
        answer : [
            {text : 'Python', correct : false},
            {text : 'Django', correct : false},
            {text : 'React', correct : true},
            {text : 'Eclipse', correct : false}
        ]
    },
    {
        question : 'Who is the president of Indonesia',
        answer : [
            {text : 'Vincent', correct : false},
            {text : 'Desta', correct : false},
            {text : 'Joko Widodo', correct : true},
            {text : 'Eclipse', correct : false}
        ]
    },
    {
        question : 'What 1 + 1',
        answer : [
            {text : '3', correct : false},
            {text : '5', correct : false},
            {text : '2', correct : true},
            {text : '5', correct : false}
        ]
    },
]