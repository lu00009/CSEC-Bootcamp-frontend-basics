import { IoIosClose } from "react-icons/io";

const Savedjobs = ({ jobs, setJobs }) => {
  const handleCancel = (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, isBookMarked: !job.isBookMarked } : job
    );
    setJobs(updatedJobs);
  };

  return (
    <div className='w-[280px] rounded-[8px] p-4 '>
      <h2 className='font-bold mb-4 text-lg text-gray-800 ml-8'>Saved Jobs</h2>
      <div className='flex flex-col gap-4'>
        {jobs.map(
          (job, index) =>
            job.isBookMarked && (
              <div
                key={index}
                className='w-full h-[150px] p-4 rounded-lg border border-gray-300 shadow-md flex flex-col gap-3'
              >
                <div className='flex justify-between items-center'>
                  <h3 className='font-bold text-gray-700'>{job.title}</h3>
                  <IoIosClose
                    className='text-gray-600 cursor-pointer hover:text-red-500 text-xl'
                    onClick={() => handleCancel(job.id)}
                  />
                </div>
                <div className='text-gray-600'>{job.company}</div>
                <div className='flex gap-2'>
                  <span className='px-2 py-1 rounded-md bg-gray-200 text-[14px] text-gray-700'>
                    {job.type}
                  </span>
                  <span className='px-2 py-1 rounded-md bg-gray-200 text-[14px] text-gray-700'>
                    {job.salary}
                  </span>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Savedjobs;