import React, { useState, useEffect } from 'react';

function Question({ data, onAnswer, questionNumber, total, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Reset selected option when a new question is loaded
    setSelectedOption(null);
  }, [data]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      onNext();
    }
  };

  return (
    <div className="question-container">
      <div className="question-text mb-4">
        <h3>Question {questionNumber} of {total}</h3>
        <p>{data.question}</p>
      </div>
      <div className="options-container">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`btn btn-outline-primary mb-2 w-100 ${
              selectedOption === option ? 'active' : ''
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="next-button-container">
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={selectedOption === null}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Question;
