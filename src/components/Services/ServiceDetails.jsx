
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {

    const [selectedService,setSelectedService]=useState([])

    const services= useLoaderData();
    const { id } = useParams();
    const paramsId = parseInt(id)

    useEffect(() => {
        const details = services.find((srvc) => srvc.id == paramsId);
        // console.log(details);
        setSelectedService(details)
    }, [services, paramsId])
    console.log(paramsId,selectedService)
     
    return (
        <div>
            <div className="mt-6">
                <img className="w-full md:h-[350px] lg:h-[550px]" src={selectedService.photo_url} alt="" />
                <div className="mt-12">
                <p className="text-5xl font-bold text-center mb-4">{selectedService.category_name}</p>
                <p className="text-lg font-bold text-center">{selectedService.description}</p>
                <p className="text-lg font-semibold mb-4 ml-6">Type:{selectedService.Type}</p>
                <p className="text-lg font-semibold mb-4 ml-6">Size:{selectedService.Size}</p> 
                <p className="text-lg font-semibold mb-4 ml-6">Weight:{selectedService.Weight}</p> 
                <p className="text-lg font-semibold ml-6">Wi-Fi:{selectedService.Wi_Fi}</p> 
               <p className="text-3xl ml-6 mb-24 mt-6">Price: {selectedService.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;