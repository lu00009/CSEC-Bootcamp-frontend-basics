import { CiSearch } from "react-icons/ci";

const Searchbar = (prop) => {
  const { query, setQuery, deferredQuery, filteredQuery } = prop;

  return (
    <div className="z-5 fixed flex items-center w-[500px] h-[38px] top-[90px] left-[300px] rounded-[12px] border-[1px] bg-[#FFFFFF] drop-shadow-md px-3">
      {/* Search Icon & Input */}
      <div className="flex items-center flex-grow">
        <CiSearch className="w-6 h-6 mr-2 text-gray-600" />
        <input
          type="text"
          placeholder="Job title, Keywords, or Company name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow h-[19px] font-light text-[16px] text-black outline-none"
        />
      </div>

      {/* Search Button */}
      <button className="ml-2 px-4 py-1 bg-[#0034D1] text-white rounded-[8px] font-semibold hover:bg-blue-700 transition-all">
        Search
      </button>

      {/* Filtered Results */}
      {query && (
        <div className="absolute top-[38px] left-0 w-full bg-white rounded-[8px] border mt-2 shadow-lg">
          {deferredQuery !== query ? (
            <p className="p-2 text-gray-500">Loading...</p>
          ) : filteredQuery.length > 0 ? (
            <ul>
              {filteredQuery.map((job) => (
                <li key={job.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                  {job.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2 text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
