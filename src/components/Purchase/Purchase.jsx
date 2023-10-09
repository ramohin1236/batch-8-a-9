import { useEffect } from "react";
import { useState } from "react";
import PurchaseCart from "./PurchaseCart";


const Purchase = () => {
   
    const [purchase, setPurchase]=useState([])
    const [datafound, setDatafound]=useState(false)

    const handleDeleteAll =()=>{
        localStorage.clear()
        setPurchase([])
        setDatafound("Data no found")
    }

  
   
    useEffect(()=>{
        const purchaseCart=JSON.parse(localStorage.getItem('purchase'))
       

        if(purchaseCart){
            setPurchase(purchaseCart)
        }
        else{
            setDatafound("Data no found")
        }

    },[])
    return (
        <div>
        <div className="">

          

        {
           datafound ? <p className="h-[80vh] flex justify-center items-center text-5xl font-bold">{datafound}</p>
           :
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-12 gap-5 mb-28">
                 
                {purchase.map(pr=><PurchaseCart 
                   key={pr.id}
                   pr={pr}
                   ></PurchaseCart>)} 
                  
            </div>
        } 

<div className="text-center mb-20">
           <button 
             onClick={handleDeleteAll}
             className="btn bg-purple-600 mt-10 ">Delete All</button>  
           
          </div>
           </div> 
              
   </div>
    );
};

export default Purchase;