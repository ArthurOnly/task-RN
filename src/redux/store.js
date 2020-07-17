import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'

import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(ReduxPromise))

export default store