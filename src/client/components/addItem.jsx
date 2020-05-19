import React from 'react';

import { Button } from 'react-bootstrap';
function addItem(props){
    console.log(props);
    const handleClick =()=>{
        const expenseObj = {title:'',timestamp:'',description:'',
        description:'',amount:''};
        if (document.getElementById('title').value &&
            document.getElementById('date').value  &&
            document.getElementById('desc').value  &&
            document.getElementById('income').value &&
            document.getElementById('amount').value ) {

            expenseObj.title =document.getElementById('title').value,
            expenseObj.timestamp= document.getElementById('date').value,
            expenseObj.description= document.getElementById('desc').value,
            expenseObj.income= document.getElementById('income').value,
            expenseObj.amount= document.getElementById('amount').value
            
            props.addItem(expenseObj);
        }else{
            console.log("Add item is null");
        }
        
    }
    return(<tr>
        <td></td>
        <td><input type="text" id="title" placeholder="Enter the title"></input></td>
        <td><input type='date' id="date" placeholder='YYYY-MM-DD' pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"></input></td>
        <td><input type="text" id="desc" placeholder="Enter the Desc"></input></td>
        <td>
            <select id="income">
                <option value="income">income</option>
                <option value="expense">expense</option>
            </select>
        </td>
        <td><input type="number" id="amount" placeholder="Enter the Amount"></input></td>
        <td><Button variant="outline-primary" onClick={handleClick}>Add</Button></td>
   </tr>)
}

const MemoizedAddItem = React.memo(addItem);
export default MemoizedAddItem;