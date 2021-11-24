import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SelectField = ({ label }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    
  };

  return (
    <div>
      <h1>Select Field</h1>
      <form onSubmit={handleSubmit}>
        <label label={label}>
          <select value={value} label={label} onChange={handleChange}>
            <option value=''>Option</option>
            <option value=''>Option2</option>
            <option value=''>Option3</option>
            <option value=''>Option4</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SelectField;
