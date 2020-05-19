import React from 'react';
function Header (){
    return (<thead>
        <tr>
            <td>S.No</td>
            <td>Title</td>
            <td>Date</td>
            <td>Description</td>
            <td>Income/Expense</td>
            <td>Amount</td>
        </tr>
    </thead>)
}
const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;
