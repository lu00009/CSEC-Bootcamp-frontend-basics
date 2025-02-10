import Job from './job';


const Feed = (prop) => {
 
  const handleBookmark = (id)=>{
    const updatedJobs = prop.jobs.map((obj)=>obj.id === id ? {...obj,isBookMarked : !obj.isBookMarked} : obj)
    prop.setJobs(updatedJobs)
     }
  return (
    <div className='flex flex-col gap-4 w-[54lvw] h-[200px]'>
      {prop.jobs.map((job, index) => (
        <div key={index} className='drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] rounded-[8px] border-[1px] border-[#000000] '>
          <Job 
            img={job.logo} 
            title={job.title} 
            company={job.company}  
            location={job.location} 
            job_type={job.type} 
            salary={job.salary} 
            isBookMarked={job.isBookMarked} 
            handleBookmark={()=>handleBookmark(job.id)}
            id={job.id}
            description={job.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;