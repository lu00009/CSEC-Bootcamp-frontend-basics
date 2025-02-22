import { usePost } from "../../store/post";
import { useStepperPost } from "../../store/stepperPost";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

export const PJob = () => {
  const { back } = useStepperPost();
const {Post1, Post2} = usePost()
  return ( 
    <div className="max-w-[700px] p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
      {/* Job Header */}
      <div className="flex gap-4 items-start">
        {/* Logo */}
        <div className="w-[60px] h-[60px]">
          <img src={Post2.logo} alt="Company Logo" className="w-full h-full object-contain" />
        </div>

        {/* Job Details */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{Post1.title}</h2>
            <div className="flex gap-2">
              <button>
                {Post2.isBookmarked ? <IoBookmark size={22} /> : <CiBookmark size={22} />}
              </button>
              <button>
                <CiShare2 size={22} />
              </button>
            </div>
          </div>

          <h4 className="text-gray-600 text-md">{Post2.company}</h4>

          {/* Job Info */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{Post2.location}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{Post1.type}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{Post1.salary}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{Post2.experienceLevel}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{Post2.currency}</span>
          </div>

          {/* Job Description */}
          <p className="text-sm text-gray-700 mt-3">{Post1.description}</p>

          {/* Back Button */}
          {/* <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={back}
          >
            Back
          </button> */}
        </div>
      </div>
    </div>
  );
};
