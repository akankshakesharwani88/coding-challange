import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import  store  from './redux/store';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css';
import './assets/css/animation.css'
import './assets/css/auth.css'
import './assets/css/color-themes.css'
import './assets/css/confirmDialog.css'
import './assets/css/custom.css'
import './assets/css/flaticon.css'
import './assets/css/left-sidebar.css'
import './assets/css/main.css'
import './assets/css/media.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// serviceWorkerRegistration.unregister();
// serviceWorkerRegistration.register();
