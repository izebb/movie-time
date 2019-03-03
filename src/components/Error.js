import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  padding: 0 40px;
  margin: 100px auto 20px auto;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: #444;
`;

export function Error({ message, retry }) {
  const handleClick = () => {
    retry();
  };

  return (
    <Container>
      <p>{message}</p>
      <button onClick={handleClick}>Try again</button>
    </Container>
  );
}

Error.defaultProps = {
  retry: () => {},
  message: ''
};
