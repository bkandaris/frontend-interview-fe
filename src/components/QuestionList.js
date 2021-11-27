import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import PropagateLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

const QuestionsUpdate = () => {
  const [questions, setQuestions] = useState();
  const [totalQuestions, setTotalQuestions] = useState();
  const navigate = useNavigate();

  const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
  `;

  useEffect(() => {
    axios
      .get('https://frontend-interview-quiz.herokuapp.com/api/javascript')
      .then((response) => {
        setQuestions(response.data);
        setTotalQuestions(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!questions) {
    return <PropagateLoader css={override} />;
  }

  return (
    <div className='question-list-wrapper'>
      <h1>Add, Update or Delete Questions</h1>
      <h3>Total Questions: {totalQuestions}</h3>
      <button
        onClick={() => {
          navigate('/add');
        }}>
        Add a question
      </button>
      {questions &&
        questions.map((question) => {
          return (
            <div className='individual-question' key={question._id}>
              <Link to={`/update/${question._id}`}>
                <p>{question.question}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionsUpdate;
