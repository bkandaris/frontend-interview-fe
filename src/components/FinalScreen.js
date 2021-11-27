import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScreen = () => {
  const dispatch = useDispatch();
  const { score, amount_of_questions } = useSelector((state) => state);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(100));
    navigate('/');
  };

  return (
    <div className="final-wrapper">
      <h1>Good job! You finished!</h1>
      <h3>
        Final Score: {score} / {amount_of_questions}
      </h3>
      <button onClick={handleClick}>Restart</button>
    </div>
  );
};

export default FinalScreen;
