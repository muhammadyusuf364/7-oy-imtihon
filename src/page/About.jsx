import React from "react";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="text-center mt-14">
          <h1 className="text-5xl mb-10 font-bold text-[#394E6A]">We love <span className="bg-[#057AFF] rounded-xl px-4 py-2 text-center text-[#DBE1FF]">comfy</span></h1>
          <p className="text-[#3975B7] text-xl text-left mx-auto w-[50%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam odit, officiis eos mollitia alias, doloremque, aspernatur ratione asperiores voluptas labore minus dolores reprehenderit corporis quos. Assumenda molestias harum dignissimos?</p>
        </div>
      </div>
    </div>
  );
}

export default About;
