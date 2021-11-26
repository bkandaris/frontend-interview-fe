import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { updateQuestion } from '../crud/crudRequests';

const QuestionUpdate = () => {
  const [formState, setFormState] = useState();
  const [individualQuestion, setIndividualQuestion] = useState();
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
      formState.incorrect1,
      formState.incorrect2,
      formState.incorrect3
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://frontend-interview-quiz.herokuapp.com/api/javascript/find/${params.questionId}`
      )
      .then((res) => {
        setIndividualQuestion(res.data);
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
      {/* On submit goes on form */}
      <form onSubmit={handleSubmit}>
        <label>Question</label>
        <input
          placeholder={individualQuestion.question}
          onChange={handleChange}
          type='text'
          name='question'
        />
        <label>Correct Answer</label>
        {/* onChange on labels */}
        <input
          defaultValue='Correct Answer Here'
          placeholder={individualQuestion.correctAnswer.answer}
          onChange={handleChange}
          type='text'
          name='answer'
        />
        <label>First Incorrect Answer</label>
        {/* onChange on labels */}
        <input
          placeholder={individualQuestion.wrongAnswers[0].answer}
          onChange={handleChange}
          type='text'
          name='incorrect1'
        />
        <label>Second Incorrect Answer</label>
        {/* onChange on labels */}
        <input
          placeholder={individualQuestion.wrongAnswers[1].answer}
          onChange={handleChange}
          type='text'
          name='incorrect2'
        />
        <label>Third Incorrect Answer</label>
        {/* onChange on labels */}
        <input
          placeholder={individualQuestion.wrongAnswers[2].answer}
          onChange={handleChange}
          type='text'
          name='incorrect3'
        />
        <input type='submit' value='Change' />
      </form>
    </div>
  );
};

export default QuestionUpdate;