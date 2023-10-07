import Aos from 'aos';
import 'aos/dist/aos.css'
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ServiceCart = ({service}) => {
   
   
    useEffect(()=>{
        Aos.init({duration: 1000});
        },[])  
    
   
    const {category_name,description,photo_url}=service
    return (
        <div >
<div data-aos="zoom-out-down"
     className="card w-full bg-base-100 shadow-xl ">
  <figure><img className='h-64' src={photo_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{category_name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">See Details</button>
    </div>
  </div>
</div>

        </div>

    );
};

ServiceCart.propTypes={
   service:PropTypes.object
}

export default ServiceCart;