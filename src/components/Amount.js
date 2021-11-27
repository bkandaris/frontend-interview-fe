import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAmountChange } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Amount = () => {
  const { amount_of_questions } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
    console.log('value', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/questions');
  };

  return (
    <div className='amount-wrapper'>
      <p>How many questions?</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className='amount-input'
            onChange={handleChange}
            label='Amount of Questions'
            placeholder={amount_of_questions}
            type='number'
            min={0}
            max={100}
            defaultValue={100}></input>
        </label>
        <button type='submit'>Start Quizzing</button>
      </form>
    </div>
  );
};

export default Amount;
