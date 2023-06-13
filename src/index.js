import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';

import 'modern-normalize';
import { GlobalStyles } from './styles/GlobalStyles.styled';

import { App } from './components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
);
