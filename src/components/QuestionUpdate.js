import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { updateQuestion, deleteQuestion } from '../crud/crudRequests';
import { useNavigate } from 'react-router';

const QuestionUpdate = () => {
  const [formState, setFormState] = useState();
  const [individualQuestion, setIndividualQuestion] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const handleChange = (e) => {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateQuestion(
      params.questionId,
      formState.question,
      formState.answer,
      formState.wrongAnswers[0].answer,
      formState.wrongAnswers[1].answer,
      formState.wrongAnswers[2].answer
    );
    alert('question has been updated');
    navigate('/update');
  };

  const handleClick = () => {
    deleteQuestion(params.questionId);
    alert('question has been deleted');
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
        console.log('individual', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('formState', formState);

  if (!individualQuestion) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
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
          onChange={handleChange}
          type='text'
          name='answer'
        />
        <label>First Incorrect Answer</label>
        <input
          placeholder={individualQuestion.wrongAnswers[0].answer}
          onChange={handleChange}
          type='text'
          name='incorrect1'
        />
        <label>Second Incorrect Answer</label>
        <input
          placeholder={individualQuestion.wrongAnswers[1].answer}
          onChange={handleChange}
          type='text'
          name='incorrect2'
        />
        <label>Third Incorrect Answer</label>
        <input
          placeholder={individualQuestion.wrongAnswers[2].answer}
          onChange={handleChange}
          type='text'
          name='incorrect3'
        />
        <input type='submit' value='Update Question' />
      </form>
      <button onClick={handleClick}>Delete Question</button>
      <button
        onClick={() => {
          navigate('/update');
        }}>
        Back to Questions List
      </button>
    </div>
  );
};

export default QuestionUpdate;
