import { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Feed from './components/feed'
import Filter from './components/filter'
import Savedjobs from './components/savedjobs'
import Pagination from "./components/Pagination";


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [jobs,setJobs] = useState([])
  useEffect(()=>{
    try{
    console.log("Fetching jobs for page:", currentPage);
    const fetchjobs = async () =>{
    const response = await fetch(`https://joblisting-rd8f.onrender.com/api/jobs?page=${currentPage}&limit=${totalPages}`)
    // console.log('Response:', response); 
    const data = await response.json();
    console.log('Fetched Jobs for page', currentPage, data); // Log data for debugging

   setJobs(data.jobs)
   
   }
   fetchjobs()
   console.log(currentPage)
  }catch(error){
    console.log(error)
   }
   
  },[currentPage])
  return (
    <div>
     <div><Navbar/></div> 
     <div><Searchbar/></div>
          <div className='flex justify-between w-[100lvw] h-[430px] gap-5 top-[170px] relative pl-[100px] pr-[100px] '>
      <Filter/>
        <Feed 
        jobs={jobs} 
        setJobs={setJobs}
        currentPage={currentPage}
        />
        <Savedjobs jobs={jobs} setJobs={setJobs}/></div>
        <div className="p-5">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
      
      
      
    </div>
  )
}

export default App


