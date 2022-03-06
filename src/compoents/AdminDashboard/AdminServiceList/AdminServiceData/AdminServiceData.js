import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AdminServiceData = ({order}) => {

    // const [status, setStatus] = useState();
    const [value, setValue] = useState();

    const handleSetStatus = () =>{
        const data = {value, order}
        fetch('https://safe-inlet-61017.herokuapp.com/orders', {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(data)
        })
        .then(res=>res.json())
    }

    const styles ={
        width: "67%",
        border: 'none',
        backgroundColor: 'transparent',
    }

    return (
        <tbody>
           <tr>
               <td>{order.orderName}</td>
               <td>{order.orderEmail}</td>
               <td>{order.orderCategory}</td>
               <td style={{width:"24%"}}>{order.orderDetails}</td>
               <td>
               <Form.Select 
               onBlur={handleSetStatus}
               onChange={e=>setValue(e.target.value)}
               style={styles}
               defaultValue={order.status}
               >
                   <option className="text-danger" value="Pending">Pending</option>
                   <option className="text-warning" value="Ongoing">Ongoing</option>
                   <option className="text-success" value="Done">Done</option>
               </Form.Select>
               </td>
           </tr>
       </tbody>
    );
};

export default AdminServiceData;