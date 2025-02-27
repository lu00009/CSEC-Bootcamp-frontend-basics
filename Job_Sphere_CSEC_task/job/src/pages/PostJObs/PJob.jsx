import { useStepperPost } from "../../stores/stepperPost";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postJob } from "../../features/JobdataSlice";

export const PJob = () => {
  const { back } = useStepperPost();
  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.post);
  console.log("jobData:", jobData.jobData);
  if (!jobData || Object.keys(jobData).length === 0) {
    return <div>Loading...</div>;
  }


  function handleSubmit() {
    console.log("Submitted");
   try{
    dispatch(postJob(jobData.jobData));
    console.log("job is posted");
    back();
  } catch (error) {
    console.error("Error posting job:", error);
   } 
  }

  return ( 
    <div className="max-w-[700px] p-4 border border-gray-200 rounded-lg shadow-lg bg-white">
      {/* Job Header */}
      <div className="flex gap-4 items-start">
        {/* Logo */}
        <div className="w-[60px] h-[60px]">
          <img src={jobData.logo} alt="Company Logo" className="w-full h-full object-contain" />
        </div>

        {/* Job Details */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{jobData.title}</h2>
            <div className="flex gap-2">
              <button>
                {jobData.isBookmarked ? <IoBookmark size={22} /> : <CiBookmark size={22} />}
              </button>
              <button>
                <CiShare2 size={22} />
              </button>
            </div>
          </div>

          <h4 className="text-gray-600 text-md">{jobData.company}</h4>

          {/* Job Info */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{jobData.location}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{jobData.type}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{jobData.salary}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{jobData.experienceLevel}</span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded">{jobData.currency}</span>
          </div>

          {/* Job Description */}
          <p className="text-sm text-gray-700 mt-3">{jobData.description}</p>

          {/* Back Button */}
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
