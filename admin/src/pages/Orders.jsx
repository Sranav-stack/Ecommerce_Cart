import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets'

export const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value },{headers:{token}});
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h3>Order Page</h3>
      {orders.map((order, index) => (
        <div key={index} style={{ marginBottom: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
          <div>
            <img className='w-12' src={assets.parcel_icon} alt="" />
            <div>
              {order.items.map((item, idx) => (
                <p className='py-0.5' key={idx}>
                  {item.name} x {item.quantity} <span> {item.size} </span>
                  {idx !== order.items.length - 1 ? ',' : ''}
                </p>
              ))}
            </div>
          </div>
          <p>{order.address.firstName + " " + order.address.lastName + ", "}</p>
          <div>
            <p>{order.address.street + ","}</p>
            <p>
              {order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}
            </p>
          </div>
          <p>{order.address.phone}</p>
          <div>
            <p>Items : {order.items.length}</p>
            <p>Method : {order.paymentMethod}</p>
            <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
            <p>Date : {new Date(order.date).toLocaleDateString()}</p>
          </div>
          <p>{currency}{order.amount}</p>
          <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='p-2 font-semibold' defaultValue={order.status}>
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivey">Out for delivey</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};


