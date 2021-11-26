import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleAmountChange, handleScoreChange } from '../redux/actions';

const FinalScreen = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(100));
    navigate('/');
  };

  return (
    <div>
      <h1>Final Score: {score}</h1>
      <button onClick={handleClick}>Restart</button>
    </div>
  );
};

export default FinalScreen;
