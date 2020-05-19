import React, { Component } from 'react';

import {Button } from 'react-bootstrap';

function ListItem(props){
    console.log("List item props.id",props.id);
    return(
        <tr key={props.id}>
            <td>{props.index}</td>
            <td>{props.item.title}</td>
            <td>{props.item.timestamp}</td>
            <td>{props.item.description}</td>
            <td>{props.item.income}</td>
            <td>{props.item.amount}</td>
            <td><Button variant="outline-primary" onClick={() => props.editItem(props.index)}>Edit</Button></td>
            <td><Button onClick={() => props.deleteItem(props.index,props.id)}>Delete</Button></td>
        </tr>
    )
}

export default ListItem;