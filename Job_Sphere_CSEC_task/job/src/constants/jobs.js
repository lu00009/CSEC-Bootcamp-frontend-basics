import logo1 from '../assets/pd.svg'
import logo2 from '../assets/fd.svg'
import logo3 from '../assets/dm.svg'
import logo4 from '../assets/da.svg'

const Jobs = [
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
]
export default Jobs