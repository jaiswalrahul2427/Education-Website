import React from 'react'
import gallery_1 from "../../assets/gallery_1.png"
import gallery_2 from "../../assets/gallery_2.png"
import gallery_3 from "../../assets/gallery_3.png"
import gallery_4 from "../../assets/gallery_4.png"
import { FaArrowRight } from 'react-icons/fa'

function Gallery() {
  return (
    <div className='pt-16 px-[10%]'>
      <h1 className='text-xl font-semibold text-center text-blue-700 font-poppins' >GALLERY</h1>
      <h2 className='pt-2 text-3xl font-bold text-center font-outfit text-blue-950'>Campus Photos</h2>
      <div className='grid grid-cols-2 gap-6 pt-16 md:grid-cols-4 '>
        <img className='rounded-xl' src={gallery_1} alt="pic" />
        <img className='rounded-xl' src={gallery_2} alt="pic" />
        <img className='rounded-xl' src={gallery_3} alt="pic" />
        <img className='rounded-xl' src={gallery_4} alt="pic" />
      </div>

      <button className='flex items-center gap-2 px-5 py-3 m-auto mt-10 mb-5 text-center text-white bg-blue-800 border-none cursor-pointer rounded-3xl font-outfit '>See more here <FaArrowRight></FaArrowRight> </button>
    </div>
  )
}

export default Gallery
