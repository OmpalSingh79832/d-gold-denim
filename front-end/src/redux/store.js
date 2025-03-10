import { configureStore } from "@reduxjs/toolkit";
import productReduer from "./slices/productReduer";
import enquiryReducer from "./slices/enquirySlice";

const store = configureStore({
  reducer: {
   product : productReduer,
   enquiries: enquiryReducer,
  },
});

export default store;
