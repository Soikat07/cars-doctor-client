import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import OrderRow from './OrderRow';
import { useNavigate } from 'react-router-dom';

const Ordered = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://cars-doctor-server-seven.vercel.app/bookings?email=${user.email}`;
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setOrders(data);
        } else {
          navigate('/');
        }
      });
  }, []);

  const handleDelete = id => {
    const proceed = confirm('Are you really want to delete?');
    if (proceed) {
      fetch(`https://cars-doctor-server-seven.vercel.app/bookings/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleOrderStatus = id => {
    fetch(`https://cars-doctor-server-seven.vercel.app/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then(res => res.json({ status: 'Confirm' }))
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update state
          const remaining = orders.filter(order => order._id !== id);
          const updated = orders.find(order => order._id === id);
          updated.status = 'Confirm';
          const newOrder = [updated, ...remaining];
          setOrders(newOrder);
        }
      });
  };
  return (
    <div>
      <h3 className="text-center text-3xl my-10">My orders: {orders.length}</h3>
      <div className="overflow-x-auto w-full mb-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Coast</th>
              <th>Place Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleOrderStatus={handleOrderStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ordered;
