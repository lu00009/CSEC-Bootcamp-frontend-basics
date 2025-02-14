import { useEffect, useState, useDeferredValue, useMemo } from "react";
import Feed from "../components/feed";
import Filter from "../components/filter";
import Savedjobs from "../components/savedjobs";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Home = () => {
  const [minValue, setMinValue] = useState(80000);
  const [maxValue, setMaxValue] = useState(200000);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [locationInputValue, setLocationInputValue] = useState("");

  const totalPages = 5;
  const minLimit = 80000
  const maxLimit = 200000;
  const minPercent = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;
  useEffect(() => {
    try {
      const fetchjobs = async () => {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${currentPage}&limit=10`
        );
        console.log("Response:", response);
        const data = await response.json();
        console.log("Data:", data);

        setJobs(data.jobs);
      };


      fetchjobs();
      console.log(currentPage);
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  const filteredQuery = useMemo(() => {
    return jobs.filter((jobs) =>
      jobs.title.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery]);
  console.log("filtered,", filteredQuery);

  useEffect(() => {
    filterJobs();
  }, [selectedFilters, locationInputValue]);

  const filterJobs = () => {
      let filtered = jobs;
    
      // Filter by selected filters (type, experienceLevel, currency)
      if (selectedFilters.length > 0) {
        filtered = filtered.filter((job) => {
          return (
            selectedFilters.includes(job.type) ||
            selectedFilters.includes(job.experienceLevel) ||
            selectedFilters.includes(job.currency)
          );
        });
      }
    
      // Filter by location if a location input value exists
      if (locationInputValue) {
        filtered = filterJobsByLocation(locationInputValue, filtered);
      }
    
      // Filter by salary
      filtered = filterJobsBySalary(filtered);
    
      // Update the state with the filtered jobs
      setFilteredJobs(filtered);
      console.log("filters ", selectedFilters);
      console.log("filtered jobs", filtered);
    };
  
    // Filter jobs by location
    const filterJobsByLocation = (locationInputValue, jobs) => {
      const normal = (str) => {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
      };
      const normalInput = normal(locationInputValue);
      return jobs.filter((job) => {
        const normalFilteredLocation = normal(job.location);
        return normalFilteredLocation.includes(normalInput);
      });
    };
  
    // Filter jobs by salary
    const filterJobsBySalary = (jobs) => {
      return jobs.filter((job) => {
        const sal = job.salary.replace(',', ''); // Remove commas
        const normalSalary = Number(sal.slice(1)); // Remove currency symbol and convert to number
        return normalSalary >= minValue && normalSalary <= maxValue;
      });
    };
  
    // Handle selected filters change
    const handleSelectedChange = (event) => {
      const value = event.target.value;
      setSelectedFilters((prevFilters) =>
        prevFilters.includes(value)
          ? prevFilters.filter((item) => item !== value)
          : [...prevFilters, value]
      );
    };
  
    // Handle salary value change
    const handleSalaryChange = (event, type) => {
      const value = Number(event.target.value);
      if (type === "min" && value < maxValue) {
        setMinValue(value);
      } else if (type === "max" && value > minValue) {
        setMaxValue(value);
      }
      filterJobs()
  
      // setSelectedFilters((prevFilters) =>
      //   prevFilters.includes(salary)
      //     ? prevFilters.filter((item) => item !== salary)
      //     : [...prevFilters, salary]
      // );
      console.log("max value", maxValue);
      console.log("min value", minValue);
    };
  
    // Handle reset button
    const handleResetChange = () => {
      setSelectedFilters([]);
      setLocationInputValue("");
      setMinValue(minLimit);
      setMaxValue(maxLimit);
      setFilteredJobs(jobs);
    };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Searchbar
          query={query}
          setQuery={setQuery}
          filteredQuery={filteredQuery}
          deferredQuery={deferredQuery}
        />
      </div>
      <div className="flex justify-between drop-shadow-[3px_2px_4px_rgba(0,0,0,0.25)] w-[100lvw] h-[430px] gap-5 top-[170px] relative pl-[100px] pr-[100px] ">
        <Filter
          minValue={minValue}
          minLimit={minLimit}
          maxValue={maxValue}
          maxLimit={maxLimit}
          minPercent={minPercent}
          maxPercent={maxPercent}
          jobs={jobs}
          setMaxValue={setMaxValue}
          setMinValue={setMinValue}
          handleResetChange={handleResetChange}
          handleSalaryChange={handleSalaryChange}
          handleSelectedChange={handleSelectedChange}
          setLocationInputValue={setLocationInputValue}
        />
        <Feed jobs={jobs} setJobs={setJobs} />
        <Savedjobs jobs={jobs} setJobs={setJobs} />
      </div>
      <div className="p-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Home;
