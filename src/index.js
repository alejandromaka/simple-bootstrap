// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.querySelector('#app');

if (container) {
  ReactDOM.render(<App />, container);
}
