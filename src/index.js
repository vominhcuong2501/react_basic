import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





// setup redux
import {Provider} from 'react-redux'
import {createStore} from 'redux'
// import { rootReducer } from './Redux/ReducerDongHo/rootReducer';
// import { rootGiayReducer } from './Redux/ReducerGiay/rootGiayReducer';
// import { rootBurgerReducer } from './Redux/ReducerBurger/rootBurgerReducer';
// import { rootFormQLSV } from './Redux/ReducerFormQLSV/rootFormQLSV';
import { rootXucXac } from './Redux/ReducerSucSac/rootXucXac';


// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootGiayReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootBurgerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootFormQLSV, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootXucXac, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
