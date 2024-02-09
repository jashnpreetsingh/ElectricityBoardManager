import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


//Async thunks to fetch, create, update, and delete applications
export const fetchApplications = createAsyncThunk('applications/fetchApplications', async () => {
  const response = await axios.get('/api/applications/');
  return response.data;
});

export const createApplication = createAsyncThunk('applications/createApplication', async (application) => {
  const response = await axios.post('/api/applications/', application);
  return response.data;
});

export const updateApplication = createAsyncThunk('applications/updateApplication', async (application) => {
  const response = await axios.put(`/api/applications/${application.ID}/`, application);
  return response.data;
});

export const deleteApplication = createAsyncThunk('applications/deleteApplication', async (id) => {
  await axios.delete(`/api/applications/${id}/`);
  return id;
});

//Initial state
const initialState = { entities: [], loading: 'idle' };

//Application slice declaring extra reducers to handle response from backend
const applicationSlice = createSlice({        
  name: 'applications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchApplications.pending, (state) => {
      state.loading = 'loading';
    })
    .addCase(fetchApplications.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = 'idle';
    })
    .addCase(fetchApplications.rejected, (state) => {
      state.loading = 'failed';
    })
    .addCase(createApplication.pending, (state) => {
      state.loading = 'loading';
    })
    .addCase(createApplication.fulfilled, (state, action) => {
      state.entities.push(action.payload);
      state.loading = 'idle';
    })
    .addCase(createApplication.rejected, (state) => {
      state.loading = 'failed';
    })
    .addCase(updateApplication.pending, (state) => {
      state.loading = 'loading';
    })
    .addCase(updateApplication.fulfilled, (state, action) => {
      const index = state.entities.findIndex((application) => application.ID === action.payload.ID);
      state.entities[index] = action.payload;
      state.loading = 'idle';
    })
    .addCase(updateApplication.rejected, (state) => {
      state.loading = 'failed';
    })
    .addCase(deleteApplication.pending, (state) => {
      state.loading = 'loading';
    })
    .addCase(deleteApplication.fulfilled, (state, action) => {
      const index = state.entities.findIndex((application) => application.ID === action.payload);
      state.entities.splice(index, 1);
      state.loading = 'idle';
    })
    .addCase(deleteApplication.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export default applicationSlice.reducer;