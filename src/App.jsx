import './App.css'
import { image, image2, image3, image4 } from "./assets/expors";
import profile from "./assets/profile.jpg";
import { useState } from 'react'
import {motion } from "framer-motion"



function App() {


  const [mode , setMode] = useState("light")
  const Links=[
    "Home",
    "About",
    "Contact",
    "Services",
  ]

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }



   const images = [image, image2, image3, image4];
   const [active, setActive] = useState(0);
   const changeActive = (image) => {
      setActive(image);
    }
  return (
    <div className="w-full bg-[#131627] flex flex-col items-center justify-center min-h-screen">
      <div className="w-[500px] h-[500px] bg-[#2958c6]/30 absolute -bottom-20 rounded-full right-32 filter blur-3xl"></div>
      <div className="w-[700px] h-[500px] bg-[#2958c6]/30 absolute -bottom-32 rounded-full left-20 filter blur-3xl"></div>
      <div className="flex fixed top-16 right-40 ">
        {mode === "light" ? (
          <svg
            onClick={toggleMode}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            onClick={toggleMode}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </div>
      <nav className=" w-[60%] lg:w-[30%] fixed top-10 flex justify-between items-center px-4 py-2 bg-[#28326940] rounded-full shadow-md border border-[#5564b98f] backdrop-blur-sm">
        <div className="flex  relative justify-between items-center gap-2">
          <img
            src={profile}
            className="w-10 h-10 cursor-pointer  rounded-full bg-[#5564b98f] border border-[#5564b98f]"
          />
        </div>
        <div className="hidden md:flex gap-4 text-white">
          {Links.map((link, index) => (
            <h1 key={index}>{link}</h1>
          ))}
        </div>
        <button className=" h-full py-2 rounded-full px-6 bg-[#5564b98f] text-white">
          Login
        </button>
      </nav>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
        className="w-80 rounded-2xl shadow-md border border-[#5564b98f] backdrop-blur-sm bg-[#28326940] flex flex-col gap- justify-start items-start p-2"
      >
        <div className="relative   w-full p-5   overflow-hidden ">
          <img
            className=" w-full rounded-lg h-auto"
            src={images[active]}
            alt=""
          />
          <div className="w-8 cursor-pointer h-8 rounded-full flex justify-center items-center bg-white absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-slate-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="w-full grid-cols-5 p-5 grid gap-3 place-items-start">
          <div className="rounded-md relative cursor-pointer col-span-1 w-full h-full aspect-square flex justify-center bg-slate-100 items-center ">
            <label
              className="absolute  cursor-pointer top-0 left-0 w-full h-full z-30 flex justify-center items-center"
              htmlFor="file"
            ></label>
            <input
              id="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer hidden z-40"
              type="file"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-slate-600 z-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </div>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => changeActive(index)}
              className={`rounded-md col-span-1 cursor-pointer  w-full h-full aspect-square flex justify-center bg-slate-100 items-center ${
                active === index ? "border-2 border-[#5564b98f]" : ""
              }`}
            >
              <img
                className="w-full rounded-md  h-full object-cover"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
export default App
