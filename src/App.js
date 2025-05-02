import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import './App.css';

const quizData = [
  {
    question: "What is the name of the fungus responsible for the outbreak?",
    options: [
      "Mycelium",
      "Cordyceps Brain Infection",
      "Necrovirus",
      "T-Virus"
    ],
    answer: "Cordyceps Brain Infection"
  },
  {
    question: "What was Joel's job before the outbreak?",
    options: [
      "Teacher",
      "Soldier",
      "Contractor",
      "Mechanic"
    ],
    answer: "Contractor"
  },
  {
    question: "Why is Ellie immune to the infection?",
    options: [
      "She was vaccinated",
      "She was bitten but didn't turn",
      "She was born in a lab",
      "She took daily medicine"
    ],
    answer: "She was bitten but didn't turn"
  },
  {
    question: "What is the name of the group trying to develop a cure using Ellie?",
    options: [
      "The Fireflies",
      "FEDRA",
      "The Seraphites",
      "The Wolves"
    ],
    answer: "The Fireflies"
  },
  {
    question: "How does Joel escape from the hospital with Ellie at the end of the first game or series finale?",
    options: [
      "He surrenders to the Fireflies",
      "He convinces them to let Ellie go",
      "He fights his way out with Ellie",
      "He sneaks out using a disguise"
    ],
    answer: "He fights his way out with Ellie"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const next = currentQuestion + 1;
    if (next < quizData.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  useEffect(() => {
    if (showScore) {
      setCurrentQuestion(0);
    }
  }, [showScore]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">The Last of Us Quiz</h2>
              
              {!showScore ? (
                <Question
                  data={quizData[currentQuestion]}
                  onAnswer={handleAnswer}
                  questionNumber={currentQuestion + 1}
                  total={quizData.length}
                  onNext={handleNext}
                />
              ) : (
                <Score score={score} total={quizData.length} onReset={resetQuiz} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
