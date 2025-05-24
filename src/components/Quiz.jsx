import React from 'react'
import { useState } from 'react';
import Results from './Results.jsx';

const Quiz = () => {

    const questionBank = [
            {
              question: "What is the capital of Israel?",
              options: ["Tel Aviv", "Haifa", "Jerusalem", "Eilat"],
              answer: "Jerusalem"
            },
            {
              question: "How many continents are there on Earth?",
              options: ["5", "6", "7", "8"],
              answer: "7"
            },
            {
              question: "What is the largest ocean on Earth?",
              options: ["Atlantic", "Indian", "Arctic", "Pacific"],
              answer: "Pacific"
            },
            {
              question: "Which planet is known as the Red Planet?",
              options: ["Earth", "Mars", "Jupiter", "Venus"],
              answer: "Mars"
            }
    ]
    const initialAnswers  = [null, null, null, null]
const [selectedOption, setSelectedOption] = useState(null);

    const [isFinsihed, setIsFinished] = useState(false);  
    
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswers[currentQuestion];
    
    function handleOptionClick(option) { 
        setSelectedOption(option);
       
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
        console.log(userAnswers);
        setSelectedOption(option);
    }


    function handleNextClick() {
        if (currentQuestion === questionBank.length - 1) {
            setIsFinished(true);
        } 
            else { 
            setCurrentQuestion(currentQuestion + 1);
        }

        if (currentQuestion === questionBank.length - 1) {
            console.log("Quiz completed!");
            console.log("Your answers:", userAnswers);
        }
    }

    function handlePrevClick() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }
    if (isFinsihed) {
        // Quiz is completed, show results
        return (<Results userAnswers={userAnswers} questionBank={questionBank} />)
        

    }

  return (
      <div>
          <h2>Question {currentQuestion +1}</h2>
          <p className="question">{questionBank[currentQuestion].question}</p>
          {questionBank[currentQuestion].options.map((option, index) => (
              <button key={index} className={"option" + (selectedAnswer === option ?' selected' :"")} onClick={()=> handleOptionClick(option)}>
                  {option}
              </button>
          ) )}
                 
          <div className="nav-buttons">
              <button onClick={handlePrevClick} disabled={currentQuestion ===0} className="prev-button">Previous</button>
              <button onClick={handleNextClick} disabled={!selectedAnswer} className="next-button">
                  {currentQuestion < questionBank.length - 1
                      ? 'Next'
                      : 'Finish Quiz'}
               
              </button>
              
          </div>

     
    
      </div>
  )
}

export default Quiz