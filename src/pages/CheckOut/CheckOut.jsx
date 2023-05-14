import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, price, img } = service;

  const handleCheckOut = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const number = form.number.value;
    const booking = {
      customerName: name,
      date,
      email,
      number,
      img,
      price: price,
      service: title,
      service_id: _id,
    };
    console.log(booking);
    fetch('https://cars-doctor-server-seven.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('Order placed successfully');
        }
      });
  };
  return (
    <div>
      <h2 className="text-center text-3xl my-5">Book Service: {title}</h2>
      <form onSubmit={handleCheckOut} className="p-20 border my-5 bg-zinc-100">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="text"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              type="number"
              placeholder="number"
              name="number"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control my-6">
          <input
            className="btn btn-block bg-[#FF3811] border-none"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
