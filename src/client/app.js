import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ExpenseReport from'./components/Expense';
import Login from './components/login';
import './styles/style.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import getCookie from '../client/utils/helper';

console.log("Cookie",getCookie('loggedInUser'));
ReactDOM.render(
  <div id='appContainer'>
    <Header name='WALLET REPORT GENERATOR'></Header>
    {getCookie('loggedInUser') ? <ExpenseReport/> : <Login/>}
  </div>,
  document.getElementById('app')
);