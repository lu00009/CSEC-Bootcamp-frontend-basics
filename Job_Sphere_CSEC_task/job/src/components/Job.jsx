import React from 'react'
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

const Job = (prop) => {
  return (

    <div className='  flex gap-2 p-2.5 '>
      
      <div className='w-[53px] h-[153px]'>
      <img src={prop.img} alt="" /></div>

   <div> <div className='flex justify-between w-[400px]'>
      <div className='font-bold'><h2>{prop.title}</h2></div>
      <div className='flex'>
      <div><button onClick={()=>prop.handleBookmark(prop.id)}> {prop.isBookMarked?<IoBookmark/>:<CiBookmark />}</button>
      </div>
      <div><CiShare2 />
      </div>
      </div>
      
    </div>
    <h4>{prop.company}</h4>
    <div className='gap-3'>
      <button>{prop.location}</button>
      <button>{prop.job_type}</button>
      <button>{prop.salary}</button>
    </div></div>
   
  </div>
  )
}

export default Job
