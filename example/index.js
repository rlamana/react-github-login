import React from 'react';
import ReactDOM from 'react-dom';
import LoginGithub from '../src/LoginGithub';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <LoginGithub clientId=""
    redirectUri=""
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('example')
);
