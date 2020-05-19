import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
class EditableListItem extends Component {
    constructor(props) {
      super(props);
      this.edit = this.edit.bind(this);
      this.onAmountChange = this.onAmountChange.bind(this);
      this.timestampChange = this.timestampChange.bind(this);
      this.onDelete = this.onDelete.bind(this);
    }
  
    onAmountChange() {
      const invalidChars = /[^0-9]/gi;
      if (invalidChars.test(document.getElementById('editAmount').value)) {
        document.getElementById('editAmount').value = document.getElementById('editAmount').value.replace(invalidChars, "");
      }
    }
    onDelete(){
        this.props.deleteItem(this.props.index,this.props.id);
    }
    timestampChange(e) {
      const item = this.props.item;
      item.timestamp = e.target.value;
      this.setState({
        item: item
      })
    }
  
    edit() {
      const newObj = {
        id: this.props.id,
        title: document.getElementById('editTitle').value,
        timestamp: document.getElementById('editDate').value,
        description: document.getElementById('editDesc').value,
        income: document.getElementById('editIncome').value,
        amount: document.getElementById('editAmount').value
      };
      this.props.updateItem(this.props.index,this.props.id, newObj);
    }
  
    render() {
        console.log("Edit container render");
      return (
        <tr key={this.props.id}>
              <td><textarea id="editTitle">{this.props.item.title}</textarea></td>
              <td>
                  <input type='date' id="editDate"
                      onChange={this.timestampChange}
                      placeholder='YYYY-MM-DD'
                      pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" value={this.props.item.timestamp}>
                  </input>
              </td>
              <td><textarea id="editDesc">{this.props.item.description}</textarea></td>
              <td>
                  <select id="editIncome">
                      <option value="income" selected={this.props.item.income == 'income'}>income</option>
                      <option value="expense" selected={this.props.item.income == 'expense'}>expense</option>
                  </select>
              </td>
              <td><textarea id="editAmount" onChange={this.onAmountChange}>{this.props.item.amount}</textarea></td>
              <td><Button onClick={this.edit}>Update</Button></td>
              <td><Button onClick={this.onDelete}>Delete</Button></td>
        </tr>
      );
  
    }
  
  }
  
  export default EditableListItem;