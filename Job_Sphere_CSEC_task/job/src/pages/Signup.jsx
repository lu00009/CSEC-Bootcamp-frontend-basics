import React from "react";
import logo from "../assets/jobsearch.svg";
import logo2 from "../assets/jobsphere.svg";
const Login = () => {
  return (
    <div className="flex gap-28">
      <div className="flex-col content-center ml-26">
        <div className="bg-[#0034D1] w-[100px] h-[45 px] rounded-[9.56px] p-[4.79px] mt-10 ">
          <img src={logo2} className="" />
        </div>
      <div className="mt-6">
        {" "}
        <h3 className="font-bold text-2xl">Create your account</h3>
      </div>
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5 ">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="First name" className="pl-1" />
      </div>
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Last name" className="pl-1" />
      </div>
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="email" className="pl-1" />
      </div>
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Password" className="pl-1" />
      </div>
      <div  className="mt-6 w-[320px] h-[30px] border-[1px] rounded-[6px] outline-none p-0.5">
        {" "}
        <img src="" alt="" />
        <input type="text" placeholder="Confirm Password" className="pl-1" />
      </div>
      <div className="w-[320px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[25px] pl-[100px] gap-[4px] bg-[#0034D1]  mt-6 ">
        <button className="text-white top-[6px] left-[47px] font-[500] text-[18px] leading-[21.78px]"
        >Create account</button>
      </div>
      <div  className="  flex justify-between">
        <hr className="w-[120px] mt-6" /><h4 className="mt-4">OR</h4>
        
        <hr className="w-[120px] mt-6 "/>
      </div>
      <div className="flex gap-2 m-6">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="flex mt-6"><h4 className="font-bold">Already have an account?</h4>
      <a href="">Login</a></div>
      
    </div>
    <div className="w-[650px] bg-gray-300 h-[588px] ml-5">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Login;
