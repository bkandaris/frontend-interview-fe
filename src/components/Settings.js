import React from 'react';
import TextFieldComp from './TextFieldComp';
import useAxios from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { response, error, loading } = useAxios({ url: '/api_category' });
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  //   if (error) {
  //     return <h1>Error</h1>;
  //   }



  return (
    <div>
      <h1>Frontend Interview Study App</h1>
      <TextFieldComp />
    </div>
  );
};

export default Settings;
