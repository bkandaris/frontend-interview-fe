import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { handleScoreChange } from '../redux/actions';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  let apiUrl = 'https://frontend-interview-quiz.herokuapp.com/api/javascript';
  const { response, loading } = useAxios({ url: apiUrl });
  const { amount_of_questions, score } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (response?.length) {
      const question = response[questionIndex];
      console.log('question', question.correctAnswer.answer);
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

  const handleClickAnswer = (e) => {
    const question = response[questionIndex];

    if (e.target.textContent === question.correctAnswer.answer) {
      dispatch(handleScoreChange(score + 1));
    } else {
      alert(`Correct Answer: ${question.correctAnswer.answer}`);
    }

    if (questionIndex + 1 < response.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/score');
    }
  };
  console.log('responselength', response.length);

  return (
    <div className='questions-wrapper'>
      <div className='question-wrapper border'>
        <h1>Question #{questionIndex + 1}</h1>
        <h2>{response[questionIndex].question}</h2>
        {options.map((data, id) => (
          <button onClick={handleClickAnswer} key={id}>
            {data.answer}
          </button>
        ))}
        <div>
          <h4 className='score'>
            Score: {score} / {amount_of_questions}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Questions;
