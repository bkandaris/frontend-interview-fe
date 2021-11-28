import React, { useState } from 'react';
import { createQuestion } from '../crud/crudRequests';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuestion(submitObject);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Question has been added.',
      showConfirmButton: false,
      timer: 5000,
    });
    navigate('/update');
  };

  return (
    <div className='add-question'>
      <h1>Add a Question</h1>
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
        <label>1st Incorrect Answer</label>
        <input
          placeholder={'First incorrect answer'}
          onChange={handleChange}
          type='text'
          id='wrongAnswers1'
          name='wrongAnswers1'
        />
        <label>2nd Incorrect Answer</label>
        <input
          placeholder={'Second incorrect answer'}
          onChange={handleChange}
          type='text'
          id='wrongAnswers2'
          name='wrongAnswers2'
        />
        <label>3rd Incorrect Answer</label>
        <input
          placeholder={'Second incorrect answer'}
          onChange={handleChange}
          type='text'
          id='wrongAnswers3'
          name='wrongAnswers3'
        />
        <input className='submit-add' type='submit' value='Add Question' />
      </form>
    </div>
  );
};

export default AddQuestion;
