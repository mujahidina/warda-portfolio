import React from "react";



function Home() {



    return (
      <div className="flex flex-col">


          <div className="flex flex-row w-full min-h-screen bg-black items-center text-white" >
            <div className="Homeleft ml-16 flex flex-col  w-1/2 h-full">
                <h1 className="text-2xl">Hey,  im <span className="font-bold">WARDO ABDI</span></h1>
                <h1 className="text-white text-5xl font-extrabold">Cloud Security Analyst</h1>
                <p className="text-2xl">Driven by the challenge of safeguarding cloud infrastructure</p>
                <p className="text-2xl">and enhancing user trust.</p>
                <button className="mt-8 p-2 w-48 font-medium bg-red-500 text-white rounded hover:bg-white hover:text-black">Download Resume</button>
            </div>

            <div className="HomeRight w-1/2 h-full ">
               <img src='w1.png' className="m-auto" alt="hero" />
            </div>
        </div>

        
      </div>
    );
}

export default Home;
