import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
  const {_id, img, price, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex justify-between">
          <h3 className="text-orange-500 font-bold">Price: ${price}</h3>
          <Link to={`/checkout/${_id}`} className="text-orange-500 hover:bg-orange-600 hover:rounded-full hover:p-2 hover:text-white text-xl">        
              <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
