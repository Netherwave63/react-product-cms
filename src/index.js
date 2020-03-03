import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/App';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
