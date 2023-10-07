import { useEffect, useState } from "react";
import ServiceCart from "./Services/ServiceCart";
import Semener from "./Semener/Semener";




const Home = () => {
    const [service,setService]=useState([])
    const [conference,setConference]=useState([])
   
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);

    useEffect(()=>{
        fetch('/conference.json')
        .then(res=>res.json())
        .then(data=>setConference(data))
    },[])

    return (
       <div>
        <section>
         <div className="mt-10 rounded-lg hero lg:h-[500px]" style={{backgroundImage: 'url(../../../../images/background.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">ProElectra</h1>
            <small className="ml-44 font-semibold text-sm">Smart world with smart technology</small>

              <p className="mt-10">"Welcome to our digital realm, where innovation knows no bounds. We believe in the power of technology to shape a brighter future, and our mission is to be your guiding star on this transformative journey. At <span className="font-bold">ProElectra</span>, we're not just enthusiasts; we're trailblazers in the world of tech.</p>
        

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
       </section>

       {/* service section */}

       <section className="mt-24">
        <h1 className="text-5xl font-bold text-center mb-16">Our Services Product</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.map(service=><ServiceCart
            service={service}
            key={service.id}
            ></ServiceCart>)}
         </div>
       </section>

       {/* conference and semener */}
          <div className="mt-24">
              <p className="text-5xl font-bold text-center mb-16"> Conferences and Seminars</p>
              <div>
   
                {conference.map(con=><Semener
                key={con.id}
                con={con}
                ></Semener>)}
              </div>
          </div>
       </div>
    );
};

export default Home;