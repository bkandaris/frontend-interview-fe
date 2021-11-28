import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { updateQuestion, deleteQuestion } from '../crud/crudRequests';
import { useNavigate } from 'react-router';
import PropagateLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';

const QuestionUpdate = () => {
  const [formState, setFormState] = useState();
  const [individualQuestion, setIndividualQuestion] = useState();
  const [corr, setCorr] = useState();
  const [inc1, setInc1] = useState();
  const [inc2, setInc2] = useState();
  const [inc3, setInc3] = useState();

  const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
  `;

  const navigate = useNavigate();
  const params = useParams();
  const handleChange = (e) => {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const handleClick = () => {
    deleteQuestion(params.questionId);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Question has been deleted.',
      showConfirmButton: true,
      timer: 2500,
    });
    navigate('/update');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateQuestion(
      params.questionId,
      formState.question,
      corr,
      inc1,
      inc2,
      inc3
    );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Question updated',
      showConfirmButton: true,
      timer: 2500,
    });
    navigate('/update');
  };

  useEffect(() => {
    axios
      .get(
        `https://frontend-interview-quiz.herokuapp.com/api/javascript/find/${params.questionId}`
      )
      .then((res) => {
        setIndividualQuestion(res.data);
        setFormState(res.data);
        setCorr(res.data.correctAnswer.answer);
        setInc1(res.data.wrongAnswers[0].answer);
        setInc2(res.data.wrongAnswers[1].answer);
        setInc3(res.data.wrongAnswers[2].answer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.questionId]);

  if (!individualQuestion) {
    return <PropagateLoader css={override} />;
  }

  return (
    <div className='update-question-wrapper'>
      <h1>Update individual questions</h1>
      <form onSubmit={handleSubmit}>
        <label>Question</label>
        <input
          placeholder={individualQuestion.question}
          onChange={handleChange}
          type='text'
          name='question'
        />
        <label>Correct Answer</label>
        <input
          placeholder={individualQuestion.correctAnswer.answer}
          onChange={(e) => setCorr(e.target.value)}
          type='text'
          name='answer'
        />
        <label>First Incorrect Answer</label>
        <input
          placeholder={individualQuestion.wrongAnswers[0].answer}
          onChange={(e) => setInc1(e.target.value)}
          type='text'
          name='incorrect1'
        />
        <label>Second Incorrect Answer</label>
        <input
          placeholder={individualQuestion.wrongAnswers[1].answer}
          onChange={(e) => setInc2(e.target.value)}
          type='text'
          name='incorrect2'
        />
        <label>Third Incorrect Answer</label>
        <input
          placeholder={individualQuestion.wrongAnswers[2].answer}
          onChange={(e) => setInc3(e.target.value)}
          type='text'
          name='incorrect3'
        />
        <input
          type='submit'
          className='update-button'
          value='Update Question'
        />
        <button className='delete-question' onClick={handleClick}>
          Delete Question
        </button>
        <button
          className='back-to'
          onClick={() => {
            navigate('/update');
          }}>
          Back to List
        </button>
      </form>
    </div>
  );
};

export default QuestionUpdate;
