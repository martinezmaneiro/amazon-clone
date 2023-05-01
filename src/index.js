import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import firebaseConfig from './firebase.config';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './redux/store'
import 'slick-carousel/slick/slick.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={'loading'} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
