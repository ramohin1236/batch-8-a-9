import Aos from 'aos';
import 'aos/dist/aos.css'
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ExpoCart = ({ex}) => {

    useEffect(()=>{
        Aos.init({duration: 900});
        },[])  

    const {title,description,photo_url}=ex

    return (
        <div data-aos="zoom-out-down" className="card w-full card-compact bg-base-100 shadow-xl">
        <figure><img className='h-96' src={photo_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p >{description}</p>
          
        </div>
      </div>
    );
};


ExpoCart.propTypes={
    ex:PropTypes.object
 }

export default ExpoCart;