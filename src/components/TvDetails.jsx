import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const TvDetails = () => {

    const [selectedTv,setselectedTv]=useState([])

    const tv= useLoaderData();
    const { id } = useParams();
    const paramsId = parseInt(id)

    useEffect(() => {
        const details = tv.find((dtv) => dtv.id == paramsId);
        // console.log(details);
        setselectedTv(details)
    }, [tv, paramsId])
    console.log(paramsId,selectedTv)
     

    return (
        <div>
        <div className="mt-6">
            <img className="w-full md:h-[350px] lg:h-[550px]" src={selectedTv.image} alt="" />
            <div className="mt-12">
            <p className="text-5xl font-bold text-center mb-4">{selectedTv.model_name}</p>
            <p className="text-lg font-bold text-center">{selectedTv.description}</p>
            <p className="text-lg font-semibold mb-4 ml-6">Brand:{selectedTv.brand}</p>
            <p className="text-lg font-semibold mb-4 ml-6">Size:{selectedTv.display_size}</p> 
           
           <p className="text-3xl ml-6 mb-24 mt-6">Price: {selectedTv.price}</p>
            </div>
        </div>
    </div>
    );
};

export default TvDetails;