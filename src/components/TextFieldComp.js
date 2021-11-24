import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAmountChange } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const TextFieldComp = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            label='Amount of Questions'
            placeholder={amount_of_questions}
            type='number'></input>
        </label>
        <button type='submit'>Start</button>
      </form>
    </div>
  );
};

export default TextFieldComp;
