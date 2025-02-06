import React, { useState } from "react";
import Navbar from './components/Navbar'
import Searchbar from './components/searchbar'
import Feed from './components/feed'
import Filter from './components/filter'
import Savedjobs from './components/savedjobs'
import logo1 from '../src/assets/pd.svg'
import logo2 from '../src/assets/fd.svg'
import logo3 from '../src/assets/dm.svg'
import logo4 from '../src/assets/da.svg'

const App = () => {
  const [jobs,setJobs] = useState([
    {
      img : logo1 ,
      id : 1, 
      title : "Product Design",
      company : "Binford Ltd.",
      job_type : "Full-time",
      location :"Remote",
      salary : "$200-$1,200",
      isBookMarked : true
    },
    {
      img : logo2 ,
      id : 2, 
      company : "Binford Ltd.",
      job_type : "Full-time",
      location :"Remote",
      salary : "$200-$1,200",
      title : "Fronted Developer",
      isBookMarked : true
    },
    {
      img : logo3,
      id : 3,    
      company : "Big Kahuna Burger Ltd.",
      job_type : "Full-time",
      location :"Remote",
      salary : "$200-$1,200",
      title : "Digital Marketing Specialist",
      isBookMarked : false
    },
    {
  
      img : logo4 ,
      id : 4, 
      title : "Data Analyst",
      company : "Acme Co.",
      job_type : "Full-time",
      location :"Remote",
      salary : "$200-$1,200",
      isBookMarked : false  
    }
  ])
  return (
    <div>
     <div><Navbar/></div> 
     <div><Searchbar/></div>
          <div className='flex justify-between w-[100lvw] h-[430px] gap-5 top-[170px] relative pl-[100px] pr-[100px] '>
      <Filter/>
        <Feed jobs={jobs} setJobs={setJobs}/>
        <Savedjobs jobs={jobs} setJobs={setJobs}/></div>
      
      
      
    </div>
  )
}

export default App


