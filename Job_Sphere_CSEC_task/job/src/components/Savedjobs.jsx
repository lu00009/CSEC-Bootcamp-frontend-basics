import { IoIosClose } from "react-icons/io";

const Savedjobs = (prop) => {
  const handleCancel = ((id)=>{
  const cancelJobs = prop.jobs.map((obj)=>obj.id === id ? {...obj,isBookMarked : !obj.isBookMarked} : obj)
  prop.setJobs(cancelJobs)}
  )
  return (
    <div className='w-[350px] h-auto rounded-[8px] flex flex-col items-center'>
      <h2 className='font-bold mb-4'>Saved Jobs</h2>
    {
      prop.jobs.map((job,index)=>(job.isBookMarked && (<div key={index} className='w-[200px] h-[120px] rounded-[8px]  border-black bg-white drop-shadow-2xl p-2 flex flex-col pl-9 '>
        <div className='flex gap-5 '>
          <h3 className='font-bold '>{job.title}</h3> 
          <IoIosClose onClick={() => handleCancel(job.id)} />
            </div>
        <div>Google</div>
        <div className='flex gap-2'>
          <h4>Remote</h4>
          <h4>$200</h4>
        </div>
      </div>)
  ))}  </div>


  );

};

export default Savedjobs;