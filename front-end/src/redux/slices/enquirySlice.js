import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEnquiries = createAsyncThunk("enquiries/fetchEnquiries", async () => {
  const response = await axios.get("http://localhost:8500/api/contact/enquiries");
  return response.data;
});

export const deleteEnquiry = createAsyncThunk("enquiries/deleteEnquiry", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:8500/api/contact/enquiries/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const enquirySlice = createSlice({
  name: "enquiries",
  initialState: {
    enquiries: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnquiries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEnquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.enquiries = action.payload;
      })
      .addCase(fetchEnquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteEnquiry.fulfilled, (state, action) => {
        state.enquiries = state.enquiries.filter((enquiry) => enquiry._id !== action.payload);
      })
      .addCase(deleteEnquiry.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default enquirySlice.reducer;
