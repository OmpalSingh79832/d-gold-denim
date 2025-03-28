const multer = require("multer");
const { addProduct, getProducts, getProductById, deleteProductById, getPopularProducts, getTopProducts } = require("../controller/productController");
const { register, login, changePassword } = require("../controller/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

// const upload = multer({ dest: 'upload/products/' });
const router= require("express").Router();

// router.post("/addproduct",isAuthenticatedUser, upload.any(), addProduct);
router.post("/addproduct", addProduct);
router.get("/allproduct", getProducts);
router.get("/popularproduct", getPopularProducts);
router.get("/topproduct",getTopProducts);
router.get("/product/:id", getProductById);
router.get("/deleteproduct/:id", deleteProductById);

router.post("/register",register)
router.post("/login",login)
router.post("/changepassword",changePassword)

module.exports=router