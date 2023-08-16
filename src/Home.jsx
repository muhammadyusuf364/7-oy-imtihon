import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import img from "./img.png";
function Home() {
  const [data,setData] = useState([])
   const Navigate = useNavigate()
  useEffect(()=>{
    axios.get('https://strapi-store-server.onrender.com/api/products?featured=true')
    .then(res => {
      setData(res.data.data)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div>
      <Navbar></Navbar>
      <div className="container w-[80%] mx-auto mt-10 ">
        <div className="lg:grid grid-cols-2">
          <div className="mt-11">
            <h1 className="text-7xl font-bold text-[#394E6A] dark:text-[#F8F8F2] mb-10">We’re changing the way people shop.</h1>
            <p className="text-lg text-[#394E6A] dark:text-[#F8F8F2]  mb-8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo.
            </p>
            <button className="bg-[#0069E0]  text-[#DBE1FF] dark:bg-[#FF57B6] dark:text-[#301C27]  mb-10 py-4 px-8 rounded-xl" onClick={()=>Navigate("/product")}>OUR PRODUCTS</button>
          </div>
         <div>
          <Slider></Slider>
         </div>
        </div>

        <div>
          <h1 className="mb-4 text-4xl text-[#394E6A] dark:text-[#F8F8F2] font-bold">Featured Products</h1>
          <hr className="mb-10" />

          <div className='cursor-pointer grid grid-cols-[repeat(auto-fit,minmax(auto,380px))] mb-10 mx-auto justify-center  gap-3 p-5'>
          {
            data.map(data => {
              return <div key={data.id}  onClick={()=>Navigate("/single", {state:{data:data}})} className='text-center shadow-[#cfc5c5f8] shadow-xl dark:shadow-[#232530] p-5 rounded-lg '>
                <img src={data.attributes.image} className='rounded-lg h-[300px] w-full' alt="" />
                <p className="text-black dark:text-white">{data.attributes.title[0].toUpperCase() +
                  data.attributes.title.slice(1)}</p>
                <span className="text-black dark:text-[#A694F9]">${data.attributes.price}</span>
              </div>
            })
          }
        </div>
        </div>
      </div>


        
    </div>
  );
}

export default Home;
