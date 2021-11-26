import axios from 'axios';

const createQuestion = (newQuestion) => {
  axios
    .post(
      'https://frontend-interview-quiz.herokuapp.com/api/javascript',
      newQuestion
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('error', error);
    });
};

const updateQuestion = (
  id,
  updatedQuestion,
  updatedCorrect,
  updatedIncorrect1,
  updatedIncorrect2,
  updatedIncorrect3
) => {
  axios
    .put(`https://frontend-interview-quiz.herokuapp.com/api/javascript/${id}`, {
      question: updatedQuestion,
      correctAnswer: updatedCorrect,
      wrongAnswers: [
        { answer: updatedIncorrect1 },
        { answer: updatedIncorrect2 },
        { answer: updatedIncorrect3 },
      ],
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('put error', error);
    });
};

const deleteQuestion = (id) => {
  axios
    .delete(
      `https://frontend-interview-quiz.herokuapp.com/api/javascript/${id}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { createQuestion, updateQuestion, deleteQuestion };
