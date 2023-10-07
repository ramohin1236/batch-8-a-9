import Aos from "aos";
import { useEffect } from "react";
import PropTypes from 'prop-types';


const Ceremony = ({annual}) => {
    const {description,photo_url}=annual
    useEffect(()=>{
        Aos.init({duration: 900});
        },[]) 
    return (
        <div data-aos="zoom-out-down" className="card w-full card-compact bg-base-100 shadow-xl">
        <figure><img className='h-96' src={photo_url} alt="Shoes" /></figure>
        <div className="card-body">
         <p className="text-lg"> {description}</p>
          
        </div>
      </div>
    );
};

Ceremony.propTypes={
    annual:PropTypes.object
 }

export default Ceremony;