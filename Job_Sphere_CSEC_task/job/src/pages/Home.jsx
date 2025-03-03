import { useEffect, useState } from "react";
import Feed from "../components/feed";
import Filter from "../components/filter";
import Savedjobs from "../components/savedjobs";
import Pagination from "../components/Pagination";
import PropTypes from 'prop-types' 
import { useDispatch } from "react-redux";
import { fetchJobs } from "../features/JobdataSlice";

const Home = (props) => {
const dispatch = useDispatch();

  const { jobs,setJobs, currentPage, setCurrentPage } = props;
  const [minValue, setMinValue] = useState(80000);
  const [maxValue, setMaxValue] = useState(200000);
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
    dispatch(fetchJobs())
      .unwrap()
      .then((data) => {
        console.log("Jobs fetched successfully:", data);
        setFilteredJobs(data.jobs)
      })
      .catch((error) => {
        console.error("Failed to fetch jobs:", error);
      });
  }, [dispatch]);

  // Filter jobs based on selected filters, location, and salary
  useEffect(() => {
    const filterJobs = () => {
      let filtered = jobs;

      // Filter by experience level
      if (selectedLevel) {
        filtered = filtered.filter(
          (job) => job.experienceLevel === selectedLevel
        );
      }

      // Filter by currency
      if (selectedCurrency) {
        filtered = filtered.filter((job) => job.currency === selectedCurrency);
      }
      console.log(
        "selectedcurrency",
        selectedCurrency,
        "filtered salary",
        filtered
      );

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
  }, [
    selectedLevel,
    selectedCurrency,
    selectedType,
    locationInputValue,
    minValue,
    maxValue,
    jobs,
  ]);

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
    console.log("curr", selectedCurrency);
  };

  // Handle level change
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  // Handle type change
  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedType((prevSelected) => {
      if (prevSelected.includes(value)) {
        console.log("Removing:", value);
        return prevSelected.filter((type) => type !== value);
      } else {
        console.log("Adding:", value);
        return [...prevSelected, value];
      }
    });
  };

  // Handle salary change
  const handleSalaryChange = (event, type) => {
    const value = Number(event.target.value);
    if (value <= maxLimit && value >= minLimit) {
      if (type === "min" && value < maxValue) {
        setMinValue(value);
      } else if (type === "max" && value > minValue) {
        setMaxValue(value);
      }
    }
    console.log("max", maxValue, "min", minValue);
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
Home.propTypes = {
  jobs: PropTypes.array.isRequired,
  setJobs: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default Home;
