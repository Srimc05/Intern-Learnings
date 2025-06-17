"use client";
import React, { useState } from "react";
//import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (

      <div className="max-w-7xl mx-auto flex justify-between items-center mt-10">
      
        <div className="text-xl font-bold">MyApp</div>

       
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

       
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <button className="hover:text-blue-400">Home</button>
          <button className="hover:text-blue-400">Form</button>
          <button className="hover:text-blue-400">Post Office</button>
        </div>

        <div className="hidden md:block">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </div>
     
      
    
  );
};

export default Navbar;
