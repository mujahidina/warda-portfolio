import React from "react";


function Navbar() {
    return (
     <div className="bg-black h-14 flex flex-row  top-0 w-full">
        <img src="wardo2.png" alt="logo" className="w-24 h-20 ml-16"/>

        <div className=" flex flex-row gap-10 ml-auto mr-28 my-auto tracking-wider font-medium text-white">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#aboutme">About Me</a>
          <a href="#connect">Let's Talk</a>
        </div>

     </div>
    )
}

export default Navbar;