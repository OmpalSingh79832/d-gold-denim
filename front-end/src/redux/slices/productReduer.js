import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import Cookies from "js-cookie";


// Async Thunks
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/allproduct`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);
export const getPopularProducts = createAsyncThunk(
  "products/getPopularProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/popularproduct`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

export const getTopProducts = createAsyncThunk(
  "products/getTopProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/topproduct`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products"
      );
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/product/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch product by ID"
      );
    }
  }
);
export const deleteroductById = createAsyncThunk(
  "products/deleteproductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/deleteproduct/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch product by ID"
      );
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (formData, { rejectWithValue }) => {
    try {
      // const response = await api.post(`/addproduct`, formData,{withCredentials:true});
      const response = await api.post(`/addproduct`, formData);
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to add product"
      );
    }
  }
);

export const login = createAsyncThunk(
  "products/login",
  async (formData, { rejectWithValue }) => {
    try {

      const response = await api.post(`/login`, formData);
      Cookies.set("token", response.data.token)
      return response.data;
    } catch (error) {
      console.error("Error login credentially:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// change password 

export const changePassword = createAsyncThunk(
  "products/changepassword",
  async ({email, oldPassword, newPassword} ,{ rejectWithValue }) => {
    try {
      const response = await api.post(`/changepassword`, {email, oldPassword, newPassword});
      return response.data;
    } catch (error) {
      console.error("changed password not found:", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to Change Password"
      );
    }
  }
);

const initialState = {
  products: [],
  singleproduct: [],
  popuarproducts: [], 
  topproducts: [], 
  shopproducts: [], 
  product: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    // Handle getProducts
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPopularProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.popuarproducts = action.payload;
      })
      .addCase(getPopularProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTopProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.topproducts = action.payload;
      })
      .addCase(getTopProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    // Handle getProductById
 
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleproduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteroductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteroductById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleproduct = action.payload;
      })
      .addCase(deleteroductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log('Action Payload:', action.payload);
        if (Array.isArray(state.products)) {
          state.products.push(action.payload); 
        }
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; 
      })

      // login

      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.login = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // change password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.newpassword = action.payload;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});



export const { clearError, clearProduct, clearFilteredProducts } = productsSlice.actions;

export default productsSlice.reducer;