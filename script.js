const question = [{
    'que': 'What does HTML stand for?',
    'a': 'Home Tool Markup Language',
    'b': 'HyperLinks and Texk Markup Language',
    'c': 'Hyper Text Markup Language',
    'd': 'other',
    'correct': 'c',
},
{
    'que': 'Who is making the Web standards?',
    'a': 'Google',
    'b': 'Mozila',
    'c': 'WWC',
    'd': 'Microsoft',
    'correct': 'c',
},
{
    'que': 'Choose the correct HTML element for the largest heading:',
    'a': 'Head',
    'b': 'Heading',
    'c': 'H1',
    'd': 'H6',
    'correct': 'c',
},
{
    'que': 'What is the correct HTML element for inserting a line break?',
    'a': 'Br',
    'b' : 'Break',
    'c': 'Ib',
    'd': 'other',
    'correct': 'a',
},
{
    'que': 'What is the correct HTML for adding a background color?',
    'a': 'Body bg = "yellow"',
    'b' : '<Backgroud>Yellow</Backgroud>',
    'c': '<body style="backgroud-color:yeallow"/>',
    'd': 'other',
    'correct': 'c',
},
{
    'que': 'Choose the correct HTML element to define important text',
    'a': 'important',
    'b' : '<Backgroud>Yellow</Backgroud>',
    'c': '<body style="backgroud-color:yeallow"/>',
    'd': 'other',
    'correct': 'c',
}
]

let index = 0;
const total = question.length;
let right = 0,
wrong = 0;
// const input = document.querySelector("input");
const quizQuestion = document.getElementById("quizquestion");
const optionsInput = document.querySelectorAll(".options");

const loadQuestion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = question[index];
    quizQuestion.innerText = ` ${index+1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = `${index+1}) ${data.a}`;
    optionsInput[1].nextElementSibling.innerText = `${index+2}) ${data.b}`;
    optionsInput[2].nextElementSibling.innerText = `${index+3}) ${data.c}`;
    optionsInput[3].nextElementSibling.innerText = `${index+4}) ${data.d}`; 
    
    

}

const submitQuiz = () =>{
    const ans = getAnswer();
    const data = question[index];
    if(ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionsInput.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
                
            
        }
    )
    return answer;
}

const reset = ()=>{
    optionsInput.forEach(
        (input) =>{
            input.checked = false;
                
            
        }
    )


}

const endQuiz = () => {
    // Calculate the percentage
    const percentage = Math.floor((right * 100) / total);
  
    // Select the element with the class "box" and update its content
    document.querySelector(".box").innerHTML = `
      <h2 style="color: blue; font-size: 24px; text-align: center; border-radius: 50%;">${percentage}%</h2>
      <p style="font-weight: bold;text-align: center;">Your Quiz Result</p>
    `;
    
  };
  


loadQuestion();