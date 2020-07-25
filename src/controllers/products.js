import { Product, STATUS } from "../models/products";
import { Products } from "../data";
var dateFormat = require("dateformat");

let arrayProduct = Products;

export async function getProducts(req, res, next) {
  try {
    let products = { products: [] };
    arrayProduct.forEach((Product) => {
      products.products.push({
        id: Product.id,
        name: Product.name,
        description: Product.description,
        quantity: Product.quantity,
        warranty: Product.warranty,
        price: Product.price,
        status: Product.status,
        createAt: Product.createAt,
      });
    });
    res.status(200).json({
      data: products,
    });
  } catch (err) {
    next(err);
  }
}

export async function getProduct(req, res, next) {
  try {
    const { id } = req.params;
    let Product = arrayProduct.find((Product) => Product.id == id);
    if (Product) {
      let products = { products: [] };

      products.products.push({
        id: Product.id,
        name: Product.name,
        description: Product.description,
        quantity: Product.quantity,
        warranty: Product.warranty,
        price: Product.price,
        status: Product.status,
        createAt: Product.createAt,
      });
      console.log(products);
      res.status(200).json({
        data: products,
        message: "Product retrieved",
      });
    } else {
      res.status(200).json({
        message: "Product not found",
        data: [],
      });
    }
  } catch (err) {
    next(err);
  }
}

export async function createProduct(req, res, next) {
  const { name, description, quantity, warranty, price, status } = req.body;
  try {
    let product = new Product(
      Math.floor(Math.random() * 6000000) + 1,
      name,
      description,
      quantity,
      warranty,
      price,
      STATUS[status],
      dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
    );
    arrayProduct.push(product);
    return res.status(201).json({
      data: product,
      message: "Product created successfully",
    });
  } catch (err) {
    next(err);
  }
}

export async function updateProduct(req, res, next) {
  const { id } = req.params;
  const { name, description, quantity, warranty, price, status } = req.body;

  let Product = arrayProduct.find((Product) => Product.id == id);
  if (Product) {
    arrayProduct = arrayProduct.map((Product) => {
      if (Product.id == id) {
        Product.name = name;
        Product.description = description;
        Product.quantity = quantity;
        Product.warranty = warranty;
        Product.price = price;
        Product.status = STATUS[status];
        Product.createAt = dateFormat(
          new Date(),
          "dddd, mmmm dS, yyyy, h:MM:ss TT"
        );
      }
      return Product;
    });
    return res.status(200).json({
      message: `Product Updated`,
      data: Product,
    });
  } else {
    return res.status(200).json({
      message: "Product not Updated, product not found",
      data: [],
    });
  }
}

export async function deleteProduct(req, res, next) {
  const { id } = req.params;
  try {
    console.log(id);
    let Product = arrayProduct.find((Product) => Product.id == id);
    if (Product) {
      arrayProduct = arrayProduct.filter((item) => item.id !== parseInt(id));

      let products = { products: [] };
      arrayProduct.forEach((Product) => {
        products.products.push({
          id: Product.id,
          name: Product.name,
          description: Product.description,
          quantity: Product.quantity,
          warranty: Product.warranty,
          price: Product.price,
          status: Product.status,
          createAt: Product.createAt,
        });
      });
      console.log(arrayProduct);
      res.status(200).json({
        message: "Product deleted",
        data: products,
      });
    } else {
      res.status(200).json({
        message: "Developer not Deleted, developer not found",
      });
    }
  } catch (err) {
    next(err);
  }
}
