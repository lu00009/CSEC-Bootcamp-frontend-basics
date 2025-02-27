import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('fetchJobs', async(page = 5)=>{
  const data = await fetch(`https://joblisting-3hjv.onrender.com/api/jobs?page=${page}&limit=20`)
  return data.json()
})

export const postJob = createAsyncThunk('postJob', async (jobData, { rejectWithValue }) => {
  try {
    const response = await fetch("https://joblisting-3hjv.onrender.com/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    if (!response.ok) {
      throw new Error("Failed to post job");
    }

    return response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const initialState = {
  jobData: {

    title: '',
    type: '',
    salary: '',
    description: '',
    company: '',
    logo: '',
    isBookMarked: false,
    location: '',
    experienceLevel: '',
    currency: '',
  },
};
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setJobData: (state, action) => {
      state.jobData = {...state.jobData, ...action.payload};
    },
  toggleBookmark: (state, action) => {
    const job = state.jobData.find(job => job.id === action.payload);
    if (job) {
      job.isBookMarked = !job.isBookMarked;
    }
  }
  },
   
  //  extraReducers : (builder) => {
  //  builder.addCase (fetchJobs.pending, (state)=>{
  //   state.jobData.isLoading = true
  //  })
  //  builder.addCase(fetchJobs.fulfilled, (state, action)=>{
  //   state.jobData.isLoading = false
  //   state.jobs = action.payload
  //  })
  //  builder.addCase(fetchJobs.rejected, (state, action)=>{
  //   state.jobData.isLoading = false
  //   state.error = action.error.message})
    
  //   builder.addCase(postJob.pending, (state)=>{
  //     state.jobData.isLoading = true
  //   })
  //   builder.addCase(postJob.fulfilled, (state, action)=>{
  //     state.jobData.isLoading = false
  //     state.jobs.push(action.payload)
  //   })
  //   builder.addCase(postJob.rejected, (state, action)=>{
  //     state.jobData.isLoading = false
  //     state.error = action.error.message
  //   })
  //  }
  
});

export const {setJobData, toggleBookmark} = postSlice.actions;
export default postSlice.reducer;