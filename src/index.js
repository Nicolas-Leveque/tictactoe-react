import React from 'react';
import StoreProvider from './state/store'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
      <App />
  </StoreProvider>
);

