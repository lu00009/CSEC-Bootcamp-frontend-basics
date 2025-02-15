import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

const Job = (prop) => {
  return (
    <div className="  flex gap-2 p-2.5 ">
      <div className="w-[53px] h-[153px]">
        <img src={prop.img} alt="" />
      </div>

      <div>
        {" "}
        <div className="flex justify-between w-[400px] mt-3">
          <div className="font-[600] text-[28px] leading-[38px] Inter">
            <h2>{prop.title}</h2>
          </div>
          <div className="flex">
            <div>
              <button onClick={() => prop.handleBookmark(prop.id)}>
                {" "}
                {prop.isBookMarked ? <IoBookmark /> : <CiBookmark />}
              </button>
            </div>
            <div>
              <CiShare2 />
            </div>
          </div>
        </div>
        <h4 className="font-[400] Inter text-[18px] leading-[24.2px]">
          {prop.company}
        </h4>
        <div className="flex gap-[10px] mt-3">
          <div>
            {" "}
            <button className="p-[4px] rounded-[4px] bg-gray-200 text-[14px] text-gray-700'">
              {prop.location}
            </button>
          </div>
          <div>
            {" "}
            <button className="p-[4px] rounded-[4px] bg-gray-200 text-[14px] text-gray-700'">
              {prop.job_type}
            </button>
          </div>
          <div>
            {" "}
            <button className="p-[4px] rounded-[4px] bg-gray-200 text-[14px] text-gray-700'">
              {prop.salary}
            </button>
          </div>
          <div>
            {" "}
            <button className="p-[4px] rounded-[4px] bg-gray-200 text-[14px] text-gray-700'">
              {prop.experienceLevel}
            </button>
          </div>
          <div>
            {" "}
            <button className="p-[4px] rounded-[4px] bg-gray-200 text-[14px] text-gray-700'">
              {prop.currency}
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h5 className="Inter font-[200] text-[14px] leading-[19.4px]">
            {prop.description}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Job;
