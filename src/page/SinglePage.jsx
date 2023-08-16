import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import {GoArrowRight} from "react-icons/go"
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from "../action/cartActions";
import { addSavat } from "../Redux/appSlice";

function SinglePage() { 
  
  const { state } = useLocation();
  const dispatch = useDispatch()
  const [active, setActive] = useState(null);
  const Navigate = useNavigate()

  const notify = () => toast.success("Item added to cart!", {
    position: toast.POSITION.TOP_CENTER
});



const [toCart, setToCart] = useState({
    title: state.data.attributes.title,
    company: state.data.attributes.company,
    color: state.data.attributes.colors[0],
    count: 1,
    price: state.data.attributes.price,
    img: state.data.attributes.image,
    id: new Date().valueOf()
})


useEffect(() => {
    setToCart({ ...toCart, color: active })
}, [active])

function addTOCard() {
    notify()
    dispatch(addSavat(toCart))
}       

  return (
    <div>
        <ToastContainer position="top-right" />
      <Navbar></Navbar>
      <div className="flex gap-2 items-center absolute top-32 left-40">
          <button className="text-black dark:text-white" onClick={()=>Navigate("/")}>Home</button>
          <GoArrowRight></GoArrowRight>
          <button className="text-black dark:text-white" onClick={()=>Navigate("/product")}>Products</button>
        </div>
      <div  className="container w-[80%] mt-14  mx-auto   grid grid-cols-2 items-center 
      justify-center max-lg:grid-cols-1  mx-auto">
       
        <img
          className="w-[500px] relative rounded-xl h-[500px]"
          src={state.data.attributes.image}
          alt=""
        />
        <div>
          <h1 className="text-5xl text-[#394E6A] dark:text-white mb-3 font-bold">
            {state.data.attributes.title[0].toUpperCase() +
              state.data.attributes.title.slice(1)}
          </h1>
          <p className="text-2xl font-bold mb-3 text-[#C7C9D1] dark:text-white">
            {state.data.attributes.company}
          </p>
          <p className="text-xl text-[#394E6A] dark:text-white mb-2">
            ${state.data.attributes.price}
          </p>
          <p className="text-slate-600 dark:text-white text-lg mb-2">
            {state.data.attributes.description}
          </p>
          <p className="mb-2 text-lg text-black dark:text-white">Colors:</p>
          {state.data.attributes.colors.map((col, idx) => (
            <div  key={idx}>
            <button
              onClick={() => {
                setActive(col);
              }}
              className={` ${
                active === col ? "border-[2px] border-black" : ""
              } w-[25px] mx-1 h-[25px] border-1px   rounded-full`}
              style={{ backgroundColor: col }}
            ></button>
            </div>
          ))}
          <div>
            <p className="mb-2 text-lg text-black dark:text-white">Amount</p>
            <select className="w-[40%] p-2 h-[20%] border-[2px] mb-10 rounded-lg border-black dark:border-[#AA73F7]
            bg-white dark:bg-[#272935] text-black dark:text-white">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <button onClick={() => addTOCard()}className="bg-[#3B3187] dark:bg-[#BF95F9] text-[#DBC2CF] dark:text-black px-4 mb-6 text-[#DBCFEA] rounded-lg py-3">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
