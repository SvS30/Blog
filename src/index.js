import React from 'react';
import ReactDOM from 'react-dom';

// Import styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";

// Import views
import App from './views/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
