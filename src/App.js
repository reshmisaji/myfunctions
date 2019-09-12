import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border || 'none'};
`;

const App = ({ theme }) => {
  return <LoginBox {...theme} />;
};

export default App;
