const quiz_data=[
    {
        question:'What fake name does Natasha use when she first meets Tony ?',
        a:'Natalie Rushman',
        b:'Natalia Romanoff',
        c:'Nicole Rohan',
        d:'Naya Rabe',
        correct:'a'

    },
    {
        question:'Which is most difficult programming language?',
        a:'C',
        b:'C++',
        c:'Haskel',
        d:'Ruby',
        correct:'c'

    },
    {
        question:'Which is most used programming language?',
        a:'Java',
        b:'JavaScript',
        c:'Python',
        d:'C',
        correct:'a'

    },
    {
        question:'Who is president of US?',
        a:'Donald Trump',
        b:'Barak Obama',
        c:'Abrahim Lincon',
        d:'George Cornovallis',
        correct:'a'
    },
    {
        question:'Complete the dialoge "Dred from it .Run from it______________."',
        a:'Destiny still arrives',
        b:"I am the Destiny",
        c:"No one arrives",
        d:'Destiny arrives but late',
        correct:'a'
    }

];
let current_Quiz=0;
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitbtn=document.getElementById("submit");
loadQuiz();
function loadQuiz(){
    const current_QuizData=quiz_data[current_Quiz];
    questionEl.innerText=current_QuizData.question;
    a_text.innerText=current_QuizData.a;
    b_text.innerText=current_QuizData.b;
    c_text.innerText=current_QuizData.c;
    d_text.innerText=current_QuizData.d;

   
}
submitbtn.addEventListener(
    "click",()=>{
        current_Quiz++;
        if(current_Quiz<quiz_data.length){
        loadQuiz();
        }
        else{
            alert("You finished the Quiz!!!");
        }
    }
);