/* eslint-disable react/prop-types */
import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const TvCart = ({tv}) => {
   const {id,brand,model_name,image}=tv
    useEffect(()=>{
        Aos.init({duration: 1000});
        },[]) 
    return (
        <div className="mt-24" >
        <div data-aos="zoom-out-down"
             className="card w-full bg-base-100 shadow-xl ">
          <figure><img className='h-64' src={image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Model: {model_name}</h2>
            <p >Features:{brand}</p>
            <div className="card-actions justify-end">
           <Link to={`/tv/${id}`}>
           <button className="btn btn-primary w-full">See Details</button>
           </Link>
            </div>
          </div>
        </div>
        {/* <p>lkjlfjsskadf</p> */}
                </div>
    );
};

export default TvCart;