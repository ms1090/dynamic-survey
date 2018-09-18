import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from '../../registerServiceWorker';
import store from '../../store';
import SurveyPage from '../templates/SurveyPage';

ReactDOM.render(
  <Provider store={store}>
    <SurveyPage />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
