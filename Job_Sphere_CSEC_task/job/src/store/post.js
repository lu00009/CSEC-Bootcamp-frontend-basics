import { create } from 'zustand';
import axios from 'axios';

export const usePost = create((set, get) => ({
    jobs: [],
    jobData: { 
        title: '',
        type: '',
        salary: '',
        description: '',
        company: '',
        logo: '',
        isBookmarked: false,
        location: '',
        experienceLevel: '',
        currency: ''
    },
    setJobData: (data) => set({ jobData: data }),

    fetchJobs: async () => {
        try {
            const response = await axios.get('https://joblisting-3hjv.onrender.com/api/jobs');
            set({ jobs: response.data });
            console.log('Jobs fetched:', response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    },
    postJob: async (job) => {
      try {
          console.log("Posting job data:", job);
  
          const response = await axios.post('https://joblisting-3hjv.onrender.com/api/jobs', 
              job,
              {
                  headers: {
                      'Content-Type': 'application/json',
                  }
              }
          );
  
          console.log('Job posted successfully:', response.data);
          await get().fetchJobs(); 
      } catch (error) {
          console.error('Error posting job:', error.response?.data || error.message);
      }
  }
  
}));
