import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://cars-doctor-server-seven.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="mt-6">
      <div className="text-center">
        <h4 className="text-2xl font-bold text-orange-600">Services</h4>
        <h2 className="text-4xl font-semibold mb-3">Our Service Area</h2>
        <p className="text-gray-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{' '}
        </p>
      </div>
      <div className="grid grid-cols-3">
        {services.map(service => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
