import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Searchbar = () => {
  return (
        <div className='z-5 fixed w-[500px] h-[38px] top-[90px] left-[300px] rounded-[20px] border-[1px] flex  pt-[9px] pr-[12px] pb-[9px] pl-[12px] bg-[#FFFFFF] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25) '>
            <div className='w-[308px] h-[24px] flex'>
            <CiSearch className='w-24px h-24px'/>
          <input type="text" placeholder='Job title, Keywords, or Company name..' className='w-[184px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000]' />
          </div>
          <div className='w-[208px] h-[24px] flex'>
          <IoLocationOutline className='w-[12px] h-[16px] top-0px left-2px' />
          <input type="text" placeholder='Location' className='w-[184px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000]'/>
          </div>
          <div className='w-[80px] h-[28px] rounded-[8px] pt-[2px] pr-[14px] pb-[10px] pl-[14px] gap-[4px] bg-[#0034D1] '>
        <button className=' font-[600] text-[17px] leading-[14px] text-[#FFFFFF]'>Search</button>
        </div>
           </div>
  )
}

export default Searchbar
