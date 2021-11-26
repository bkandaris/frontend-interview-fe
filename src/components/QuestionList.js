import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { deleteQuestion } from '../crud/crudRequests';

const QuestionsUpdate = () => {
  const [questions, setQuestions] = useState();

  useEffect(() => {
    axios
      .get('https://frontend-interview-quiz.herokuapp.com/api/javascript')
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!questions) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>CRUD Questions</h1>
      {questions &&
        questions.map((question) => {
          return (
            <Link to={`/update/${question._id}`}>
              <div key={question._id}>{question.question}</div>
              <button>x</button>
            </Link>
          );
        })}
    </div>
  );
};

export default QuestionsUpdate;
