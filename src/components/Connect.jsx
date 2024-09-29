import React, { useState } from "react";
import emailjs from "emailjs-com";

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const templateParams = {
      from_name: formData.name, 
      email: formData.email,
      message: formData.message,
    };
  
    emailjs
       .send(
        "service_m8326o3", 
        "template_ijbp2z7", 
        templateParams, 
        "LUP6ZN_tIziQ8Pdib" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };
  



  return (
    <div className="bg-red-500 h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-5xl font-extrabold mb-6 ">Let's Connect!</h1>
      <p className="mb-10 text-lg text-center max-w-md font-semibold">
        Feel free to drop me a message, I'd love to hear from you!
      </p>

      <form
        className="bg-white p-8 rounded-lg shadow-md text-black max-w-md w-full drop-shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 tracking-widest">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 tracking-widest">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 tracking-widest">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md h-32"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-bold hover:bg-red-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Connect;
