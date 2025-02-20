import Job from './job';


const Feed = (prop) => {
 

  const handleBookmark = (id)=>{
    const updatedJobs = prop.jobs.map((obj)=>obj.id === id ? {...obj,isBookMarked : !obj.isBookMarked} : obj)
    prop.setJobs(updatedJobs)
     }
  return (
    <div className='flex flex-col gap-4 w-[54lvw] h-[200px]'>
      {prop.jobs.map((job) => (
        <div key={job.id} className='rounded-[8px]  border-black bg-white drop-shadow-2xl'>
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
            currency={job.currency}
            experienceLevel= {job.experienceLevel}
          />
        </div>
      ))}
      
    </div>
  );
};

export default Feed;