import Aos from 'aos';
import 'aos/dist/aos.css'
import PropTypes from 'prop-types';
import { useEffect } from 'react';
const Semener = ({con}) => {

    useEffect(()=>{
        Aos.init({duration: 900});
        },[])  

    const {title,description,photo_url}=con
    return (
        <div data-aos="zoom-out-down" className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='h-96' src={photo_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p>{description}</p>
          
        </div>
      </div>
    );
};


Semener.propTypes={
    con:PropTypes.object
 }
export default Semener;