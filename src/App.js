import React from 'react'

import Routes from './Routes'
import {Provider} from 'react-redux'
import store from './redux/store'

import GlobalStyles from './theme'

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles>
        <Routes/>
      </GlobalStyles>
    </Provider>
  );
}