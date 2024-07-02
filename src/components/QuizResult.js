import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
     <b>Score:  {props.score}<br />
      Total Score:{props.totalScore}</b>

    </div>
    <button id ="next-button" onClick={props.tryAgain}>Try Again</button>
</>
  )
}

export default QuizResult