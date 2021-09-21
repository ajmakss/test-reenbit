import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './redux/store-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


const rerenderApp = () => {
  ReactDOM.render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>,
    document.getElementById('root')
  );
}
rerenderApp(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderApp(state);

});

reportWebVitals();