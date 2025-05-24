import React from 'react'
import { useState } from 'react';
import Results from './Results.jsx';

const Quiz = () => {

    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Jupiter"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
            answer: "Harper Lee"
        },
        {
            question: "What does Jsx Stand for ?",
            options: ["JavaScript", "Java", "JavaScript XML", "Java XML"],
            answer: "JavaScript XML"
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