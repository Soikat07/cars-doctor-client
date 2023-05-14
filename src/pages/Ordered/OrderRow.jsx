

const OrderRow = ({ order, handleDelete,handleOrderStatus }) => {
  const { _id, img, date, price, service,status } = order;
  
  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-12 h-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        {status === 'Confirm'
          ?
          <span className="text-blue-700 font-bold">Confirmed</span>
          :
          <button onClick={() => handleOrderStatus(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
      </th>
    </tr>
  );
};

export default OrderRow;