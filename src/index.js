import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const theme = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
};

const LoginBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border || 'none'};
`;

const Login = ({ theme }) => {
  return <LoginBox {...theme} />;
};

ReactDOM.render(<Login theme={theme} />, document.getElementById('root'));
export default Login;
