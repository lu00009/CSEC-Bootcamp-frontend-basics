import React from 'react'
import logo from '../assets/jobsphere.svg'

const Navbar = () => {
  return (
      <div className='bg-[#FFFFFF] flex  w-full h-[75.28px] pt-[20px] pb-[10px] pr-[50px] pl-[50px] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] fixed'>
        <div className='bg-[#0034D1] w-[130px] h-[51px] rounded-[9.56px] p-[4.79px] left-7 '>
        <img src={logo}/>
        </div>
        <div className='flex w-[625px] h-[49px] gap-[24px]'>
          <div className='w-[120px] h-[29px] p-[10px] gap-[4px] font-[600] text-[17px] leading-[24.2px] text-[#0034D1]'>Job Search</div>
          <div className='w-[150px] h-[24px] p-[10px] gap-[4px] font-[400] text-[17px] leading-[24.2px]'>My Application</div>
          <div className='w-[106px] h-[24px] p-[10px] gap-[4px] font-[400] text-[17px] leading-[24.2px]'>Companies</div>
          <div className='w-[107px] h-[24px] p-[10px] gap-[4px] font-[400] text-[17px] leading-[24.2px] '>Contact Us</div>
        </div>
        <div className='flex w-[300px] h-[48px] gap-[24px]'>
          <div className=' bg-[#0034D1] w-[100px] h-[38px] pt-[5px] pr-[37px] pb-[10px] pl-[20px] rounded-[8px]' ><button className='w-[53px] h-[16px] font-[600] text-[17px] leading-[16px] OpenSans text-[#FFFFFF]'>Login</button> </div>
          <div className='w-[110px] h-[38px] pt-[5px] pr-[37px] pb-[10px] pl-[20px] rounded-[8px] border-[1px] border-[#0034D1]'><button className='w-[65px] h-[16px] font-[600] text-[17px] leading-[16px] OpenSans text-[#2F2F2F]'>Sign In</button></div>
          
        </div>
      </div>
    
  )
}

export default Navbar
