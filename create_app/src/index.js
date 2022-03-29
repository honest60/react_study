import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';                               // 전체 앱에 적용되는 전역 스타일
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(                                    // render(가져올 데이터 쪽/ 데이터를 쓸 쪽)
  <React.StrictMode>
    <App subject="SKY"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
