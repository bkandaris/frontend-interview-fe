import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = 'https://frontend-interview-quiz.herokuapp.com/api/javascript';

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { amount_of_questions } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data.slice(0, amount_of_questions)))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return {
    response,
    error,
    loading,
  };
};

export default useAxios;
