import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Searchbar = (prop) => {
  const { query, setQuery, deferredQuery, filteredQuery }= prop
  return (
    <div className='z-5 fixed w-[550px] h-[38px] top-[90px] left-[300px] rounded-[20px] border-[1px] flex pt-[9px] pr-[12px] pb-[9px] pl-[12px] bg-[#FFFFFF] drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)]'>

      <div className='w-[308px] h-[24px] flex items-center'>
        <CiSearch className='w-24px h-24px mr-2' />
        <input
          type="text"
          placeholder='Job title, Keywords, or Company name..'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-[184px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000] outline-none'
          aria-label='Search for job title, keywords, or company name'
        />
      </div>

      {/* Filtered Results */}
      {query&&
      <div className='absolute top-[38px] left-0 w-full bg-white rounded-[20px] border-[1px] mt-2'>
        {deferredQuery !== query ? (
          <p className='p-2 text-gray-500'>Loading...</p>
        ) : filteredQuery.length > 0 ? (
          <ul>
            {filteredQuery.map((job) => (
              <li key={job.id} className='p-2 hover:bg-gray-100 cursor-pointer'>
                {job.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className='p-2 text-gray-500'>No results found.</p>
        )}
      </div>}

      {/* Location Input */}
      <div className='w-[208px] h-[24px] flex items-center ml-4'>
        <IoLocationOutline className='w-[12px] h-[16px] mr-2' />
        <input
          type="text"
          placeholder='Location'
          className='w-[184px] h-[19px] font-[200] text-[16px] leading-[19.36px] text-[#000000] outline-none'
          aria-label='Enter location'
        />
      </div>

      {/* Search Button */}
      <div className='w-[80px] h-[28px] rounded-[8px] pt-[2px] pr-[14px] pb-[10px] pl-[14px] gap-[4px] bg-[#0034D1]'>
        <button
          className='font-[600] text-[17px] leading-[14px] text-[#FFFFFF]'
          aria-label='Search'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;