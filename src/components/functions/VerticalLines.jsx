import React from 'react';

const VerticalLine = () => {
  return (
    <div style={styles.container}>
      <div style={styles.verticalLine}></div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35vh',
    marginBottom:"20px"
  },
  verticalLine: {
    width: '2px',
    height: '100%',
    background: 'linear-gradient(rgb(18, 18, 18), rgb(77, 252, 224), rgb(169, 119, 241), rgb(18, 18, 18))',
  },
};

export default VerticalLine;
