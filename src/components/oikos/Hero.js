// src/components/AwesomeComponent.jsx
import React from 'react';
import './AwesomeComponent.css';

const AwesomeComponent = () => {
  return (
    <section className='wrapper'>
      <div className='hero'></div>
      <div className='content'>
        <h1 className='h1--scalingSize' data-text='An awesome title'>An awesome title</h1>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch">
          <span className="icon">🔄</span>
        </label>
      </div>
    </section>
  );
};

export default AwesomeComponent;
