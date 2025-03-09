const { addProduct, getProducts, getProductById, deleteProductById, getPopularProducts, getTopProducts } = require("../controller/productController");
const { register, login } = require("../controller/userController");

const router= require("express").Router();

router.post("/addproduct", addProduct);
router.get("/allproduct", getProducts);
router.get("/popularproduct", getPopularProducts);
router.get("/topproduct", getTopProducts);
router.get("/product/:id", getProductById);
router.get("/deleteproduct/:id", deleteProductById);

router.post("/register",register)
router.post("/login",login)

module.exports=router