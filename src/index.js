import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { MainChainProvider } from './context/MainChain';

ReactDOM.render(
    <MainChainProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </MainChainProvider>,
  document.getElementById('root')
);