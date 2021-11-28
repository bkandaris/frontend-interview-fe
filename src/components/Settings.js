import React from 'react';
import Amount from './Amount';
import useAxios from '../hooks/useAxios';
import PropagateLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

const Settings = () => {
  const { loading } = useAxios({
    url: 'https://frontend-interview-quiz.herokuapp.com/api/javascript',
  });

  const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
  `;

  if (loading) {
    return <PropagateLoader css={override} />;
  }

  return (
    <div className='settings-wrapper'>
      <div className='border'>
        <h1>Quiz Settings</h1>
        <Amount />
      </div>
    </div>
  );
};

export default Settings;
