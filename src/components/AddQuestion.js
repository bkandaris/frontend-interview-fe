import React, { useState } from 'react';
import { createQuestion } from '../crud/crudRequests';

import { useNavigate } from 'react-router';

const AddQuestion = () => {
  const [addQuestion, setAddQuestion] = useState({
    question: '',
    correctAnswer: '',
    wrongAnswers1: '',
    wrongAnswers2: '',
    wrongAnswers3: '',
  });
  const [submitObject, setSubmitObject] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setAddQuestion({
      ...addQuestion,
      [e.target.name]: value,
    });
    setSubmitObject({
      question: addQuestion.question,
      correctAnswer: { answer: addQuestion.correctAnswer },
      wrongAnswers: [
        { answer: addQuestion.wrongAnswers1 },
        { answer: addQuestion.wrongAnswers2 },
        { answer: addQuestion.wrongAnswers3 },
      ],
    });
  };
  console.log('addQuestion State', addQuestion);
  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitObject({
    //   question: addQuestion.question,
    //   correctAnswer: { answer: addQuestion.correctAnswer },
    //   wrongAnswers: [
    //     { answer: addQuestion.wrongAnswers1 },
    //     { answer: addQuestion.wrongAnswers2 },
    //     { answer: addQuestion.wrongAnswers3 },
    //   ],
    // });
    console.log('mysubmitObject in handle', submitObject);
    createQuestion(submitObject);
    alert('question has been added!');
    navigate('/update');
  };

  console.log('mysubmitObject in outside of handle', submitObject);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Question</label>
        <input
          placeholder={'Question?'}
          onChange={handleChange}
          type='text'
          name='question'
        />
        <label>Correct Answer</label>
        <input
          placeholder={'Correct answer'}
          onChange={handleChange}
          type='text'
          name='correctAnswer'
        />
        <label>First Incorrect Answer</label>
        <input
          placeholder={'First incorrect answer'}
          onChange={handleChange}
          type='text'
          id='wrongAnswers1'
          name='wrongAnswers1'
        />
        <label>Second Incorrect Answer</label>
        <input
          placeholder={'Second incorrect answer'}
          onChange={handleChange}
          type='text'
          id='wrongAnswers2'
          name='wrongAnswers2'
        />
        <label>Third Incorrect Answer</label>
        <input
          placeholder={'Second incorrect answer'}
          onChange={handleChange}
          type='text'
          id='wrongAnswers3'
          name='wrongAnswers3'
        />
        <input type='submit' value='add' />
      </form>
    </div>
  );
};

export default AddQuestion;
