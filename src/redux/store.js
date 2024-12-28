import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Changed import syntax
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';  // Updated package

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;