import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/index.js'

//크롬에서 리덕스 툴 확인할 수 있는 주소
const reduxDevTool = 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// 몸무게 수정하는 실습
// const weight = 100;
// function reducer(state = weight, action) {  // 리듀서 만들기
//   if(action.type ==='증가') {
//     state++;
//     return state;
//   } else if(action.type === '감소') {
//     state--;
//     return state;
//   } else {
//     return state;
//   }
// } 

// let store = createStore(reducer);
let store = createStore(rootReducer, reduxDevTool);
// console.log(store.getState()); //모든 state값을 확인하는 방법

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
