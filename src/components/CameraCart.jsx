/* eslint-disable react/prop-types */
import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const CameraCart = (camera) => {
    console.log(camera.camera)
    const {id,category_name,photo_url,feature}= camera.camera

    useEffect(()=>{
        Aos.init({duration: 1000});
        },[]) 

    return (
        <div className="mt-24" >
        <div data-aos="zoom-out-down"
             className="card w-full bg-base-100 shadow-xl ">
          <figure><img className='h-64' src={photo_url} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Model: {category_name}</h2>
            <p >Features:{feature}</p>
            <div className="card-actions justify-end">
           <Link to={`/camera/${id}`}>
           <button className="btn btn-primary w-full">See Details</button>
           </Link>
            </div>
          </div>
        </div>
        {/* <p>lkjlfjsskadf</p> */}
                </div>
    );
};

export default CameraCart;