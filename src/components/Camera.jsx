import { useLoaderData } from "react-router-dom";
import CameraCart from "./CameraCart";

const Camera = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div className="grid grid-cols-3">
           {
            data?.map(camera=><CameraCart
            key={camera.id}
            camera={camera}
            ></CameraCart>)
           }
        </div>
    );
};

export default Camera;