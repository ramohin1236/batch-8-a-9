import Aos from 'aos';
import 'aos/dist/aos.css'
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({service}) => {
   
   
    useEffect(()=>{
        Aos.init({duration: 1000});
        },[])  
    
   
    const {id,category_name,description,photo_url}=service
    return (
        <div >
<div data-aos="zoom-out-down"
     className="card w-full bg-base-100 shadow-xl ">
  <figure><img className='h-64' src={photo_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{category_name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
   <Link to={`/details/${id}`}>
   <button className="btn btn-primary w-full">See Details</button>
   </Link>
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