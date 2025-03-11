import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEnquiries = createAsyncThunk("enquiries/fetchEnquiries", async () => {
  const response = await axios.get("http://localhost:8500/api/contact/enquiries");
  return response.data;
});

export const deleteEnquiry = createAsyncThunk(
  "enquiries/deleteEnquiry",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:8500/api/contact/enquiries/${id}`);

      if (response.status === 200) {
        return id;  // Return the deleted enquiry ID
      } else {
        return rejectWithValue("Failed to delete enquiry");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Server error");
    }
  }
);

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

