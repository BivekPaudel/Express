import { Router } from "express";
import { Product } from "../Schema/model.js";
import { createProduct, deleteProduct, readAllProduct, readById, updateProduct } from "../Controller/productController.js";

let productRouter=Router()
productRouter
.route("/")
.post(createProduct)
.get(readAllProduct)
productRouter
.route("/:id")
.get(readById)
.patch(updateProduct)
.delete(deleteProduct)
export default productRouter