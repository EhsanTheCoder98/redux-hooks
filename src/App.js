import React from 'react';
import { Provider } from 'react-redux';
import CounterComponent from './components/CounterComponent';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;