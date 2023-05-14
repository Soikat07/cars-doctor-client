import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-3/4 relative">
          <img className="w-3/4 rounded-lg shadow-2xl" src={person} alt="" />
          <img
            className="w-1/2 absolute top-1/2 right-5 border-8 border-white
          rounded-lg shadow-2xl"
            src={parts}
            alt=""
          />
        </div>
        <div className="lg:w-3/4">
          <h4 className="text-[#FF3811] font-bold text-lg">About Us</h4>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className='py-6 text-gray-600'>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white border-none">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;