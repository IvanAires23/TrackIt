import React from 'react';
import GlobalStyled from './GlobalStyled/GlobalStyled';
import ResetCss from './GlobalStyled/Reset'
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCss />
    <GlobalStyled />
    <App />
  </React.StrictMode>
);

