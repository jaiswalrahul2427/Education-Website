import React from 'react'
import {FaArrowRight } from 'react-icons/fa'
import './Home.css'
function Home() {
  return (
    <div className='flex items-center justify-center text-white hero'>
      <div className='text-center '>
        <h1 className='text-6xl font-semibold font-outfit'>We Ensure better education <br /> for a better world</h1>
        <p className='mt-5 '>Out cutting-edge curriculum is designed to empower stident with the knowledge,skills, and <br /> experience needed to excel in the dynamic field of education</p>
        <button className='px-4 py-3 mt-5 text-xl font-thin text-black bg-white border-none outline-none cursor-pointer item-center rounded-xl'>
        <a href="" className='flex items-center'>
          Explore more <FaArrowRight className='ml-2 text-xl font-thin text-gray-800'/>
        </a>
      </button>

      </div>
    </div>
  )
}

export default Home
