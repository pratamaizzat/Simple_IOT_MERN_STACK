import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Control from './Control';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <div className='app'>
        <div className='app_body'>
          <Control/>
        </div>
      </div>
    </Fragment>
  </Provider>
)

export default App;
