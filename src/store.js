import { createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const sagaMiddleware = createSagaMiddleware()
export default createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware), reduxDevTools)
)