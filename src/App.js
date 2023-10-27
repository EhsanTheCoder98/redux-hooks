import React from 'react';
import { Provider } from 'react-redux';
import CounterComponent from './components/CounterComponent';
import store from './redux/store';
import NumberCounter from './components/NumberCounter';
import Users from './components/Users';

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
      <NumberCounter />
      <Users />
    </Provider>
  );
};

export default App;