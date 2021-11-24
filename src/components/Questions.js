import React from 'react';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';

const Questions = () => {
  let apiUrl = 'https://frontend-interview-quiz.herokuapp.com/api/javascript';
  const { response, loading } = useAxios({ url: apiUrl });
  const { amount_of_questions } = useSelector((state) => state);
  console.log(amount_of_questions);
  return (
    <div>
      <h1>Questions 1</h1>
      <h2>This is the question</h2>
      <button>Answer1</button>
      <button>Answer2</button>
      <button>Answer3</button>
      <button>Answer4</button>
      <div>
        <h4>Score: 3/5</h4>
      </div>
    </div>
  );
};

export default Questions;
