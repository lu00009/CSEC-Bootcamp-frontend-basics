import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import star1 from "../assets/yellow-star.svg";
import star2 from "../assets/grey_star.svg";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
const JobDescription = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        console.log("Fetching job for ID:", id);
        const response = await fetch(
          `https://joblisting-3hjv.onrender.com/api/jobs/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }

        const data = await response.json();
        console.log("API Response:", data); // Log API response

        if (data && typeof data === "object") {
          setJob(data); // ✅ Set the job directly
          console.log("Updated job state:", data);
        } else {
          console.warn("Invalid job data format:", data);
          setJob(null);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        setJob(null);
      }
    };

    fetchJob();
  }, [id]);

  // Ensure job data is loaded before rendering
  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[190px] absolute justify-between left-[80px] w-[800px] h-[330px]">
      <div className="flex h-[130px] w-">
        <div>
          <img src={job.logo} />
        </div>
        <div className="pt-7 pb-7 ml-4  w-[500px]">
          <h1 className="font-[500] text-[36px] leading-[43.5px] text-black">
            {job.title}
          </h1>
          <div className="w-[550px] flex gap-2">
            <div>
              <h3 className="inter font-[300] text-[24px] leading-[29px] ">
                {job.company}
              </h3>
            </div>{" "}
            <div className="flex w-[115px] h-[18px] gap-[5px] mt-2 ">
              <img src={star1} />
              <img src={star1} />
              <img src={star1} />
              <img src={star1} />
              <img src={star2} />
            </div>
          </div>
        </div>
        <div className="w-[140px] gap-[34px]">
          <div className="ml-6 flex w-[87px] h-[37px] gap-[19px] ">
            {" "}
            <CiBookmark className="w-[18px] h-[23px] top-[6px] left-[9px]" />
            <CiShare2 className="w-[18px] h-[23px] top-[6px] left-[9px]" />
          </div>
          <div className="bg-blue-700 w-[140px] h-[40px] rounded-[8px] mt-10">
            <button className="w-[120px] h-[16px] ml-2 pt-2 font-[600] text-[22px] leading-[16px] text-white">
              Apply now
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5 h-[400px] mt-3">
        <div className="w-[180px] gap-[24px] h-[250px]">
          {" "}
          <div>
            <h2 className="inter font-[500] text-[20px] leading-[29px]">Job type:</h2>
            <h4 className="inter font-[400] text-[15px] leading-[30px]">{job.type}</h4>
          </div>
          <br />
          <div>
            <h2 className="inter font-[500] text-[20px] leading-[29px]">Location:</h2>
            <h4 className="inter font-[400] text-[15px] leading-[30px]">{job.location}</h4>
          </div>
          <br />
          <div>
            <h2 className="inter font-[500] text-[20px] leading-[29px]">Experience:</h2>
            <h4 className="inter font-[400] text-[15px] leading-[30px]">{job.experienceLevel}</h4>
          </div>
        </div>
        <div className="w-[620px] h-[200px]">
          <h2 className="inter font-[500] text-[24px] leading-[29px] w-[170px] h-[29px]">Job description</h2>
          <h4 className="inter font-[400] text-[18px] leading-[30px]">{job.description}</h4>
        </div>
      </div>
      {/* <div><h1>Related Jobs</h1>
      <div>
        {job.map((jb,index)=>

)}
        </div></div> */}
    </div>
  );
};

export default JobDescription;
