import React from 'react';

function Score({ score, total, onReset }) {
  const percentage = ((score / total) * 100).toFixed(1);
  const status = percentage >= 70 ? 'success' : percentage >= 50 ? 'warning' : 'danger';

  return (
    <div className="score-container text-center">
      <div className="result-message mb-4">
        <h3>Your Result</h3>
        <div className="progress mb-3">
          <div
            className={`progress-bar bg-${status}`}
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percentage}%
          </div>
        </div>
        <p>
          You scored <span className={`text-${status}`}><strong>{score}</strong></span> out of {total}
        </p>
      </div>
      <button className="btn btn-primary" onClick={onReset}>
        Play Again
      </button>
    </div>
  );
}

export default Score;
