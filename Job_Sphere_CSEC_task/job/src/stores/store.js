import {configureStore} from '@reduxjs/toolkit';
import postReducer from '../features/JobdataSlice'
const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
export default store;












// import { create } from "zustand";
// import axios from "axios";

// export const usePost = create((set, get) => ({
//   jobs: [],
//   jobData: {
//     title: "",
//     type: "",
//     salary: "",
//     description: "",
//     company: "",
//     logo: "",
//     isBookmarked: false,
//     location: "",
//     experienceLevel: "",
//     currency: "",
//   },

 
//   setJobData: (field, value) =>
//     set((state) => ({
//       jobData: { ...state.jobData, [field]: value },
//     })),

//   fetchJobs: async () => {
//     try {
//       const response = await axios.get(
//         "https://joblisting-3hjv.onrender.com/api/jobs"
//       );
//       set({ jobs: response.data });
//       console.log("Jobs fetched:", response.data);
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//     }
//   },

//   postJob: async () => {
//     try {
//       const jobData = get().jobData; 

//       const response = await fetch(
//         "https://joblisting-3hjv.onrender.com/api/jobs",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(jobData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json(); 
//       console.log("Job posted successfully:", data);

//       await get().fetchJobs();
//     } catch (error) {
//       console.error("Error posting job:", error.message);
//     }
//   },
// }));
