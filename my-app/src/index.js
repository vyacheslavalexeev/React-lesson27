import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserInfo} from "./components/parts/UserInfo/UserInfo";

ReactDOM.render(
    <div>
        <UserInfo userName ={'Slava'} userGender = {'male'} userAge = {22} yearsWorked = {1}/>
        <hr/>
        <UserInfo userName ={'Lena'} userGender = {'female'} userAge = {19} yearsWorked = {2}/>
        <hr/>
        <UserInfo userName ={'George'} userGender = {'male'} userAge = {25} yearsWorked = {7}/>
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
