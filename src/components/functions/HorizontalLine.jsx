import React from 'react';

const HorizontalLine = () => {
  return (
    <div style={styles.container}>
      <div style={styles.horizontalLine}></div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Make sure the container spans the full width
    marginBottom: '20px'
  },
  horizontalLine: {
    height: '2px', // Set height for horizontal line
    width: '30%', // Make the line span the full width of the container
    background: 'linear-gradient(to right, rgb(18, 18, 18), rgb(77, 252, 224), rgb(169, 119, 241), rgb(18, 18, 18))',
  },
};

export default HorizontalLine;
