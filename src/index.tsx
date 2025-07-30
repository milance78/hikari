import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import { InputRefProvider } from './contexts/inputRefContext';
import { ButtonRefProvider } from './contexts/buttonRefContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ButtonRefProvider>
    <InputRefProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </InputRefProvider>
    </ButtonRefProvider>
  </React.StrictMode>
);

