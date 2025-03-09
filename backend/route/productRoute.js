const { addProduct, getProducts, getProductById, deleteProductById, getPopularProducts, getTopProducts } = require("../controller/productController");
const { register, login } = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router= require("express").Router();

router.post("/addproduct",isAuthenticatedUser, addProduct);
router.get("/allproduct",isAuthenticatedUser, getProducts);
router.get("/popularproduct",isAuthenticatedUser, getPopularProducts);
router.get("/topproduct", isAuthenticatedUser,getTopProducts);
router.get("/product/:id",isAuthenticatedUser, getProductById);
router.get("/deleteproduct/:id",isAuthenticatedUser, deleteProductById);

router.post("/register",register)
router.post("/login",login)

module.exports=router