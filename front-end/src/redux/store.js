import { configureStore } from "@reduxjs/toolkit";
import productReduer from "./slices/productReduer";

const store = configureStore({
  reducer: {
   product : productReduer,
  },
});

export default store;
