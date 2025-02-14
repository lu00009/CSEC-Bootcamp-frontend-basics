import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const Filter = (prop) => {
  const {
    minValue,
    minLimit,
    maxLimit,
    maxValue,
    minPercent,
    maxPercent,
    handleResetChange,
    handleSalaryChange,
    handleSelectedChange,
    setLocationInputValue
  } = prop;

 

  // Filter jobs based on selected filters, location, and salary
  

  // Trigger filterJobs whenever dependencies change
  

  return (
    <div className="pl-3.5 w-[30lvw] rounded-[8px] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] h-[700px] border-black bg-white">
      <h2 className="ml-10 font-bold text-[22px]">Filter</h2>
      <div>
        <h3 className="mt-2">Date Posted</h3>
        <div className="flex justify-between pt-[7px] pr-[12px] pb-[7px] pl-[12px] bg-white ">
          <select
            name=""
            id="dates"
            className="mb-3 drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] border-black bg-white w-[203px]"
          >
            <option value="24hr">Last 24 hours</option>
            <option value="2day">Last 2 days</option>
            <option value="1week">Last 1 week</option>
            <option value="2week">Last 2 week</option>
          </select>
        </div>
      </div>
      <div className="mt-2.5">
        <h3>Job Type</h3>
        <div className="rounded-[8px] w-[213px] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] border-black bg-white pl-2 pt-2">
          <ul>
            <input
              type="checkbox"
              value="Full-Time"
              name="check-1"
              onChange={handleSelectedChange}
            />
            <label htmlFor="check-1">Full-Time</label>
          </ul>
          <ul>
            <input
              type="checkbox"
              value="Part-time"
              name="check-2"
              onChange={handleSelectedChange}
            />
            <label htmlFor="check-2">Part-time</label>
          </ul>
          <ul>
            <input
              type="checkbox"
              value="Internship"
              name="check-3"
              onChange={handleSelectedChange}
            />
            <label htmlFor="check-3">Internship</label>
          </ul>
          <ul>
            <input
              type="checkbox"
              value="Contract"
              id="check-4"
              onChange={handleSelectedChange}
            />
            <label htmlFor="check-4">Contract</label>
          </ul>
          <ul>
            <input
              type="checkbox"
              value="Volunteer"
              name="check-5"
              onChange={handleSelectedChange}
            />
            <label htmlFor="check-5">Volunteer</label>
          </ul>
        </div>
      </div>

      <div className="mt-2">
        <h3>Location</h3>
        <div className="flex justify-between drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] border-[1px] border-black w-[213px]">
          <IoLocationOutline className="pt-1" />
          <input
            onChange={(e) => setLocationInputValue(e.target.value)}
            type="text"
            placeholder="Enter your Location"
            aria-label="Enter location"
            className="top-[6px] left-[37px] font-[300] text-[18px] leading-[21.78px]"
          />
        </div>
      </div>

      <div className="mt-2">
        <h3>Experiance Level</h3>
        <div className="flex justify-between ">
          <select
            name=""
            id="levels"
            onChange={handleSelectedChange}
            className="mb-3  border-[1px] border-black w-[213px]"
          >
            <option value="Entry Level" id="entry">
              Entry Level
            </option>

            <option value="Mid Level" id="mid">
              Mid Level
            </option>
            <option value="Senior Level" id="sen">
              Senior Level
            </option>
          </select>
        </div>
      </div>
      <div className="mt-2">
        <h3>Salary Range</h3>
        <div className="relative w-[213px] sm:max-w-sm md:max-w-md mx-auto ">
          {/* Range Inputs */}
          <div className="relative w-full">
            {/* Min Input */}
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={minValue}
              onChange={(e) => handleSalaryChange(e, "min")}
              className="absolute w-full h-1 appearance-none bg-transparent z-20 cursor-pointer top-[-15px]"
              // style={{ zIndex:30,top:'-15px' }}
            />
            {/* Max Input */}
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={maxValue}
              onChange={(e) => handleSalaryChange(e, "max")}
              className="absolute w-full h-1 appearance-none bg-transparent z-10"
              // style={{ zIndex: 2 }}
            />

            {/* Slider Track */}
            <div className="relative w-full h-1 bg-blue-300 mt-6 rounded">
              <div
                className="absolute h-1 bg-blue-700 rounded duration-30"
                style={{
                  left: `${minPercent}%`,
                  right: `${100 - maxPercent}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Min & Max Values */}
          <div className="flex justify-between mt-3 text-gray-700 text-sm sm:text-base">
            <span>${minValue}</span>
            <span>${maxValue.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <h3>Input Manually</h3>
        <div className="flex justify-between w-[113px] ml-2 ">
          <div className="flex">
            <h4>From</h4>
            <input type="text"               
            onChange={(e) => handleSalaryChange(e, "min")}
            className="w-[20px] border-[1px] border-black" />
          </div>
          <div className="flex">
            <h4>To</h4>
            <input type="text" 
                   onChange={(e) => handleSalaryChange(e, "max")}
                   className="w-[20px] border-[1px] border-black" />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3>Currency</h3>
        <div className="flex justify-between w-[213px]">
          <select
            name=""
            id="currency"
            onChange={handleSelectedChange}
            className="mb-3 border-[1px] border-black w-[213px]"
          >
            <option value="USD">USD</option>
            <option value="ETB">ETB</option>
          </select>
        </div>
      </div>
      <div className="w-[140px] h-[30px] rounded-[8px] pt-[4px] pr-[14px] pb-[10px] pl-[30px] gap-[4px] bg-[#0034D1] ml-4 mt-2.5 ">
        <button
          onClick={handleResetChange}
          className="text-white top-[6px] left-[37px] font-[300] text-[18px] leading-[21.78px]"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
