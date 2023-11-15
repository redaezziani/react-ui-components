
import './App.css'
import image from './assets/image-1.jpg'
import image2 from './assets/image-2.jpg'
import image3 from './assets/image-3.jpg'
import image4 from "./assets/image-4.jpg";
import { useState } from 'react'
import {motion, AnimatePresence } from "framer-motion"

function App() {
   const images = [image, image2, image3, image4];
   const [currentImage, setCurrentImage] = useState(images[0]);
   const [active, setActive] = useState(0);
   const changeActive = (image) => {
      setActive(image);
      setCurrentImage(image);
    }

  return (
    <div className="w-full bg-slate-100 flex flex-col items-center justify-center min-h-screen">
      <motion.div
      initial={{ scale: .5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.2 }}
      
      className="w-80 rounded-2xl shadow-md bg-white flex flex-col gap- justify-start items-start p-2">
        <div className="relative   w-full p-5   overflow-hidden ">
          <img className=" w-full rounded-lg h-auto"
          src={images[active]}
          alt="" />
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
          <div className="rounded-md cursor-pointer col-span-1 w-full h-full aspect-square flex justify-center bg-slate-100 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-slate-600"
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
              className={`rounded-md col-span-1 cursor-pointer  w-full h-full aspect-square flex justify-center bg-slate-100 items-center ${ active === index ? 'border-2 border-blue-500' : ''}`}
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
