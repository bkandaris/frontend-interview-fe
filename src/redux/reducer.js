import { CHANGE_AMOUNT, CHANGE_SCORE } from './actionTypes';

const initialState = {
  amount_of_questions: 3,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_questions: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
