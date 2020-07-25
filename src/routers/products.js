import { Router } from "express";

import {
  getProducts,
  updateProduct,
  deleteProduct,
  createProduct,
  getProduct,
} from "../controllers/products";

import validationHandler from "../middleware/validationHandler";

import {
  productIdSchema,
  createProductSchema,
  updateProductSchema,
  productNameSchema,
} from "../schemas/product";

const routes = new Router();

routes.get("/", getProducts);
routes.get(
  "/:id",
  validationHandler({ id: productNameSchema }, "params"),
  getProduct
);
routes.post("/", validationHandler(createProductSchema), createProduct);

routes.put(
  "/:id",
  validationHandler({ id: productNameSchema }, "params"),
  validationHandler(updateProductSchema),
  updateProduct
);
routes.delete(
  "/:id",
  validationHandler({ id: productNameSchema }, "params"),
  deleteProduct
);

module.exports = routes;
