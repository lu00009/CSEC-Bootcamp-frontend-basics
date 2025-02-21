import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo, useDeferredValue } from "react";
import Home from "./pages/Home";
import Login from "./pages/login";
import Jobdescription from "./pages/Jobdescription";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Signup from "./pages/Signup";

const App = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const deferredQuery = useDeferredValue(query);
  const [jobs, setJobs] = useState([]);
  // Filter jobs based on search query
  const filteredQuery = useMemo(() => {
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery, jobs]);

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${currentPage}&limit=10`
        );
        const data = await response.json();
        setJobs(data.jobs);
        console.log("fetched initially", data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [currentPage]);
  return (
    <div>
      <div>
        <BrowserRouter>
        <div>
        {location.pathname !== "/signup" && location.pathname !== '/login' &&( <Navbar />)}

      </div>
      <div>
        
      {location.pathname !== "/signup"&& location.pathname !== '/login' && (
        <Searchbar
          query={query}
          setQuery={setQuery}
          filteredQuery={filteredQuery}
          deferredQuery={deferredQuery}
        />)}
      </div>
          <Routes>
            <Route index element={<Home jobs={jobs} 
               setJobs={setJobs} 
               currentPage={currentPage} 
               setCurrentPage={setCurrentPage}  />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/jobs/:id" element={<Jobdescription />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
