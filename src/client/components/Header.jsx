import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import getCookie from '../utils/helper';

function Header(props) {

  const logout = () => {
    document.cookie = 'loggedInUser=;max-age=0';
    location.reload();
  }

  return (<div id="header">
    <h1>{props.name}</h1>
    {getCookie('loggedInUser') ? <Button className="logoutBtn" onClick={logout}>Logout</Button> : ''}
  </div>)
}
export default Header;