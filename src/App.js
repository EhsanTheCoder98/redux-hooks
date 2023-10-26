import React from 'react';
import { Provider } from 'react-redux';
import CounterComponent from './components/CounterComponent';
import store from './redux/store';
import NumberCounter from './components/NumberCounter';

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
      <NumberCounter />
    </Provider>
  );
};

export default App;