import joi from "@hapi/joi";

//const developerIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productIdSchema = joi.number();
const productNameSchema = joi.string().max(100);
const productDescriptionSchema = joi.string().max(200);
const productQuantitySchema = joi.number().integer().min(1).max(10);
const productWarrantySchema = joi.string();
const productPriceSchema = joi.number();
const productStatusSchema = joi.string().max(100); //joi.array().items(joi.string().max(50));
const productCreateAtSchema = joi.string(); //joi.date();

const createProductSchema = {
  name: productNameSchema.required(),
  description: productDescriptionSchema.required(),
  quantity: productQuantitySchema.required(),
  warranty: productWarrantySchema.required(),
  price: productPriceSchema.required(),
  status: productStatusSchema.required(),
};

const updateProductSchema = {
  id: productIdSchema.required(),
  name: productNameSchema.required(),
  description: productDescriptionSchema.required(),
  quantity: productQuantitySchema.required(),
  warranty: productWarrantySchema.required(),
  price: productPriceSchema.required(),
  status: productStatusSchema.required(),
  createAt: productCreateAtSchema.required(),
};

module.exports = {
  createProductSchema,
  updateProductSchema,
  productIdSchema,
  productNameSchema,
};
