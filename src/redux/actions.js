import { CHANGE_AMOUNT, CHANGE_SCORE } from './actionTypes';

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});

export const handleAmountChange = (payload) => ({
    type: CHANGE_AMOUNT,
    payload,
  });
