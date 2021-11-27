import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home-wrapper'>
      <div className='info-container'>
        <h1>JavaScript Quiz Application</h1>
        <h3>The fun way to learn and study JavaScript!</h3>
        <button onClick={() => navigate('/settings')}>Get started</button>
      </div>
    </div>
  );
};

export default Home;
