import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  let apiUrl = 'https://frontend-interview-quiz.herokuapp.com/api/javascript';
  const { response, loading } = useAxios({ url: apiUrl });
  const { amount_of_questions } = useSelector((state) => state);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.length) {
      const question = response[questionIndex];
      let answers = [...question.wrongAnswers];
      answers.splice(
        getRandomInt(question.wrongAnswers.length),
        0,
        question.correctAnswer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log('response', response);
  console.log('optionsoutsideofuse', options);

  return (
    <div>
      <h1>Questions {questionIndex + 1}</h1>
      <h2>{response[questionIndex].question}</h2>
      {options.map((data, id) => (
        <button key={id}>{data.answer}</button>
      ))}
      <div>
        <h4>Score: 3/ {amount_of_questions}</h4>
      </div>
    </div>
  );
};

export default Questions;
