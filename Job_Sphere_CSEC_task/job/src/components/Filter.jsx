import {useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

const Filter = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(2000);
  const minLimit = 20;
  const maxLimit = 2000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const minPercent = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <div className="pl-3.5 w-[30lvw] rounded-[8px] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25) h-[570px] border-[1px] border-[#000000]">
      <h2 className="ml-10 font-bold text-[22px]">Filter</h2>
      <div>
        <h3 className="mt-2">Date Posted</h3>
        <div className="flex justify-between pt-[7px] pr-[12px] pb-[7px] pl-[12px] bg-white border-[1px] rounded-[10px] h-[33px] w-[213px]">
          <button className="mb-3">Last 24 Hours</button>
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="mt-2.5">
        <h3 >Job Type</h3>
        <div className="rounded-[8px] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)  w-[213px] border-[1px] border-[#000000] pl-2 pt-2">
          <ul>
            {" "}
            <input type="checkbox" value="" name="check-1" />
            <label htmlFor="check-1">Full-time</label>
          </ul>
          <ul>
            <input type="checkbox" value="" name="check-2" />
            <label htmlFor="check-2">Part-time</label>
          </ul>
          <ul>
            <input type="checkbox" value="" name="check-3" />
            <label htmlFor="check-3">Internship</label>
          </ul>
          <ul>
            <input type="checkbox" value="" name="check-4" />
            <label htmlFor="check-4">Contract</label>
          </ul>
          <ul>
            <input type="checkbox" value="" name="check-5" />
            <label htmlFor="check-5">Volunteer</label>
          </ul>
        </div>
      </div>

      <div className="mt-2">
        <h3>Location</h3>
        <div className="flex justify-between drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25) border-[1px] border-black w-[213px]">
          <IoLocationOutline className="pt-1" />
          <input
            type="text"
            placeholder="Enter your Location"
            aria-label="Enter location"
            className="top-[6px] left-[37px] font-[300] text-[18px] leading-[21.78px]"
          />
        </div>
      </div>

      <div className="mt-2">
        <h3>Experiance Level</h3>
        <div className="flex justify-between drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25) border-[1px] border-black w-[213px]">
          <button className="top-[6px] left-[37px] font-[300] text-[18px] leading-[21.78px] pl-1">
            Intermidiet
          </button>
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="mt-2">
        <h3>Salary Range</h3>
        <div className="pl-3.5 w-[30lvw] rounded-[8px] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] h-[570px] border-[1px] border-[#000000]">
      <h2 className="ml-10 font-bold text-[22px]">Filter</h2>
      {/* Other filter components... */}

      <div className="mt-2">
        <h3>Salary Range</h3>
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4">
          {/* Range Inputs */}
          <div className="relative w-full">
            {/* Min Input */}
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={minValue}
              onChange={handleMinChange}
              className="absolute w-full h-1 appearance-none bg-transparent z-10"
              style={{ zIndex: minValue > maxValue - 100 ? 5 : 2 }}
            />
            {/* Max Input */}
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full h-1 appearance-none bg-transparent z-10"
              style={{ zIndex: 2 }}
            />

            {/* Slider Track */}
            <div className="relative w-full h-1 bg-blue-300 mt-6 rounded">
              <div
                className="absolute h-1 bg-blue-700 rounded transition-all duration-300"
                style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
              ></div>
            </div>

            {/* Draggable Knobs */}
            <div
              className="absolute top-3 h-5 w-5 bg-blue-700 rounded-full cursor-pointer transform -translate-x-1/2 z-20"
              style={{ left: `${minPercent}%` }}
            ></div>
            <div
              className="absolute top-3 h-5 w-5 bg-blue-700 rounded-full cursor-pointer transform -translate-x-1/2 z-20"
              style={{ left: `${maxPercent}%` }}
            ></div>
          </div>

          {/* Min & Max Values */}
          <div className="flex justify-between mt-3 text-gray-700 text-sm sm:text-base">
            <span>{minValue}</span>
            <span>{maxValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="mt-2">
        <h3>Input Manually</h3>
        <div className="flex justify-between w-[113px] ml-2 ">
          <div className="flex">
            <h4>From</h4>
            <input type="text" className="w-[20px] border-[1px] border-black" />
          </div>
          <div className="flex">
            <h4>To</h4>
            <input type="text" className="w-[20px] border-[1px] border-black" />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3>Currency</h3>
        <div className="flex justify-between drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25) border-[1px] border-black w-[213px]">
          <button className="pl-1">$Dollar</button>
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="w-[140px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[10px] pl-[30px] gap-[4px] bg-[#0034D1] ml-4 mt-2.5 ">
        <button className="text-white top-[6px] left-[37px] font-[300] text-[18px] leading-[21.78px]">
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
