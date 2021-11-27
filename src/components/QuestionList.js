import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const QuestionsUpdate = () => {
  const [questions, setQuestions] = useState();
  const params = useParams();

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
            <div key={question._id}>
              <p>{question.question}</p>
              <Link to={`/update/${question._id}`}>
                <button>Update or Delete Question</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionsUpdate;
