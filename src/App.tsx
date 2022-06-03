import React from 'react';
import Routes from './router';
import {BrowserRouter} from 'react-router-dom';
import Theme from './theme/index';
import store from './core/store/employeesStore';
import {Provider} from 'react-redux';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
