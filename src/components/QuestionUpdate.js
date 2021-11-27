import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { updateQuestion, deleteQuestion } from '../crud/crudRequests';
import { useNavigate } from 'react-router';

const QuestionUpdate = () => {
  const [formState, setFormState] = useState();
  const [individualQuestion, setIndividualQuestion] = useState();
  const [corr, setCorr] = useState();
  const [inc1, setInc1] = useState();
  const [inc2, setInc2] = useState();
  const [inc3, setInc3] = useState();

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
    alert('question has been deleted');
    navigate('/update');
  };
  console.log('inc1', inc1);
  console.log('inc2', inc2);
  console.log('inc3', inc3);

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
    alert('question has been updated');
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
        setInc2(res.data.wrongAnswers[0].answer);
        setInc3(res.data.wrongAnswers[0].answer);
        console.log('individual', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('formState', formState);
  console.log('correctAnswer State', corr);

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
