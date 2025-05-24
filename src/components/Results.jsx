import React from 'react'

const Results = ({ userAnswers, questionBank }) => {
    function calculateScore(userAnswers, questionBank) {
      let score = 0;
      userAnswers.forEach((answer, index) => {
        if (answer === questionBank[index].answer) {
          score++;
        }
      });
      return score;
    }
    function handleRestart() {
      // Logic to restart the quiz
      window.location.reload();
    }

    const score = calculateScore(userAnswers, questionBank);
  
    return (
      <div>
        <h2>You Finished</h2>
        <p>Your Score: {score} / {questionBank.length}</p>
            <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
            
      </div>
    );
  };
  
  export default Results;