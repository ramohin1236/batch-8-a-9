import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CameraDetails = () => {
    const [slectedCamera,setslectedCamera]=useState([])

    const camera= useLoaderData();
    console.log(camera)
    const { id } = useParams();
    const paramsId = parseInt(id)

    useEffect(() => {
        const details = camera.find((cam) => cam.id == paramsId);
        // console.log(details);
        setslectedCamera(details)
    }, [camera, paramsId])
    console.log(paramsId,slectedCamera)
    return (
        <div>
        <div className="mt-6">
            <img className="w-full md:h-[350px] lg:h-[550px]" src={slectedCamera.photo_url} alt="" />
            <div className="mt-12">
            <p className="text-5xl font-bold text-center mb-4">{slectedCamera.category_name}</p>
            <p className="text-lg font-bold text-center">{slectedCamera.description}</p>
            <p className="text-lg font-semibold mb-4 ml-6">Type:{slectedCamera.Type}</p>
            <p className="text-lg font-semibold mb-4 ml-6">Size:{slectedCamera.Size}</p> 
            <p className="text-lg font-semibold mb-4 ml-6">Weight:{slectedCamera.Weight}</p> 
            <p className="text-lg font-semibold ml-6">Wi-Fi:{slectedCamera.Wi_Fi}</p> 
           <p className="text-3xl ml-6 mb-24 mt-6">Price: {slectedCamera.price}</p>
            </div>
        </div>
    </div>
    );
};

export default CameraDetails;