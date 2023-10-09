import { useLoaderData } from "react-router-dom";
import TvCart from "./TvCart";

const Tv = () => {
    const tv = useLoaderData()
    console.log(tv)
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
         tv?.map(tv=><TvCart
         key={tv.id}
         tv={tv}
         ></TvCart>)
        }
     </div>
    );
};

export default Tv;