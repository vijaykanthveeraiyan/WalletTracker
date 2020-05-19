
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditableListItem from './editItem';
import ListItem from './listItem';
import MemoizedAddItem from './addItem';
import MemoizedHeader from './tableHead';
import { Component } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

class ExpenseReport extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
            records: []
        }
        this.addRecord = this.addRecord.bind(this);
        this.editRecord = this.editRecord.bind(this);
        this.updateRecord = this.updateRecord.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.addRecord = this.addRecord.bind(this);

    }

    componentDidMount() {
        const fetchData = () => {
            console.log("Triggering api call");
            axios.get('http://localhost:4000/expensereport')
            .then((res) => {    
                this.setState({records: this.state.records.concat(res.data.data)});
              })
        };
        fetchData();
    }

    addRecord(record){
        console.log("Add item", record);
        axios.post('http://localhost:4000/expensereport',{data:record})
        .then((res) => {
            console.log("Posted Successfully");    
            this.state.records.push(record);
            this.setState({records: this.state.records},()=>{
                document.getElementById('title').value = "";
                document.getElementById('date').value = "";
                document.getElementById('desc').value = "";
                document.getElementById('income').value = "";
                document.getElementById('amount').value = "";
            });
          })
    }

    editRecord(idx){
        console.log("Edit item", idx);
        this.state.records[idx].enableEdit = true;
        this.setState({records:this.state.records});
    }

    updateRecord(idx,id,record){
        console.log("Update item",id);
        axios.put('http://localhost:4000/expensereport/'+id,{data:record})
        .then((res) => {
            console.log("Posted Successfully");
            this.state.records[idx].isEdit = false;
            this.state.records[idx] = {};
            this.state.records[idx] = record;
            this.setState({records:this.state.records});
          })
    }

    deleteRecord(idx,id){
        console.log("Delete item",id);
        axios.delete('http://localhost:4000/expensereport/'+id)
        .then((res) => {
            this.state.records.splice(idx, 1);
            this.setState({
                records: this.state.records
            });
          })
    }
    render() {
        return (
            <div id="expenseContainer">
                    <Table responsive striped bordered hover>
                        <MemoizedHeader />
                        <tbody>
                            <MemoizedAddItem addItem={this.addRecord} />
                            {this.state.records.map((item, index) => {
                                return (item.enableEdit ?
                                    (<EditableListItem index={index} id={item.id} item={item} updateItem={this.updateRecord} deleteItem={this.deleteRecord} />)
                                    : (<ListItem index={index} id={item.id} item={item} editItem={this.editRecord} deleteItem={this.deleteRecord} />))
                            })
                            }
                        </tbody>
                    </Table>
            </div>
        )
    }

}

export default ExpenseReport;