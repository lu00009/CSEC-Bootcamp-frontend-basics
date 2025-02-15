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
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedType, setSelectedType] = useState([]);
  

  const totalPages = 5;
  const minLimit = 80000;
  const maxLimit = 200000;
  const minPercent = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${currentPage}&limit=10`
        );
        const data = await response.json();
        setJobs(data.jobs);
        setFilteredJobs(data.jobs); // Initialize filteredJobs with fetched jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [currentPage]);

  // Filter jobs based on search query
  const filteredQuery = useMemo(() => {
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery, jobs]);

  // Filter jobs based on selected filters, location, and salary
  useEffect(() => {
    const filterJobs = () => {
      let filtered = jobs;

      // Filter by experience level
      if (selectedLevel) {
        filtered = filtered.filter((job) => job.experienceLevel === selectedLevel);
      }

      // Filter by currency
      if (selectedCurrency) {
        filtered = filtered.filter((job) => job.currency === selectedCurrency);
      }
      console.log('selectedcurrency',selectedCurrency,'filtered salary',filtered)

      // Filter by job type
      if (selectedType.length > 0) {
        filtered = filtered.filter((job) => selectedType.includes(job.type));
      }
      

      // Filter by location
      if (locationInputValue) {
        filtered = filterJobsByLocation(locationInputValue, filtered);
      }

      // Filter by salary
      filtered = filterJobsBySalary(filtered);

      setFilteredJobs(filtered);
    };

    filterJobs();
  }, [selectedLevel, selectedCurrency, selectedType, locationInputValue, minValue, maxValue, jobs]);

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
      const sal = job.salary.replace(",", ""); // Remove commas
      const normalSalary = Number(sal.slice(1)); // Remove currency symbol and convert to number
      return normalSalary >= minValue && normalSalary <= maxValue;
    });
  };

  // Handle currency change
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    console.log('curr',selectedCurrency)
  };

  // Handle level change
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
    
  };

  // Handle type change
  const handleTypeChange = (event) => {
    const value = event.target.value
    setSelectedType((prevSelected) => {
      if (prevSelected.includes(value)) {
        console.log('Removing:', value);
        return prevSelected.filter((type) => type !== value);
      } else {
        console.log('Adding:', value);
        return [...prevSelected, value];
      }
    });
  };
    

  // Handle salary change
  const handleSalaryChange = (event, type) => {
    const value = Number(event.target.value);
    if(value<=maxLimit && value>=minLimit){
      if (type === "min" && value < maxValue) {
        setMinValue(value);
      } else if (type === "max" && value > minValue) {
        setMaxValue(value);
      }
    }
    console.log('max',maxValue,'min',minValue)
    
  };

  // Handle reset button
  const handleResetChange = () => {
    setMinValue(minLimit);
    setMaxValue(maxLimit);
    setLocationInputValue("");
    setSelectedLevel("");
    setSelectedCurrency("");
    setSelectedType([]);
    setSelectedFilters([]);
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
          // key={JSON.stringify({ minValue, maxValue, selectedFilters, selectedLevel, selectedCurrency, selectedType })}
          jobs={jobs}
          minValue={minValue}
          minLimit={minLimit}
          maxValue={maxValue} 
          maxLimit={maxLimit}
          minPercent={minPercent}
          maxPercent={maxPercent}
          setMaxValue={setMaxValue}
          setMinValue={setMinValue}
          handleResetChange={handleResetChange}
          handleSalaryChange={handleSalaryChange}
          handleTypeChange={handleTypeChange}
          setLocationInputValue={setLocationInputValue}
          handleLevelChange={handleLevelChange}
          handleCurrencyChange={handleCurrencyChange}
          selectedCurrency={selectedCurrency}
          selectedLevel={selectedLevel}
          selectedType={selectedType}
        />
        <Feed jobs={filteredJobs} setJobs={setJobs} />
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