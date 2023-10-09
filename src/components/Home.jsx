import { useEffect, useState } from "react";
import ServiceCart from "./Services/ServiceCart";
import Semener from "./Semener/Semener";
import ExpoCart from "./Expo/ExpoCart";
import Ceremony from "../ceremony/Ceremony";
import NewProduct from "../NewProduct/NewProduct";
import Marquee from "react-fast-marquee";
import img from "/public/background.jpg"



const Home = () => {
    const [service,setService]=useState([])
    const [conference,setConference]=useState([])
    const [expo,setExpo]=useState([])
    const [ceremony,setCeremony]=useState([])
    const [comingSoon,setComingSoon]=useState([])
   
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
    useEffect(()=>{
        fetch('/show.json')
        .then(res=>res.json())
        .then(data=>setExpo(data))
    },[])
    useEffect(()=>{
        fetch('/ceromony.json')
        .then(res=>res.json())
        .then(data=>setCeremony(data))
    },[])
    useEffect(()=>{
        fetch('/coming.json')
        .then(res=>res.json())
        .then(data=>setComingSoon(data))
    },[])

    return (
       <div>
        <section>
        {/* style={{backgroundImage: 'url(../../images/background.jpg)'}} */}
         <div className="mt-10 rounded-lg hero " >
            <img className="w-full lg:h-[540px]" src={img} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">ProElectra</h1>
            <small className="ml-44 font-semibold text-sm">Smart world with smart technology</small>

              <p className="mt-10">Welcome to our digital realm, where innovation knows no bounds. We believe in the power of technology to shape a brighter future, and our mission is to be your guiding star on this transformative journey. At <span className="font-bold">ProElectra</span>, we are not just enthusiasts; we are trailblazers in the world of tech.</p>
        

          </div>
        </div>
      </div>
       </section>

       {/* service section */}

       <section className="mt-24">
        <h1 className="text-5xl font-bold text-center mb-16">Our Services Product</h1>
        <Marquee pauseOnHover='true' speed={120} className="text-2xl border py-10 mb-6 font-bold text-blue-600">
            Please login first and go to <span className="text-4xl text-purple-500 mx-2">category</span> and get more products
          </Marquee>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
   
                {conference.map(con=><Semener
                key={con.id}
                con={con}
                ></Semener>)}
              </div>
          </div>

          {/* trade show and expo */}
          <section className="mt-24 ">
          <h1 className="text-5xl font-bold text-center mb-16">Trade Shows and Expos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
               {expo.map(ex=><ExpoCart
               key={ex.id}
               ex={ex}
               ></ExpoCart>)}
          </div>
          </section>

          {/* ceremony sectionn */}
          <section className="mt-24 mb-24">
          <h1 className="text-5xl font-bold text-center mb-16"> Ceremonies</h1>
          <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ceremony.map(annual=><Ceremony
            key={annual.id}
            annual={annual}
            ></Ceremony>)}
          </div>
          </section>

          {/* coming soon section */}
          <section >
          <h1 className="text-5xl font-bold text-center mb-16">Launce Earlier</h1>
          <Marquee pauseOnHover='true' speed={150} className="text-2xl border py-10 mb-6 font-bold text-blue-600">
            This Product coming soon...
          </Marquee>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {comingSoon.map(coming=><NewProduct
            key={coming.id}
            coming={coming}
            >

            </NewProduct>)}
          </div>
          </section>
       </div>
    );
};

export default Home;