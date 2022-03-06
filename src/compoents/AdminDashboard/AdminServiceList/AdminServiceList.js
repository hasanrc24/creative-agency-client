import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './AdminServiceList.css';
import CircularProgress from '@mui/material/CircularProgress';
import AdminServiceData from './AdminServiceData/AdminServiceData';

const AdminServiceList = () => {
    useEffect(()=>{
        document.title = "Services list"
    })

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch('https://safe-inlet-61017.herokuapp.com/orders')
            .then(res=>res.json())
            .then(data=>{
                setOrders(data);
                setLoading(false);
            })
    }, [])        

    return (
        <div>
            <div className="mt-4 mb-4 px-5">
                <h4>Services list</h4>
            </div>
            <div className="admin-service-list">
                <div className="service-list-bg">
                    <Table className="service-list-table" responsive hover>
                        <thead className="service-list-th">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {
                            orders.map((order, index) => <AdminServiceData order={order} key={index} />)
                        }
                    </Table>
                    <div className="text-center">{loading && <CircularProgress />}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;